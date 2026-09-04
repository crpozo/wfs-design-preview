/* Visualizador 3D: la cerca elegida, montada en una casa de verdad.
 *
 * Se carga solo al pulsar el boton. La escena entera (casa, jardin, texturas y
 * cerca) se genera en el navegador, sin descargar modelos ni imagenes: lo unico
 * que viaja es este archivo.
 *
 * API publica:
 *   window.WFS3D.abrir(estado)   estado = { mat, estilo, alto, colorHex,
 *                                           producto, gate, resumen: [[k,v]] }
 */
import { Scene, PerspectiveCamera, WebGLRenderer, Group, Color, Fog,
         HemisphereLight, DirectionalLight, AmbientLight, Mesh, SphereGeometry,
         MeshBasicMaterial, BackSide, CanvasTexture, PCFSoftShadowMap,
         ACESFilmicToneMapping, SRGBColorSpace, Vector3, PMREMGenerator, PlaneGeometry } from '../vendor/three/three.module.js';
import * as Casa from './casa.js';
import * as Cerca from './cerca.js';

var PUL = 1 / 12;

/* ── cielo ───────────────────────────────────────────────────────────────── */

function cielo() {
  /* Degradado de cielo con nubes procedurales: 512 de ancho para que las
     nubes tengan forma, y una banda entre el horizonte y media altura, que es
     donde se ven desde una calle. Cada nube son varias manchas radiales
     solapadas; el resultado es un cielo de Florida a media tarde. */
  var c = document.createElement('canvas');
  c.width = 1024; c.height = 512;
  var g = c.getContext('2d');
  var grd = g.createLinearGradient(0, 0, 0, 512);
  grd.addColorStop(0, '#3f7fc4');
  grd.addColorStop(0.42, '#8dc0e6');
  grd.addColorStop(0.76, '#cfe2f0');
  grd.addColorStop(1, '#e8e4d8');
  g.fillStyle = grd;
  g.fillRect(0, 0, 1024, 512);
  var semilla = 7;
  function rnd() { semilla = (semilla * 9301 + 49297) % 233280; return semilla / 233280; }
  for (var i = 0; i < 26; i++) {
    /* Banda entre el 30% y el 45% de la altura (justo sobre el horizonte, que
       esta en el 50%) y tamaños contenidos: cerca del cenit la esfera estira
       el mapa y una nube grande se convertia en un lavado blanco. */
    var cx = rnd() * 1024, cy = 155 + rnd() * 75, ancho = 40 + rnd() * 60;
    var manchas = 5 + Math.floor(rnd() * 6);
    for (var k = 0; k < manchas; k++) {
      var mx = cx + (rnd() - 0.5) * ancho, my = cy + (rnd() - 0.5) * ancho * 0.28;
      var r = ancho * (0.18 + rnd() * 0.22);
      var rg = g.createRadialGradient(mx, my, 0, mx, my, r);
      rg.addColorStop(0, 'rgba(255,255,255,' + (0.45 + rnd() * 0.3) + ')');
      rg.addColorStop(0.6, 'rgba(255,255,255,' + (0.18 + rnd() * 0.15) + ')');
      rg.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = rg;
      g.beginPath(); g.arc(mx, my, r, 0, Math.PI * 2); g.fill();
    }
  }
  var t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  var m = new Mesh(new SphereGeometry(600, 32, 20), new MeshBasicMaterial({ map: t, side: BackSide, fog: false }));
  return m;
}

/* ── vistas ──────────────────────────────────────────────────────────────── */

var VISTAS = {
  calle:  { obj: [0, 4, 2],     dist: 88,   azim: 0.42,  polar: 1.24 },
  /* Desde dentro, mirando a lo largo de la cerca hacia el porton de la
     calzada, con la casa a la izquierda. La camara va en el jardin delantero:
     la version anterior caia justo dentro de una palmera. */
  jardin: { obj: [10, 3.5, 26], dist: 44.6, azim: -1.89, polar: 1.447 },
  /* El detalle apunta al porton elegido, no siempre al peatonal. */
  detalle:{ obj: null,          dist: 15,   azim: 0.30,  polar: 1.42 }
};

/* ── traza de la cerca ───────────────────────────────────────────────────── */

/**
 * El perimetro y donde va el hueco del porton.
 *
 * El hueco depende del tipo: un porton peatonal va en el camino a la puerta y
 * uno de dos hojas o corredero en la entrada de coches, porque es el ancho que
 * pide cada uno. Poner todos en el mismo sitio haria que la eleccion no se
 * notara, que es justo lo que se quiere enseñar.
 */
function traza(estado) {
  var L = Casa.LOTE, F = L.frente, X = L.lados, Z = L.fondo;
  var elegido = estado.producto === 'gate' ? (estado.gate || 'single') : null;

  /* Dos huecos, siempre. Una entrada de coches no se tapia, y dejarla cerrada
     era lo primero que delataba que la escena no era real. El porton elegido
     va donde le corresponde por ancho: el peatonal al camino de la puerta, y
     cualquier otro a la calzada. El que no se eligio se monta igual, con el
     mismo material y perfil, porque asi es como se instala de verdad. */
  var peatonal = { a: [-14.5, F], b: [-10.5, F], tipo: 'single' };
  /* El hueco de la calzada se abre al ancho que pida la opcion elegida,
     centrado en la entrada: un porton "a la medida" tiene que verse mas ancho
     que el estandar, si no la eleccion no se nota. */
  var W = (elegido && elegido !== 'single' && estado.ancho) ? estado.ancho : 17;
  var cx = 12;
  var coches   = { a: [cx - W / 2, F], b: [cx + W / 2, F],
                   tipo: (elegido && elegido !== 'single') ? elegido : 'double' };

  var tramos = [
    { a: [-X, F], b: peatonal.a },
    { a: peatonal.b, b: coches.a },
    { a: coches.b, b: [X, F] },
    { a: [-X, F], b: [-X, Z] },
    { a: [X, F], b: [X, Z] },
    { a: [-X, Z], b: [X, Z] }
  ];
  var foco = (elegido && elegido !== 'single') ? coches : peatonal;
  /* Viendo una CERCA, los portones van cerrados y en el plano de la valla:
     abiertos quedaban de canto respecto al sol, la hoja salia el doble de
     oscura que los paneles y parecia otro producto ("cambia todito"). Los
     portones abiertos son para cuando el producto elegido ES un porton, que
     ahi hay que ver como abre. */
  if (!elegido) { peatonal.abierto = false; coches.abierto = false; }
  return {
    tramos: tramos, huecos: [peatonal, coches],
    foco: { x: (foco.a[0] + foco.b[0]) / 2, z: F, ancho: foco.b[0] - foco.a[0] }
  };
}

function altoPies(txt) {
  var n = parseFloat(String(txt || '6').replace(/[^0-9.]/g, ''));
  return isFinite(n) && n > 0 ? n : 6;
}

/* ── visor ───────────────────────────────────────────────────────────────── */

function Visor(lienzo) {
  this.lienzo = lienzo;
  this.escena = new Scene();
  this.escena.background = new Color('#8dc0e6');
  /* Niebla del color del horizonte, mas cercana: es lo que funde el campo y
     la arboleda con el cielo en vez de dejar un borde. */
  this.escena.fog = new Fog(new Color('#cfe2f0'), 90, 360);
  this.escena.add(cielo());

  this.camara = new PerspectiveCamera(42, 16 / 9, 0.5, 900);

  this.r = new WebGLRenderer({ canvas: lienzo, antialias: true, powerPreference: 'high-performance' });
  this.r.shadowMap.enabled = true;
  this.r.shadowMap.type = PCFSoftShadowMap;
  this.r.toneMapping = ACESFilmicToneMapping;
  this.r.toneMappingExposure = 1.12;
  this.r.outputColorSpace = SRGBColorSpace;

  /* Luz: sol de media tarde. Un cenital plano aplana los perfiles y hace que
     un picket cuadrado y uno redondo se vean iguales; con el sol bajo cada
     barrote proyecta su propia sombra y el perfil se lee. */
  var sol = new DirectionalLight(0xfff2df, 2.7);
  sol.position.set(-62, 74, 58);
  sol.castShadow = true;
  /* Sombras: el encuadre se ciñe al lote (antes cubria 190 pies de lado y
     medio mapa se iba en cesped vacio), y en escritorio el mapa sube a 4096.
     En tactil se queda en 2048: 64 MB de mapa de profundidad en un movil
     es pedir un cierre de pestaña. */
  var tactil = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  sol.shadow.mapSize.set(tactil ? 2048 : 4096, tactil ? 2048 : 4096);
  var s = sol.shadow.camera;
  s.left = -64; s.right = 64; s.top = 64; s.bottom = -64; s.near = 1; s.far = 260;
  sol.shadow.bias = -0.0006;
  sol.shadow.normalBias = 0.03;
  this.escena.add(sol);
  this.escena.add(new HemisphereLight(0xbcd8f0, 0x6d7a52, 0.7));
  this.escena.add(new AmbientLight(0xffffff, 0.1));

  /* Mapa de entorno: cielo arriba, suelo verde abajo, generado UNA vez a 256px
     a partir del mismo cielo de la escena. Es lo que hace que el PBR deje de
     verse plano: reflejos en cristales y agua, y luz de cielo/suelo en todo
     lo demas. Cuesta unos milisegundos y nada de descarga. */
  var pm = new PMREMGenerator(this.r);
  var env = new Scene();
  env.add(cielo());
  var suelo = new Mesh(new PlaneGeometry(4000, 4000), new MeshBasicMaterial({ color: new Color('#6f8a4a') }));
  suelo.rotation.x = -Math.PI / 2; suelo.position.y = -2;
  env.add(suelo);
  this.escena.environment = pm.fromScene(env, 0.04).texture;
  this.escena.environmentIntensity = 0.55;
  pm.dispose();

  this.mundo = new Group();
  this.escena.add(this.mundo);
  var casa = Casa.construir();
  this.mundo.add(casa.grupo);
  this.cercaGrupo = null;

  this.obj = new Vector3(0, 4, 2);
  this.dist = 88; this.azim = 0.42; this.polar = 1.24;
  this.destino = null;
  this._colocar();
  this._raton();
}

Visor.prototype._colocar = function () {
  var sp = Math.sin(this.polar), cp = Math.cos(this.polar);
  this.camara.position.set(
    this.obj.x + this.dist * sp * Math.sin(this.azim),
    this.obj.y + this.dist * cp,
    this.obj.z + this.dist * sp * Math.cos(this.azim)
  );
  this.camara.lookAt(this.obj);
};

/** Orbita, zoom y desplazamiento, escritos aqui para no traer otra libreria. */
Visor.prototype._raton = function () {
  var v = this, l = this.lienzo, arrastre = null;

  function baja(e) {
    arrastre = { x: e.clientX, y: e.clientY, pan: e.button === 2 || e.shiftKey };
    l.setPointerCapture && l.setPointerCapture(e.pointerId);
    v.destino = null;
  }
  function mueve(e) {
    if (!arrastre) { return; }
    var dx = e.clientX - arrastre.x, dy = e.clientY - arrastre.y;
    arrastre.x = e.clientX; arrastre.y = e.clientY;
    if (arrastre.pan) {
      /* El desplazamiento va en el plano de la camara, escalado con la
         distancia: si no, de cerca vuela y de lejos no se mueve. */
      var k = v.dist * 0.0016;
      var der = new Vector3().setFromMatrixColumn(v.camara.matrix, 0);
      var arr = new Vector3().setFromMatrixColumn(v.camara.matrix, 1);
      v.obj.addScaledVector(der, -dx * k).addScaledVector(arr, dy * k);
      v.obj.y = Math.max(0.5, Math.min(40, v.obj.y));
    } else {
      v.azim -= dx * 0.006;
      v.polar = Math.max(0.22, Math.min(1.52, v.polar - dy * 0.005));
    }
    v._colocar();
  }
  function sube(e) { arrastre = null; l.releasePointerCapture && l.releasePointerCapture(e.pointerId); }

  l.addEventListener('pointerdown', baja);
  l.addEventListener('pointermove', mueve);
  l.addEventListener('pointerup', sube);
  l.addEventListener('pointercancel', sube);
  l.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  l.addEventListener('wheel', function (e) {
    e.preventDefault();
    v.destino = null;
    v.dist = Math.max(7, Math.min(210, v.dist * (1 + Math.sign(e.deltaY) * 0.11)));
    v._colocar();
  }, { passive: false });

  /* Tactil: un dedo orbita, dos hacen zoom. */
  var pinza = null;
  l.addEventListener('touchstart', function (e) {
    if (e.touches.length === 2) {
      pinza = Math.hypot(e.touches[0].clientX - e.touches[1].clientX,
                         e.touches[0].clientY - e.touches[1].clientY);
    }
  }, { passive: true });
  l.addEventListener('touchmove', function (e) {
    if (e.touches.length === 2 && pinza) {
      var d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX,
                         e.touches[0].clientY - e.touches[1].clientY);
      v.dist = Math.max(7, Math.min(210, v.dist * (pinza / d)));
      pinza = d;
      v.destino = null;
      v._colocar();
      e.preventDefault();
    }
  }, { passive: false });
  l.addEventListener('touchend', function () { pinza = null; }, { passive: true });
};

/** Rehace solo la cerca; la casa y el jardin se quedan. */
Visor.prototype.cerca = function (estado) {
  if (this.cercaGrupo) {
    this.mundo.remove(this.cercaGrupo);
    this.cercaGrupo.traverse(function (o) { if (o.isInstancedMesh || o.isMesh) { o.geometry.dispose && o.geometry.dispose(); } });
    this.cercaGrupo = null;
  }
  var t = traza(estado);
  var res = Cerca.construir({
    mat: estado.mat, estilo: estado.estilo, alto: altoPies(estado.alto),
    color: estado.colorHex, marco: estado.marco, tramos: t.tramos, huecos: t.huecos
  });
  this.foco = t.foco;
  this.cercaGrupo = res.grupo;
  this.mundo.add(this.cercaGrupo);
  return res.cuenta;
};

Visor.prototype.vista = function (nombre) {
  var p = VISTAS[nombre];
  if (!p) { return; }
  var o = p.obj, d = p.dist, az = p.azim;
  if (!o) {
    /* Detalle: se aleja con el ancho del hueco. Con la distancia fija de un
       porton peatonal, uno de calzada de 17 pies dejaba la camara DENTRO del
       hueco, mirando la casa a traves de el en vez de mirar el porton. Y se
       desplaza en azimut para verlo de tres cuartos, no de frente. */
    var f = this.foco || { x: -12.5, z: 26, ancho: 4 };
    o = [f.x, Math.min(4, 2 + f.ancho * 0.12), f.z];
    d = Math.max(15, Math.min(40, f.ancho * 1.8 + 8));
    az = f.ancho > 8 ? 0.72 : 0.3;
  }
  this.destino = { obj: new Vector3(o[0], o[1], o[2]), dist: d, azim: az, polar: p.polar };
};

Visor.prototype.medir = function (ancho, alto) {
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  this.r.setPixelRatio(dpr);
  this.r.setSize(ancho, alto, false);
  this.camara.aspect = ancho / Math.max(1, alto);
  this.camara.updateProjectionMatrix();
};

Visor.prototype.pintar = function () {
  if (this.destino) {
    /* Transicion entre vistas: interpolacion exponencial, que frena sola. */
    var d = this.destino, k = 0.12, fin = true;
    this.obj.lerp(d.obj, k);
    this.dist += (d.dist - this.dist) * k;
    this.azim += (d.azim - this.azim) * k;
    this.polar += (d.polar - this.polar) * k;
    if (Math.abs(d.dist - this.dist) > 0.4 || this.obj.distanceTo(d.obj) > 0.4 ||
        Math.abs(d.azim - this.azim) > 0.01 || Math.abs(d.polar - this.polar) > 0.01) { fin = false; }
    if (fin) { this.destino = null; }
    this._colocar();
  }
  this.r.render(this.escena, this.camara);
};

Visor.prototype.soltar = function () {
  /* Cada apertura crea un renderer nuevo. dispose() suelta los recursos de
     three pero NO el contexto WebGL: el navegador solo admite unos 16 vivos, y
     abrir y cerrar la ventana una docena de veces dejaba de pintar. Hay que
     pedir la perdida del contexto a mano, y de paso soltar geometrias y
     materiales, que tampoco se liberan solos. */
  this.escena.traverse(function (o) {
    if (o.geometry) { o.geometry.dispose(); }
    var m = o.material;
    if (!m) { return; }
    var lista = Array.isArray(m) ? m : [m];
    for (var i = 0; i < lista.length; i++) {
      var mm = lista[i];
      if (mm.map) { mm.map.dispose(); }
      if (mm.alphaMap) { mm.alphaMap.dispose(); }
      mm.dispose();
    }
  });
  this.r.dispose();
  var gl = this.r.getContext && this.r.getContext();
  var ext = gl && gl.getExtension && gl.getExtension('WEBGL_lose_context');
  if (ext) { ext.loseContext(); }
};

/* ── ventana ─────────────────────────────────────────────────────────────── */

var MARCADO =
  '<div class="v3d__caja" role="dialog" aria-modal="true" aria-label="3D view">' +
    '<header class="v3d__top">' +
      '<div class="v3d__id"><span class="v3d__eti"></span><h2 class="v3d__tit"></h2></div>' +
      '<button class="v3d__x" type="button" aria-label="Close">✕</button>' +
    '</header>' +
    '<div class="v3d__lienzo"><canvas></canvas>' +
      '<div class="v3d__cargando"><span></span>Building the scene…</div>' +
    '</div>' +
    '<footer class="v3d__pie">' +
      '<div class="v3d__vistas">' +
        '<button type="button" data-vista="calle" class="is-on">From the street</button>' +
        '<button type="button" data-vista="jardin">In the yard</button>' +
        '<button type="button" data-vista="detalle">Close up</button>' +
      '</div>' +
      '<dl class="v3d__ficha"></dl>' +
      '<p class="v3d__ayuda">Drag to look around · scroll to zoom · pinch on touch</p>' +
    '</footer>' +
  '</div>';

var estado = { capa: null, visor: null, lazo: 0, obs: null };

function cerrar() {
  if (!estado.capa) { return; }
  cancelAnimationFrame(estado.lazo);
  if (estado.obs) { estado.obs.disconnect(); estado.obs = null; }
  if (estado.visor) { estado.visor.soltar(); estado.visor = null; }
  estado.capa.remove();
  estado.capa = null;
  document.documentElement.classList.remove('v3d-abierto');
  document.removeEventListener('keydown', tecla);
}

function tecla(e) { if (e.key === 'Escape') { cerrar(); } }

/** Punto de entrada: abre la ventana y monta la escena. */
export function abrir(est) {
  cerrar();
  est = est || {};
  var capa = document.createElement('div');
  capa.className = 'v3d';
  capa.innerHTML = MARCADO;
  document.body.appendChild(capa);
  document.documentElement.classList.add('v3d-abierto');
  estado.capa = capa;

  capa.querySelector('.v3d__eti').textContent = est.etiqueta || '3D view';
  capa.querySelector('.v3d__tit').textContent = est.titulo || 'Your fence, on a real home';
  capa.querySelector('.v3d__ficha').innerHTML = (est.resumen || []).map(function (f) {
    return '<dt>' + f[0] + '</dt><dd>' + f[1] + '</dd>';
  }).join('');

  capa.querySelector('.v3d__x').addEventListener('click', cerrar);
  capa.addEventListener('mousedown', function (e) { if (e.target === capa) { cerrar(); } });
  document.addEventListener('keydown', tecla);

  var caja = capa.querySelector('.v3d__lienzo');
  var lienzo = caja.querySelector('canvas');

  /* Se monta un frame despues para que el navegador pinte antes la ventana y
     el "Construyendo la escena" llegue a verse: generar la casa y unos cuantos
     miles de piezas bloquea el hilo un instante. */
  var montado = false;
  function montar() {
    if (montado) { return; }
    montado = true;
    var v;
    try {
      v = new Visor(lienzo);
    } catch (err) {
      caja.querySelector('.v3d__cargando').textContent =
        'This browser cannot show the 3D view.';
      return;
    }
    estado.visor = v;
    v.cerca(est);
    v.vista('calle');

    function medir() {
      var r = caja.getBoundingClientRect();
      /* Con la pestaña en segundo plano el rectangulo mide 0 y el lienzo se
         quedaria en los 300x150 por defecto. Se cae a 16:9 para que lo que se
         renderice tenga sentido cuando la pestaña vuelva al frente. */
      var w = r.width > 0 ? r.width : 1280;
      var h = r.height > 0 ? r.height : 720;
      v.medir(w, h);
    }
    medir();
    estado.obs = new ResizeObserver(medir);
    estado.obs.observe(caja);

    capa.querySelectorAll('[data-vista]').forEach(function (b) {
      b.addEventListener('click', function () {
        capa.querySelectorAll('[data-vista]').forEach(function (o) { o.classList.remove('is-on'); });
        b.classList.add('is-on');
        v.vista(b.dataset.vista);
      });
    });

    caja.querySelector('.v3d__cargando').remove();
    (function lazo() {
      estado.lazo = requestAnimationFrame(lazo);
      v.pintar();
    })();
    /* Con la pestaña oculta rAF no corre y el lazo no arranca: se pinta un
       fotograma a mano para que al volver no se vea el lienzo en blanco. */
    v.pintar();
  }
  /* Se monta un frame despues para que la ventana llegue a pintarse antes de
     que generar la escena bloquee el hilo. Si rAF esta congelado (pestaña en
     segundo plano) el temporizador toma el relevo. */
  requestAnimationFrame(montar);
  setTimeout(montar, 90);
}

export { cerrar, Visor, traza, altoPies };

window.WFS3D = {
  abrir: abrir, cerrar: cerrar,
  /* Asa para pruebas: deja pintar un fotograma suelto y mirar la escena sin
     depender del lazo de animacion. */
  visor: function () { return estado.visor; },
  pintar: function () { if (estado.visor) { estado.visor.pintar(); } }
};
