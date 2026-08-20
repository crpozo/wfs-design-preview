<?php
/**
 * Categoria, etiqueta o archivo por fecha. Mismo listado que el indice, con el
 * titulo cambiado, para que un enlace de categoria no lleve a una pagina rota.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_template_part( 'parts/blog-head' );
$wfs_blog_id = (int) get_option( 'page_for_posts' );
?>

<section class="wfs-blog-hero">
  <div class="container">
    <a class="wfs-post__back" href="<?php echo esc_url( wfs_blog_url() ); ?>">← Blog</a>
    <span class="wfs-kicker"><?php echo esc_html( get_the_archive_title() ); ?></span>
    <h1 class="display-extended wfs-blog-hero__title">
      <?php echo esc_html( single_term_title( '', false ) ?: get_the_archive_title() ); ?>
    </h1>
    <?php $wfs_d = get_the_archive_description(); if ( $wfs_d ) : ?>
      <p class="wfs-blog-hero__sub"><?php echo wp_kses_post( $wfs_d ); ?></p>
    <?php endif; ?>
  </div>
</section>

<section class="wfs-blog-list">
  <div class="container">
    <?php if ( have_posts() ) : ?>
      <div class="wfs-post-grid">
        <?php while ( have_posts() ) : the_post(); ?>
          <article class="wfs-post-card">
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

    <?php else : ?>
      <div class="wfs-empty">
        <span class="wfs-kicker">Nothing published yet</span>
        <p>The first article will show up here as soon as it goes live.</p>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php get_template_part( 'parts/blog-foot' ); ?>
