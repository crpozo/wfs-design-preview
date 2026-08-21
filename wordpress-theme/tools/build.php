<?php
$GLOBALS['SRC'] = getenv('SRC');
$OUT = getenv('OUT');
/* El cache-bust sale de un hash del propio CSS. Antes era un numero fijo, y al
   editar styles.css el navegador seguia sirviendo la version cacheada: se veia
   el marcado nuevo con los estilos viejos. */
$GLOBALS['CSSV'] = substr(md5_file("$OUT/styles.css"), 0, 8);
require __DIR__ . '/gen.php';

/* Cabecera del preview: mismos scripts que cualquier otra pagina estatica, con
   Babel, porque en el preview los componentes son .jsx sin compilar. */
function preview_head($title) {
  return '<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex,nofollow" />
<title>' . htmlspecialchars($title) . ' · Western Fence Supply, Design Preview</title>
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,300..900&family=Inter:wght@300;400;500;600;700&display=swap" />
<link rel="stylesheet" href="styles.css?v=' . $GLOBALS['CSSV'] . '" />
</head>
<body>
<div id="wfs-header"></div>
';
}
function preview_foot() {
  return '<div id="wfs-footer"></div>

<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>
<script type="text/babel" src="components/shared.jsx?v=' . $GLOBALS['CSSV'] . '"></script>
<script type="text/babel" src="components/site-header.jsx?v=' . $GLOBALS['CSSV'] . '"></script>
<script type="text/babel" src="components/page-blocks.jsx?v=' . $GLOBALS['CSSV'] . '"></script>
<script type="text/babel" src="components/sections.jsx?v=' . $GLOBALS['CSSV'] . '"></script>
<script type="text/babel" src="components/extras.jsx?v=' . $GLOBALS['CSSV'] . '"></script>
<script type="text/babel">
/* En el preview los componentes viven en el ambito del script, no en window,
   asi que se referencian directamente. En el tema lo hace apps/blog-shell.js. */
ReactDOM.createRoot(document.getElementById("wfs-header")).render(<SiteHeader active="Fence Education Hub" />);
ReactDOM.createRoot(document.getElementById("wfs-footer")).render(<Footer />);
</script>
</body>
</html>
';
}
function strip_shell($html) {
  /* El arnes ya no imprime los scripts del tema; solo hay que quitar la
     cabecera y el pie de PHP y quedarnos con el cuerpo. */
  $i = strpos($html, '<div id="wfs-header"></div>');
  $j = strpos($html, '<div id="wfs-footer"></div>');
  if ($i === false || $j === false) { return $html; }
  $i += strlen('<div id="wfs-header"></div>');
  return substr($html, $i, $j - $i);
}

/* Indice */
$GLOBALS['i'] = -1; $GLOBALS['ONLY'] = null;
ob_start(); include $GLOBALS['SRC'] . '/home.php'; $h = ob_get_clean();
file_put_contents("$OUT/blog.html", preview_head('Blog') . strip_shell($h) . preview_foot());
echo "  blog.html\n";

/* Una pagina por categoria, para que los filtros del preview lleven a algun
   sitio. En WordPress esto lo resuelve solo el archivo de categoria. */
$cats = [];
foreach ($GLOBALS['POSTS'] as $p) { $cats[strtolower(str_replace(' ','-',$p->cat))] = $p->cat; }
$id = 0;
foreach ($cats as $slug => $name) {
  $id++;
  $GLOBALS['CAT'] = $name; $GLOBALS['CATID'] = $id;
  $todos = $GLOBALS['POSTS'];
  $GLOBALS['POSTS'] = array_values(array_filter($todos, fn($p) => $p->cat === $name));
  $GLOBALS['i'] = -1; $GLOBALS['ONLY'] = null;
  ob_start(); include $GLOBALS['SRC'] . '/archive.php'; $h = ob_get_clean();
  file_put_contents("$OUT/blog-cat-$slug.html", preview_head($name) . strip_shell($h) . preview_foot());
  echo "  blog-cat-$slug.html\n";
  $GLOBALS['POSTS'] = $todos;
}
$GLOBALS['CAT'] = null; $GLOBALS['CATID'] = 0;

/* Una pagina por entrada */
foreach ($GLOBALS['POSTS'] as $n => $post) {
  $GLOBALS['ONLY'] = $n; $GLOBALS['i'] = -1;
  ob_start(); include $GLOBALS['SRC'] . '/single.php'; $h = ob_get_clean();
  $f = "$OUT/blog-{$post->post_name}.html";
  file_put_contents($f, preview_head($post->post_title) . strip_shell($h) . preview_foot());
  echo "  blog-{$post->post_name}.html\n";
}
