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
<link rel="stylesheet" href="<?php echo esc_url( get_theme_file_uri( 'css/styles.css' ) . '?ver=' . WFS_VERSION ); ?>" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="root"></div>

<script>
/* Los componentes enlazan a "products.html". Aqui se traduce a la URL real de
   WordPress, conservando el ancla (#contact) cuando la hay. */
window.WFS_LINKS = <?php echo wp_json_encode( wfs_link_map() ); ?>;
(function () {
  var map = window.WFS_LINKS || {};
  function resolve(href) {
    if (!href) { return null; }
    var m = href.match(/([A-Za-z0-9._-]+\.html)(#.*)?$/);
    if (!m || !map[m[1]]) { return null; }
    return map[m[1]] + (m[2] || '');
  }
  function patch(root) {
    var links = (root || document).querySelectorAll('a[href*=".html"]');
    for (var i = 0; i < links.length; i++) {
      var to = resolve(links[i].getAttribute('href'));
      if (to) { links[i].setAttribute('href', to); }
    }
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
