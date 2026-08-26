/* Geometria de la cerca, generada a partir de lo que eligio el usuario.
 *
 * No hay modelos descargados: cada perfil se construye con sus medidas reales
 * (poste de 2", rail de 1", picket de 3/4" con 3,9" de luz) para que lo que se
 * ve en la casa sea la cerca que se va a pedir, no una aproximacion decorativa.
 * Las cotas salen de las fichas tecnicas de assets/specs.
 */
import { MeshStandardMaterial, DoubleSide, Color } from '../vendor/three/three.module.js';
import { Ensamblador } from './piezas.js';
import * as T from './texturas.js';

var PUL = 1 / 12;   // una pulgada, en pies

/* Anchura de vano por material: es el panel que se fabrica, no una eleccion
   estetica. Cambiarla mueve los postes de sitio y deja de parecerse al
   producto real. */
var VANO = { aluminum: 6, 'chain-link': 10, vinyl: 8, metal: 6, ecfence: 8 };

/* ── base local del tramo ──────────────────────────────────────────────────
   u avanza a lo largo del tramo, v cruza. Una caja girada rotY sobre Y lleva
   su +X local a (cos, 0, -sin), de ahi el atan2(-dz, dx). */
function marco(a, b) {
  var dx = b[0] - a[0], dz = b[1] - a[1];
  var largo = Math.hypot(dx, dz);
  dx /= largo; dz /= largo;
  var rotY = Math.atan2(-dz, dx);
  return {
    largo: largo, rotY: rotY,
    p: function (u, y, v) {
      v = v || 0;
      return [a[0] + dx * u - dz * v, y, a[1] + dz * u + dx * v];
    }
  };
}

/* ── materiales ───────────────────────────────────────────────────────────── */

function metalico(hex, rug, met) {
  return new MeshStandardMaterial({ color: new Color(hex), roughness: rug, metalness: met });
}

/**
 * Los materiales de la cerca segun material y color elegidos.
 *
 * El aluminio de una cerca va con pintura en polvo, no pulido: darle
 * metalness alto lo convierte en cromo y deja de parecer lo que es.
 */
export function materiales(mat, estilo, colorHex, ancho, altoMalla) {
  var m = {};
  if (mat === 'chain-link') {
    var acabados = {
      'Galvanized':       { hilo: '#b9bec4', poste: '#b0b6bc', calibre: 5,   met: 0.85, rug: 0.38 },
      'Black PVC-coated': { hilo: '#232323', poste: '#2a2a2a', calibre: 6,   met: 0.25, rug: 0.6 },
      'Green PVC-coated': { hilo: '#2f5233', poste: '#33563a', calibre: 6,   met: 0.25, rug: 0.6 },
      'Heavy Gauge':      { hilo: '#a7adb4', poste: '#9aa1a8', calibre: 7.5, met: 0.85, rug: 0.34 }
    };
    var a = acabados[estilo] || acabados.Galvanized;
    m.estructura = metalico(a.poste, a.rug, a.met);
    /* Un material de malla por cada ancho de vano.
       La repeticion de la textura es del material, pero el plano se escala por
       instancia: con un solo material, un tramo corto o una hoja de porton
       metian los mismos rombos en menos ancho y el rombo salia el doble de
       fino que en la cerca de al lado. El rombo mide unas 2": el mosaico trae
       4, o sea 8" de lado. */
    var cache = {};
    m.malla = function (anchoVano, altoVano) {
      var k = anchoVano.toFixed(2) + 'x' + altoVano.toFixed(2);
      if (cache[k]) { return cache[k]; }
      var tex = T.malla(a.calibre).clone();
      tex.needsUpdate = true;
      tex.repeat.set(Math.max(1, anchoVano / (8 * PUL)), Math.max(1, altoVano / (8 * PUL)));
      cache[k] = new MeshStandardMaterial({
        color: new Color(a.hilo), roughness: a.rug, metalness: a.met,
        alphaMap: tex, transparent: true, alphaTest: 0.42, side: DoubleSide
      });
      return cache[k];
    };
    return m;
  }
  if (mat === 'vinyl') {
    m.estructura = new MeshStandardMaterial({ color: new Color(colorHex || '#f2f2ee'), roughness: 0.72, metalness: 0 });
    m.tabla = m.estructura;
    return m;
  }
  if (mat === 'metal') {
    if (colorHex === '#7a5c3e') {   // woodgrain
      m.tabla = new MeshStandardMaterial({ map: T.veta(), roughness: 0.62, metalness: 0.12 });
      m.estructura = metalico('#6b5136', 0.6, 0.15);
    } else {
      m.tabla = metalico(colorHex || '#1c1c1c', 0.52, 0.28);
      m.estructura = m.tabla;
    }
    return m;
  }
  if (mat === 'ecfence') {
    var ec = estilo === 'White' ? '#eceae4' : '#5a4433';
    m.estructura = metalico(ec, 0.5, 0.42);
    m.tabla = m.estructura;
    return m;
  }
  /* aluminio: pintura en polvo */
  m.estructura = metalico(colorHex || '#1c1c1c', 0.55, 0.18);
  m.tabla = m.estructura;
  return m;
}

/* ── vanos por material ────────────────────────────────────────────────────
   Cada uno recibe el marco del tramo, el inicio del vano en u, y rellena.
   El eje v==0 es el plano de la cerca. */

/** Aluminio ornamental y sus 7 perfiles. */
function vanoAluminio(e, m, est, mk, u0, ancho, alto) {
  var rail = 1 * PUL, pk = 0.75 * PUL;
  var rotY = mk.rotY;
  var yTop = alto - 1.5 * PUL;                 // eje del rail superior
  var pitch = est.indexOf('3" Spacing') !== -1 ? 3.75 * PUL : 4.65 * PUL;
  if (est === 'Pool Code') { pitch = 4.65 * PUL; }

  var rails = [];
  var yBajo = 3 * PUL;
  if (est === '3-Rail Rake Bottom') { rails = [yTop, alto * 0.42, yBajo + 3 * PUL]; }
  else if (est === '3-Rail Puppy Picket') { rails = [yTop, alto * 0.5, yBajo + 2 * PUL]; }
  else if (est === 'Pool Code') { rails = [yTop, yTop - 3.5 * PUL]; }   // los dos arriba: no escalable
  else if (est === '4-Rail Custom') { rails = [yTop, alto * 0.66, alto * 0.36, yBajo + 2 * PUL]; }
  else { rails = [yTop, yBajo + 2 * PUL]; }

  for (var i = 0; i < rails.length; i++) {
    var c = mk.p(u0 + ancho / 2, rails[i], 0);
    e.caja(m.estructura, 'rail', c, [ancho, rail, rail], rotY);
  }

  /* Donde empieza y acaba el picket. El rake bottom es justo eso: el barrote
     sobresale por debajo del rail inferior. */
  var abajo = rails[rails.length - 1] - rail / 2;
  var arriba = yTop + rail / 2;
  if (est === '3-Rail Rake Bottom') { abajo -= 3 * PUL; }
  if (est === 'Pool Code') { abajo = 2 * PUL; }
  if (est === 'Spear Top') { arriba = yTop + 5 * PUL; }

  var n = Math.max(2, Math.round((ancho - pk) / pitch));
  var paso = (ancho - pk) / n;
  for (var j = 0; j <= n; j++) {
    var u = u0 + pk / 2 + j * paso;
    var h = arriba - abajo;
    e.caja(m.estructura, 'picket', mk.p(u, abajo + h / 2, 0), [pk, h, pk], rotY);
    if (est === 'Spear Top') {
      e.pieza('cono', m.estructura, 'punta', mk.p(u, arriba + 2.2 * PUL, 0), [1.6 * PUL, 4.4 * PUL, 1.6 * PUL], rotY);
    }
  }

  /* Puppy picket: barrotes extra abajo, a media separacion, para que no pase
     un perro pequeño. */
  if (est === '3-Rail Puppy Picket') {
    var yA = rails[2] + rail / 2, yB = rails[1] - rail / 2;
    for (var k = 0; k < n; k++) {
      var uu = u0 + pk / 2 + (k + 0.5) * paso;
      e.caja(m.estructura, 'picket', mk.p(uu, (yA + yB) / 2, 0), [pk, yB - yA, pk], rotY);
    }
  }
}

/** Chain link: postes redondos, rail superior y malla recortada. */
function vanoChainLink(e, m, est, mk, u0, ancho, alto) {
  var rotY = mk.rotY;
  var yMalla = 2 * PUL, hMalla = alto - yMalla - 1.5 * PUL;
  var mat = m.malla(ancho, hMalla);
  e.plano(mat, 'malla' + ancho.toFixed(2), mk.p(u0 + ancho / 2, yMalla + hMalla / 2, 0),
          [ancho, hMalla, 1], rotY);
  e.tuboH(m.estructura, 'railsup', mk.p(u0 + ancho / 2, alto - 1 * PUL, 0), 1.375 * PUL, ancho, rotY);
  /* Alambre de tension abajo: sin el, la malla flota. */
  e.tuboH(m.estructura, 'tension', mk.p(u0 + ancho / 2, yMalla, 0), 0.4 * PUL, ancho, rotY);
}

/** Vinilo: privacidad, semiprivacidad, picket y ranch rail. */
function vanoVinilo(e, m, est, mk, u0, ancho, alto) {
  var rotY = mk.rotY;
  var railH = 3.5 * PUL, railG = 1.75 * PUL;

  if (est === 'Ranch Rail') {
    var n = alto >= 5 ? 3 : 2;
    for (var i = 0; i < n; i++) {
      var y = alto - 4 * PUL - i * (alto - 10 * PUL) / Math.max(1, n - 1);
      e.caja(m.estructura, 'ranch', mk.p(u0 + ancho / 2, y, 0), [ancho, 5.5 * PUL, 1.5 * PUL], rotY);
    }
    return;
  }

  var yInf = 3 * PUL + railH / 2;
  var ySup = alto - 2 * PUL - railH / 2;
  e.caja(m.estructura, 'rail', mk.p(u0 + ancho / 2, yInf, 0), [ancho, railH, railG], rotY);
  e.caja(m.estructura, 'rail', mk.p(u0 + ancho / 2, ySup, 0), [ancho, railH, railG], rotY);

  var yA = yInf + railH / 2, yB = ySup - railH / 2;

  if (est === 'Picket') {
    /* Picket abierto: tabla de 1,5" con 3" de luz. */
    var pitch = 4.5 * PUL, tabla = 1.5 * PUL;
    var np = Math.max(2, Math.round((ancho - tabla) / pitch));
    var paso = (ancho - tabla) / np;
    for (var j = 0; j <= np; j++) {
      var alt = yB - yA + 6 * PUL;
      e.caja(m.estructura, 'picket', mk.p(u0 + tabla / 2 + j * paso, yA + alt / 2 - 1 * PUL, 0),
             [tabla, alt, 0.9 * PUL], rotY);
    }
    return;
  }

  /* Privacidad y semiprivacidad: tablas de 6" machihembradas. Se modelan una a
     una porque el ritmo de la junta es lo que hace que se lea como vinilo y no
     como una pared lisa. */
  var solidoHasta = est === 'Semi-Privacy' ? yA + (yB - yA) * 0.62 : yB;
  var ancT = 6 * PUL;
  var nt = Math.max(1, Math.round(ancho / ancT));
  var pasoT = ancho / nt;
  for (var k = 0; k < nt; k++) {
    var u = u0 + pasoT / 2 + k * pasoT;
    e.caja(m.estructura, 'tabla', mk.p(u, yA + (solidoHasta - yA) / 2, 0),
           [pasoT - 0.02 * PUL, solidoHasta - yA, 0.9 * PUL], rotY);
  }
  if (est === 'Semi-Privacy') {
    /* Arriba, tablas separadas: es la parte que deja pasar el aire. */
    var pitch2 = 5 * PUL, tab2 = 2.5 * PUL;
    var n2 = Math.max(2, Math.round((ancho - tab2) / pitch2));
    var paso2 = (ancho - tab2) / n2;
    e.caja(m.estructura, 'rail', mk.p(u0 + ancho / 2, solidoHasta + railH / 2, 0), [ancho, railH, railG], rotY);
    for (var q = 0; q <= n2; q++) {
      var y2a = solidoHasta + railH, y2b = yB;
      if (y2b - y2a <= 0) { break; }
      e.caja(m.estructura, 'lama', mk.p(u0 + tab2 / 2 + q * paso2, (y2a + y2b) / 2, 0),
             [tab2, y2b - y2a, 0.9 * PUL], rotY);
    }
  }
}

/** DuraFence: tablas horizontales de aluminio. */
function vanoMetal(e, m, est, mk, u0, ancho, alto) {
  var rotY = mk.rotY;
  var altoT = est === 'Modern' ? 7.5 * PUL : est === 'P1' ? 3 * PUL : 5.5 * PUL;
  var luz = est === 'P1' ? 1.2 * PUL : est === 'Modern' ? 0.35 * PUL : 0.6 * PUL;
  var paso = altoT + luz;
  var y = 3 * PUL;
  while (y + altoT <= alto - 1 * PUL) {
    e.caja(m.tabla, 'tabla', mk.p(u0 + ancho / 2, y + altoT / 2, 0), [ancho, altoT, 1.2 * PUL], rotY);
    y += paso;
  }
}

/** EC Fence: paneles verticales de acero que encajan entre si. */
function vanoEc(e, m, est, mk, u0, ancho, alto) {
  var rotY = mk.rotY;
  var ancT = 8 * PUL;
  var n = Math.max(1, Math.round(ancho / ancT));
  var paso = ancho / n;
  var y0 = 2 * PUL, h = alto - y0 - 1.5 * PUL;
  for (var i = 0; i < n; i++) {
    /* El encaje alterna el plano de la tabla; ese relieve es la firma del
       producto y a contraluz es lo unico que lo distingue de una chapa. */
    var v = (i % 2) ? 0.35 * PUL : -0.35 * PUL;
    e.caja(m.tabla, 'panel', mk.p(u0 + paso / 2 + i * paso, y0 + h / 2, v),
           [paso - 0.05 * PUL, h, 1.1 * PUL], rotY);
  }
  e.caja(m.estructura, 'remate', mk.p(u0 + ancho / 2, alto - 0.6 * PUL, 0), [ancho, 1.6 * PUL, 2.4 * PUL], rotY);
}

var VANOS = {
  aluminum: vanoAluminio, 'chain-link': vanoChainLink, vinyl: vanoVinilo,
  metal: vanoMetal, ecfence: vanoEc
};

/** Poste, con la seccion y el remate que le toca al material. */
function poste(e, m, mat, x, z, alto) {
  if (mat === 'chain-link') {
    e.tubo(m.estructura, 'poste', x, (alto + 2 * PUL) / 2, z, 2.375 * PUL, alto + 2 * PUL);
    e.tubo(m.estructura, 'tapa', x, alto + 2.5 * PUL, z, 2.6 * PUL, 1 * PUL);
    return;
  }
  var s = mat === 'vinyl' ? 5 * PUL : mat === 'aluminum' ? 2.5 * PUL : 4 * PUL;
  var h = alto + 2 * PUL;
  e.caja(m.estructura, 'poste', [x, h / 2, z], [s, h, s], 0);
  /* Tapa: en vinilo es una piramide, en metal una plaquita. */
  if (mat === 'vinyl') {
    e.pieza('cono', m.estructura, 'tapa', [x, h + 1.6 * PUL, z], [s * 1.16, 3.2 * PUL, s * 1.16], Math.PI / 4);
  } else {
    e.caja(m.estructura, 'tapa', [x, h + 0.4 * PUL, z], [s * 1.12, 0.8 * PUL, s * 1.12], 0);
  }
}

/* ── hoja de porton ───────────────────────────────────────────────────────── */

/**
 * Una hoja: el mismo relleno del vano, con un bastidor alrededor.
 *
 * Un porton no es un trozo de cerca colgado: lleva marco perimetral porque si
 * no se descuelga. Modelarlo importa, es lo primero que se mira de cerca.
 */
function hoja(e, m, mat, est, a, b, alto) {
  var mk = marco(a, b);
  var ancho = mk.largo;
  var tubo = mat === 'vinyl' ? 3 * PUL : 2 * PUL;
  /* El relleno se construye a la altura COMPLETA, no descontando el bastidor:
     descontandolo quedaba una ranura de dos pulgadas entre el rail superior
     del panel y el tubo de arriba, y se leia como una hoja mal montada. Que
     solapen es lo correcto, es como se fabrica. */
  var interior = { u0: tubo, ancho: ancho - 2 * tubo, alto: alto };

  (VANOS[mat] || vanoAluminio)(e, m, est, mk, interior.u0, Math.max(0.5, interior.ancho), interior.alto);

  /* Bastidor. */
  e.caja(m.estructura, 'marco', mk.p(ancho / 2, alto - tubo / 2, 0), [ancho, tubo, tubo * 1.1], mk.rotY);
  e.caja(m.estructura, 'marco', mk.p(ancho / 2, 3 * PUL + tubo / 2, 0), [ancho, tubo, tubo * 1.1], mk.rotY);
  e.caja(m.estructura, 'marco', mk.p(tubo / 2, alto / 2 + 1.5 * PUL, 0), [tubo, alto - 3 * PUL, tubo * 1.1], mk.rotY);
  e.caja(m.estructura, 'marco', mk.p(ancho - tubo / 2, alto / 2 + 1.5 * PUL, 0), [tubo, alto - 3 * PUL, tubo * 1.1], mk.rotY);
}

/* ── cerca completa ───────────────────────────────────────────────────────── */

/**
 * @param opts.mat      clave de material
 * @param opts.estilo   perfil elegido
 * @param opts.alto     en pies
 * @param opts.color    hex del color elegido
 * @param opts.tramos   [{a:[x,z], b:[x,z]}]
 * @param opts.huecos   [{a:[x,z], b:[x,z], tipo:'single'|...}]
 */
export function construir(opts) {
  var mat = opts.mat, est = opts.estilo, alto = opts.alto;
  var vano = VANO[mat] || 6;
  var m = materiales(mat, est, opts.color, vano, alto);
  var e = new Ensamblador();
  var fn = VANOS[mat] || vanoAluminio;

  for (var i = 0; i < opts.tramos.length; i++) {
    var t = opts.tramos[i];
    var mk = marco(t.a, t.b);
    var n = Math.max(1, Math.round(mk.largo / vano));
    var paso = mk.largo / n;
    for (var j = 0; j < n; j++) {
      fn(e, m, est, mk, j * paso, paso, alto);
    }
    /* Postes: uno por junta, y los dos extremos. */
    for (var k = 0; k <= n; k++) {
      var p = mk.p(k * paso, 0, 0);
      poste(e, m, mat, p[0], p[2], alto);
    }
  }

  var huecos = opts.huecos || (opts.hueco ? [opts.hueco] : []);
  for (var h = 0; h < huecos.length; h++) { porton(e, m, mat, est, alto, huecos[h]); }

  return { grupo: e.grupo(), cuenta: e.contar(), materiales: m };
}

/**
 * El porton dentro del hueco, montado segun su tipo.
 *
 * Las hojas batientes se dejan entreabiertas: cerradas y de frente, un porton
 * batiente y uno corredero son indistinguibles, y justo eso es lo que el
 * usuario acaba de elegir.
 */
function porton(e, m, mat, est, alto, h) {
  var mk = marco(h.a, h.b);
  var L = mk.largo;
  var tipo = h.tipo || 'single';
  var altoP = alto;
  /* Correderas y cantilever aparcan la hoja al lado, SIEMPRE hacia dentro de
     la finca: hacia fuera quedaria invadiendo la acera. v positivo apunta a la
     calle en el tramo frontal, de ahi el signo. */
  var DENTRO = -10 * PUL;
  /* Cuanto se aparta la hoja: 1 es del todo (escena de la casa, donde hay que
     ver que es corredera y no batiente) y menos deja el porton cubriendo parte
     del hueco, que es como se fotografia un producto. */
  var fr = h.apertura === undefined ? 1 : h.apertura;

  /* Postes de porton: mas gruesos, son los que aguantan el peso. */
  var pa = mk.p(0, 0, 0), pb = mk.p(L, 0, 0);
  var sec = mat === 'chain-link' ? 3 * PUL : mat === 'vinyl' ? 5 * PUL : 4 * PUL;
  if (mat === 'chain-link') {
    e.tubo(m.estructura, 'postep', pa[0], (altoP + 4 * PUL) / 2, pa[2], sec, altoP + 4 * PUL);
    e.tubo(m.estructura, 'postep', pb[0], (altoP + 4 * PUL) / 2, pb[2], sec, altoP + 4 * PUL);
  } else {
    e.caja(m.estructura, 'postep', [pa[0], (altoP + 4 * PUL) / 2, pa[2]], [sec, altoP + 4 * PUL, sec], 0);
    e.caja(m.estructura, 'postep', [pb[0], (altoP + 4 * PUL) / 2, pb[2]], [sec, altoP + 4 * PUL, sec], 0);
  }

  function girada(u0, u1, ang) {
    /* Gira la hoja sobre su bisagra en u0. */
    var o = mk.p(u0, 0, 0), f = mk.p(u1, 0, 0);
    var dx = f[0] - o[0], dz = f[2] - o[2];
    var c = Math.cos(ang), s = Math.sin(ang);
    return [[o[0], o[2]], [o[0] + dx * c - dz * s, o[2] + dx * s + dz * c]];
  }

  /* h.abierto === false monta las hojas en el plano de la cerca. En la escena
     de la casa van abiertas, que es como se distingue un batiente de un
     corredero; en la vista previa aislada, abiertas parecen dos paneles mas. */
  var ang = h.abierto === false ? 0 : 1;
  if (tipo === 'double') {
    var iz = girada(0, L / 2, -0.42 * ang), de = girada(L, L / 2, 0.42 * ang);
    hoja(e, m, mat, est, iz[0], iz[1], altoP);
    hoja(e, m, mat, est, de[0], de[1], altoP);
  } else if (tipo === 'single') {
    var un = girada(0, L, -0.5 * ang);
    hoja(e, m, mat, est, un[0], un[1], altoP);
  } else if (tipo === 'sliding' || tipo === 'rolling') {
    /* Corredera: la hoja se aparta a un lado, montada sobre el rail. */
    var d = mk.p(L + L * 0.86 * fr, 0, DENTRO), o2 = mk.p(L * 0.86 * fr, 0, DENTRO);
    hoja(e, m, mat, est, [o2[0], o2[2]], [d[0], d[2]], altoP);
    var rail = mk.p(L * (0.5 + 0.9 * fr), 0.5 * PUL, DENTRO);
    e.caja(m.estructura, 'guia', rail, [L * 1.1, 1 * PUL, 4 * PUL], mk.rotY);
    if (tipo === 'rolling') {
      for (var r = 0; r < 2; r++) {
        var c2 = mk.p(L * (0.09 + 0.86 * fr + r * 0.72), 6 * PUL, DENTRO);
        e.pieza('cilindro', m.estructura, 'rueda', c2, [11 * PUL, 2.4 * PUL, 11 * PUL], mk.rotY, Math.PI / 2);
      }
    }
  } else if (tipo === 'cantilever') {
    /* Cantilever: la hoja vuela sin rail en el suelo, con una cola trasera que
       hace de contrapeso. Es exactamente lo que lo diferencia. */
    var o3 = mk.p(L * 0.9 * fr, 0, DENTRO), d3 = mk.p(L * 0.9 * fr + L * 1.5, 0, DENTRO);
    hoja(e, m, mat, est, [o3[0], o3[2]], [d3[0], d3[2]], altoP);
    var v1 = mk.p(L * (0.65 + 0.9 * fr), altoP + 3 * PUL, DENTRO);
    e.caja(m.estructura, 'viga', v1, [L * 1.5, 3.5 * PUL, 3.5 * PUL], mk.rotY);
    for (var t2 = 0; t2 < 2; t2++) {
      var pt = mk.p(L * (0.65 + 0.9 * fr + t2 * 0.55), 0, DENTRO - 2 * PUL);
      e.caja(m.estructura, 'torre', [pt[0], (altoP + 6 * PUL) / 2, pt[2]], [4 * PUL, altoP + 6 * PUL, 4 * PUL], 0);
    }
  }
}

export { VANO };
