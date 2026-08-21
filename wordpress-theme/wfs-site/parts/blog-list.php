<?php
/**
 * Rejilla, paginacion y estado vacio.
 *
 * La paginacion la pinta WordPress a partir de la consulta real, asi que en una
 * categoria pagina esa categoria y no el blog entero, y no aparece cuando solo
 * hay una pagina. Antes salia siempre, con el total sin filtrar.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( have_posts() ) : ?>
  <div class="wfs-post-grid">
    <?php while ( have_posts() ) : the_post(); get_template_part( 'parts/blog-card' ); endwhile; ?>
  </div>

  <?php
  $wfs_links = paginate_links( array( 'type' => 'array', 'prev_text' => '← Prev', 'next_text' => 'Next →' ) );
  if ( $wfs_links && count( $wfs_links ) > 1 ) : ?>
    <nav class="wfs-pagination" aria-label="Blog pages">
      <?php foreach ( $wfs_links as $wfs_l ) { echo wp_kses_post( $wfs_l ); } ?>
    </nav>
  <?php endif; ?>

<?php else : ?>
  <div class="wfs-empty">
    <span class="wfs-kicker">Nothing here yet</span>
    <p>
      <?php if ( is_search() ) : ?>
        No articles match “<?php echo esc_html( get_search_query() ); ?>”.
        <a href="<?php echo esc_url( wfs_blog_url() ); ?>">See all articles</a>.
      <?php elseif ( is_category() ) : ?>
        Nothing published in this category yet.
        <a href="<?php echo esc_url( wfs_blog_url() ); ?>">See all articles</a>.
      <?php else : ?>
        The first article will show up here as soon as it goes live.
      <?php endif; ?>
    </p>
  </div>
<?php endif;
