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
  <header class="wfs-post__head">
    <div class="container container--narrow">
      <a class="wfs-post__back" href="<?php echo esc_url( wfs_blog_url() ); ?>">← Blog</a>
      <span class="wfs-kicker"><?php echo esc_html( wfs_post_kicker() ); ?></span>
      <h1 class="display wfs-post__title"><?php the_title(); ?></h1>
      <p class="wfs-post__meta">
        <?php echo esc_html( get_the_date( 'F j, Y' ) ); ?> ·
        <?php echo esc_html( wfs_read_time() ); ?>
      </p>
    </div>
  </header>

  <?php if ( has_post_thumbnail() ) : ?>
    <div class="container container--narrow">
      <div class="wfs-post__cover">
        <?php the_post_thumbnail( 'full', array( 'decoding' => 'async', 'alt' => esc_attr( get_the_title() ) ) ); ?>
      </div>
    </div>
  <?php endif; ?>

  <div class="container container--narrow">
    <div class="wfs-prose"><?php the_content(); ?></div>

    <?php
    $wfs_tags = get_the_tags();
    if ( $wfs_tags ) : ?>
      <div class="wfs-post__tags">
        <?php foreach ( $wfs_tags as $wfs_t ) : ?>
          <a class="wfs-tag" href="<?php echo esc_url( get_tag_link( $wfs_t ) ); ?>"><?php echo esc_html( $wfs_t->name ); ?></a>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>

  <!-- Cierre: toda entrada acaba ofreciendo una cotizacion. Un blog que no
       lleva a ningun sitio es trafico que se pierde. -->
  <div class="container container--narrow">
    <aside class="wfs-post__cta">
      <span class="wfs-kicker wfs-kicker--on-dark">Need material for this?</span>
      <p class="wfs-post__cta-title display">Get a quote in 24 hours.</p>
      <div class="wfs-post__cta-actions">
        <a class="btn btn-primary" href="estimate.html">Request a Quote</a>
        <a class="btn btn-ghost on-dark" href="tel:2396895496">Call (239) 689-5496</a>
      </div>
    </aside>
  </div>

  <?php
  $wfs_prev = get_previous_post();
  $wfs_next = get_next_post();
  if ( $wfs_prev || $wfs_next ) : ?>
    <nav class="container container--narrow wfs-post__nav" aria-label="More articles">
      <?php if ( $wfs_prev ) : ?>
        <a class="wfs-post__nav-item" href="<?php echo esc_url( get_permalink( $wfs_prev ) ); ?>">
          <span class="wfs-kicker">Previous</span>
          <span><?php echo esc_html( get_the_title( $wfs_prev ) ); ?></span>
        </a>
      <?php else : ?><span></span><?php endif; ?>
      <?php if ( $wfs_next ) : ?>
        <a class="wfs-post__nav-item wfs-post__nav-item--next" href="<?php echo esc_url( get_permalink( $wfs_next ) ); ?>">
          <span class="wfs-kicker">Next</span>
          <span><?php echo esc_html( get_the_title( $wfs_next ) ); ?></span>
        </a>
      <?php endif; ?>
    </nav>
  <?php endif; ?>
</article>

<?php
endwhile;
get_template_part( 'parts/blog-foot' );
