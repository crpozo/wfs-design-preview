<?php
/**
 * Redirecciones 301 de las URLs del sitio anterior.
 *
 * El sitio viejo tenia 157 URLs indexadas (sitemap de Yoast: paginas, posts,
 * un tipo "products", y 63 paginas de localidad de Yoast Local SEO). El sitio
 * nuevo tiene 29 paginas, asi que 128 de esas URLs ya no existen.
 *
 * Sin esto pasaban dos cosas malas para el posicionamiento:
 *   1. Cada URL vieja devolvia 200 pintando la PORTADA, con su propio title y
 *      su canonical apuntandose a si misma: 128 URLs de contenido duplicado.
 *   2. La autoridad acumulada por esas URLs no llegaba a ninguna pagina nueva.
 *
 * Aqui se manda un 301 a la pagina equivalente, que conserva esa autoridad, y
 * lo que no tiene equivalente devuelve 404 en vez de duplicar la portada.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Coincidencias exactas: ruta vieja => slug nuevo ('' = portada).
 */
function wfs_redirect_exact() {
	return apply_filters( 'wfs_redirect_exact', array(
		/* Paginas que cambiaron de nombre */
		'home'                            => '',
		'gates'                           => 'products',
		'fence-service-areas'             => 'locations',
		'request-a-fence-estimate'        => 'estimate',
		'get-free-fence-material-quote'   => 'estimate',
		'test-form'                       => 'estimate',
		/* Landings por audiencia */
		'landing-b2c'                     => 'homeowners',
		'landing-b2b'                     => 'contractors',
		/* Articulos del blog: el sitio nuevo los agrupa en una sola pagina */
		'benefits-of-having-a-fence'                              => 'articles',
		'best-type-of-fence-fort-myers'                           => 'articles',
		'cheapest-fence-to-install-in-southwest-florida'           => 'articles',
		'how-much-does-fence-cost-florida'                        => 'articles',
		'how-to-choose-a-southwest-florida-fence-company'          => 'articles',
		'how-to-install-a-vinyl-fence'                            => 'articles',
		'how-to-measure-for-fence-material'                       => 'articles',
		'how-to-shop-wholesale-fence-supplies-southwest-florida'   => 'articles',
		'hurricane-fence-recovery-guide'                          => 'articles',
		'hurricane-resistant-fences'                              => 'articles',
		'top-4-durable-fence-materials-for-your-home'             => 'articles',
		'where-is-the-best-place-to-buy-fence-materials-in-florida' => 'articles',
	) );
}

/**
 * Reglas por prefijo, en orden: la primera que coincida gana.
 *
 * Las mas especificas van primero, para que
 * /aluminum-gates/single-aluminum-gates/... acabe en gate-single y no en
 * la pagina generica de productos.
 */
function wfs_redirect_prefixes() {
	return apply_filters( 'wfs_redirect_prefixes', array(
		/* Portones: cada familia a su tipo */
		array( 'single-aluminum-gates',  'gate-single' ),
		array( 'single-chain-link-gates','gate-single' ),
		array( 'single-metal-gates',     'gate-single' ),
		array( 'single-vinyl-gate',      'gate-single' ),
		array( 'single-vinyl-gates',     'gate-single' ),
		array( 'double-aluminum-gates',  'gate-double' ),
		array( 'double-chain-link-gates','gate-double' ),
		array( 'double-metal-gates',     'gate-double' ),
		array( 'double-vinyl-gates',     'gate-double' ),
		/* Categorias de porton sin tipo */
		array( 'aluminum-gates',   'products' ),
		array( 'chain-link-gates', 'products' ),
		array( 'metal-gates',      'products' ),
		array( 'vinyl-gates',      'products' ),
		/* Materiales: la familia entera a su pagina de material */
		array( 'vinyl-fence',      'vinyl' ),
		array( 'aluminum-fence',   'aluminum' ),
		array( 'chain-link-fence', 'chain-link' ),
		array( 'metal-fence',      'metal' ),
		/* Las 63 paginas de localidad de Yoast Local SEO */
		array( 'fl', 'locations' ),
	) );
}

/**
 * A donde mandar una ruta vieja, o null si no hay equivalente.
 */
function wfs_redirect_target( $path ) {
	$path = trim( (string) $path, '/' );
	if ( '' === $path ) { return null; }

	$exact = wfs_redirect_exact();
	if ( isset( $exact[ $path ] ) ) { return $exact[ $path ]; }

	/* Se mira cada segmento, no solo el primero: asi
	   /aluminum-gates/single-aluminum-gates/lo-que-sea encuentra el segmento
	   "single-aluminum-gates" y va a gate-single. */
	$segments = explode( '/', $path );
	foreach ( wfs_redirect_prefixes() as $rule ) {
		list( $needle, $target ) = $rule;
		if ( in_array( $needle, $segments, true ) ) { return $target; }
	}
	return null;
}

/**
 * URL final de un slug del sitio nuevo.
 */
function wfs_redirect_url( $slug ) {
	if ( '' === $slug ) { return home_url( '/' ); }
	$page = get_page_by_path( $slug );
	return $page ? get_permalink( $page ) : home_url( '/' . $slug . '/' );
}

/**
 * Manda el 301, o deja que WordPress devuelva 404.
 *
 * Corre en template_redirect: ya se resolvio la consulta, asi que solo actua
 * sobre lo que WordPress no supo servir o sobre una ruta vieja conocida.
 */
function wfs_do_legacy_redirect() {
	if ( is_admin() || wp_doing_ajax() ) { return; }
	if ( defined( 'REST_REQUEST' ) && REST_REQUEST ) { return; }

	/* Si WordPress resolvio la peticion a contenido real, no es una URL vieja:
	   es una entrada del blog, una categoria o una busqueda. Sin esta guarda
	   toda entrada publicada daria 404, porque su slug no esta en el manifiesto
	   de paginas del sitio. Ademas, si una entrada nueva reutiliza el slug de
	   una vieja, gana la entrada y no la redireccion. */
	if ( is_singular() || is_home() || is_front_page() || is_archive() || is_search() ) { return; }

	$path = wp_parse_url( isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '/', PHP_URL_PATH );
	$path = trim( (string) $path, '/' );
	if ( '' === $path ) { return; }

	/* Si el primer segmento es una pagina real del sitio nuevo, no se toca.
	   Cubre /about/ y tambien /about/lo-que-sea. */
	$first = explode( '/', $path )[0];
	if ( isset( wfs_pages()[ $first ] ) ) { return; }

	$target = wfs_redirect_target( $path );
	if ( $target !== null ) {
		wp_safe_redirect( wfs_redirect_url( $target ), 301 );
		exit;
	}

	/* Sin equivalente: 404 de verdad. Antes se pintaba la portada con un 200,
	   que para Google es contenido duplicado. */
	if ( ! is_404() ) {
		global $wp_query;
		$wp_query->set_404();
		status_header( 404 );
		nocache_headers();
	}
}
add_action( 'template_redirect', 'wfs_do_legacy_redirect', 1 );
