<?php
/**
 * Cabecera comun de las plantillas del blog.
 * Misma hoja de estilos y mismas fuentes que el resto del sitio, para que una
 * entrada no se vea como una pagina de otro sitio web.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
$wfs_assets_origin = wp_parse_url( WFS_ASSETS, PHP_URL_SCHEME ) . '://' . wp_parse_url( WFS_ASSETS, PHP_URL_HOST );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" type="image/svg+xml" href="<?php echo esc_url( WFS_ASSETS . '/favicon.svg' ); ?>" />
<link rel="preconnect" href="<?php echo esc_url( $wfs_assets_origin ); ?>" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,300..900&family=Inter:wght@300;400;500;600;700&display=swap" />
<link rel="stylesheet" href="<?php echo esc_url( get_theme_file_uri( 'css/styles.css' ) . '?ver=' . WFS_VERSION ); ?>" />
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<div id="wfs-header"></div>
