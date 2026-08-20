<?php
/**
 * Blog: posts nativos de WordPress renderizados con el diseno del sitio.
 *
 * Por que posts nativos y no un tipo de contenido a medida: marketing ya sabe
 * usar el editor de WordPress. Con posts normales tienen de serie el editor
 * visual, la imagen destacada, categorias y etiquetas, el programador de
 * publicacion, los borradores y las revisiones, y Yoast lee la entrada sin
 * configurar nada. Un CPT habria obligado a explicar una pantalla nueva.
 *
 * El contenido se pinta en PHP, no en React: asi Google lo lee sin ejecutar
 * nada y la entrada funciona con JavaScript desactivado. La cabecera y el pie
 * si son los componentes reales del sitio, montados alrededor, para que no
 * haya una segunda version que mantener.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/** Slug de la pagina que lista las entradas. */
function wfs_blog_slug() {
	return apply_filters( 'wfs_blog_slug', 'blog' );
}

/**
 * Crea la pagina Blog y la fija como pagina de entradas.
 *
 * Sin esto, WordPress muestra las entradas en la portada y se cargaria el home.
 */
function wfs_blog_install() {
	if ( get_option( 'wfs_blog_v' ) === '1' ) { return; }

	$slug = wfs_blog_slug();
	$page = get_page_by_path( $slug );
	if ( ! $page ) {
		$id = wp_insert_post( array(
			'post_type'      => 'page',
			'post_name'      => $slug,
			'post_title'     => 'Blog',
			'post_status'    => 'publish',
			'post_content'   => '',
			'comment_status' => 'closed',
		) );
		$page = $id && ! is_wp_error( $id ) ? get_post( $id ) : null;
	}
	if ( $page ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_for_posts', $page->ID );
	}
	update_option( 'wfs_blog_v', '1' );
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'wfs_blog_install' );
add_action( 'admin_init', 'wfs_blog_install' );

/** URL de la pagina del blog, para los enlaces "blog.html" de los componentes. */
function wfs_blog_url() {
	$id = (int) get_option( 'page_for_posts' );
	return $id ? get_permalink( $id ) : home_url( '/' . wfs_blog_slug() . '/' );
}

/** Los componentes enlazan a "blog.html": aqui se traduce a la URL real. */
function wfs_blog_link_map( $map ) {
	$map['blog.html'] = wfs_blog_url();
	return $map;
}
add_filter( 'wfs_link_map', 'wfs_blog_link_map' );

/**
 * Tiempo de lectura. Se calcula, no se pide: si hubiera que escribirlo a mano
 * en cada entrada, la mitad saldrian sin el o con un numero inventado.
 */
function wfs_read_time( $post = null ) {
	$post  = get_post( $post );
	$words = str_word_count( wp_strip_all_tags( $post->post_content ) );
	$min   = max( 1, (int) round( $words / 200 ) );
	return sprintf( _n( '%d min read', '%d min read', $min, 'wfs' ), $min );
}

/** Categoria principal de una entrada, para el kicker naranja de la tarjeta. */
function wfs_post_kicker( $post = null ) {
	$cats = get_the_category( get_post( $post ) );
	if ( $cats && ! empty( $cats[0]->name ) && 'Uncategorized' !== $cats[0]->name ) {
		return $cats[0]->name;
	}
	return get_the_date( 'M j, Y', $post );
}

/**
 * Cabecera y pie reales del sitio alrededor del contenido.
 *
 * Se cargan los mismos componentes que usa cualquier otra pagina y se montan
 * solo esas dos piezas. Asi el menu del blog no se puede desincronizar del
 * resto: es literalmente el mismo componente.
 */
function wfs_blog_shell_scripts() {
	$v    = WFS_VERSION;
	$deps = array( 'shared.js', 'site-header.js', 'page-blocks.js', 'sections.js', 'extras.js' );

	echo '<script defer src="' . esc_url( get_theme_file_uri( 'vendor/react.production.min.js' ) . '?ver=' . $v ) . '"></script>' . "\n";
	echo '<script defer src="' . esc_url( get_theme_file_uri( 'vendor/react-dom.production.min.js' ) . '?ver=' . $v ) . '"></script>' . "\n";
	foreach ( $deps as $d ) {
		echo '<script defer src="' . esc_url( get_theme_file_uri( 'components/' . $d ) . '?ver=' . $v ) . '"></script>' . "\n";
	}
	?>
<script defer src="<?php echo esc_url( get_theme_file_uri( 'apps/blog-shell.js' ) . '?ver=' . $v ); ?>"></script>
	<?php
}
