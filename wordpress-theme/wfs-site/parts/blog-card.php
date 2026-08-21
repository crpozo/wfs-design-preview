<?php
/** Tarjeta de entrada. Compartida por el indice, las categorias y la busqueda. */
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
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
      <span class="wfs-post-card__more">Learn more <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10m0 0L9 4m4 4l-4 4"/></svg></span>
    </span>
  </a>
</article>
