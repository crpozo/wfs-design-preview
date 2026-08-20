<?php
/**
 * Indice del blog. Lista las entradas que marketing publica desde WordPress.
 * Se pinta en PHP, no en React, para que sea rastreable sin ejecutar nada.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_template_part( 'parts/blog-head' );
$wfs_blog_id = (int) get_option( 'page_for_posts' );
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
    <?php
    /* Los filtros salen de las categorias que existen, no de una lista fija.
       El filtrado es del lado del cliente sobre tarjetas ya renderizadas: el
       HTML sigue trayendo todas las entradas, asi que Google las ve igual. */
    $wfs_cats = get_categories( array( 'hide_empty' => true ) );
    ?>
    <div class="wfs-toolbar">
      <label class="wfs-search">
        <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="9" cy="9" r="6"/><path d="M13.5 13.5 18 18"/></svg>
        <input type="search" id="wfs-q" placeholder="Search articles…" autocomplete="off" />
      </label>
      <?php if ( $wfs_cats ) : ?>
        <div class="wfs-chips" role="group" aria-label="Filter by category">
          <button class="wfs-chip is-on" data-cat="">All articles</button>
          <?php foreach ( $wfs_cats as $wfs_c ) : ?>
            <button class="wfs-chip" data-cat="<?php echo esc_attr( $wfs_c->slug ); ?>"><?php echo esc_html( $wfs_c->name ); ?></button>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>
    </div>

    <?php if ( have_posts() ) : ?>
      <div class="wfs-post-grid" id="wfs-posts">
        <?php while ( have_posts() ) : the_post(); ?>
          <?php
          $wfs_pc   = get_the_category();
          $wfs_slug = $wfs_pc && ! empty( $wfs_pc[0]->slug ) ? $wfs_pc[0]->slug : '';
          ?>
          <article class="wfs-post-card" data-cat="<?php echo esc_attr( $wfs_slug ); ?>"
                   data-text="<?php echo esc_attr( strtolower( get_the_title() . ' ' . wp_strip_all_tags( get_the_excerpt() ) ) ); ?>">
            <a class="wfs-post-card__link" href="<?php the_permalink(); ?>">
              <?php if ( has_post_thumbnail() ) : ?>
                <span class="wfs-post-card__media">
                  <?php the_post_thumbnail( 'large', array( 'loading' => 'lazy', 'decoding' => 'async', 'alt' => esc_attr( get_the_title() ) ) ); ?>
                </span>
              <?php endif; ?>
              <span class="wfs-post-card__body">
                <span class="wfs-kicker"><?php echo esc_html( wfs_post_kicker() ); ?></span>
                <span class="wfs-post-card__title"><?php the_title(); ?></span>
                <span class="wfs-post-card__excerpt"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 26 ) ); ?></span>
                <span class="wfs-post-card__meta">
                  <?php echo esc_html( get_the_date( 'M j, Y' ) ); ?> ·
                  <?php echo esc_html( wfs_read_time() ); ?>
                </span>
                <span class="wfs-post-card__more">Learn more <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10m0 0L9 4m4 4l-4 4"/></svg></span>
              </span>
            </a>
          </article>
        <?php endwhile; ?>
      </div>

      <?php
      /* Paginacion propia: la de WordPress trae su propio marcado y desentona. */
      $wfs_links = paginate_links( array( 'type' => 'array', 'prev_text' => '← Prev', 'next_text' => 'Next →' ) );
      if ( $wfs_links ) :
      ?>
        <nav class="wfs-pagination" aria-label="Blog pages">
          <?php foreach ( $wfs_links as $wfs_l ) { echo wp_kses_post( $wfs_l ); } ?>
        </nav>
      <?php endif; ?>

      <p class="wfs-noresults" id="wfs-noresults" hidden>No articles match that search.</p>

    <?php else : ?>
      <div class="wfs-empty" id="wfs-empty-real">
        <span class="wfs-kicker">Nothing published yet</span>
        <p>The first article will show up here as soon as it goes live.</p>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php get_template_part( 'parts/blog-foot' ); ?>
