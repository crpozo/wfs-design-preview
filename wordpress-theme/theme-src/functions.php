<?php
/**
 * Western Fence Supply, tema espejo.
 *
 * En vez de traducir el diseno a bloques (donde se pierden los 1.355 estilos
 * inline de los componentes), este tema sirve el sitio real tal cual.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'WFS_VERSION', '3.6.0' );

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

/** True si el build precompilo el JSX y por tanto no hace falta Babel. */
function wfs_is_precompiled() {
	return file_exists( get_theme_file_path( 'precompiled' ) );
}

/**
 * Imprime las etiquetas <script> del sitio, en el mismo orden que el original.
 *
 * Con el JSX precompilado se cargan los builds de produccion de React y no se
 * carga Babel: son 4,2 MB menos y el navegador ya no compila nada al abrir.
 */
function wfs_print_app( $slug ) {
	$pages = wfs_pages();
	if ( ! isset( $pages[ $slug ] ) ) { return; }
	$v   = WFS_VERSION;
	$pre = wfs_is_precompiled();

	echo "\n";
	if ( $pre ) {
		echo '<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" integrity="sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z" crossorigin="anonymous"></script>' . "\n";
		echo '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" integrity="sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1" crossorigin="anonymous"></script>' . "\n";
	} else {
		echo '<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>' . "\n";
		echo '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>' . "\n";
		echo '<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>' . "\n";
	}

	$type = $pre ? '' : ' type="text/babel"';
	foreach ( $pages[ $slug ]['components'] as $comp ) {
		printf(
			'<script%s src="%s"></script>' . "\n",
			$type,
			esc_url( get_theme_file_uri( 'components/' . $comp ) . '?ver=' . $v )
		);
	}

	$ext = $pre ? '.js' : '.js';
	$app = get_theme_file_path( 'apps/' . $slug . $ext );
	if ( file_exists( $app ) ) {
		echo '<script' . $type . '>' . "\n";
		echo file_get_contents( $app );
		echo "</script>\n";
	}
}

/**
 * Chat de tawk.to: sin burbuja flotante.
 *
 * El sitio trae un snippet que llama a Tawk_API.maximize() en cada carga. Aqui
 * se oculta el widget entero; se muestra solo cuando el visitante pulsa
 * "Talk to a live agent", y vuelve a ocultarse al cerrarlo.
 *
 * Para recuperar la burbuja: define( 'WFS_TAWK_BUBBLE', true ) en wp-config.php
 */
function wfs_tawk_hidden_until_asked() {
	if ( defined( 'WFS_TAWK_BUBBLE' ) && WFS_TAWK_BUBBLE ) { return; }
	?>
<script>
(function () {
  window.Tawk_API = window.Tawk_API || {};
  /* Lo pone en true openLiveChat() cuando el visitante pulsa el boton. */
  window.__wfsChatOpened = window.__wfsChatOpened || false;

  function shut() {
    if (window.__wfsChatOpened) { return; }   /* si lo abrio el usuario, no tocar */
    try { window.Tawk_API.minimize(); } catch (e) {}
    try { window.Tawk_API.hideWidget(); } catch (e) {}
  }

  /* Todos los momentos en que tawk puede mostrarse por su cuenta. Incluye
     onChatMaximized, que es lo que dispara un trigger del panel de tawk
     ("mensaje proactivo") minutos despues de cargar la pagina. */
  window.Tawk_API.onLoad          = shut;
  window.Tawk_API.onChatMaximized = shut;
  window.Tawk_API.onChatMinimized = shut;
  window.Tawk_API.onChatHidden    = shut;
  window.Tawk_API.onChatStarted   = shut;
  shut();

  /* Vigilancia permanente: un trigger puede saltar en cualquier momento, no
     solo al cargar. Se observa el DOM en vez de sondear con un temporizador,
     y se para en cuanto el visitante abre el chat a proposito. */
  function watch() {
    if (!document.body || !window.MutationObserver) { return; }
    var mo = new MutationObserver(function () {
      if (window.__wfsChatOpened) { mo.disconnect(); return; }
      if (document.querySelector('iframe[src*="tawk.to"]')) { shut(); }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watch);
  } else {
    watch();
  }
})();
</script>
<style>
/* Burbuja y ventana de tawk ocultas mientras el visitante no pida el chat.
   La clase la pone/quita el propio boton "Talk to a live agent". Cubrir la
   ventana maximizada es lo que evita que un trigger del panel de tawk la
   abra sola pasados unos segundos. */
html:not(.wfs-chat-open) #tawkchat-minified-wrapper,
html:not(.wfs-chat-open) #tawkchat-minified-container,
html:not(.wfs-chat-open) #tawkchat-container,
html:not(.wfs-chat-open) .tawk-min-container,
html:not(.wfs-chat-open) .tawk-button-large,
html:not(.wfs-chat-open) [class*="tawk-min"],
html:not(.wfs-chat-open) iframe[title*="chat" i][src*="tawk"] {
  display: none !important;
  visibility: hidden !important;
}
/* Insignia de reCAPTCHA: el tema no usa ningun formulario que la necesite. */
.grecaptcha-badge { display: none !important; }
</style>
	<?php
}
add_action( 'wp_footer', 'wfs_tawk_hidden_until_asked', 9999 );

/**
 * No cargar en el front los assets de plugins que este tema no usa.
 *
 * El sitio arrastra 37 archivos JS (586 KB) de Contact Form 7, reCAPTCHA,
 * UberMenu y TablePress. El tema dibuja sus propias paginas con React y no
 * usa ninguno, asi que en el front son peso muerto. Los plugins siguen
 * activos y funcionando en el escritorio.
 *
 * Para desactivar este comportamiento: define( 'WFS_KEEP_PLUGIN_ASSETS', true )
 */
function wfs_unused_plugin_assets() {
	return apply_filters( 'wfs_unused_plugin_assets', array(
		'contact-form-7',
		'material-design-for-contact-form-7',
		'ubermenu',
		'tablepress',
		'auto-terms-of-service-and-privacy-policy',
		'recaptcha',
	) );
}

function wfs_strip_unused_plugin_assets() {
	if ( is_admin() ) { return; }
	if ( defined( 'WFS_KEEP_PLUGIN_ASSETS' ) && WFS_KEEP_PLUGIN_ASSETS ) { return; }

	$needles = wfs_unused_plugin_assets();
	$sets    = array( 'script' => wp_scripts(), 'style' => wp_styles() );

	foreach ( $sets as $kind => $reg ) {
		if ( ! $reg ) { continue; }
		foreach ( (array) $reg->queue as $handle ) {
			$src  = isset( $reg->registered[ $handle ] ) ? (string) $reg->registered[ $handle ]->src : '';
			$hay  = $handle . ' ' . $src;
			foreach ( $needles as $needle ) {
				if ( false !== stripos( $hay, $needle ) ) {
					if ( 'script' === $kind ) { wp_dequeue_script( $handle ); }
					else { wp_dequeue_style( $handle ); }
					break;
				}
			}
		}
	}
}
add_action( 'wp_enqueue_scripts', 'wfs_strip_unused_plugin_assets', 100 );
