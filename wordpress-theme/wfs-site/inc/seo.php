<?php
/**
 * SEO: titulos y descripciones reales por pagina, Open Graph y datos locales.
 *
 * La auditoria encontro: titulo del home con "Design Preview" (y el typo
 * "Fences"), 0 meta descriptions en todo el sitio, sin og:image y sin schema
 * de negocio local. Todo el contenido se pinta con JS, asi que estas etiquetas
 * son lo unico que un crawler lee sin ejecutar nada.
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/** slug => [t]itulo (sin la marca; WordPress anade " | Western Fence Supply") y [d]escripcion. */
function wfs_seo_map() {
	return apply_filters( 'wfs_seo_map', array(
		'about' => array( 't' => 'Family-Owned Fence Supplier', 'd' => 'Family-owned, supply-only fence company with 20+ years of experience, in-house gate fabrication, and yards in Fort Myers and Port Charlotte, Florida.' ),
		'aluminum' => array( 't' => 'Powder-Coated Aluminum Fence Supply', 'd' => 'Wholesale powder-coated aluminum fence panels, posts, and gates, including pool code options. Pickup or delivery from our Fort Myers and Port Charlotte yards.' ),
		'blog' => array( 't' => 'Fence Guides, News & Job Stories', 'd' => 'Guides, news and job stories from the crew that stocks and fabricates the material, for contractors and homeowners across Southwest Florida.' ),
		'articles' => array( 't' => 'Fence Buying Guides & Articles', 'd' => 'Short, plain-English fence guides for Southwest Florida, covering materials, pricing, pool code and hurricane zones, written by the crew that fabricates it.' ),
		'chain-link' => array( 't' => 'Chain Link Fence Supply, Fort Myers', 'd' => 'Galvanized and vinyl-coated chain link mesh, posts, fittings, and gates for security, sports, and industrial jobs. Pickup or delivery in Southwest Florida.' ),
		'contact' => array( 't' => 'Contact Us, Fort Myers & Port Charlotte', 'd' => 'Call, email or visit Western Fence Supply. Phone numbers, addresses and hours for our Fort Myers and Port Charlotte yards, plus a quick contact form.' ),
		'contractors' => array( 't' => 'Wholesale Fence Supply for Contractors', 'd' => 'Wholesale pricing tiers, priority gate fabrication and job-site delivery across Florida. Open a contractor account at our Fort Myers or Port Charlotte yards.' ),
		'ecfence' => array( 't' => 'EC Fence Steel Privacy Panel Supply', 'd' => 'Self-mating galvanized steel privacy panels in bronze and white, with matching gates. Built for coastal salt air. Pickup or delivery in Southwest Florida.' ),
		'estimate' => array( 't' => 'Get a Fence Quote in 24 Hours', 'd' => 'Sketch your fence or send linear feet, height, gate count and ZIP. Get a material quote in 24 hours, pickup or delivery from Fort Myers and Port Charlotte.' ),
		'faq' => array( 't' => 'Fence Supply FAQ, Pricing & Delivery', 'd' => 'Answers on quotes, stock, pickup and delivery from our Fort Myers and Port Charlotte yards. Lead times, gate fabrication and material questions covered.' ),
		'gate-cantilever' => array( 't' => 'Cantilever Gates, Up to 30 Ft Wide', 'd' => 'Cantilever gates ride on internal rollers with no ground track, so they work over any surface. Openings up to 30 feet, fabricated in our Fort Myers shop.' ),
		'gate-double' => array( 't' => 'Double Swing Driveway Gates', 'd' => 'Double swing gates for driveways and wide openings, fabricated in-house in Fort Myers. Vinyl, aluminum, chain link, metal and EC Fence, sized to your opening.' ),
		'gate-rolling' => array( 't' => 'Rolling Gates on Rubber Wheels', 'd' => 'Rolling gates on big rubber wheels for commercial yards, grass and uneven ground. Chain link builds, complete kits and Lock N\' Latch hardware from Fort Myers.' ),
		'gate-single' => array( 't' => 'Single Swing Gates, Built to Order', 'd' => 'Custom single swing gates fabricated in our Fort Myers shop. Vinyl, aluminum, chain link, metal and EC Fence, with hinges, latches and posts to match.' ),
		'gate-sliding' => array( 't' => 'Sliding Gates for Tight Driveways', 'd' => 'Track-mounted sliding gates for tight or sloped driveways where a swing gate will not fit. Built to size in Fort Myers, serving all of Southwest Florida.' ),
		'homeowners' => array( 't' => 'Fence Supply for Florida Homeowners', 'd' => 'Buy fence materials direct with no minimums, from single repair parts to complete DIY kits. Quotes in 24 hours from our Fort Myers and Port Charlotte yards.' ),
		'homepage' => array( 't' => 'Fence Supply in Southwest Florida', 'd' => 'Wholesale fence and gate supply from two Southwest Florida yards in Fort Myers and Port Charlotte. Vinyl, aluminum, chain link and metal, delivered statewide.' ),
		'locations' => array( 't' => 'Fort Myers & Port Charlotte Locations', 'd' => 'Two fence supply yards in Southwest Florida. Addresses, hours, maps and pickup details for Fort Myers and Port Charlotte, with delivery across the state.' ),
		'materials-comparison' => array( 't' => 'Fence Materials Comparison Guide', 'd' => 'Vinyl, aluminum, chain link, DuraFence, and EC Fence compared side by side on best use, heights, maintenance, and lead time for Southwest Florida projects.' ),
		'metal' => array( 't' => 'DuraFence Metal Privacy Fence Supply', 'd' => 'DuraFence metal privacy panels in Modern, Original, and P1 styles, 6 and 8 ft heights. Wholesale quotes with pickup or delivery across Southwest Florida.' ),
		'pool-code' => array( 't' => 'Florida Pool Code Fence Guide', 'd' => 'Clear overview of Florida pool barrier rules, height, gates and latches, plus aluminum and vinyl fence systems stocked in Fort Myers and Port Charlotte.' ),
		'products' => array( 't' => 'Fence Materials & Gates Catalog', 'd' => 'Browse five fence systems, vinyl, aluminum, chain link, metal and EC Fence, plus gates and hardware. Factory-direct pricing, stocked items ship in 1 to 3 days.' ),
		'projects' => array( 't' => 'Fence Projects in Southwest Florida', 'd' => 'Browse completed fence and gate projects across Southwest Florida by material. Pool enclosures, HOA perimeters and industrial chain link, supplied by WFS.' ),
		'resources' => array( 't' => 'Fence Buying Guides & Resources', 'd' => 'Fence guides, materials comparisons, Florida pool code references and spec sheet downloads, written by the Southwest Florida supplier that stocks it all.' ),
		'solutions' => array( 't' => 'Wholesale Fence Supply Solutions', 'd' => 'Wholesale fence supply for contractors, homeowners, DIY builders and commercial GCs. Supplier-direct pricing from our Fort Myers and Port Charlotte yards.' ),
		'specs' => array( 't' => 'Fence Spec Sheets & Wind Load Data', 'd' => 'Manufacturer spec sheets, profile drawings and wind load data for every fence system we stock, formatted for AHJ and HOA review, stamped copies on request.' ),
		'training-companion' => array( 't' => 'WFS Training Companion Login', 'd' => 'Internal training portal for Western Fence Supply staff. Watch the short platform tour, then log in with your WFS credentials to start your first module.' ),
		'vinyl' => array( 't' => 'Vinyl Fence Supply in Southwest Florida', 'd' => 'Wholesale vinyl and PVC fence materials in privacy, picket, and ranch rail styles. Pickup or delivery from our Fort Myers and Port Charlotte yards.' ),
		'warranty' => array( 't' => 'Fence Warranty Coverage by System', 'd' => 'Manufacturer-backed warranty terms for vinyl, aluminum, chain link, DuraFence and EC Fence. Transferable and honored at Fort Myers and Port Charlotte.' ),
		'warranty-claims' => array( 't' => 'Submit a Fence Warranty Claim', 'd' => 'File a fence warranty claim online with your PO, purchase date and photos. A rep responds within 24 hours from our Fort Myers or Port Charlotte yard.' ),
	) );
}

function wfs_seo_current() {
	$map  = wfs_seo_map();
	$slug = function_exists( 'wfs_current_slug' ) ? wfs_current_slug() : 'homepage';
	return isset( $map[ $slug ] ) ? $map[ $slug ] : null;
}

/**
 * Migracion: renombra las 29 paginas con el titulo SEO y guarda la meta
 * description donde Yoast la lee. Corregir el post_title arregla el <title>
 * con cualquier plugin SEO, porque todos parten de ahi.
 */
function wfs_seo_migrate() {
	if ( get_option( 'wfs_seo_titles' ) === '2' ) { return; }
	foreach ( wfs_seo_map() as $slug => $seo ) {
		$page = get_page_by_path( $slug );
		if ( ! $page ) { continue; }
		wp_update_post( array( 'ID' => $page->ID, 'post_title' => $seo['t'] ) );
		update_post_meta( $page->ID, '_yoast_wpseo_metadesc', $seo['d'] );
	}
	update_option( 'wfs_seo_titles', '2' );
}
add_action( 'after_switch_theme', 'wfs_seo_migrate' );
add_action( 'admin_init', 'wfs_seo_migrate' );

/** Si Yoast no esta, el tema imprime las etiquetas el mismo. */
function wfs_seo_head() {
	$seo = wfs_seo_current();
	if ( ! $seo ) { return; }
	$yoast = defined( 'WPSEO_VERSION' );
	$img   = WFS_ASSETS . '/hero-warehouse.webp';

	if ( ! $yoast ) {
		echo '<meta name="description" content="' . esc_attr( $seo['d'] ) . '" />' . "\n";
		echo '<meta property="og:type" content="website" />' . "\n";
		echo '<meta property="og:title" content="' . esc_attr( $seo['t'] . ' | Western Fence Supply' ) . '" />' . "\n";
		echo '<meta property="og:description" content="' . esc_attr( $seo['d'] ) . '" />' . "\n";
	}
	/* og:image falta incluso con Yoast: las paginas no tienen imagen destacada. */
	echo '<meta property="og:image" content="' . esc_url( $img ) . '" />' . "\n";
	echo '<meta name="twitter:card" content="summary_large_image" />' . "\n";
}
add_action( 'wp_head', 'wfs_seo_head', 4 );

/** Titulo de respaldo sin Yoast. */
add_filter( 'pre_get_document_title', function ( $title ) {
	if ( defined( 'WPSEO_VERSION' ) ) { return $title; }
	$seo = wfs_seo_current();
	return $seo ? $seo['t'] . ' | Western Fence Supply' : $title;
} );

/** Con Yoast: si a una pagina le falta la description, se sirve la del mapa. */
add_filter( 'wpseo_metadesc', function ( $desc ) {
	if ( is_string( $desc ) && '' !== trim( $desc ) ) { return $desc; }
	$seo = wfs_seo_current();
	return $seo ? $seo['d'] : $desc;
} );

/**
 * Schema LocalBusiness: los dos yards con direccion, telefono y horario
 * reales (los de las fichas de Google). Solo en home, contacto y sucursales.
 */
function wfs_local_schema() {
	$slug = function_exists( 'wfs_current_slug' ) ? wfs_current_slug() : '';
	if ( ! in_array( $slug, array( 'homepage', 'contact', 'locations' ), true ) ) { return; }

	$week = array(
		'opens'     => '07:30',
		'closes'    => '15:30',
		'dayOfWeek' => array( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ),
	);
	$yard = function ( $id, $phone, $email, $street, $city, $zip, $sat_close ) use ( $week ) {
		return array(
			'@type'     => 'LocalBusiness',
			'@id'       => home_url( '/#' . $id ),
			'name'      => 'Western Fence Supply ' . $city,
			'url'       => home_url( '/' ),
			'image'     => WFS_ASSETS . '/hero-warehouse.webp',
			'telephone' => $phone,
			'email'     => $email,
			'priceRange'=> '$$',
			'address'   => array(
				'@type'           => 'PostalAddress',
				'streetAddress'   => $street,
				'addressLocality' => $city,
				'addressRegion'   => 'FL',
				'postalCode'      => $zip,
				'addressCountry'  => 'US',
			),
			'openingHoursSpecification' => array(
				array_merge( array( '@type' => 'OpeningHoursSpecification' ), $week ),
				array(
					'@type'     => 'OpeningHoursSpecification',
					'dayOfWeek' => 'Saturday',
					'opens'     => '07:00',
					'closes'    => $sat_close,
				),
			),
		);
	};
	$data = array(
		'@context' => 'https://schema.org',
		'@graph'   => array(
			$yard( 'fort-myers', '+12394652482', 'sales@westernfencesupply.com', '2621 Fowler St', 'Fort Myers', '33901', '12:00' ),
			$yard( 'port-charlotte', '+19414675821', 'salespc@westernfencesupply.com', '1145 Enterprise Dr', 'Port Charlotte', '33953', '11:30' ),
		),
	);
	echo '<script type="application/ld+json">' . wp_json_encode( $data, JSON_UNESCAPED_SLASHES ) . '</script>' . "\n";
}
add_action( 'wp_head', 'wfs_local_schema', 5 );
