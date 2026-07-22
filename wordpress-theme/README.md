# Western Fence Supply — Tema de WordPress (`wfs-theme.zip`)

Tema propio, **sin Elementor y sin plugins**. Se sube como cualquier tema, se activa y
se edita con el **editor visual nativo de WordPress** (Apariencia → Editor).

## Instalación (2 minutos)

1. **Apariencia → Temas → Añadir nuevo → Subir tema**
2. Sube **`wfs-theme.zip`** → **Instalar ahora** → **Activar**
3. Listo. La portada ya trae hero, presentación, ventajas, materiales y CTA.

> Requiere WordPress **6.4 o superior** (para el editor de sitio completo).
> No necesitas tema padre ni ningún plugin.

## Cómo se edita

| Qué quieres cambiar | Dónde |
|---|---|
| Textos, fotos, botones de una página | **Páginas → Editar** (editor normal) |
| Portada, cabecera, pie, plantillas | **Apariencia → Editor** |
| Colores, tipografías, tamaños de todo el sitio | **Apariencia → Editor → Estilos** |
| Menú de navegación | **Apariencia → Editor → Navegación** |
| Logo y nombre del sitio | **Apariencia → Editor** → clic en el logo/título |

Todo es arrastrar bloques, escribir encima y cambiar imágenes con un clic — igual que
Elementor pero con el editor que ya trae WordPress.

## Secciones listas para insertar (patrones)

Al editar cualquier página: botón **+** → pestaña **Patrones** → categoría
**Western Fence Supply**.

| Patrón | Qué es |
|---|---|
| Hero | Titular sobre foto con dos botones |
| Intro | Foto + texto + datos (20+ años, 2 sucursales) |
| Ventajas | 4 tarjetas redondeadas con sombra |
| Materiales | Rejilla de los 5 sistemas con foto |
| Tabla comparativa | Comparativa con foto por columna |
| Código de piscinas | 6 requisitos con sus diagramas |
| CTA | Banda navy de cierre |
| Cotizar | Datos de contacto + formulario embebido |

Para armar una página nueva: créala, elige la plantilla **“Página ancha (sin título)”**
en Ajustes de página, e inserta los patrones que quieras.

## Sistema de diseño

Ya viene cargado en **Estilos**, así que si cambias un color ahí, cambia en todo el sitio:

| Token | Valor |
|---|---|
| Navy (marca) | `#263167` |
| Naranja (marca) | `#ff7133` |
| Gris texto | `#565656` |
| Fondo claro | `#f5f5f7` |
| Títulos | Archivo |
| Texto | Inter |

Incluye también: tarjetas con esquinas de 18px y sombra suave, botones pill que se
ponen naranjas al pasar el mouse, y el piso de legibilidad (nada de letra diminuta).

## Formulario de cotización

El patrón **Cotizar** trae un `<iframe>` con tu formulario de **JotForm**, que ya maneja
el **campo de archivo para el plano/layout** sin instalar nada.

Para apuntarlo a otro formulario: edita la página → bloque **HTML personalizado** →
cambia la URL del `src`.

Si algún día prefieres un formulario nativo, instala el plugin de formularios que
quieras y pega su shortcode en ese mismo bloque; los estilos (`.wfs-form`) ya están.

## Imágenes

Las fotos apuntan por URL al sitio de preview
(`https://crpozo.github.io/wfs-design-preview/assets/...`), así que el tema funciona
apenas lo activas, sin subir nada.

> Para producción conviene subirlas a **Medios** y reemplazarlas desde el editor
> (clic en la imagen → Reemplazar), y así no depender del dominio de preview.

## Estructura

```
wfs/
├── style.css        Cabecera del tema + utilidades (tarjetas, eyebrow, tabla, formulario)
├── theme.json       Sistema de diseño: colores, tipografías, tamaños, sombras
├── functions.php    Carga de fuentes y categoría de patrones
├── templates/       Portada, página, entrada, 404, índice, página ancha
├── parts/           Cabecera y pie
└── patterns/        Las 8 secciones reutilizables
```
