# Western Fence Supply — Tema de WordPress (`wfs-site-4.10.0.zip`)

Este tema **no reconstruye** el sitio: **lo sirve tal cual**. Adentro van los mismos
componentes, el mismo `styles.css` y el mismo código React del preview de GitHub, así
que el resultado en WordPress es idéntico al de
`https://crpozo.github.io/wfs-design-preview/`.

## Por qué se cambió el enfoque

El primer intento tradujo el diseño a bloques de Gutenberg y se perdía todo. La razón,
medida sobre el código:

| Dónde vive el diseño | Cantidad |
|---|---|
| Estilos inline dentro de los componentes React | **1.355** |
| Reglas en `styles.css` | 210 |

Es decir, **el 87% del diseño está en los componentes**, no en la hoja de estilos. Un
tema de bloques no puede expresar eso: obliga a reinterpretar cada sección a mano, y ahí
es donde se perdían las sombras, los espaciados, el video del hero, el mapa, el carrusel
y los acordeones.

Con este enfoque no hay reinterpretación posible, porque es literalmente el mismo código.

## Verificación

Las dos versiones se midieron con el mismo ancho de ventana (800px):

| | Preview GitHub | Tema WordPress |
|---|---|---|
| Alto total de la página | 12.588 px | **12.588 px** |
| Secciones | 12 | **12** |
| Alturas por sección | `392, 1071, 1364, 0, 531, 891, 1364, 0, 648, 1140, 1658, 2140` | **idénticas** |
| Videos | 2 | **2** |
| Imágenes | 75 | **75** |

Las 29 páginas del sitio renderizan, y los 72 enlaces internos quedan apuntando a
WordPress (0 sin mapear), conservando anclas como `#quote` y `#contact`.

## Instalación

1. **Apariencia → Temas → Añadir nuevo → Subir tema**
2. Sube `wfs-site-4.10.0.zip` → **Instalar ahora** → **Activar**
3. Al activarlo, el tema **crea solo las 29 páginas** y fija la portada.
   (Un tema aporta plantillas, no páginas — por eso antes salían 404.)

Requiere WordPress 5.6+. Sin tema padre, sin Elementor, sin plugins.

## Formularios

Los tres formularios del sitio (cotización, contacto y garantía) **envían de verdad**.
Antes no: mostraban "gracias" y no salía nada.

Cada envío llega a:

- **antonello@westernfencesupply.com** (en Para)
- **crm+A1AN6482169aaf302a7fe4.ls.32@bcc.marketing360.com** (copia oculta, Marketing 360)
- **crm+A1AN6482169aaf302a7fe4.ls.34@bcc.marketing360.com** (copia oculta, Marketing 360)
- **marketing360+A1AN6482169aaf302a7fe4@bcc.mad360.net** (copia oculta, Marketing 360)

El `Reply-To` es el correo del cliente, así que se le responde directo desde el correo.
El plano o las fotos viajan como adjunto.

Cada envío **también queda guardado** en WordPress (menú **Leads**), así que aunque el
correo falle el lead no se pierde.

Para cambiar los destinatarios: **Ajustes → Escritura → Destinatarios de formularios**
(uno por línea; el primero va en Para, los demás en copia oculta).

> **Importante para que lleguen:** WordPress envía con `wp_mail`, que por defecto usa el
> correo del servidor y suele terminar en spam. Hay que conectar **Amazon SES** con un
> plugin SMTP y verificar el dominio (SPF + DKIM). Sin eso los correos pueden no llegar.

### Formato del correo

```
Name:
Marisol Rivera
_________________________________________________________________________

Phone Number:
(239) 555-0142
_________________________________________________________________________

…

Form Submission Information:
Form:
Material Quote Request
Page:
https://westernfencesupply.com/estimate/
Date of Submission:
July 23, 2026
Time of Submission
8:15 am EDT
_________________________________________________________________________
```

## Fichas tecnicas (/specs/)

La biblioteca estaba **sin configurar**: 14 fichas inventadas, con tamanos y
fechas de revision falsos, y todas con `href="#"`. No descargaba nada.

Ahora sirve **26 documentos reales de aluminio**, en `assets/specs/`:

| Familia | Docs |
|---|---|
| Paneles | 7 |
| Portones | 12 |
| Postes | 6 |
| Set completo (6 paginas) | 1 |

El titulo, la medida, el peso y el numero de paginas de cada ficha **se generan
desde el propio PDF**, no se escriben a mano, asi que no se pueden
desincronizar del archivo.

### Los planos venian rotados

Paneles y portones (19 de 26) abrian de lado: el dibujo estaba girado 90 grados
dentro de una pagina vertical. Se corrigio con `/Rotate` sobre la pagina, que
solo cambia la orientacion de visualizacion, sin tocar el dibujo ni las cotas.
Los postes ya venian bien y no se tocaron.

### Anadir mas materiales

1. Dejar los PDF en `assets/specs/` y en `wordpress-theme/theme-src/assets/specs/`
2. Anadir la entrada al array `docs` de `SpecsLibrary` en `components/page-warranty.jsx`
3. Regenerar el tema

Los PDF viajan **dentro del zip** (como el catalogo), porque la URL de una
descarga queda a la vista y no debe depender del preview de GitHub.

## Odoo CRM

Cada lead se copia tambien a Odoo (`crm.lead`), con sus adjuntos.

Es **fire-and-forget**: la peticion sale sin bloquear (`blocking => false`), asi
que si Odoo esta caido o tarda, el visitante no espera y el flujo normal del
sitio (lead guardado en WordPress + correos) sigue igual. El precio de eso es
que **no se entera si Odoo rechaza el envio**: para comprobar que llega hay que
mirarlo en Odoo.

Si las dos constantes no estan definidas, la funcion no hace nada. Por eso el
tema se puede instalar antes de tocar `wp-config.php` sin romper nada.

### Lo que hay que anadir a mano en `wp-config.php`

Va **encima** de `/* That's all, stop editing! Happy publishing. */`:

```php
define( 'WFS_ODOO_LEAD_URL', 'https://reachconcept-westernfencesupply.odoo.com/wfs/v1/crm_lead' );
define( 'WFS_ODOO_LEAD_KEY', '...' );
```

La clave no va en el repo ni en el zip a proposito: es una credencial, y el zip
es publico.

### Payload

```json
{
  "name": "...", "email": "...", "phone": "...",
  "form": "quote",
  "url": "https://westernfencesupply.com/estimate/",
  "attachments": [
    { "filename": "sketch.png", "content_base64": "...", "mime_type": "image/png" }
  ]
}
```

Se manda con la cabecera `X-WFS-Key`. Los campos del formulario van planos en la
raiz del objeto, mas `form` y `url`.

> Los adjuntos se aceptan hasta 20 MB cada uno, y en base64 crecen un tercio:
> un plano de 20 MB sale como ~27 MB de JSON. Si Odoo tiene limite de tamano de
> peticion, ahi es donde se va a notar.

## Telefonos y rastreo de llamadas

Los numeros se muestran **sin el prefijo `+1`**, con el formato que espera el
rastreador de Marketing 360 para sustituirlos:

```
(239) 689-5496     Fort Myers
(941) 623-6890     Port Charlotte
```

Los `href="tel:"` **no** cambiaron: siguen en digitos puros, que es lo que marca
el telefono al pulsarlos.

### El candado quedo apagado

Antes el tema **revertia** cualquier sustitucion de numeros, porque el numero
cambiaba entre recargas y se veia el parpadeo. Eso tambien anulaba la
atribucion de llamadas, que es justo lo que marketing necesita. Desde la 4.7.0
el candado **no corre**: los rastreadores mandan.

Consecuencia normal y esperada: el numero visible puede cambiar entre visitas, y
en la primera carga puede verse un instante el real antes del de rastreo. No es
un error del tema.

Para volver a fijar los numeros reales, en `wp-config.php`:

```php
define( 'WFS_LOCK_PHONE_NUMBERS', true );
```

## Tipografia de los titulos

Los titulos usan la variable `--display`. Un solo sitio manda sobre todos.

### Mirano Extended no viene incluida

Es una fuente **comercial de Unio Creative Solutions**, y la licencia **web** se
compra aparte de la de escritorio. No puede viajar en el repo ni en el zip: un
`@font-face` deja el `.woff2` descargable para cualquier visitante, que es justo
lo que la licencia prohibe redistribuir.

Lo que circula gratis (Fontesk, Befonts, unblast, freefontdl) es un peso suelto
*"Freebie Light"* de uso personal, o una copia sin licencia. Ninguno cubre un
sitio comercial.

Donde se compra la licencia web:

- MyFonts: https://www.myfonts.com/products/var-mirano-extended-1110759
- Creative Market: https://creativemarket.com/UnioDesigns/292039530-Mirano-Extended-Variable

### Mientras tanto: Archivo en su eje ancho

Archivo ya se carga y es variable, con eje de ancho `wdth 62..125`. Los titulos
van a **`wdth 125`**, el extremo extendido, que es lo mas parecido a Mirano sin
pagar nada ni pedir un archivo mas.

Antes esto estaba a medias: las clases `.display` iban a 125, pero los cinco
titulares de heroe se pisaban a `wdth 100`. Ahora los 29 paginas van a 125.

### Como activar la real

1. Dejar los `.woff2` licenciados en la carpeta `fonts/` del tema, con estos
   nombres exactos:

```
MiranoExtended-Regular.woff2
MiranoExtended-Bold.woff2
```

2. Nada mas. `wfs_font_face()` los detecta, emite el `@font-face` y precarga la
   negrita (es el titular del heroe, o sea el LCP). Todos los titulos cambian de
   golpe porque todos salen de `--display`.

Sin archivos **no imprime nada**, asi que no se pide un 404 en cada carga.

> Al activarla conviene revisar el `letter-spacing` de `.display` y
> `.display-extended`: estan ajustados al ritmo de Archivo, no al de Mirano.

## Chat de tawk.to

El chat se abría **maximizado en cada carga**, tapando la página. No lo causa el tema:
en el sitio hay un snippet que lo fuerza.

```javascript
window.Tawk_API.onLoad = function(){
  window.Tawk_API.maximize();   // ← esto lo abre solo
};
```

El tema ahora lo deja **minimizado**: la burbuja sigue visible y el chat funciona igual,
pero no invade al entrar. Lo hace en `wp_footer` con prioridad tardía, así que pisa ese
snippet sin necesidad de encontrarlo.

Para volver al comportamiento anterior, en `wp-config.php`:

```php
define( 'WFS_TAWK_AUTOOPEN', true );
```

> Conviene igual borrar ese snippet en el sitio (búscalo por `Tawk_API.maximize`), para
> no tener dos instrucciones peleando.

El botón **Talk to a live agent** de la barra superior abre el chat. Si el widget aún no
terminó de cargar, queda en cola y se abre en cuanto está listo. Y si la página no tiene
chat (el preview de GitHub, por ejemplo), el enlace sigue llevando a la banda de
*"real sales rep, no chatbot"*, así el botón nunca queda muerto.

## Cómo se edita

Con honestidad, porque aquí está el compromiso real:

| Qué | Dónde | Facilidad |
|---|---|---|
| Textos, precios, teléfonos, secciones | Archivos `components/*.jsx` del tema | Requiere tocar código |
| Colores, tipografías, espaciados | `css/styles.css` del tema | Requiere tocar código |
| Fotos y videos | Ver *Imágenes* abajo | Fácil |
| Páginas nuevas, SEO, plugins, analítica | WordPress normal | Fácil |

**El editor visual de WordPress no edita estas páginas.** Es el precio de que quede
idéntico: o se ve exactamente igual (este tema), o se edita con bloques (el intento
anterior). No existen las dos cosas al mismo tiempo sin trabajo adicional — ver
*Siguiente paso opcional*.

## Imágenes y videos

Pesan 165 MB, muy por encima del límite de subida de WordPress (suele ser 2–64 MB), así
que **no van todos dentro del zip**: apuntan por URL a
`https://crpozo.github.io/wfs-design-preview/assets`.

**Lo que sí viaja dentro del tema** es lo que el visitante ve en la barra de direcciones:

| Archivo | Por qué va dentro |
|---|---|
| `assets/wfs-catalog.pdf` | Es una descarga: la URL queda a la vista |

Al activarse, el tema reescribe esas URLs para servirlas desde tu dominio en vez del
preview. Para añadir más, se ponen en `theme-src/assets/` y se regenera.

### Mover el resto (recomendado para producción)

Todo lo demás (fotos y videos) sigue apuntando al preview. Funciona, pero depende de un
repo externo. Para independizarlo:

1. Sube la carpeta `assets/` del repo a tu hosting, por ejemplo a
   `wp-content/uploads/wfs/assets/`
2. Añade una línea a `wp-config.php`:

```php
define( 'WFS_ASSETS', 'https://westernfencesupply.com/wp-content/uploads/wfs/assets' );
```

Nada más: todas las rutas cambian de golpe.

> **Vale la pena optimizar antes de subir.** Hay 12 imágenes PNG de entre 2 y 3,6 MB
> cada una (`ALUM.png`, `CHAINLINK.png`, los portones…). Pasarlas a WebP bajaría el peso
> del sitio muchísimo y aceleraría la carga. Son 99 MB solo en los 3 videos.

## Regenerar el tema

Cada vez que cambie el sitio, se vuelve a generar el tema desde el código real:

```bash
python3 wordpress-theme/build-exact.py
```

El script copia componentes y CSS, reescribe las rutas de assets y extrae la app de cada
una de las 29 páginas. Nada se escribe a mano, así que el tema no se puede desincronizar
del sitio.

## Estructura

```
wfs-site/
├── style.css        Cabecera del tema (solo declara el tema ante WordPress)
├── functions.php    Mapa de páginas, creación automática, carga de scripts
├── index.php        Plantilla única: renderiza la página según el slug
├── css/styles.css   El CSS real del sitio, sin tocar
├── components/*.jsx Los 21 componentes reales del sitio, sin tocar
└── apps/*.js        La app de cada una de las 29 páginas
```

## Siguiente paso opcional

Si además de que se vea igual quieren **editar los textos desde WordPress**, se puede
hacer por partes: sacar los textos de los componentes a campos del panel de WordPress
(precios, teléfonos, titulares, direcciones) sin tocar el diseño. Es trabajo adicional y
conviene hacerlo por secciones, empezando por las que más cambian.
