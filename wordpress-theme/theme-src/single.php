<?php
/**
 * Una entrada. El contenido sale tal cual del editor de WordPress, asi que
 * marketing publica sin tocar codigo. El estilo lo pone css/styles.css sobre
 * el marcado que genera Gutenberg.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_template_part( 'parts/blog-head' );
while ( have_posts() ) : the_post();
?>

<article class="wfs-post">
  <div class="container container--article">

    <!-- Cabecera: fecha y firma, titular, entradilla -->
    <header class="wfs-post__head">
      <a class="wfs-post__back" href="<?php echo esc_url( wfs_blog_url() ); ?>">← Blog</a>
      <p class="wfs-post__byline">
        <?php echo esc_html( get_the_date( 'j M Y' ) ); ?>,
        <span>by <?php echo esc_html( get_the_author() ); ?></span>
      </p>
      <h1 class="wfs-post__title"><?php the_title(); ?></h1>
      <?php $wfs_lead = get_the_excerpt(); if ( $wfs_lead ) : ?>
        <p class="wfs-post__lead"><?php echo esc_html( wp_strip_all_tags( $wfs_lead ) ); ?></p>
      <?php endif; ?>
    </header>

    <?php
    /* La portada ocupa el ancho del contenido, alineada con el titular. A
       sangre de pantalla quedaba desligada del articulo. */
    if ( has_post_thumbnail() ) : ?>
      <figure class="wfs-post__cover">
        <?php the_post_thumbnail( 'full', array( 'decoding' => 'async', 'alt' => esc_attr( get_the_title() ) ) ); ?>
      </figure>
    <?php endif; ?>

    <?php
    /* Las etiquetas van justo bajo la portada, no al final: ahi es donde el
       lector todavia esta decidiendo si el articulo va de lo suyo. */
    $wfs_tags = get_the_tags();
    if ( $wfs_tags ) : ?>
      <div class="wfs-post__tags">
        <?php foreach ( $wfs_tags as $wfs_t ) : ?>
          <a class="wfs-tag" href="<?php echo esc_url( get_tag_link( $wfs_t ) ); ?>"><?php echo esc_html( $wfs_t->name ); ?></a>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>

    <!-- Cuerpo a dos columnas: el articulo y lo que leer despues -->
    <div class="wfs-post__cols">
      <div class="wfs-post__main">
        <div class="wfs-prose"><?php the_content(); ?></div>
      </div>

      <?php
      /* "Mas lecturas" y no "populares": sin un plugin de estadisticas no
         sabemos que entrada es la mas leida, y poner esa etiqueta sin el dato
         seria inventarselo. Son las mas recientes, excluyendo esta. */
      $wfs_more = get_posts( array(
        'numberposts' => 3,
        'post__not_in' => array( get_the_ID() ),
        'post_status' => 'publish',
      ) );
      if ( $wfs_more ) : ?>
        <aside class="wfs-post__side">
          <h2 class="wfs-side__title">More reading</h2>
          <?php foreach ( $wfs_more as $wfs_p ) : ?>
            <article class="wfs-side-card">
              <a href="<?php echo esc_url( get_permalink( $wfs_p ) ); ?>">
                <?php if ( has_post_thumbnail( $wfs_p ) ) : ?>
                  <span class="wfs-side-card__media">
                    <?php echo get_the_post_thumbnail( $wfs_p, 'medium', array( 'loading' => 'lazy', 'decoding' => 'async', 'alt' => esc_attr( get_the_title( $wfs_p ) ) ) ); ?>
                  </span>
                <?php endif; ?>
                <span class="wfs-side-card__byline">
                  <?php echo esc_html( get_the_date( 'j M Y', $wfs_p ) ); ?>,
                  by <?php echo esc_html( get_the_author_meta( 'display_name', $wfs_p->post_author ) ); ?>
                </span>
                <span class="wfs-side-card__title"><?php echo esc_html( get_the_title( $wfs_p ) ); ?></span>
                <span class="wfs-side-card__excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt( $wfs_p ), 16 ) ); ?></span>
              </a>
              <?php $wfs_st = get_the_tags( $wfs_p->ID ); if ( $wfs_st ) : ?>
                <span class="wfs-side-card__tags">
                  <?php foreach ( array_slice( $wfs_st, 0, 2 ) as $wfs_t2 ) : ?>
                    <a class="wfs-tag wfs-tag--sm" href="<?php echo esc_url( get_tag_link( $wfs_t2 ) ); ?>"><?php echo esc_html( $wfs_t2->name ); ?></a>
                  <?php endforeach; ?>
                </span>
              <?php endif; ?>
            </article>
          <?php endforeach; ?>
        </aside>
      <?php endif; ?>
    </div>
  </div>

  <!-- Cierre al ancho del contenido, como la portada: toda entrada acaba
       ofreciendo cotizacion. Un blog que no lleva a ningun sitio es trafico
       que se pierde. -->
  <div class="container container--article">
    <aside class="wfs-post__cta">
      <span class="wfs-kicker">Need material for this?</span>
      <p class="wfs-post__cta-title display">Get a quote in 24 hours.</p>
      <div class="wfs-post__cta-actions">
        <a class="btn btn-primary" href="estimate.html">Request a Quote</a>
        <a class="btn btn-ghost on-dark" href="tel:2396895496">Call (239) 689-5496</a>
      </div>
    </aside>
  </div>
</article>

<?php
endwhile;
get_template_part( 'parts/blog-foot' );
