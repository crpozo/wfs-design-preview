<?php
/**
 * Western Fence Supply, tema espejo.
 *
 * En vez de traducir el diseno a bloques (donde se pierden los 1.355 estilos
 * inline de los componentes), este tema sirve el sitio real tal cual.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'WFS_VERSION', '2.5.0' );

/** Base de las imagenes y videos. Se puede sobreescribir en wp-config.php. */
if ( ! defined( 'WFS_ASSETS' ) ) {
	define( 'WFS_ASSETS', 'https://crpozo.github.io/wfs-design-preview/assets' );
}

require_once get_theme_file_path( 'inc/leads.php' );

/** Mapa de paginas del sitio: slug => title, archivo original, componentes. */
function wfs_pages() {
	static $pages = null;
	if ( null !== $pages ) { return $pages; }
	$json  = get_theme_file_path( 'apps/manifest.json' );
	$pages = file_exists( $json ) ? json_decode( file_get_contents( $json ), true ) : array();
	if ( ! is_array( $pages ) ) { $pages = array(); }
	return $pages;
}

/** Assets que viajan dentro del tema, para servirlos desde este dominio. */
function wfs_local_assets() {
	$json = get_theme_file_path( 'assets-local.json' );
	$list = file_exists( $json ) ? json_decode( file_get_contents( $json ), true ) : array();
	if ( ! is_array( $list ) ) { return array(); }
	$map = array();
	foreach ( $list as $rel ) {
		$map[ $rel ] = get_theme_file_uri( 'assets/' . $rel );
	}
	return $map;
}

/** Slug de la pagina que se esta pidiendo. */
function wfs_current_slug() {
	if ( is_front_page() || is_home() ) { return 'homepage'; }
	$slug = get_queried_object_id() ? get_post_field( 'post_name', get_queried_object_id() ) : '';
	return isset( wfs_pages()[ $slug ] ) ? $slug : 'homepage';
}

/** Soporte basico. */
function wfs_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'wfs_setup' );

/**
 * Crea una pagina de WordPress por cada pagina del sitio y fija la portada.
 * Sin esto los enlaces internos darian 404: un tema aporta plantillas, no paginas.
 */
function wfs_install_pages() {
	if ( get_option( 'wfs_pages_v2' ) === WFS_VERSION ) { return; }

	foreach ( wfs_pages() as $slug => $page ) {
		if ( get_page_by_path( $slug ) ) { continue; }
		wp_insert_post( array(
			'post_type'      => 'page',
			'post_name'      => $slug,
			'post_title'     => $page['title'],
			'post_status'    => 'publish',
			'post_content'   => '',
			'comment_status' => 'closed',
			'ping_status'    => 'closed',
		) );
	}

	$home = get_page_by_path( 'homepage' );
	if ( $home ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home->ID );
	}

	update_option( 'wfs_pages_v2', WFS_VERSION );
	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'wfs_install_pages' );
add_action( 'admin_init', 'wfs_install_pages' );

/** Enlaces "products.html" -> la URL real de esa pagina en WordPress. */
function wfs_link_map() {
	$map = array();
	foreach ( wfs_pages() as $slug => $page ) {
		$map[ $page['file'] ] = 'homepage' === $slug ? home_url( '/' ) : get_permalink( get_page_by_path( $slug ) );
	}
	$map['Homepage.html'] = home_url( '/' );
	$map['index.html']    = home_url( '/' );
	return $map;
}

/** Imprime las etiquetas <script> del sitio, en el mismo orden que el original. */
function wfs_print_app( $slug ) {
	$pages = wfs_pages();
	if ( ! isset( $pages[ $slug ] ) ) { return; }
	$v = WFS_VERSION;

	echo "\n";
	echo '<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>' . "\n";
	echo '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>' . "\n";
	echo '<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>' . "\n";

	foreach ( $pages[ $slug ]['components'] as $comp ) {
		printf(
			'<script type="text/babel" src="%s"></script>' . "\n",
			esc_url( get_theme_file_uri( 'components/' . $comp ) . '?ver=' . $v )
		);
	}

	$app = get_theme_file_path( 'apps/' . $slug . '.js' );
	if ( file_exists( $app ) ) {
		echo '<script type="text/babel">' . "\n";
		echo file_get_contents( $app );
		echo "</script>\n";
	}
}

/**
 * El chat de tawk.to abre maximizado en cada carga porque hay un snippet en el
 * sitio que llama a Tawk_API.maximize(). Esto lo deja minimizado: la burbuja
 * sigue ahi y el chat funciona igual, pero no tapa la pagina al entrar.
 *
 * Corre en wp_footer con prioridad tardia para pisar ese snippet.
 * Para volver al comportamiento anterior: define( 'WFS_TAWK_AUTOOPEN', true );
 * en wp-config.php.
 */
function wfs_tawk_start_minimized() {
	if ( defined( 'WFS_TAWK_AUTOOPEN' ) && WFS_TAWK_AUTOOPEN ) { return; }
	?>
<script>
(function () {
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function () {
    try { window.Tawk_API.minimize(); } catch (e) {}
  };
  /* Por si el widget ya termino de cargar antes de llegar aqui. */
  if (typeof window.Tawk_API.minimize === 'function') {
    try { window.Tawk_API.minimize(); } catch (e) {}
  }
})();
</script>
	<?php
}
add_action( 'wp_footer', 'wfs_tawk_start_minimized', 9999 );
