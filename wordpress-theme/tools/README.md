# Preview estático del blog

Genera `blog.html` y una página por entrada en la raíz del repo, para poder ver
el blog en el preview de GitHub Pages **antes** de instalarlo en WordPress.

```bash
cd wordpress-theme/tools
SRC=../theme-src OUT=../.. php build.php
```

Renderiza las plantillas reales (`home.php`, `single.php`) sustituyendo las
funciones de WordPress, así que **lo que se ve es exactamente lo que sirve el
tema**: si una plantilla se rompe, se rompe aquí también.

El contenido de muestra está en `posts.php` y sale del propio sitio (código de
piscinas, comparativa de materiales, fabricación de portones). Si a marketing le
sirve alguno, puede publicarlo tal cual.
