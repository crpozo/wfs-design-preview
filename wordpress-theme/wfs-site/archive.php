<?php
/**
 * Categoria, etiqueta o archivo por fecha. Mismo listado que el indice, con la
 * cabecera cambiada, para que un enlace de categoria no lleve a una pagina rota.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_template_part( 'parts/blog-head' );
?>

<section class="wfs-hero wfs-hero--slim">
  <img class="wfs-hero__img" src="<?php echo esc_url( WFS_ASSETS . '/hero-warehouse.webp' ); ?>" alt="" aria-hidden="true" />
  <div class="wfs-hero__scrim" aria-hidden="true"></div>
  <div class="container wfs-hero__inner">
    <span class="wfs-hero__eyebrow"><i aria-hidden="true"></i>Blog · <?php echo esc_html( single_term_title( '', false ) ?: 'Archive' ); ?></span>
    <h1 class="wfs-hero__title"><?php echo esc_html( single_term_title( '', false ) ?: get_the_archive_title() ); ?></h1>
    <?php $wfs_d = get_the_archive_description(); if ( $wfs_d ) : ?>
      <p class="wfs-hero__sub"><?php echo wp_kses_post( $wfs_d ); ?></p>
    <?php endif; ?>
  </div>
</section>

<section class="wfs-blog-list">
  <div class="container">
    <?php get_template_part( 'parts/blog-toolbar' ); ?>
    <?php get_template_part( 'parts/blog-list' ); ?>
  </div>
</section>

<?php get_template_part( 'parts/blog-foot' ); ?>
