<?php
/**
 * Plantilla unica: renderiza el sitio real de Western Fence Supply.
 * La pagina que se muestra depende del slug que pide WordPress.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

$wfs_slug = wfs_current_slug();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" type="image/svg+xml" href="<?php echo esc_url( WFS_ASSETS . '/favicon.svg' ); ?>" />
<?php
/* Preconectar a los origenes de la ruta critica ahorra un RTT+TLS por cada
   uno. Las fuentes van por <link>, no por @import dentro del CSS: el import
   encadenaba styles.css -> google -> woff2 en serie (parte de los 3.260 ms
   de bloqueo que midio Lighthouse). */
$wfs_assets_origin = wp_parse_url( WFS_ASSETS, PHP_URL_SCHEME ) . '://' . wp_parse_url( WFS_ASSETS, PHP_URL_HOST );
?>
<link rel="preconnect" href="<?php echo esc_url( $wfs_assets_origin ); ?>" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,300..900&family=Inter:wght@300;400;500;600;700&display=swap" />
<?php if ( 'homepage' === $wfs_slug ) : ?>
<!-- El LCP del home es el poster del video del hero: pedirlo desde el head
     evita que Lighthouse marque "LCP request discovery" -->
<link rel="preload" as="image" fetchpriority="high" href="<?php echo esc_url( WFS_ASSETS . '/second-video-poster.jpg' ); ?>" />
<?php endif; ?>
<link rel="stylesheet" href="<?php echo esc_url( get_theme_file_uri( 'css/styles.css' ) . '?ver=' . WFS_VERSION ); ?>" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="root"></div>

<script>
/* Los formularios postean aqui; sin esto quedarian sin destino. */
window.WFS_FORM_ENDPOINT = <?php echo wp_json_encode( esc_url_raw( rest_url( 'wfs/v1/lead' ) ) ); ?>;
window.WFS_NONCE = <?php echo wp_json_encode( wp_create_nonce( 'wp_rest' ) ); ?>;

/* Los componentes enlazan a "products.html". Aqui se traduce a la URL real de
   WordPress, conservando el ancla (#contact) cuando la hay. */
window.WFS_LINKS = <?php echo wp_json_encode( wfs_link_map() ); ?>;
window.WFS_ASSET_BASE = <?php echo wp_json_encode( WFS_ASSETS ); ?>;
window.WFS_LOCAL_ASSETS = <?php echo wp_json_encode( wfs_local_assets() ); ?>;
(function () {
  var map = window.WFS_LINKS || {};
  function resolve(href) {
    if (!href) { return null; }
    var m = href.match(/([A-Za-z0-9._-]+\.html)(#.*)?$/);
    if (!m || !map[m[1]]) { return null; }
    return map[m[1]] + (m[2] || '');
  }
  /* Los assets que viajan en el tema se sirven desde este dominio, no desde
     el preview: la URL es la del cliente y no depende de un repo externo. */
  var local = window.WFS_LOCAL_ASSETS || {};
  var base = (window.WFS_ASSET_BASE || '').replace(/\/$/, '') + '/';
  function localize(el, attr) {
    var v = el.getAttribute(attr);
    if (!v || v.indexOf(base) !== 0) { return; }
    var rel = v.slice(base.length).split('?')[0];
    if (local[rel]) { el.setAttribute(attr, local[rel]); }
  }
  function patch(root) {
    var scope = root || document;
    var links = scope.querySelectorAll('a[href*=".html"]');
    for (var i = 0; i < links.length; i++) {
      var to = resolve(links[i].getAttribute('href'));
      if (to) { links[i].setAttribute('href', to); }
    }
    var a = scope.querySelectorAll('a[href]');
    for (var j = 0; j < a.length; j++) { localize(a[j], 'href'); }
    var m = scope.querySelectorAll('img[src], source[src], video[src]');
    for (var k = 0; k < m.length; k++) { localize(m[k], 'src'); }
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href*=".html"]') : null;
    if (!a) { return; }
    var to = resolve(a.getAttribute('href'));
    if (to) { a.setAttribute('href', to); }
  }, true);
  var root = document.getElementById('root');
  if (window.MutationObserver && root) {
    new MutationObserver(function () { patch(root); }).observe(root, { childList: true, subtree: true });
  }
  document.addEventListener('DOMContentLoaded', function () { patch(document); });
})();
</script>

<?php wfs_print_app( $wfs_slug ); ?>
<?php wp_footer(); ?>
</body>
</html>
