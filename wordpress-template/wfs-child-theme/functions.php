<?php
/**
 * Western Fence Supply — child theme bootstrap.
 * Loads the Hello Elementor parent stylesheet, then the WFS design system,
 * then the brand webfonts. Nothing else: layout lives in the Elementor
 * templates so the client can edit everything visually.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

add_action( 'wp_enqueue_scripts', function () {
	wp_enqueue_style( 'hello-elementor', get_template_directory_uri() . '/style.css', [], null );

	// Brand webfonts: Archivo (headings) + Inter (body copy).
	wp_enqueue_style(
		'wfs-fonts',
		'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=Inter:wght@300;400;500;600;700&display=swap',
		[],
		null
	);

	// The design system (colours, cards, pill buttons, form styling).
	wp_enqueue_style(
		'wfs-child',
		get_stylesheet_directory_uri() . '/style.css',
		[ 'hello-elementor', 'wfs-fonts' ],
		wp_get_theme()->get( 'Version' )
	);
}, 20 );

/**
 * Let Elementor manage the full page width — the templates are already
 * boxed to 1360px internally.
 */
add_action( 'after_setup_theme', function () {
	add_theme_support( 'align-wide' );
} );
