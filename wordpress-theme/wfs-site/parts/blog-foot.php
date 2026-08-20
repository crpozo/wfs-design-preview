<?php
/** Pie comun: monta el Footer real y arranca el resolvedor de enlaces. */
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<div id="wfs-footer"></div>
<script>
window.WFS_FORM_ENDPOINT = <?php echo wp_json_encode( esc_url_raw( rest_url( 'wfs/v1/lead' ) ) ); ?>;
window.WFS_NONCE        = <?php echo wp_json_encode( wp_create_nonce( 'wp_rest' ) ); ?>;
window.WFS_LINKS        = <?php echo wp_json_encode( wfs_link_map() ); ?>;
window.WFS_ASSET_BASE   = <?php echo wp_json_encode( WFS_ASSETS ); ?>;
window.WFS_LOCAL_ASSETS = <?php echo wp_json_encode( wfs_local_assets() ); ?>;
</script>
<script src="<?php echo esc_url( get_theme_file_uri( 'apps/wfs-links.js' ) . '?ver=' . WFS_VERSION ); ?>"></script>
<?php wfs_blog_shell_scripts(); ?>
<?php wp_footer(); ?>
</body>
</html>
