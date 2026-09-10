/* Prueba de tipografia de titulares — SOLO para el preview de diseño.
 *
 * Con ?font=arvo en la URL, los titulares de la pagina salen en Arvo en vez de
 * en Archivo, y aparece un conmutador flotante para comparar sin editar la URL.
 * Sin ese parametro este archivo no hace absolutamente nada: ni pide la fuente
 * ni toca el DOM, asi que las paginas normales quedan igual que antes.
 *
 * Va en el <head> y sin defer a proposito: si corriera despues del pintado se
 * veria un parpadeo de Archivo a Arvo en cada carga y falsearia la impresion.
 *
 * Cuando se decida, esto se quita de un tiron: borrar el <script> de las
 * paginas y este archivo. No hay nada mas enganchado.
 */
(function () {
  var ARVO = "'Arvo', 'Rockwell', Georgia, serif";
  var params = new URLSearchParams(window.location.search);
  var activo = params.get('font') === 'arvo';

  if (activo) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap';
    document.head.appendChild(link);
    /* La misma variable que define styles.css en :root. Todos los titulares
       del sitio salen de aqui, asi que basta esta linea.
       Nota: el sitio repite font-variation-settings: 'wdth' 125 en 8 reglas y
       Arvo no tiene eje de ancho, asi que esas declaraciones quedan inertes.
       No estorban, pero tampoco hacen nada. */
    document.documentElement.style.setProperty('--display', ARVO);
  }

  /* El conmutador solo aparece cuando ya estas comparando: si no, seria un
     adorno encima del sitio para cualquiera que entre. */
  if (!activo) { return; }

  function pintarConmutador() {
    if (document.getElementById('wfs-font-toggle')) { return; }
    var url = new URL(window.location.href);
    url.searchParams.delete('font');

    var caja = document.createElement('div');
    caja.id = 'wfs-font-toggle';
    caja.setAttribute('style', [
      'position:fixed', 'left:18px', 'bottom:18px', 'z-index:99999',
      'display:flex', 'align-items:center', 'gap:10px',
      'padding:9px 10px 9px 16px', 'border-radius:999px',
      'background:#263167', 'color:#fff',
      'box-shadow:0 10px 30px -10px rgba(0,16,17,.55)',
      'font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif',
      'font-size:12.5px', 'font-weight:700', 'letter-spacing:.1em',
      'text-transform:uppercase'
    ].join(';'));

    var etiqueta = document.createElement('span');
    etiqueta.textContent = 'Titulares: Arvo';
    caja.appendChild(etiqueta);

    var boton = document.createElement('a');
    boton.href = url.toString();
    boton.textContent = 'Ver con Archivo';
    boton.setAttribute('style', [
      'display:inline-flex', 'align-items:center',
      'padding:7px 13px', 'border-radius:999px',
      'background:#ff7133', 'color:#263167', 'text-decoration:none',
      'font-size:11.5px', 'font-weight:700', 'letter-spacing:.1em'
    ].join(';'));
    caja.appendChild(boton);

    document.body.appendChild(caja);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', pintarConmutador);
  } else {
    pintarConmutador();
  }
})();
