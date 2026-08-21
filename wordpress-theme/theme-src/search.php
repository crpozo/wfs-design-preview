<?php
/**
 * Resultados de busqueda. Antes la busqueda era del lado del cliente y solo
 * miraba las entradas de la pagina actual; asi encuentra en todo el blog y
 * pagina bien.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_template_part( 'parts/blog-head' );
global $wp_query;
?>

<section class="wfs-hero wfs-hero--slim">
  <img class="wfs-hero__img" src="<?php echo esc_url( WFS_ASSETS . '/hero-warehouse.webp' ); ?>" alt="" aria-hidden="true" />
  <div class="wfs-hero__scrim" aria-hidden="true"></div>
  <div class="container wfs-hero__inner">
    <span class="wfs-hero__eyebrow"><i aria-hidden="true"></i>Blog · Search</span>
    <h1 class="wfs-hero__title">“<?php echo esc_html( get_search_query() ); ?>”</h1>
    <p class="wfs-hero__sub">
      <?php
      $wfs_n = (int) $wp_query->found_posts;
      printf( esc_html( _n( '%d article found.', '%d articles found.', $wfs_n, 'wfs' ) ), $wfs_n );
      ?>
    </p>
  </div>
</section>

<section class="wfs-blog-list">
  <div class="container">
    <?php get_template_part( 'parts/blog-toolbar' ); ?>
    <?php get_template_part( 'parts/blog-list' ); ?>
  </div>
</section>

<?php get_template_part( 'parts/blog-foot' ); ?>
