# Western Fence Supply — Sistema de diseño

Extraído del sitio real (`styles.css` + los 21 componentes). Todo lo que hay aquí
son valores que ya están en producción, no una propuesta.

Si copias solo tres cosas, que sean estas: **la tipografía display extendida**,
**la sombra dura naranja sin desenfoque**, y **los kickers en mayúsculas con
tracking muy abierto**. Son las que hacen que se reconozca la marca.

---

## 1. Tipografías

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,300..900&family=Inter:wght@300;400;500;600;700&display=swap">
```

| Rol | Familia | Uso |
|---|---|---|
| Display | Archivo (variable, eje `wdth` 62–125) | Titulares, cifras grandes |
| Cuerpo / UI | Inter | Párrafos, botones, formularios |
| "Mono" | Inter | Kickers, etiquetas, metadatos |

**Archivo se usa siempre en `wdth 125`**, el extremo extendido de su eje. Es lo
que imita a *Mirano Extended* (comercial, sin licenciar) y lo que casa con el
rótulo del local. Sin esa línea, los titulares pierden el carácter.

> `--mono` **no es monoespaciada**: apunta a Inter. El nombre es histórico. Lo que
> distingue a un "mono" es el tracking abierto y las mayúsculas, no la familia.

---

## 2. Tokens

```css
:root {
  /* Primarios */
  --laser-blue:  #2e59c1;
  --indigo-blue: #263166;
  --alice-blue:  #dbe9ee;
  /* Secundarios */
  --blue-ice:    #97baff;
  --glaucous:    #6381d6;
  --silver:      #c1c1c1;
  --charcoal:    #565656;
  /* Terciarios (acento) */
  --tangerine:   #ff7133;
  --coral:       #ffa180;
  /* Neutros */
  --white:       #ffffff;
  --almond:      #e5d8ca;
  --ink:         #263167;

  --display: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --sans:    'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --mono:    var(--sans);
  --body:    var(--sans);

  --radius:    14px;
  --radius-lg: 22px;
  --max:       1440px;
  --pad:       clamp(20px, 4vw, 56px);
}
```

### Cómo se reparten los colores

- **`--ink` (#263167)** es el color por defecto de *todo* el texto y el fondo de
  las secciones oscuras. Es el color base, no el negro.
- **`--tangerine` (#ff7133)** es el único acento. Aparece en: la segunda línea de
  los titulares, los kickers, la sombra dura, los botones primarios y los iconos
  de descarga. **No lo uses para texto largo.**
- **`--charcoal` (#565656)** para texto secundario y descripciones.
- Sobre fondo oscuro, el texto secundario va en `rgba(255,255,255,0.85)` y los
  bordes en `rgba(255,255,255,0.5)`.

---

## 3. Tipografía aplicada

### Las dos clases display

```css
.display {
  font-family: var(--display);
  font-variation-settings: 'wdth' 125;
  font-weight: 700;
  letter-spacing: -0.005em;
  text-transform: capitalize;
  line-height: 0.92;
}
.display-extended {
  font-family: var(--display);
  font-variation-settings: 'wdth' 125;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
  line-height: 0.9;
}
```

`line-height` por debajo de 1 es intencionado: los titulares van muy apretados
en vertical. No lo subas a 1.2 o pierde la contundencia.

### Escala

| Uso | `font-size` | Notas |
|---|---|---|
| H1 de héroe | `clamp(34px, 4.2vw, 56px)` | `wdth 125`, peso 800, mayúsculas, `letter-spacing: -0.02em` |
| Titular de sección | `clamp(28px, 3vw, 40px)` | El más repetido del sitio (11 usos) |
| Cifra grande / stat | `clamp(28px, 3vw, 40px)` | Clase `.display` |
| Título de tarjeta | `20.5px` – `23.5px` | Peso 600–700 |
| Cuerpo | `15.5px` / `16px` | `line-height: 1.55` |
| Descripción secundaria | `14.5px` | Color `--charcoal` |
| Kicker / etiqueta | `13px` – `14px` | Ver abajo |

### El kicker (la etiqueta en mayúsculas)

Es el elemento más repetido del sitio. Va encima de casi todo:

```css
.kicker {
  font-family: var(--mono);
  font-size: 13.5px;
  font-weight: 700;
  letter-spacing: 0.22em;   /* 0.18em en versiones más anchas */
  text-transform: uppercase;
  color: var(--tangerine);  /* o --charcoal si es metadato */
}
```

Los valores de tracking que usa el sitio, por frecuencia: **`0.18em`** (71 usos),
`0.22em` (47), `0.14em` (28), `0.16em` (24). Por debajo de `0.14em` deja de leerse
como kicker.

---

## 4. Layout

```css
.container {
  max-width: var(--max);   /* 1440px */
  margin: 0 auto;
  padding: 0 var(--pad);   /* clamp(20px, 4vw, 56px) */
}
```

**Ritmo vertical:** cada sección lleva `padding: 120px 0`. Es el valor
dominante del sitio (54 usos). Alternar fondo blanco / `--ink` entre secciones
consecutivas es lo que marca la separación; evita dos oscuras seguidas.

**Rejillas habituales:** `repeat(2, 1fr)` para listados y `repeat(3, 1fr)` para
tarjetas, con `gap` de 14–18px.

### Breakpoints

```css
@media (max-width: 1024px) { }
@media (max-width:  900px) { }   /* el principal: 2 col -> 1 */
@media (max-width:  640px) { }   /* móvil */
```

---

## 5. Componentes

### Botón

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px;
  border-radius: 2px;        /* casi recto, a propósito */
  font-family: var(--sans);
  font-weight: 500;
  font-size: 16.5px;
  letter-spacing: 0.01em;
  white-space: nowrap;
  transition: transform .15s ease, background .2s ease, color .2s ease;
}
.btn:hover { transform: translateY(-1px); }

.btn-primary { background: var(--tangerine); color: var(--ink); }
.btn-dark    { background: var(--ink);       color: #fff; }
.btn-dark:hover { background: var(--indigo-blue); }
.btn-light   { background: #fff;             color: var(--ink); }

/* Fantasma: hereda el color del contexto, se invierte al pasar */
.btn-ghost   { color: inherit; border: 1px solid currentColor; padding: 14px 20px; }
.btn-ghost:hover { background: currentColor; color: #fff !important; }
.btn-ghost.on-dark:hover { color: var(--ink) !important; }
```

`border-radius: 2px` es deliberado. El sitio **no** usa esquinas redondeadas en
botones ni tarjetas; los tokens `--radius` existen pero apenas se usan.

### Tarjeta con sombra dura

La firma visual del sitio: borde fino, sin redondeo, y una sombra **sólida
naranja sin desenfoque** que aparece al pasar el ratón.

```css
.card {
  background: #fff;
  border: 1.5px solid var(--ink);
  padding: 22px 24px;
  transition: transform .18s ease, box-shadow .18s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 6px 6px 0 var(--tangerine);
}
```

El desplazamiento de la sombra escala con el tamaño del bloque: **6px** en
tarjetas de lista, **10–12px** en paneles grandes. Siempre en `--tangerine` y
siempre con blur `0`.

### Cabecera de sección

Dos columnas: titular a la izquierda, descripción alineada a la derecha, y una
línea fina debajo.

```html
<div class="section-header">
  <h2 class="display">Ready To Spec Your<br><span class="accent">Fence Order?</span></h2>
  <div class="right">
    <p>Descripción corta, máximo 380px de ancho.</p>
    <a class="more" href="#">VER TODO →</a>
  </div>
</div>
```

```css
.section-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: end;
  padding-bottom: 24px;
  margin-bottom: 28px;
  border-bottom: 1px solid rgba(0,16,17,.12);
}
.section-header h2 {
  margin: 0;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 800;
}
.section-header .accent { color: var(--tangerine); }
.section-header .right  { display: flex; flex-direction: column; align-items: flex-end; gap: 18px; }
.section-header p       { margin: 0; max-width: 380px; font-size: 15.5px; line-height: 1.55; color: var(--charcoal); text-align: right; }
.section-header .more   {
  font-family: var(--mono); font-size: 14px; font-weight: 700;
  letter-spacing: .22em; text-transform: uppercase;
  color: var(--ink); border-bottom: 1px solid var(--ink); padding-bottom: 4px;
}
@media (max-width: 900px) {
  .section-header { grid-template-columns: 1fr; }
  .section-header .right { align-items: flex-start; }
  .section-header p { text-align: left; }
}
```

**El titular parte en dos líneas y la segunda va en naranja.** Ese corte es el
patrón, no un accidente: *"The Full Library," / "Filtered Or Browsed."*

---

### Formularios

Aquí hay una incoherencia real del sitio que conviene respetar, no "arreglar":
**los campos sí llevan redondeo (`12px`) aunque los botones vayan a `2px`.**

```css
.field label {
  display: block; margin-bottom: 10px;
  font-family: var(--mono); font-size: 14.5px;
  letter-spacing: .12em; text-transform: uppercase; color: var(--charcoal);
}
.field input, .field select, .field textarea {
  width: 100%; padding: 15px 16px;
  border: 1px solid rgba(0,16,17,.16);
  border-radius: 12px;
  font-family: var(--sans); font-size: 16.5px; color: var(--ink);
  outline: none; transition: border-color .18s ease;
}
.field input:focus { border-color: var(--tangerine); }
```

`font-size: 16.5px` en los campos no es estético: por debajo de 16px, Safari en
iOS hace zoom al enfocar un input. No lo bajes.

### Opciones seleccionables

Dos variantes, según el peso de la decisión. El estado se marca con
`aria-pressed`, así el CSS y el lector de pantalla dicen lo mismo.

```css
/* Chip: para elegir entre pocas opciones cortas */
.choice { border: 1.5px solid var(--ink); background: #fff; color: var(--ink);
  padding: 12px 18px; font-family: var(--mono); font-size: 14px; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase; cursor: pointer; }
.choice[aria-pressed="true"] { background: var(--ink); color: #fff; }

/* Tarjeta: para elegir entre opciones que necesitan explicación */
.pick { width: 100%; text-align: left; background: #fff;
  border: 1.5px solid var(--ink); padding: 24px; cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease; }
.pick:hover,
.pick[aria-pressed="true"] { transform: translateY(-3px); box-shadow: 6px 6px 0 var(--tangerine); }
```

La tarjeta seleccionada usa **la misma sombra dura que el hover**. Es coherente:
en este sistema "elegido" y "señalado" se ven igual.

### Imágenes

```css
.media {
  display: block;          /* si lo pones en un <span> y omites esto, colapsa a 0 */
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;     /* las fotos de producto del sitio son verticales */
  background: var(--alice-blue);
}
.media img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform .6s ease;
}
.pick:hover .media img { transform: scale(1.1); }
.media--wide { aspect-ratio: 16 / 9; }
.media__scrim {                      /* solo si va texto blanco encima */
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(38,49,103,0) 40%, rgba(38,49,103,.72) 100%);
}
```

El zoom es **lento a propósito**: `0.6s`, frente a los `0.18s` del resto de
interacciones. Es el único movimiento pausado del sistema.

`aspect-ratio` en el marco reserva el hueco antes de que cargue la foto, así que
no hay salto de maquetación. El fondo `--alice-blue` es lo que se ve mientras
tanto.

> **Cuidado con el peso.** Las fotos de producto del sitio pesan entre 200 y 500 KB
> cada una. En una fila de cinco tarjetas de 220px eso es casi 2 MB para mostrar
> imágenes de miniatura, y se ven aparecer una a una. Si reutilizas este patrón,
> sirve versiones redimensionadas. Y **no pongas `loading="lazy"` en lo que se ve
> al entrar**: retrasa justo lo que el visitante está mirando.

### Indicador de pasos

```css
.steps { display: flex; gap: 10px; align-items: center; }
.steps .dot { font-family: var(--mono); font-size: 13px; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase; color: var(--silver); }
.steps .dot.on { color: var(--ink); }
.steps .bar { flex: 1; max-width: 60px; height: 2px; background: rgba(0,16,17,.12); }
.steps .bar.on { background: var(--tangerine); }
```

---

## 6. Interacción

| Elemento | Hover |
|---|---|
| Botón | `translateY(-1px)` |
| Tarjeta | `translateY(-3px)` + sombra dura `6px 6px 0` |
| Panel grande | `translateY(-4px)` + sombra dura `12px 12px 0` |
| Botón sobre oscuro | fondo `rgba(255,255,255,.18)`, borde a blanco |
| Botón naranja | `0 12px 32px rgba(255,113,51,.45)` (única sombra con blur) |

Duraciones: **`.18s`** para tarjetas, **`.15s`–`.2s`** para botones, siempre
`ease`. Nada más lento que `.3s`.

---

## 7. Base para copiar

> **`design-system/example.html`** es un flujo completo funcionando
> (elegir material → ver características → responder → resumen) construido solo
> con este CSS. Si el documento dejara de bastar, esa página dejaría de
> parecerse al sitio y se nota enseguida.


```css
*, *::before, *::after { box-sizing: border-box; }
body {
  margin: 0;
  font-family: var(--sans);
  color: var(--ink);
  background: #fff;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
h1, h2, h3, h4, h5, h6 { font-family: var(--display); font-variation-settings: 'wdth' 125; }
p { font-family: var(--body); line-height: 1.55; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
img, video { max-width: 100%; display: block; }
```

### Esqueleto de página

```html
<section style="background:#fff; padding:120px 0">
  <div class="container">
    <div class="section-header">…</div>
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:18px">
      <article class="card">…</article>
    </div>
  </div>
</section>

<section style="background:var(--ink); color:#fff; padding:120px 0">
  <div class="container">…</div>
</section>
```

---

## 8. Errores a evitar

Cosas que se probaron en este sitio y se retiraron:

- **Redondear esquinas.** Botones a `2px`, tarjetas a `0`. Con redondeo pierde el
  aire industrial.
- **Sombras difusas en tarjetas.** La sombra es sólida y desplazada. La única con
  blur es la del botón naranja.
- **Una tercera tipografía.** Hubo Space Grotesk además de Archivo e Inter y
  desentonaba. Ahora son dos, y `--mono` apunta a Inter a propósito.
- **Dos secciones oscuras seguidas.** Se ve pesado; hay que alternar.
- **`line-height` normal en titulares.** Van a 0.9–1.0.
- **Guiones largos en el texto.** Se sustituyeron todos por comas: delatan texto
  generado.
