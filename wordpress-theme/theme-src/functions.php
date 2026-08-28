<?php
/**
 * Western Fence Supply, tema espejo.
 *
 * En vez de traducir el diseno a bloques (donde se pierden los 1.355 estilos
 * inline de los componentes), este tema sirve el sitio real tal cual.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'WFS_VERSION', '4.22.0' );

/** Base de las imagenes y videos. Se puede sobreescribir en wp-config.php. */
if ( ! defined( 'WFS_ASSETS' ) ) {
	define( 'WFS_ASSETS', 'https://crpozo.github.io/wfs-design-preview/assets' );
}

require_once get_theme_file_path( 'inc/leads.php' );
require_once get_theme_file_path( 'inc/redirects.php' );
require_once get_theme_file_path( 'inc/seo.php' );
require_once get_theme_file_path( 'inc/blog.php' );

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
	/* Filtrable para que modulos como el blog anadan sus propias URLs sin
	   tener que tocar esta funcion. */
	return apply_filters( 'wfs_link_map', $map );
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

	/* El configurador se monta DENTRO de la pagina de material o de porton, asi
	   que solo esas dos lo necesitan. No es JSX: va sin type="text/babel" y
	   antes de los componentes, porque su efecto llama a window.WFSBuilder. El
	   orden entre scripts defer se conserva. */
	$comps = $pages[ $slug ]['components'];
	/* Precompilado los componentes llegan como .js y sin precompilar como .jsx. */
	$necesita = array( 'page-material.jsx', 'page-material.js', 'page-gate.jsx', 'page-gate.js' );
	if ( array_intersect( $necesita, $comps )
		&& file_exists( get_theme_file_path( 'apps/fence-builder.js' ) ) ) {
		/* El visualizador 3D no se carga aqui: se descarga solo cuando alguien
		   pulsa "View in 3D", que es medio mega que la mayoria no gasta. Lo
		   unico que hace falta de antemano es decirle donde esta, porque en el
		   tema no cuelga de la raiz del sitio. */
		if ( file_exists( get_theme_file_path( 'apps/fence-3d.js' ) ) ) {
			printf(
				'<script>window.WFS3D_SRC=%s;</script>' . "\n",
				wp_json_encode( get_theme_file_uri( 'apps/fence-3d.js' ) . '?ver=' . $v )
			);
		}
		printf(
			'<script%s src="%s"></script>' . "\n",
			$pre ? ' defer' : '',
			esc_url( get_theme_file_uri( 'apps/fence-builder.js' ) . '?ver=' . $v )
		);
	}

	foreach ( $comps as $comp ) {
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
 * Mirano Extended: se enciende sola en cuanto exista el archivo licenciado.
 *
 * La fuente es propietaria (Unio Creative Solutions) y su licencia web se
 * compra aparte de la de escritorio, asi que no puede viajar en el repo ni en
 * el zip: un @font-face deja el .woff2 descargable para cualquiera, que es
 * justo lo que la licencia no permite redistribuir.
 *
 * Al dejar los .woff2 licenciados en la carpeta fonts/ del tema, este bloque
 * emite el @font-face y TODOS los titulos cambian de golpe, porque todos salen
 * de la variable --display. Mientras no haya archivos no imprime nada, asi que
 * no se pide un 404 en cada carga.
 */
function wfs_font_face() {
	$dir   = get_theme_file_path( 'fonts' );
	$pesos = array(
		'MiranoExtended-Regular.woff2' => '400 600',
		'MiranoExtended-Bold.woff2'    => '700 800',
	);

	$css      = '';
	$preload  = '';
	foreach ( $pesos as $archivo => $peso ) {
		if ( ! file_exists( $dir . '/' . $archivo ) ) { continue; }
		$url  = get_theme_file_uri( 'fonts/' . $archivo ) . '?ver=' . WFS_VERSION;
		$css .= sprintf(
			"@font-face{font-family:'Mirano Extended';src:url(%s) format('woff2');font-weight:%s;font-style:normal;font-display:swap}",
			esc_url( $url ),
			$peso
		);
		/* El titular del hero es el LCP de casi todas las paginas y va en negrita,
		   asi que ese peso se precarga para que no se pinte primero en Archivo. */
		if ( '700 800' === $peso ) {
			$preload = '<link rel="preload" as="font" type="font/woff2" crossorigin href="' . esc_url( $url ) . '">' . "\n";
		}
	}
	if ( '' === $css ) { return; }

	echo $preload;
	echo '<style id="wfs-mirano">' . $css . "</style>\n";
}
add_action( 'wp_head', 'wfs_font_face', 1 );

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
/* Burbuja de chat propia; la de tawk se mantiene oculta siempre.
 *
 * Por que no usar la burbuja nativa: tawk pinta junto a ella el globo
 * "We Are Here!" (un iframe de 124x95 que se comprobo visible con el chat
 * minimizado) y en movil usa una pestana lateral. Ambas cosas son ajustes del
 * panel de tawk, no del sitio. hideWidget() apaga las dos de una vez, asi que
 * el tema pinta su propia burbuja: identica en escritorio y movil, sin globo
 * posible, y con el color de la marca.
 *
 * El script de tawk se carga en la primera interaccion, no al abrir: la pagina
 * no arrastra sus 8 archivos de entrada y la burbuja igual se ve desde el
 * primer momento porque es nuestra.
 *
 * Para volver al widget nativo: define( 'WFS_TAWK_BUBBLE', true ) en wp-config.
 */
(function () {
  var TAWK = /embed\.tawk\.to/;
  window.__wfsTawkSrc = null;
  window.__wfsChatOpen = false;

  var rawInsert = Node.prototype.insertBefore;
  var rawAppend = Node.prototype.appendChild;
  var loading = false, restored = false;

  /* Se aparta el script de tawk para cargarlo nosotros mas tarde. */
  function intercept(original) {
    return function (node) {
      try {
        if (!restored && node && node.tagName === 'SCRIPT' && TAWK.test(node.src || '')) {
          window.__wfsTawkSrc = node.src;
          return node;
        }
      } catch (e) {}
      return original.apply(this, arguments);
    };
  }
  Node.prototype.insertBefore = intercept(rawInsert);
  Node.prototype.appendChild  = intercept(rawAppend);

  function api() { return window.Tawk_API; }
  function ready() { var a = api(); return a && typeof a.maximize === 'function'; }

  /* El visitante cerro el chat: se vuelve a ocultar tawk y reaparece la
     burbuja del tema. */
  function closed() {
    window.__wfsChatOpen = false;
    document.documentElement.classList.remove('wfs-chat-open');
    keepHidden();
    setMode(false);
  }

  /* Mientras el visitante no pida chat, todo lo de tawk queda oculto. */
  function keepHidden() {
    if (window.__wfsChatOpen) { return; }
    try { api().hideWidget(); } catch (e) {}
  }

  function loadTawk(onReady) {
    if (ready()) { if (onReady) { onReady(); } return; }
    if (!loading) {
      loading = true;
      restored = true;
      Node.prototype.insertBefore = rawInsert;
      Node.prototype.appendChild  = rawAppend;
      window.Tawk_API = window.Tawk_API || {};
      /* El snippet del sitio deja puesto Tawk_API.onLoad = maximize(), y por eso
         el chat se abria solo en cuanto tawk terminaba de cargar. Se sobreescribe
         aqui, justo antes de inyectar el script, para que el arranque solo oculte. */
      window.Tawk_API.onLoad = function () {
        try { window.Tawk_API.hideWidget(); } catch (e) {}
        if (window.__wfsChatOpen) {
          try { window.Tawk_API.showWidget(); } catch (e) {}
          try { window.Tawk_API.maximize(); } catch (e) {}
        }
      };
      var s = document.createElement('script');
      s.async = true; s.charset = 'UTF-8';
      s.setAttribute('crossorigin', '*');
      s.src = window.__wfsTawkSrc || 'https://embed.tawk.to/6881734e416fc119149ce7c5/1j0srns0p';
      rawAppend.call(document.head, s);
    }
    var tries = 0;
    var iv = setInterval(function () {
      if (ready()) {
        clearInterval(iv);
        keepHidden();
        /* Callbacks como via rapida... */
        try {
          api().onChatMinimized = closed;
          api().onChatHidden    = closed;
          api().onUnreadCountChanged = function (n) { badge(n); };
        } catch (e) {}
        /* ...y un vigilante que consulta el estado real, porque tawk no
           siempre dispara esos callbacks (se comprobo: al minimizar, el globo
           reaparecia y la burbuja no volvia). Aqui no dependemos de eventos. */
        setInterval(function () {
          var max = false;
          try { max = api().isChatMaximized(); } catch (e) { return; }
          if (window.__wfsChatOpen && !max) { closed(); }
          else if (!window.__wfsChatOpen) { keepHidden(); }
        }, 250);
        if (onReady) { onReady(); }
      } else if (++tries > 100) { clearInterval(iv); }
    }, 200);
  }

  /* ---- burbuja propia ---- */
  var el, dot, icon;
  var ICON_CHAT  = '<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 20l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 2 8.38 8.38 0 0 1 21 10.5z"/>';
  var ICON_CLOSE = '<path d="M6 9l6 6 6-6"/>';

  /* La burbuja esta SIEMPRE visible: con el chat cerrado abre, y con el chat
     abierto hace de boton de cerrar. Asi el lanzador de tawk (que es su boton
     de cerrar) puede quedar oculto para siempre sin dejar al visitante sin
     manera de cerrar el chat. */
  function setMode(open) {
    if (!el) { return; }
    if (icon) { icon.innerHTML = open ? ICON_CLOSE : ICON_CHAT; }
    el.setAttribute('aria-label', open ? 'Close chat' : 'Chat with Western Fence Supply');
    el.classList.toggle('is-open', !!open);
    if (open) { badge(0); }
  }
  function showBubble(v) { if (el) { el.style.display = 'flex'; } }
  function badge(n) {
    if (!dot) { return; }
    dot.style.display = (n > 0) ? 'flex' : 'none';
    dot.textContent = n > 9 ? '9+' : String(n);
  }

  function openChat() {
    window.__wfsChatOpen = true;
    document.documentElement.classList.add('wfs-chat-open');
    setMode(true);
    loadTawk(function () {
      try { api().showWidget(); } catch (e) {}
      try { api().maximize(); } catch (e) {}
    });
  }

  function closeChat() {
    try { api().minimize(); } catch (e) {}
    closed();
  }

  function toggleChat() {
    if (window.__wfsChatOpen) { closeChat(); } else { openChat(); }
  }
  /* El boton "Talk to a live agent" de la cabecera usa esto. */
  window.wfsLoadChat = openChat;

  function build() {
    if (el || !document.body) { return; }
    el = document.createElement('button');
    el.type = 'button';
    el.className = 'wfs-chat-bubble';
    el.setAttribute('aria-label', 'Chat with Western Fence Supply');
    el.innerHTML =
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
      ' stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 20l1.9-5.7a8.5 8.5 0 0 1-.9-3.8' +
      'A8.38 8.38 0 0 1 12.5 2 8.38 8.38 0 0 1 21 10.5z"/></svg>' +
      '<span class="wfs-chat-bubble__badge" aria-hidden="true"></span>';
    el.addEventListener('click', toggleChat);
    document.body.appendChild(el);
    dot  = el.querySelector('.wfs-chat-bubble__badge');
    icon = el.querySelector('svg');
    badge(0);
    setMode(false);
  }

  /* Tawk se carga en la primera interaccion real, y nace oculto. */
  var events = ['pointerdown', 'keydown', 'scroll', 'touchstart'];
  function warm() {
    events.forEach(function (e) { window.removeEventListener(e, warm, true); });
    if (!window.__wfsChatOpen) { loadTawk(null); }
  }
  events.forEach(function (e) { window.addEventListener(e, warm, { capture: true, passive: true, once: true }); });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
</script>
<style>
/* Burbuja del tema. Misma pieza en escritorio y movil, abajo a la derecha. */
.wfs-chat-bubble {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #263167;
  color: #fff;
  cursor: pointer;
  z-index: 2147483000;
  box-shadow: 0 10px 26px -6px rgba(38, 49, 103, 0.55);
  transition: transform 0.18s ease, background 0.18s ease;
}
.wfs-chat-bubble:hover { background: #ff7133; transform: translateY(-2px); }
/* Con el chat abierto la burbuja hace de boton de cerrar. */
.wfs-chat-bubble.is-open { background: #1c2550; }
.wfs-chat-bubble.is-open:hover { background: #ff7133; }
.wfs-chat-bubble:focus-visible { outline: 3px solid #ff7133; outline-offset: 3px; }
.wfs-chat-bubble__badge {
  display: none;
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border-radius: 999px;
  background: #ff7133;
  color: #fff;
  font: 700 12px/20px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #263167;
}
@media (max-width: 640px) {
  .wfs-chat-bubble { width: 52px; height: 52px; right: 16px; bottom: 16px; }
}
@media print { .wfs-chat-bubble { display: none !important; } }

/* Refuerzo por CSS del lanzador y el globo de tawk, por si su script tarda en
   responder a hideWidget(). No se puede usar display ni visibility ni opacity:
   tawk las fija inline con !important y ganan sobre cualquier hoja de estilos.
   clip-path es la unica que deja libre, y recorta el elemento por completo. */
/* SIN condicion: el lanzador (64x60) y el globo (124x95) de tawk no deben
   verse NUNCA, ni siquiera con el chat abierto. Antes esto colgaba de
   html:not(.wfs-chat-open), y al cerrar con la X tawk los mostraba antes de
   que el vigilante quitara la clase: ese era el parpadeo de unos segundos.
   La ventana del chat (350px) no se toca, asi que abrir sigue funcionando. */
iframe[scrolling="no"][width="64px"],
iframe[scrolling="no"][width="124px"] {
  clip-path: inset(50%) !important;
  pointer-events: none !important;
}
/* Insignia de reCAPTCHA: el tema no usa ningun formulario que la necesite. */
.grecaptcha-badge { display: none !important; }
</style>
	<?php
}
/* En <head> con prioridad 0: el interceptor debe existir antes de que el
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
 * Candado de telefonos: APAGADO por defecto desde la 4.7.0.
 *
 * El sitio carga dos rastreadores de llamadas (Google Ads Call Tracking via
 * gstatic/wcm/loader.js y Marketing 360 via callconversions.mad.services).
 * Ambos sustituyen el numero real por uno de una bolsa para atribuir la
 * llamada. Este bloque los revertia, y de paso mataba esa atribucion.
 *
 * Marketing pidio expresamente que el intercambio dinamico funcione, asi que
 * ahora el candado no corre salvo que se pida a proposito, en wp-config.php:
 *   define( 'WFS_LOCK_PHONE_NUMBERS', true );
 *
 * Consecuencia esperada: el numero visible puede cambiar entre recargas, y en
 * la primera carga puede verse un instante el real antes del de rastreo. Eso
 * es como funciona la insercion dinamica, no una falla.
 */
function wfs_lock_phone_numbers() {
	$lock = defined( 'WFS_LOCK_PHONE_NUMBERS' ) && WFS_LOCK_PHONE_NUMBERS;
	if ( defined( 'WFS_ALLOW_CALL_TRACKING' ) && WFS_ALLOW_CALL_TRACKING ) { $lock = false; }
	if ( ! $lock ) { return; }
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
  var REAL = { '2396895496': '(239) 689-5496', '9416236890': '(941) 623-6890' };
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
