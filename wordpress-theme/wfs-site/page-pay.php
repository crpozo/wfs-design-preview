<?php
/**
 * Template Name: WFS Pay
 * La pagina /pay del mostrador (NFC/QR). Documento completo a proposito:
 * sin cabecera ni pie del tema, tiene que abrir al instante en un movil.
 */
?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>WFS Payment · Western Fence Supply</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,300..900&family=Inter:wght@400;500;600;700&display=swap">
<style>
/* Pagina de pago para el mostrador: se abre tocando una tarjeta NFC o un QR.
   Es autonoma a proposito (sin React, sin styles.css): tiene que pintar al
   instante en el telefono de un cliente que esta de pie frente al vendedor.
   Los colores son los tokens de la marca, copiados aqui por valor. */
:root {
  --ink: #263167; --tangerine: #ff7133; --laser: #2e59c1;
  --charcoal: #565656; --linea: rgba(0,16,17,.14);
  --display: 'Archivo', 'Helvetica Neue', Arial, sans-serif;
  --sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body {
  font-family: var(--sans); color: var(--ink); background: #fff;
  min-height: 100vh; display: flex; flex-direction: column;
}
.envoltura { width: 100%; max-width: 560px; margin: 0 auto; padding: 28px 20px 40px; flex: 1; }
.logo { display: block; height: 54px; margin: 6px auto 22px; }
.kicker {
  display: block; text-align: center; font-size: 12px; font-weight: 700;
  letter-spacing: .22em; text-transform: uppercase; color: var(--tangerine);
  margin-bottom: 10px;
}
h1 {
  font-family: var(--display); font-weight: 800; font-stretch: 90%;
  text-transform: uppercase; text-align: center; line-height: 1.06;
  font-size: clamp(26px, 7.4vw, 34px); letter-spacing: .01em; margin-bottom: 10px;
}
.sub { text-align: center; font-size: 16.5px; color: var(--charcoal); margin-bottom: 24px; }

.opciones { display: grid; gap: 12px; }
.opcion { border: 1px solid var(--linea); border-radius: 16px; overflow: hidden; }
.opcion__btn {
  display: flex; align-items: center; gap: 14px; width: 100%;
  min-height: 64px; padding: 16px 18px;
  background: var(--ink); color: #fff; border: 0; cursor: pointer;
  font-family: var(--sans); font-size: 18px; font-weight: 700; text-align: left;
  text-decoration: none; transition: background .15s ease;
  -webkit-tap-highlight-color: rgba(255,113,51,.25);
}
.opcion__btn:active { background: var(--laser); }
.opcion__nombre { flex: 1; }
.opcion__sub { display: block; font-size: 12.5px; font-weight: 500; opacity: .78; margin-top: 2px; }
.opcion__flecha { flex: none; transition: transform .2s ease; }
.opcion.is-open .opcion__flecha { transform: rotate(90deg); }

.opcion__panel { display: none; padding: 18px; background: #f7f8fb; border-top: 1px solid var(--linea); }
.opcion.is-open .opcion__panel { display: block; }
.panel__nota { font-size: 15px; line-height: 1.55; color: var(--charcoal); }
.panel__nota strong { color: var(--ink); }

.dato { margin-top: 12px; }
.dato__eti {
  font-size: 11.5px; font-weight: 700; letter-spacing: .14em;
  text-transform: uppercase; color: var(--charcoal); margin-bottom: 4px;
}
.dato__fila { display: flex; align-items: center; gap: 10px; }
.dato__val {
  flex: 1; font-size: 17px; font-weight: 700; color: var(--ink);
  word-break: break-all; font-variant-numeric: tabular-nums;
}
.copiar {
  flex: none; min-height: 44px; padding: 8px 14px; border-radius: 999px;
  border: 1.5px solid var(--ink); background: #fff; color: var(--ink);
  font-family: var(--sans); font-size: 13px; font-weight: 700; cursor: pointer;
}
.copiar.is-ok { background: var(--ink); color: #fff; }

.pie {
  text-align: center; padding: 18px 20px calc(22px + env(safe-area-inset-bottom));
  border-top: 1px solid var(--linea); font-size: 14.5px; color: var(--charcoal);
}
.pie a { color: var(--ink); font-weight: 700; text-decoration: none; }
</style>
</head>
<body>
<main class="envoltura">
  <img class="logo" src="https://crpozo.github.io/wfs-design-preview/assets/wfs-logo.svg" alt="Western Fence Supply">
  <span class="kicker">Western Fence Supply</span>
  <h1>WFS Payment, Easy and Quick</h1>
  <p class="sub">Choose a no-fee payment option:</p>

  <div class="opciones" id="opciones"></div>
</main>

<footer class="pie">
  Questions? Ask your sales rep or call <a href="tel:2394652482">(239) 465-2482</a>
</footer>

<script>
/* ══════════════════════════════════════════════════════════════════════════
   ENLACES DE PAGO — editar SOLO este bloque cuando cambie un destino.
   La URL /pay no cambia nunca (las tarjetas NFC y los QR apuntan aqui);
   lo que se actualiza son estos destinos.

   Cada opcion es una de dos cosas:
     { url: '...' }      el boton abre ese enlace tal cual
     { panel: {...} }    el boton despliega instrucciones en la propia pagina
       nota:   texto de apoyo
       datos:  pares [etiqueta, valor] con boton de copiar (numeros de cuenta,
               correos: lo que el cliente necesita pegar en su banco)
   ══════════════════════════════════════════════════════════════════════════ */
var CUENTA = {
  titular:  'WESTERN FENCE SUPPLY LLC',
  banco:    'Bank of America — Business Checking',
  direccion:'2640 Evans Ave, Fort Myers, FL 33901',
  cuenta:   '898131229920',
  rutaWire: '026009593',
  rutaACH:  '063100277'
};

var OPCIONES = [
  { id: 'zelle', nombre: 'Zelle', sub: 'From your banking app', panel: {
      nota: 'Open your banking app, choose <strong>Zelle</strong> and send to:',
      datos: [['Zelle recipient', 'sales@westernfencesupply.com']]
  }},
  { id: 'cashapp', nombre: 'Cash App', sub: 'Opens Cash App',
    url: 'https://cash.app/$WesternFenceSupply?qr=1' },
  { id: 'ach', nombre: 'Bank ACH', sub: 'Account & routing numbers', panel: {
      nota: 'ACH transfer to <strong>' + CUENTA.titular + '</strong> · ' + CUENTA.banco + '<br>' + CUENTA.direccion,
      datos: [['Account number', CUENTA.cuenta],
              ['Routing number (paper & electronic)', CUENTA.rutaACH]]
  }},
  { id: 'wire', nombre: 'Bank Wire', sub: 'Wire instructions', panel: {
      nota: 'Wire to <strong>' + CUENTA.titular + '</strong> · ' + CUENTA.banco + '<br>' + CUENTA.direccion,
      datos: [['Account number', CUENTA.cuenta],
              ['Routing number (wires)', CUENTA.rutaWire],
              ['Routing number (paper & electronic)', CUENTA.rutaACH]]
  }},
  { id: 'debit', nombre: 'Debit Card', sub: 'At the sales desk', panel: {
      nota: 'Hand your debit card to your sales rep — we process it right at the desk. <strong>No fee.</strong>',
      datos: []
  }},
  { id: 'paypal', nombre: 'PayPal', sub: 'Ask your sales rep', panel: {
      nota: 'Your sales rep will send you our PayPal payment link.',
      datos: []
  }}
];

/* ── pintado ─────────────────────────────────────────────────────────────── */
var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) {
  return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };

var flecha = '<svg class="opcion__flecha" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
  '<path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

var cont = document.getElementById('opciones');
cont.innerHTML = OPCIONES.map(function (o) {
  var cab = '<span class="opcion__nombre">' + esc(o.nombre) +
            (o.sub ? '<span class="opcion__sub">' + esc(o.sub) + '</span>' : '') + '</span>' + flecha;
  if (o.url) {
    /* Enlace directo: un <a> de verdad, para que funcione sin JavaScript. */
    return '<div class="opcion"><a class="opcion__btn" href="' + esc(o.url) + '" rel="noopener">' + cab + '</a></div>';
  }
  var datos = (o.panel.datos || []).map(function (d) {
    return '<div class="dato"><div class="dato__eti">' + esc(d[0]) + '</div>' +
      '<div class="dato__fila"><span class="dato__val">' + esc(d[1]) + '</span>' +
      '<button class="copiar" type="button" data-copia="' + esc(d[1]) + '">Copy</button></div></div>';
  }).join('');
  return '<div class="opcion" id="op-' + esc(o.id) + '">' +
    '<button class="opcion__btn" type="button" aria-expanded="false" data-abre="' + esc(o.id) + '">' + cab + '</button>' +
    '<div class="opcion__panel"><p class="panel__nota">' + o.panel.nota + '</p>' + datos + '</div></div>';
}).join('');

/* Acordeon: se abre una y se cierran las demas, para que el vendedor y el
   cliente miren siempre un solo bloque de datos. */
cont.addEventListener('click', function (e) {
  var btn = e.target.closest('[data-abre]');
  if (btn) {
    var op = btn.closest('.opcion');
    var abierta = op.classList.contains('is-open');
    cont.querySelectorAll('.opcion.is-open').forEach(function (x) {
      x.classList.remove('is-open');
      var b = x.querySelector('[data-abre]');
      if (b) { b.setAttribute('aria-expanded', 'false'); }
    });
    if (!abierta) {
      op.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
    return;
  }
  var cop = e.target.closest('[data-copia]');
  if (cop) {
    var texto = cop.getAttribute('data-copia');
    var listo = function () {
      cop.classList.add('is-ok');
      cop.textContent = 'Copied ✓';
      setTimeout(function () { cop.classList.remove('is-ok'); cop.textContent = 'Copy'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(listo, listo);
    } else {
      /* Respaldo para navegadores dentro de apps, que a veces capan clipboard. */
      var ta = document.createElement('textarea');
      ta.value = texto; document.body.appendChild(ta);
      ta.select(); try { document.execCommand('copy'); } catch (err) {}
      ta.remove(); listo();
    }
  }
});
</script>
</body>
</html>
