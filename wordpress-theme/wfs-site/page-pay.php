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
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter:wght@400;500;600;700&display=swap">
<style>
/* Pagina de pago para el mostrador: se abre tocando una tarjeta NFC o un QR.
   Es autonoma a proposito (sin React, sin styles.css): tiene que pintar al
   instante en el telefono de un cliente que esta de pie frente al vendedor.
   Los colores son los tokens de la marca, copiados aqui por valor. */
:root {
  --ink: #263167; --tangerine: #ff7133; --laser: #2e59c1;
  --charcoal: #565656; --linea: rgba(0,16,17,.14);
  --display: 'Alfa Slab One', 'Rockwell', 'Georgia', serif;
  --sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; }
body {
  font-family: var(--sans); color: var(--ink); background: #fff;
  min-height: 100vh; display: flex; flex-direction: column;
}
.envoltura { width: 100%; max-width: 560px; margin: 0 auto; padding: 24px 20px 40px; flex: 1; }
.logo { display: block; height: 54px; margin: 6px auto 18px; }

/* Selector de sede: un control segmentado con el indicador deslizando de
   izquierda (Fort Myers) a derecha (Port Charlotte), como lo pidio el
   cliente. Los datos de pago cambian con la sede. */
.sede { margin: 0 auto 22px; max-width: 360px; }
.sede__eti {
  display: block; text-align: center; font-size: 11.5px; font-weight: 700;
  letter-spacing: .18em; text-transform: uppercase; color: var(--charcoal); margin-bottom: 8px;
}
.sede__pista {
  position: relative; display: grid; grid-template-columns: 1fr 1fr;
  background: #eef0f5; border-radius: 999px; padding: 4px;
}
.sede__ind {
  position: absolute; top: 4px; bottom: 4px; left: 4px; width: calc(50% - 4px);
  background: var(--ink); border-radius: 999px;
  transition: transform .28s cubic-bezier(.22,.8,.3,1);
}
.sede.is-pc .sede__ind { transform: translateX(100%); }
.sede__btn {
  position: relative; z-index: 1; min-height: 46px; border: 0; background: none;
  font-family: var(--display); font-size: 13px; font-weight: 400; letter-spacing: .03em; color: var(--ink);
  border-radius: 999px; cursor: pointer; transition: color .2s ease;
  -webkit-tap-highlight-color: transparent;
}
.sede__btn[aria-pressed="true"] { color: #fff; }

h1 {
  font-family: var(--display); font-weight: 400;
  text-transform: uppercase; text-align: center; line-height: 1.1;
  font-size: clamp(24px, 6.8vw, 32px); letter-spacing: .02em; margin-bottom: 10px;
}
.sub { text-align: center; font-size: 16.5px; color: var(--charcoal); margin-bottom: 22px; }

.opciones { display: grid; gap: 12px; }
.opcion { border: 1px solid var(--linea); border-radius: 16px; overflow: hidden; }
.opcion__btn {
  display: flex; align-items: center; gap: 14px; width: 100%;
  min-height: 68px; padding: 12px 16px 12px 12px;
  background: var(--ink); color: #fff; border: 0; cursor: pointer;
  font-family: var(--sans); font-size: 18px; font-weight: 700; text-align: left;
  text-decoration: none; transition: background .15s ease;
  -webkit-tap-highlight-color: rgba(255,113,51,.25);
}
.opcion__btn:active { background: var(--laser); }
/* El logo del servicio, a la izquierda: se reconoce antes de leer. */
.opcion__logo {
  flex: none; width: 44px; height: 44px; border-radius: 11px; overflow: hidden;
  display: grid; place-items: center; background: #fff;
}
.opcion__logo svg { width: 44px; height: 44px; display: block; }
/* Alfa Slab One solo existe en un peso: "mas fina" aqui es mas pequeña y con
   mas aire entre letras, que es lo que la hace sentir menos pesada. */
.opcion__nombre { flex: 1; min-width: 0; font-family: var(--display); font-weight: 400; font-size: 16.5px; letter-spacing: .03em; }
.opcion__sub { display: block; font-family: var(--sans); font-size: 12.5px; font-weight: 500; opacity: .78; margin-top: 2px; letter-spacing: 0; }
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

  <div class="sede" id="sede">
    <span class="sede__eti" id="sede-eti">Paying at</span>
    <div class="sede__pista" role="group" aria-labelledby="sede-eti">
      <span class="sede__ind" aria-hidden="true"></span>
      <button class="sede__btn" type="button" data-sede="fm" aria-pressed="true">Fort Myers</button>
      <button class="sede__btn" type="button" data-sede="pc" aria-pressed="false">Port Charlotte</button>
    </div>
  </div>

  <h1>WFS Payment, Easy and Quick</h1>
  <p class="sub">Choose a no-fee payment option:</p>

  <div class="opciones" id="opciones"></div>
</main>

<footer class="pie" id="pie"></footer>

<script>
/* ══════════════════════════════════════════════════════════════════════════
   DATOS DE PAGO POR SEDE: editar SOLO este bloque cuando cambie algo.
   La URL /pay no cambia nunca (las tarjetas NFC y los QR apuntan aqui);
   lo que se actualiza son estos datos.

   Que sede sale por defecto: Fort Myers, salvo que la URL diga lo contrario.
   Las tarjetas y QR de cada mostrador pueden apuntar a su sede directamente:
     westernfencesupply.com/pay          -> Fort Myers
     westernfencesupply.com/pay?loc=pc   -> Port Charlotte
   y el cliente siempre puede cambiar con el selector de arriba.

   PENDIENTE (Port Charlotte): los campos marcados con "PENDIENTE" llevan por
   ahora los datos de Fort Myers porque no se han recibido los de Port
   Charlotte. Sustituirlos cuando lleguen.
   ══════════════════════════════════════════════════════════════════════════ */
var CUENTA_FM = {
  titular:  'WESTERN FENCE SUPPLY LLC',
  banco:    'Bank of America, Business Checking',
  direccion:'2640 Evans Ave, Fort Myers, FL 33901',
  cuenta:   '898131229920',
  rutaWire: '026009593',
  rutaACH:  '063100277'
};

var SEDES = {
  fm: {
    nombre:  'Fort Myers',
    tel:     '(239) 465-2482', telHref: 'tel:2394652482',
    zelle:   'sales@westernfencesupply.com',
    cashapp: 'https://cash.app/$WesternFenceSupply?qr=1',
    cuenta:  CUENTA_FM
  },
  pc: {
    nombre:  'Port Charlotte',
    tel:     '(941) 467-5821', telHref: 'tel:9414675821',
    zelle:   'sales@westernfencesupply.com',                 /* PENDIENTE */
    cashapp: 'https://cash.app/$WesternFenceSupply?qr=1',    /* PENDIENTE */
    cuenta:  CUENTA_FM                                       /* PENDIENTE */
  }
};

/* Cada opcion es una de dos cosas:
     { url: '...' }      el boton abre ese enlace tal cual
     { panel: {...} }    el boton despliega instrucciones en la propia pagina
       nota:   texto de apoyo
       datos:  pares [etiqueta, valor] con boton de copiar */
function opciones(sede) {
  var C = sede.cuenta;
  var banco = '<strong>' + esc(C.titular) + '</strong> · ' + esc(C.banco) + '<br>' + esc(C.direccion);
  return [
    { id: 'zelle', nombre: 'Zelle', sub: 'From your banking app', panel: {
        nota: 'Open your banking app, choose <strong>Zelle</strong> and send to:',
        datos: [['Zelle recipient', sede.zelle]]
    }},
    { id: 'cashapp', nombre: 'Cash App', sub: 'Opens Cash App', url: sede.cashapp },
    { id: 'ach', nombre: 'Bank ACH', sub: 'Account & routing numbers', panel: {
        nota: 'ACH transfer to ' + banco,
        datos: [['Account number', C.cuenta],
                ['Routing number (paper & electronic)', C.rutaACH]]
    }},
    { id: 'wire', nombre: 'Bank Wire', sub: 'Wire instructions', panel: {
        nota: 'Wire to ' + banco,
        datos: [['Account number', C.cuenta],
                ['Routing number (wires)', C.rutaWire],
                ['Routing number (paper & electronic)', C.rutaACH]]
    }},
    { id: 'debit', nombre: 'Debit Card', sub: 'At the sales desk', panel: {
        nota: 'Hand your debit card to your sales rep and we process it right at the desk. <strong>No fee.</strong>',
        datos: []
    }},
    { id: 'paypal', nombre: 'PayPal', sub: 'Ask your sales rep', panel: {
        nota: 'Your sales rep will send you our PayPal payment link.',
        datos: []
    }}
  ];
}

/* ── logos ───────────────────────────────────────────────────────────────
   Marcas dibujadas en SVG en linea: nada que descargar, y se reconocen por
   color y letra. Las de banco, wire y tarjeta son iconos en el azul de WFS. */
var LOGOS = {
  zelle:   '<svg viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" fill="#6d1ed4"/>' +
           '<text x="22" y="31" text-anchor="middle" font-family="Alfa Slab One,Rockwell,Georgia,serif" font-weight="400" font-size="26" fill="#fff">Z</text></svg>',
  cashapp: '<svg viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" fill="#00d632"/>' +
           '<text x="22" y="31" text-anchor="middle" font-family="Alfa Slab One,Rockwell,Georgia,serif" font-weight="400" font-size="26" fill="#fff">$</text></svg>',
  paypal:  '<svg viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" fill="#fff"/>' +
           '<text x="16" y="32" text-anchor="middle" font-family="Alfa Slab One,Rockwell,Georgia,serif" font-weight="400" font-style="italic" font-size="26" fill="#003087">P</text>' +
           '<text x="24" y="34" text-anchor="middle" font-family="Alfa Slab One,Rockwell,Georgia,serif" font-weight="400" font-style="italic" font-size="26" fill="#009cde">P</text></svg>',
  ach:     '<svg viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" fill="#e9edf7"/>' +
           '<path d="M22 9 9 16h26L22 9zM11 18v12h4V18h-4zm9 0v12h4V18h-4zm9 0v12h4V18h-4zM9 32h26v4H9z" fill="#263167"/></svg>',
  wire:    '<svg viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" fill="#e9edf7"/>' +
           '<path d="M12 17h16l-4-4 2.5-2.5L35 19l-8.5 8.5L24 25l4-4H12v-4zm20 10H16l4 4-2.5 2.5L9 25l8.5-8.5L20 19l-4 4h16v4z" fill="#263167"/></svg>',
  debit:   '<svg viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" fill="#e9edf7"/>' +
           '<rect x="7" y="12" width="30" height="20" rx="3" fill="#263167"/><rect x="7" y="17" width="30" height="4" fill="#e9edf7"/>' +
           '<rect x="11" y="25" width="9" height="3" rx="1" fill="#fff"/></svg>'
};

/* ── pintado ─────────────────────────────────────────────────────────────── */
function esc(t) { return String(t).replace(/[&<>"]/g, function (c) {
  return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }

var flecha = '<svg class="opcion__flecha" width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
  '<path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

var cont = document.getElementById('opciones');
var pie = document.getElementById('pie');
var selector = document.getElementById('sede');
var SEDE = 'fm';

function pintar() {
  var sede = SEDES[SEDE];
  cont.innerHTML = opciones(sede).map(function (o) {
    var cab = '<span class="opcion__logo">' + (LOGOS[o.id] || '') + '</span>' +
              '<span class="opcion__nombre">' + esc(o.nombre) +
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
  pie.innerHTML = 'Questions? Ask your ' + esc(sede.nombre) + ' sales rep or call ' +
    '<a href="' + esc(sede.telHref) + '">' + esc(sede.tel) + '</a>';
  selector.classList.toggle('is-pc', SEDE === 'pc');
  selector.querySelectorAll('[data-sede]').forEach(function (b) {
    b.setAttribute('aria-pressed', String(b.getAttribute('data-sede') === SEDE));
  });
}

/* Sede inicial: ?loc=pc en la URL (para las tarjetas de Port Charlotte). */
if (/[?&]loc=pc\b/i.test(location.search)) { SEDE = 'pc'; }
pintar();

selector.addEventListener('click', function (e) {
  var b = e.target.closest('[data-sede]');
  if (!b || b.getAttribute('data-sede') === SEDE) { return; }
  SEDE = b.getAttribute('data-sede');
  pintar();
});

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
