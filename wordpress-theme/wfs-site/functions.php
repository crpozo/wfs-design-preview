<?php
/**
 * Western Fence Supply, tema espejo.
 *
 * En vez de traducir el diseno a bloques (donde se pierden los 1.355 estilos
 * inline de los componentes), este tema sirve el sitio real tal cual.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'WFS_VERSION', '4.2.0' );

/** Base de las imagenes y videos. Se puede sobreescribir en wp-config.php. */
if ( ! defined( 'WFS_ASSETS' ) ) {
	define( 'WFS_ASSETS', 'https://crpozo.github.io/wfs-design-preview/assets' );
}

require_once get_theme_file_path( 'inc/leads.php' );
require_once get_theme_file_path( 'inc/redirects.php' );
require_once get_theme_file_path( 'inc/seo.php' );

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
		/* React va DENTRO del tema: sin unpkg no hay tercer origen en la ruta
		   critica, y con defer nada bloquea el parseo del HTML. El orden entre
		   scripts defer se conserva, asi que react -> componentes -> app. */
		echo '<script defer src="' . esc_url( get_theme_file_uri( 'vendor/react.production.min.js' ) . '?ver=' . $v ) . '"></script>' . "\n";
		echo '<script defer src="' . esc_url( get_theme_file_uri( 'vendor/react-dom.production.min.js' ) . '?ver=' . $v ) . '"></script>' . "\n";
	} else {
		echo '<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>' . "\n";
		echo '<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>' . "\n";
		echo '<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>' . "\n";
	}

	$type = $pre ? ' defer' : ' type="text/babel"';
	foreach ( $pages[ $slug ]['components'] as $comp ) {
		printf(
			'<script%s src="%s"></script>' . "\n",
			$type,
			esc_url( get_theme_file_uri( 'components/' . $comp ) . '?ver=' . $v )
		);
	}

	if ( $pre && file_exists( get_theme_file_path( 'apps/' . $slug . '.js' ) ) ) {
		/* La app tambien como archivo con defer, no inline: un inline no puede
		   diferirse y ademas asi cachea entre visitas. */
		echo '<script defer src="' . esc_url( get_theme_file_uri( 'apps/' . $slug . '.js' ) . '?ver=' . $v ) . '"></script>' . "\n";
		return;
	}
	$app = get_theme_file_path( 'apps/' . $slug . '.js' );
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
/* Tawk no se carga hasta que el visitante pide el chat.
 *
 * Ocultarlo con CSS no bastaba: tawk crea sus contenedores con id aleatorio
 * (balo8vstm6t1785250275106...), asi que ningun selector los atrapa a tiempo y
 * el globo "We Are Here!" alcanzaba a verse un segundo antes de esconderse.
 *
 * Aqui se intercepta la insercion del script de tawk y se guarda su URL. El
 * boton "Talk to a live agent" lo carga en ese momento. Sin script no hay
 * elemento, y sin elemento no hay parpadeo posible. De paso, la pagina deja de
 * descargar los 8 archivos de tawk en cada visita.
 *
 * Para volver a cargarlo siempre: define( 'WFS_TAWK_BUBBLE', true ) en wp-config.php
 */
(function () {
  var TAWK = /embed\.tawk\.to/;
  window.__wfsTawkSrc = null;
  window.__wfsChatOpened = false;

  /* Se guardan los originales: cargar el chat luego tiene que poder insertar
     el script sin que el propio interceptor lo bloquee. */
  var rawInsert = Node.prototype.insertBefore;
  var rawAppend = Node.prototype.appendChild;

  function intercept(original) {
    return function (node) {
      try {
        if (node && node.tagName === 'SCRIPT' && TAWK.test(node.src || '')) {
          window.__wfsTawkSrc = node.src;   /* se guarda para cargarlo luego */
          return node;                      /* y no se inserta */
        }
      } catch (e) {}
      return original.apply(this, arguments);
    };
  }
  Node.prototype.insertBefore = intercept(rawInsert);
  Node.prototype.appendChild  = intercept(rawAppend);

  /* Carga tawk bajo demanda y lo abre en cuanto esta listo. */
  window.wfsLoadChat = function () {
    window.__wfsChatOpened = true;
    document.documentElement.classList.add('wfs-chat-open');

    if (window.Tawk_API && typeof window.Tawk_API.maximize === 'function') {
      try { window.Tawk_API.showWidget(); } catch (e) {}
      try { window.Tawk_API.maximize(); } catch (e) {}
      return;
    }
    if (window.__wfsTawkLoading) { return; }
    window.__wfsTawkLoading = true;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_API.onLoad = function () {
      try { window.Tawk_API.showWidget(); } catch (e) {}
      try { window.Tawk_API.maximize(); } catch (e) {}
    };
    var s = document.createElement('script');
    s.async = true;
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    s.src = window.__wfsTawkSrc || 'https://embed.tawk.to/6881734e416fc119149ce7c5/1j0srns0p';
    /* con el original, si no el interceptor bloquearia su propia carga */
    rawAppend.call(document.head, s);
  };
})();
</script>
<style>
/* Respaldo: si algun dia tawk se cargara igual, su burbuja y su globo siguen
   ocultos mientras el visitante no pida el chat. */
html:not(.wfs-chat-open) #tawkchat-minified-wrapper,
html:not(.wfs-chat-open) #tawkchat-minified-container,
html:not(.wfs-chat-open) #tawkchat-container,
html:not(.wfs-chat-open) .tawk-min-container,
html:not(.wfs-chat-open) .tawk-button-large,
html:not(.wfs-chat-open) [class*="tawk-min"],
html:not(.wfs-chat-open) [class*="tawk-bubble"] {
  display: none !important;
  visibility: hidden !important;
}
/* Insignia de reCAPTCHA: el tema no usa ningun formulario que la necesite. */
.grecaptcha-badge { display: none !important; }
</style>
	<?php
}
/* En <head> con prioridad 0: el interceptor tiene que existir antes de que el
   snippet del sitio intente insertar el script de tawk. */
add_action( 'wp_head', 'wfs_tawk_hidden_until_asked', 0 );

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

/**
 * Los telefonos del sitio no los cambia nadie.
 *
 * El sitio carga dos rastreadores de llamadas (Google Ads Call Tracking via
 * gstatic/wcm/loader.js y Marketing 360 via callconversions.mad.services).
 * Ambos sustituyen el numero real por uno de una bolsa, asi que cambiaba en
 * cada recarga y se veia el parpadeo: React pintaba el real y el rastreador
 * lo reemplazaba medio segundo despues.
 *
 * Aqui se restauran los numeros reales en cuanto algo los toca.
 *
 * OJO: esto desactiva la atribucion de llamadas en Google Ads y Marketing 360.
 * Para devolver el control a los rastreadores, en wp-config.php:
 *   define( 'WFS_ALLOW_CALL_TRACKING', true );
 */
function wfs_lock_phone_numbers() {
	if ( defined( 'WFS_ALLOW_CALL_TRACKING' ) && WFS_ALLOW_CALL_TRACKING ) { return; }
	?>
<script>
(function () {
  /* Google Ads cambia el numero llamando a _googWcmGet. Si ya existe cuando
     su script carga, no lo redefine, asi que dejarlo aqui como funcion vacia
     evita la sustitucion desde el principio: el visitante nunca llega a ver
     el numero del rastreador. El observador de abajo cubre a Marketing 360,
     que reescribe el DOM directamente. */
  try {
    Object.defineProperty(window, '_googWcmGet', {
      value: function () {}, writable: false, configurable: false,
    });
  } catch (e) { window._googWcmGet = function () {}; }

  /* Digitos -> como debe verse. Fuente: fichas de Google de cada sucursal. */
  var REAL = { '2396895496': '+1 239-689-5496', '9416236890': '+1 941-623-6890' };
  var YARD = { 'fort myers': '2396895496', 'port charlotte': '9416236890' };

  function digits(s) { return (s || '').replace(/\D/g, '').replace(/^1(\d{10})$/, '$1'); }

  /* Que numero le toca a este enlace: el suyo si aun es correcto, el que ya
     guardamos, o el de la sucursal que lo rodea. */
  function canonical(a) {
    var d = digits(a.getAttribute('href'));
    if (REAL[d]) { a.dataset.wfsPhone = d; return d; }
    if (a.dataset.wfsPhone) { return a.dataset.wfsPhone; }
    var ctx = ((a.closest('section, article, div, footer') || {}).textContent || '').toLowerCase();
    for (var name in YARD) { if (ctx.indexOf(name) !== -1) { return YARD[name]; } }
    return null;
  }

  var PHONE = /(?:\+?1[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g;

  /* A que sucursal pertenece un nodo: se sube hasta encontrar UNA sola de
     las dos, para no adivinar cuando el contenedor menciona las dos. */
  function yardOf(node) {
    var el = node.nodeType === 3 ? node.parentElement : node;
    for (var i = 0; el && i < 6; i++, el = el.parentElement) {
      var t = (el.textContent || '').toLowerCase();
      var fm = t.indexOf('fort myers') !== -1, pc = t.indexOf('port charlotte') !== -1;
      if (fm && !pc) { return YARD['fort myers']; }
      if (pc && !fm) { return YARD['port charlotte']; }
    }
    return null;
  }

  /* Los rastreadores tambien cambian telefonos escritos como texto suelto,
     fuera de un enlace. Ahi hay que mirar el contexto para saber cual va. */
  function restoreText() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node, pending = [];
    while ((node = walker.nextNode())) {
      var v = node.nodeValue;
      if (!v || v.indexOf('-') === -1) { continue; }
      PHONE.lastIndex = 0;
      if (!PHONE.test(v)) { continue; }
      PHONE.lastIndex = 0;
      var out = v.replace(PHONE, function (m) {
        if (REAL[digits(m)]) { return m; }        /* ya es uno de los reales */
        var want = yardOf(node);
        return want ? REAL[want] : m;
      });
      if (out !== v) { pending.push([node, out]); }
    }
    for (var i = 0; i < pending.length; i++) { pending[i][0].nodeValue = pending[i][1]; }
  }

  var fixing = false;
  function restore() {
    if (fixing) { return; }
    fixing = true;
    var links = document.querySelectorAll('a[href^="tel:"]');
    for (var i = 0; i < links.length; i++) {
      var a = links[i], want = canonical(a);
      if (!want) { continue; }
      if (digits(a.getAttribute('href')) !== want) { a.setAttribute('href', 'tel:' + want); }
      /* Se reemplaza el telefono DENTRO del texto, para que tambien funcione
         en enlaces tipo "Call (239) 689-5496" y no solo cuando el enlace es
         unicamente el numero. */
      var shown = a.textContent;
      /* El "+1" y su separador solo cuentan si van juntos, para no comerse el
         espacio de un texto como "Call (239) 689-5496". */
      var fixed = shown.replace(/(?:\+?1[\s.-])?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g, function (m) {
        return digits(m) === want ? m : REAL[want];
      });
      if (fixed !== shown) { a.textContent = fixed; }
    }
    restoreText();
    fixing = false;
  }

  function watch() {
    if (!document.body) { return; }
    restore();
    if (!window.MutationObserver) { return; }
    new MutationObserver(restore).observe(document.body, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ['href'],
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watch);
  } else {
    watch();
  }
})();
</script>
	<?php
}
/* En <head> con prioridad 0: tiene que correr ANTES que Google Tag Manager,
   asi el numero real nunca llega a sustituirse y no hay parpadeo. */
add_action( 'wp_head', 'wfs_lock_phone_numbers', 0 );
