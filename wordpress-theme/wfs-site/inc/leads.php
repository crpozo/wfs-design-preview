<?php
/**
 * Recepción de formularios: guarda el lead y lo envía por correo.
 *
 * Los tres formularios del sitio (cotización, contacto y garantía) postean
 * aquí. Cada envío se guarda primero como registro en WordPress y después se
 * despacha por correo, de modo que si el correo falla el lead no se pierde.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/** Destinatarios. Se pueden cambiar en Ajustes → Escritura, o por filtro. */
function wfs_lead_recipients() {
	$saved = get_option( 'wfs_lead_recipients' );
	$list  = $saved ? preg_split( '/[\s,;]+/', $saved ) : array(
		'antonello@westernfencesupply.com',
		'crm+A1AN6482169aaf302a7fe4.ls.32@bcc.marketing360.com',
	);
	$list = array_values( array_filter( array_map( 'trim', $list ), 'is_email' ) );
	return apply_filters( 'wfs_lead_recipients', $list );
}

/** Etiquetas y orden de los campos en el correo, por formulario. */
function wfs_lead_fields( $form ) {
	$sets = array(
		'quote'    => array(
			'name'         => 'Name',
			'company'      => 'Company',
			'phone'        => 'Phone Number',
			'email'        => 'Email',
			'audience'     => 'Customer Type',
			'project_type' => 'Project Type',
			'source'       => 'How They Heard About Us',
			'details'      => 'Project Details',
		),
		'contact'  => array(
			'name'    => 'Name',
			'phone'   => 'Phone Number',
			'email'   => 'Email',
			'message' => 'Message',
		),
		'warranty' => array(
			'name'        => 'Name',
			'phone'       => 'Phone Number',
			'email'       => 'Email',
			'po'          => 'PO / Invoice #',
			'install'     => 'Install Date',
			'material'    => 'Material / System',
			'description' => "What's Happening",
		),
	);
	$fields = isset( $sets[ $form ] ) ? $sets[ $form ] : $sets['quote'];
	return apply_filters( 'wfs_lead_fields', $fields, $form );
}

function wfs_form_label( $form ) {
	$labels = array(
		'quote'    => 'Material Quote Request',
		'contact'  => 'Contact Message',
		'warranty' => 'Warranty Claim',
	);
	return isset( $labels[ $form ] ) ? $labels[ $form ] : 'Website Lead';
}

/**
 * Arma el cuerpo del correo: etiqueta, valor y una línea separadora.
 */
function wfs_lead_body( $form, $data, $attachments, $meta ) {
	$rule = str_repeat( '_', 73 );
	$out  = '';

	foreach ( wfs_lead_fields( $form ) as $key => $label ) {
		$value = isset( $data[ $key ] ) ? trim( (string) $data[ $key ] ) : '';
		if ( '' === $value ) { $value = '(not provided)'; }
		$out .= $label . ":\n" . $value . "\n" . $rule . "\n\n";
	}

	if ( $attachments ) {
		$names = array();
		foreach ( $attachments as $path ) { $names[] = basename( $path ); }
		$out .= "Attachments:\n" . implode( "\n", $names ) . "\n" . $rule . "\n\n";
	}

	$out .= "Form Submission Information:\n";
	$out .= "Form:\n" . wfs_form_label( $form ) . "\n";
	$out .= "Page:\n" . $meta['url'] . "\n";
	$out .= "Date of Submission:\n" . $meta['date'] . "\n";
	$out .= "Time of Submission\n" . $meta['time'] . "\n";
	$out .= $rule . "\n";

	return $out;
}

/** Tipo de registro donde queda guardado cada envío. */
function wfs_register_lead_type() {
	register_post_type( 'wfs_lead', array(
		'label'         => 'Leads',
		'public'        => false,
		'show_ui'       => true,
		'show_in_menu'  => true,
		'menu_icon'     => 'dashicons-email-alt',
		'supports'      => array( 'title', 'editor' ),
		'capabilities'  => array( 'create_posts' => 'do_not_allow' ),
		'map_meta_cap'  => true,
	) );
}
add_action( 'init', 'wfs_register_lead_type' );

/** Ruta REST a la que postean los formularios. */
add_action( 'rest_api_init', function () {
	register_rest_route( 'wfs/v1', '/lead', array(
		'methods'             => 'POST',
		'callback'            => 'wfs_handle_lead',
		'permission_callback' => '__return_true',
	) );
} );

/** Adjuntos permitidos. */
function wfs_lead_attachments() {
	if ( empty( $_FILES ) ) { return array(); }

	$allowed = array( 'pdf', 'jpg', 'jpeg', 'png', 'heic', 'webp', 'gif' );
	$max     = 20 * 1024 * 1024;
	$out     = array();

	foreach ( $_FILES as $field => $file ) {
		$names = is_array( $file['name'] ) ? $file['name'] : array( $file['name'] );
		foreach ( array_keys( $names ) as $i ) {
			$name = is_array( $file['name'] ) ? $file['name'][ $i ] : $file['name'];
			$tmp  = is_array( $file['tmp_name'] ) ? $file['tmp_name'][ $i ] : $file['tmp_name'];
			$size = is_array( $file['size'] ) ? $file['size'][ $i ] : $file['size'];
			if ( ! $name || ! $tmp || ! is_uploaded_file( $tmp ) ) { continue; }
			if ( $size > $max ) { continue; }
			$ext = strtolower( pathinfo( $name, PATHINFO_EXTENSION ) );
			if ( ! in_array( $ext, $allowed, true ) ) { continue; }

			$upload = wp_upload_bits( sanitize_file_name( $name ), null, file_get_contents( $tmp ) );
			if ( empty( $upload['error'] ) ) { $out[] = $upload['file']; }
		}
	}
	return $out;
}

/** Guarda el motivo exacto por el que PHPMailer no pudo enviar. */
function wfs_capture_mail_error( $wp_error ) {
	$GLOBALS['wfs_mail_error'] = $wp_error instanceof WP_Error
		? $wp_error->get_error_message()
		: 'unknown';
}
add_action( 'wp_mail_failed', 'wfs_capture_mail_error' );

/**
 * Envía y, si falla, reintenta sin adjuntos.
 *
 * Un adjunto ilegible hace que PHPMailer aborte el correo entero. Antes de
 * dar el envío por perdido conviene intentarlo sin el archivo: es preferible
 * que el lead llegue sin plano a que no llegue.
 */
function wfs_send_lead_mail( $to, $subject, $body, $headers, $attachments ) {
	$GLOBALS['wfs_mail_error'] = '';
	$sent = wp_mail( $to, $subject, $body, $headers, $attachments );
	if ( $sent ) { return array( true, '', false ); }

	$first = $GLOBALS['wfs_mail_error'];

	if ( $attachments ) {
		$note = $body . "\nNote: the attachment could not be sent with this email. "
			. "It is stored with the lead in WordPress.\n";
		$GLOBALS['wfs_mail_error'] = '';
		$sent = wp_mail( $to, $subject, $note, $headers );
		if ( $sent ) { return array( true, $first, true ); }
	}

	return array( false, $first ? $first : $GLOBALS['wfs_mail_error'], false );
}

/**
 * Confirmacion al remitente: "tu solicitud llego bien al sitio de WFS".
 * En el idioma en que navegaba (el formulario manda _lang), con los datos
 * de contacto reales por si necesita algo antes de que le respondan.
 */
function wfs_send_confirmation( $email, $name, $form, $lang ) {
	$es = ( 'ES' === strtoupper( (string) $lang ) );

	$what = array(
		'quote'    => $es ? 'tu solicitud de cotización de material' : 'your material quote request',
		'contact'  => $es ? 'tu mensaje' : 'your message',
		'warranty' => $es ? 'tu reclamo de garantía' : 'your warranty claim',
	);
	$next = array(
		'quote'    => $es
			? 'Uno de nuestros representantes te responderá en un plazo de 24 horas hábiles con existencias, precios y tiempo de entrega.'
			: 'One of our reps will get back to you within 24 business hours with stock, pricing and lead time.',
		'contact'  => $es
			? 'Respondemos en horario laboral, normalmente el mismo día.'
			: 'We reply during business hours, usually the same day.',
		'warranty' => $es
			? 'Nuestro equipo de garantías te enviará por correo un número de reclamo y los siguientes pasos.'
			: 'Our warranty team will email you a claim number and next steps.',
	);
	$w = isset( $what[ $form ] ) ? $what[ $form ] : $what['quote'];
	$n = isset( $next[ $form ] ) ? $next[ $form ] : $next['quote'];

	$subject = $es
		? 'Recibimos tu solicitud, Western Fence Supply'
		: 'We received your request, Western Fence Supply';

	$body  = ( $es ? 'Hola ' : 'Hi ' ) . $name . ",

";
	$body .= ( $es
		? "Gracias por escribirnos. Confirmamos que $w llegó correctamente a través del sitio de Western Fence Supply. $n"
		: "Thanks for reaching out. This is a confirmation that $w was received through the Western Fence Supply website. $n" ) . "

";
	$body .= ( $es ? "Si necesitas algo antes, llámanos:" : "If you need anything sooner, give us a call:" ) . "

";
	$body .= "Fort Myers, HQ
(239) 689-5496 · 2621 Fowler St, Fort Myers, FL 33901
";
	$body .= ( $es ? "Lun-Vie 7:30am-3:30pm · Sáb 7am-12pm

" : "Mon-Fri 7:30am-3:30pm · Sat 7am-12pm

" );
	$body .= "Port Charlotte
(941) 623-6890 · 1145 Enterprise Dr, Port Charlotte, FL 33953
";
	$body .= ( $es ? "Lun-Vie 7:30am-3:30pm · Sáb 7-11:30am

" : "Mon-Fri 7:30am-3:30pm · Sat 7-11:30am

" );
	$body .= "Western Fence Supply
https://westernfencesupply.com
";

	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		'Reply-To: Western Fence Supply <sales@westernfencesupply.com>',
	);
	return wp_mail( $email, $subject, $body, $headers );
}

/**
 * Procesa el envío: valida, guarda y despacha.
 */
function wfs_handle_lead( WP_REST_Request $request ) {
	/* Freno simple contra envíos automáticos: 5 por IP cada 10 minutos. */
	$ip  = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : '0';
	$key = 'wfs_lead_' . md5( $ip );
	$hits = (int) get_transient( $key );
	if ( $hits >= 5 ) {
		return new WP_REST_Response( array( 'ok' => false, 'message' => 'Too many submissions. Please call us at (239) 689-5496.' ), 429 );
	}
	set_transient( $key, $hits + 1, 10 * MINUTE_IN_SECONDS );

	$raw  = $request->get_body_params();
	$form = isset( $raw['_form'] ) ? sanitize_key( $raw['_form'] ) : 'quote';

	$data = array();
	foreach ( $raw as $k => $v ) {
		if ( '_' === substr( $k, 0, 1 ) ) { continue; }
		$data[ sanitize_key( $k ) ] = sanitize_textarea_field( (string) $v );
	}

	$email = isset( $data['email'] ) ? sanitize_email( $data['email'] ) : '';
	$name  = isset( $data['name'] ) ? $data['name'] : '';

	if ( ! $name ) {
		return new WP_REST_Response( array( 'ok' => false, 'message' => 'Please enter your name.' ), 400 );
	}
	/* El navegador acepta "you@company" sin dominio; nosotros no, porque a esa
	   direccion no llega nada. Se dice exactamente que falta. */
	if ( ! is_email( $email ) ) {
		return new WP_REST_Response( array(
			'ok'      => false,
			'message' => 'Please check your email address. It needs a full domain, like name@company.com.',
		), 400 );
	}

	$meta = array(
		'url'  => isset( $raw['_url'] ) ? esc_url_raw( $raw['_url'] ) : home_url( '/' ),
		'date' => wp_date( 'F j, Y' ),
		'time' => wp_date( 'g:i a T' ),
	);

	$attachments = wfs_lead_attachments();
	$body        = wfs_lead_body( $form, $data, $attachments, $meta );
	$subject     = wfs_form_label( $form ) . ': ' . $name;

	/* Se guarda antes de enviar: si el correo falla, el lead sigue estando. */
	$lead_id = wp_insert_post( array(
		'post_type'    => 'wfs_lead',
		'post_status'  => 'publish',
		'post_title'   => $subject,
		'post_content' => $body,
	) );

	$to      = wfs_lead_recipients();
	$primary = array_shift( $to );

	/* Sin "From:" personalizado: varios hosts rechazan remitentes que no
	   existen como buzon (no-reply@...) y el envio entero devuelve false.
	   Con el From por defecto de WordPress el servidor siempre se acepta a
	   si mismo, y el Reply-To sigue llevando al cliente. */
	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		'Reply-To: ' . $name . ' <' . $email . '>',
	);
	foreach ( $to as $bcc ) { $headers[] = 'Bcc: ' . $bcc; }

	list( $sent, $error, $dropped ) = wfs_send_lead_mail( $primary, $subject, $body, $headers, $attachments );

	/* Confirmacion al cliente: independiente del correo interno; si falla no
	   afecta la respuesta (su solicitud ya esta guardada igual). */
	$lang    = isset( $raw['_lang'] ) ? sanitize_text_field( $raw['_lang'] ) : 'EN';
	$confirm = wfs_send_confirmation( $email, $name, $form, $lang );

	if ( $lead_id && ! is_wp_error( $lead_id ) ) {
		update_post_meta( $lead_id, '_wfs_confirm_sent', $confirm ? 'yes' : 'no' );
		update_post_meta( $lead_id, '_wfs_mail_sent', $sent ? 'yes' : 'no' );
		if ( $error ) { update_post_meta( $lead_id, '_wfs_mail_error', $error ); }
		if ( $dropped ) { update_post_meta( $lead_id, '_wfs_mail_dropped_attachment', 'yes' ); }
	}
	if ( $error ) {
		update_option( 'wfs_last_mail_error', gmdate( 'Y-m-d H:i' ) . ' UTC · ' . $error );
		error_log( 'WFS lead mail failed: ' . $error );
	}

	if ( ! $sent ) {
		/* El lead YA esta guardado, asi que al visitante se le confirma: hizo
		   su parte y asustarlo con un error de correo solo pierde ventas. El
		   fallo queda visible para el equipo en el panel (Leads -> columna
		   Correo, con el motivo exacto) y en "detail" para depurar desde la
		   pestana Network sin entrar al panel. */
		return new WP_REST_Response( array(
			'ok'     => true,
			'mail'   => 'failed',
			'detail' => $error ? $error : 'wp_mail returned false without error detail',
		), 200 );
	}

	return new WP_REST_Response( array(
		'ok'      => true,
		'mail'    => 'sent',
		'confirm' => $confirm ? 'sent' : 'failed',
	), 200 );
}

/** Campo en Ajustes → Escritura para cambiar los destinatarios sin tocar código. */
add_action( 'admin_init', function () {
	register_setting( 'writing', 'wfs_lead_recipients', array( 'type' => 'string', 'sanitize_callback' => 'sanitize_textarea_field' ) );
	add_settings_field( 'wfs_lead_recipients', 'Form lead recipients', function () {
		$value = get_option( 'wfs_lead_recipients' );
		if ( ! $value ) { $value = implode( "\n", wfs_lead_recipients() ); }
		echo '<textarea name="wfs_lead_recipients" rows="3" class="large-text code">' . esc_textarea( $value ) . '</textarea>';
		echo '<p class="description">One address per line. The first goes in To; the rest are Bcc.</p>';
	}, 'writing' );
} );

/* ─────────────────────────────────────────────────────────────────────────
   Diagnóstico en el panel: por qué no salió el correo.
   Sin esto, un fallo de entrega es invisible hasta que alguien reclama.
   ───────────────────────────────────────────────────────────────────────── */

/** Columna "Correo" en la lista de Leads. */
add_filter( 'manage_wfs_lead_posts_columns', function ( $cols ) {
	$cols['wfs_mail'] = 'Email';
	return $cols;
} );

add_action( 'manage_wfs_lead_posts_custom_column', function ( $col, $post_id ) {
	if ( 'wfs_mail' !== $col ) { return; }
	$sent = get_post_meta( $post_id, '_wfs_mail_sent', true );
	if ( 'yes' === $sent ) {
		echo '<span style="color:#046b33">Sent</span>';
		if ( get_post_meta( $post_id, '_wfs_mail_dropped_attachment', true ) ) {
			echo '<br><small>without the attachment</small>';
		}
		return;
	}
	$err = get_post_meta( $post_id, '_wfs_mail_error', true );
	echo '<strong style="color:#b32d2e">Failed</strong>';
	if ( $err ) { echo '<br><small>' . esc_html( $err ) . '</small>'; }
}, 10, 2 );

/** Aviso con el último error de entrega. */
add_action( 'admin_notices', function () {
	if ( ! current_user_can( 'manage_options' ) ) { return; }
	$screen = get_current_screen();
	if ( ! $screen || 'wfs_lead' !== $screen->post_type ) { return; }
	$last = get_option( 'wfs_last_mail_error' );
	if ( ! $last ) { return; }
	echo '<div class="notice notice-error"><p><strong>Email sending is failing.</strong><br>';
	echo esc_html( $last );
	echo '<br>Leads are still being saved here, but they are not arriving by email. ';
	echo 'This is usually resolved by connecting an authenticated SMTP service (Amazon SES).</p></div>';
} );
