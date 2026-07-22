<?php
/**
 * Western Fence Supply — block theme.
 * Everything visual lives in theme.json / templates / patterns so the whole
 * site is editable from Appearance → Editor. This file only wires up fonts,
 * editor styles and the pattern category.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'after_setup_theme', function () {
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'editor-styles' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', [ 'style', 'script', 'navigation-widgets' ] );
	add_editor_style( 'style.css' );
} );

/** Brand webfonts, loaded on the site and inside the editor. */
function wfs_fonts_url() {
	return 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=Inter:wght@300;400;500;600;700&display=swap';
}
add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'wfs-fonts', wfs_fonts_url(), [], null );
	wp_enqueue_style( 'wfs-style', get_stylesheet_uri(), [ 'wfs-fonts' ], wp_get_theme()->get( 'Version' ) );
} );
add_action( 'enqueue_block_editor_assets', function () {
	wp_enqueue_style( 'wfs-fonts', wfs_fonts_url(), [], null );
} );

/** Our own pattern category so the sections are easy to find when editing. */
add_action( 'init', function () {
	if ( function_exists( 'register_block_pattern_category' ) ) {
		register_block_pattern_category( 'wfs', [ 'label' => __( 'Western Fence Supply', 'wfs' ) ] );
	}
} );
