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
		if ( '' === $value ) { $value = '—'; }
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
	if ( ! $name || ! is_email( $email ) ) {
		return new WP_REST_Response( array( 'ok' => false, 'message' => 'Please enter your name and a valid email.' ), 400 );
	}

	$meta = array(
		'url'  => isset( $raw['_url'] ) ? esc_url_raw( $raw['_url'] ) : home_url( '/' ),
		'date' => wp_date( 'F j, Y' ),
		'time' => wp_date( 'g:i a T' ),
	);

	$attachments = wfs_lead_attachments();
	$body        = wfs_lead_body( $form, $data, $attachments, $meta );
	$subject     = wfs_form_label( $form ) . ' — ' . $name;

	/* Se guarda antes de enviar: si el correo falla, el lead sigue estando. */
	$lead_id = wp_insert_post( array(
		'post_type'    => 'wfs_lead',
		'post_status'  => 'publish',
		'post_title'   => $subject,
		'post_content' => $body,
	) );

	$to      = wfs_lead_recipients();
	$primary = array_shift( $to );
	$host    = wp_parse_url( home_url(), PHP_URL_HOST );
	$host    = preg_replace( '/^www\./', '', (string) $host );

	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		'From: Western Fence Supply Website <no-reply@' . $host . '>',
		'Reply-To: ' . $name . ' <' . $email . '>',
	);
	foreach ( $to as $bcc ) { $headers[] = 'Bcc: ' . $bcc; }

	$sent = wp_mail( $primary, $subject, $body, $headers, $attachments );

	if ( $lead_id && ! is_wp_error( $lead_id ) ) {
		update_post_meta( $lead_id, '_wfs_mail_sent', $sent ? 'yes' : 'no' );
	}

	if ( ! $sent ) {
		return new WP_REST_Response( array(
			'ok'      => false,
			'message' => 'We saved your request but email delivery failed. Please call (239) 689-5496.',
		), 500 );
	}

	return new WP_REST_Response( array( 'ok' => true ), 200 );
}

/** Campo en Ajustes → Escritura para cambiar los destinatarios sin tocar código. */
add_action( 'admin_init', function () {
	register_setting( 'writing', 'wfs_lead_recipients', array( 'type' => 'string', 'sanitize_callback' => 'sanitize_textarea_field' ) );
	add_settings_field( 'wfs_lead_recipients', 'Destinatarios de formularios', function () {
		$value = get_option( 'wfs_lead_recipients' );
		if ( ! $value ) { $value = implode( "\n", wfs_lead_recipients() ); }
		echo '<textarea name="wfs_lead_recipients" rows="3" class="large-text code">' . esc_textarea( $value ) . '</textarea>';
		echo '<p class="description">Un correo por línea. El primero va en Para; los demás en copia oculta.</p>';
	}, 'writing' );
} );
