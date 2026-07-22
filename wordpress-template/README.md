# Western Fence Supply — Plantilla WordPress editable en Elementor

Réplica del sitio [wfs-design-preview](https://crpozo.github.io/wfs-design-preview/Homepage.html)
como plantillas de **Elementor (gratis, sin Pro)**, 100% editables desde el editor visual.

## Contenido

| Archivo | Qué es |
|---|---|
| `templates/00-header.json` | Barra superior + navegación (plantilla de **sección**) |
| `templates/01-footer.json` | Footer navy con columnas y datos de contacto (**sección**) |
| `templates/10-home.json` | Inicio (hero, quiénes somos, por qué WFS, materiales, CTA) |
| `templates/11-contractors.json` | Contratistas (programa mayorista) |
| `templates/12-homeowners.json` | Propietarios (bifurcación reparar / proyecto nuevo) |
| `templates/13-products.json` | Catálogo: materiales + portones |
| `templates/14-materials-comparison.json` | Tabla comparativa de materiales |
| `templates/15-pool-code.json` | Código de piscinas de Florida (6 requisitos con diagramas) |
| `templates/16-estimate.json` | Cotización: datos de contacto + formulario |
| `templates/17-about.json` | Sobre nosotros |
| `templates/18-locations.json` | Sucursales (Fort Myers + Port Charlotte, con mapas) |
| `wfs-custom.css` | Tipografías + sistema de diseño (**obligatorio**) |
| `build.py` | Generador de los JSON (para regenerar tras cambios) |

## Instalación (WordPress + Elementor gratis)

1. **Tema**: instala y activa **Hello Elementor** (Apariencia → Temas → Añadir nuevo).
2. **Plugin**: instala **Elementor** (gratis).
3. **CSS de marca (obligatorio)**: copia todo `wfs-custom.css` en
   **Apariencia → Personalizar → CSS adicional**. Carga *Archivo* e *Inter* y aplica
   colores, tarjetas redondeadas con sombra y los botones pill.
4. **Importar plantillas**: en **Plantillas → Plantillas guardadas → Importar plantillas**,
   sube los 11 archivos `.json` de `templates/`.
5. **Crear las páginas** (Páginas → Añadir nueva) con estos slugs:

   | Página | Slug | Plantilla a insertar |
   |---|---|---|
   | Inicio | `/` (marcar como portada) | 10-home |
   | Para contratistas | `contractors` | 11-contractors |
   | Para propietarios | `homeowners` | 12-homeowners |
   | Catálogo | `products` | 13-products |
   | Comparativa de materiales | `materials-comparison` | 14-materials-comparison |
   | Código de piscinas | `pool-code` | 15-pool-code |
   | Cotizar | `estimate` | 16-estimate |
   | Nosotros | `about` | 17-about |
   | Sucursales | `locations` | 18-locations |

   En cada página: **Editar con Elementor → icono de carpeta (Añadir plantilla) →
   Mis plantillas → Insertar**. Los enlaces internos ya apuntan a esos slugs.

6. **Header y footer en todo el sitio** — dos opciones:
   - **Gratis**: plugin **Elementor Header & Footer Builder** (Brainstorm Force).
     Crea un header, edítalo con Elementor e inserta `00-header` (igual `01-footer`).
     Display: todo el sitio.
   - **Con Pro**: Theme Builder → Header/Footer → insertar las mismas plantillas.

## Formulario de cotización

La página *Cotizar* trae un widget **Shortcode** con `[contact-form-7 id="TODO"]`.

1. Instala **Contact Form 7**.
2. Crea el formulario con estos campos (los mismos del sitio):
   Nombre, Empresa (opcional), Email, Teléfono, "Soy" (propietario / DIY / contratista /
   comercial), Tipo de proyecto, Cómo nos conociste, Detalles del proyecto y
   **archivo adjunto** para el plano/layout.
3. Reemplaza `TODO` por el ID real del formulario.

Para el campo de archivo usa el tag `[file plano limit:10485760 filetypes:pdf|jpg|jpeg|png]`
y añádelo en *Mail → Archivos adjuntos* para que llegue por correo.

## Imágenes y video

Las plantillas apuntan a las imágenes y videos **por URL absoluta** contra el sitio de
preview (`https://crpozo.github.io/wfs-design-preview/assets/...`), así que **no hay que
subir nada a la biblioteca de medios** y el kit importa sin errores.

> Para producción conviene subir los archivos a la Biblioteca de medios de WordPress y
> reemplazar cada imagen desde Elementor (clic en la imagen → Elegir imagen). Así el sitio
> deja de depender del dominio de preview.

## Regenerar las plantillas

Si cambias el diseño y quieres volver a generar los JSON:

```bash
python3 build.py
```

## Notas

- Construido solo con **contenedores flex + widgets core** (heading, text-editor, image,
  button, video, spacer, divider, html, shortcode), por lo que funciona con Elementor
  gratis. No requiere Pro.
- La tabla comparativa va en un widget **HTML** para conservar el layout de columnas y el
  scroll horizontal en móvil; se edita como marcado dentro de Elementor.
- El menú del header es una lista de enlaces editable. Si prefieres un menú de WordPress
  real (con submenús), usa el widget *WP Menu* del plugin Header & Footer Builder.
- Los tamaños de fuente respetan el piso de legibilidad del sitio (nada por debajo de
  ~15.5px en etiquetas), pensado para el público mayor.
