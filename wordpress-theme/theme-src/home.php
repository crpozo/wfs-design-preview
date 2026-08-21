<?php
/**
 * Indice del blog. Lista las entradas que marketing publica desde WordPress.
 * Se pinta en PHP, no en React, para que sea rastreable sin ejecutar nada.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_template_part( 'parts/blog-head' );
?>

<!-- Mismo banner que el resto de paginas interiores: foto de fondo, velo
     azul en diagonal, guion naranja y titular en dos colores. Es la receta de
     PageHero, replicada en PHP para no arrastrar React hasta aqui. -->
<section class="wfs-hero">
  <img class="wfs-hero__img" src="<?php echo esc_url( WFS_ASSETS . '/hero-warehouse.webp' ); ?>" alt="" aria-hidden="true" />
  <div class="wfs-hero__scrim" aria-hidden="true"></div>
  <div class="container wfs-hero__inner">
    <span class="wfs-hero__eyebrow"><i aria-hidden="true"></i>Fence Education Hub · Blog</span>
    <h1 class="wfs-hero__title">
      Guides, News And<br><span class="wfs-hero__accent">Job Stories.</span>
    </h1>
    <p class="wfs-hero__sub">
      Written by the crew that stocks and fabricates the material, for contractors
      and homeowners across Southwest Florida.
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
