<?php
/**
 * Buscador y filtros del blog.
 *
 * Los filtros son ENLACES a los archivos de categoria de WordPress, no un
 * filtrado en el navegador. El intento anterior filtraba en el cliente y no
 * componia con la paginacion: solo veia las entradas de la pagina actual, asi
 * que una categoria con entradas en la pagina 2 salia vacia, la paginacion
 * seguia mostrando el total sin filtrar y sus enlaces perdian el filtro.
 *
 * Con archivos reales todo eso lo resuelve WordPress: cuenta bien, pagina bien
 * y funciona sin JavaScript.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }

$wfs_cats = get_categories( array(
	'hide_empty' => true,
	/* Uncategorized es el cajon por defecto de WordPress: si aparece como
	   filtro, el visitante ve una categoria que no significa nada. */
	'exclude'    => array( (int) get_option( 'default_category' ) ),
) );
$wfs_actual = is_category() ? (int) get_queried_object_id() : 0;
$wfs_busca  = is_search() ? get_search_query() : '';
?>
<div class="wfs-toolbar">
  <form class="wfs-search" role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="9" cy="9" r="6"/><path d="M13.5 13.5 18 18"/></svg>
    <input type="search" name="s" value="<?php echo esc_attr( $wfs_busca ); ?>" placeholder="Search articles…" aria-label="Search articles" />
    <input type="hidden" name="post_type" value="post" />
  </form>

  <?php if ( $wfs_cats ) : ?>
    <nav class="wfs-chips" aria-label="Filter by category">
      <a class="wfs-chip<?php echo ( ! $wfs_actual && ! $wfs_busca ) ? ' is-on' : ''; ?>"
         href="<?php echo esc_url( wfs_blog_url() ); ?>">All articles</a>
      <?php foreach ( $wfs_cats as $wfs_c ) : ?>
        <a class="wfs-chip<?php echo ( $wfs_actual === (int) $wfs_c->term_id ) ? ' is-on' : ''; ?>"
           href="<?php echo esc_url( get_category_link( $wfs_c ) ); ?>"><?php echo esc_html( $wfs_c->name ); ?></a>
      <?php endforeach; ?>
    </nav>
  <?php endif; ?>
</div>
