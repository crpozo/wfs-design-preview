/* Configurador paso a paso, para cercas y para portones.
   Todo lo que ofrece sale de lo que existe de verdad: las imagenes de
   assets/profiles y assets/, y las fichas tecnicas de assets/specs. Cuando una
   combinacion tiene plano, se ofrece; cuando no, se dice. */
(function () {
  /* Modulo montable. Antes era una pagina entera; ahora se instancia dentro de
     cualquier contenedor y se puede fijar el material o el tipo de porton, para
     que en la pagina del aluminio solo se vean variantes de aluminio. */

  /* ── Materiales ──────────────────────────────────────────────────────────
     styles.img es la clave de union con las fichas de material del sitio:
     alli las etiquetas son otras ("3-Rail" frente a "3-Rail Rake Bottom") y la
     imagen es lo unico que coincide siempre.
     slug es la parte que aparece en el nombre de la ficha tecnica. */
  var MAT = {
    aluminum: {
      name: 'Aluminum', tag: 'Powder-coat · 6063-T6', key: 'alum',
      styleLabel: 'Profile',
      styles: [
        { label: '2-Rail Smooth Bottom',      img: 'aluminum-2-rail-smooth', slug: '2rail-smooth-bottom',     sub: 'Flush bottom rail, clean line' },
        { label: '2-Rail Smooth, 3" Spacing', img: 'aluminum-2-rail-smooth', slug: '2rail-smooth-bottom-3in', sub: 'Tighter picket spacing' },
        { label: '3-Rail Rake Bottom',        img: 'aluminum-3-rail-rake',   slug: '3rail-rake-bottom',       sub: 'Pickets extend past the bottom rail' },
        { label: '3-Rail Puppy Picket',       img: 'aluminum-puppy-picket',  slug: '3rail-puppy-picket',      sub: 'Extra pickets low down, for pets' },
        { label: 'Pool Code',                 img: 'aluminum-pool-code',     slug: null, sub: 'Non-climbable, FBC barrier' },
        { label: 'Spear Top',                 img: 'aluminum-spear-top',     slug: null, sub: 'Ornamental spear finials' },
        { label: '4-Rail Custom',             img: 'aluminum-custom',        slug: null, sub: 'Taller runs and custom configurations' }
      ],
      heights: ["4'", "5'", "6'"],
     
      colors: [ { label: 'Black', hex: '#1c1c1c' }, { label: 'Bronze', hex: '#4a3728' }, { label: 'White', hex: '#f2f2ee' } ],
      /* El grado (residencial o comercial) se quito del configurador: no cambia
         nada de lo que se ve, solo el grosor del picket, y obligaba a decidir
         algo tecnico antes de poder pedir precio. La ficha tecnica que se
         ofrece al final prueba primero la residencial, que es la habitual. */
      grades: []
    },
    'chain-link': {
      name: 'Chain Link', tag: 'Galvanized + vinyl-coated', key: 'chainlink',
      styleLabel: 'Finish',
      styles: [
        { label: 'Galvanized',       img: 'chainlink-galvanized',  slug: null, sub: 'ASTM A392 zinc coat' },
        { label: 'Black PVC-coated', img: 'chainlink-black',       slug: null, sub: 'Reads cleaner on residential' },
        { label: 'Green PVC-coated', img: 'chainlink-green',       slug: null, sub: 'Blends into landscaping' },
        { label: 'Heavy Gauge',      img: 'chainlink-heavy-gauge', slug: null, sub: 'For industrial perimeters' }
      ],
      heights: ["4'", "5'", "6'", "8'"], colors: [], grades: []
    },
    vinyl: {
      name: 'Vinyl / PVC', tag: 'Catalyst-extruded PVC', key: 'vinyl',
      styleLabel: 'Profile',
      styles: [
        { label: 'Privacy',      img: 'vinyl-privacy',      slug: null, sub: 'Solid panel, no gaps' },
        { label: 'Semi-Privacy', img: 'vinyl-semi-privacy', slug: null, sub: 'Airflow with partial screening' },
        { label: 'Picket',       img: 'vinyl-picket',       slug: null, sub: 'Open front-yard look' },
        { label: 'Ranch Rail',   img: 'vinyl-ranch-rail',   slug: null, sub: 'Two or three rail, acreage' }
      ],
      heights: ["4'", "5'", "6'"],
      colors: [ { label: 'White', hex: '#f2f2ee' }, { label: 'Tan', hex: '#d6c9ae' }, { label: 'Gray', hex: '#8b8b88' } ],
      grades: []
    },
    metal: {
      name: 'Metal / DuraFence', tag: 'Aluminum board privacy', key: 'metal',
      styleLabel: 'Style',
      styles: [
        { label: 'Modern',   img: 'metal-modern',   slug: null, sub: 'Wide horizontal boards' },
        { label: 'Original', img: 'metal-original', slug: null, sub: 'Classic board profile' },
        { label: 'P1',       img: 'metal-p1',       slug: null, sub: 'Narrow slat pattern' }
      ],
      heights: ["6'", "8'"],
      colors: [ { label: 'White', hex: '#f2f2ee' }, { label: 'Black', hex: '#1c1c1c' }, { label: 'Bronze', hex: '#4a3728' }, { label: 'Woodgrain', hex: '#7a5c3e' } ],
      grades: []
    },
    ecfence: {
      name: 'EC Fence', tag: 'Self-mating galvanized steel', key: 'ecfence',
      styleLabel: 'Color',
      styles: [
        { label: 'Bronze',        img: 'ecfence-bronze', slug: null, sub: 'Warm dark finish' },
        { label: 'White',         img: 'ecfence-white',  slug: null, sub: 'Bright coastal finish' },
        { label: 'Matching Gate', img: 'ecfence-gate',   slug: null, sub: 'Gate built to match the run' }
      ],
      heights: ["6'"], colors: [], grades: []
    }
  };

  /* ── Tipos de porton ─────────────────────────────────────────────────── */
  var GATES = [
    { id: 'single',     label: 'Single Swing',   img: 'https://crpozo.github.io/wfs-design-preview/assets/gate-single-swing.jpg', sub: 'Walk and entry gates' },
    { id: 'double',     label: 'Double Swing',   img: 'https://crpozo.github.io/wfs-design-preview/assets/gate-double.jpg',       sub: 'Driveways and wide openings' },
    { id: 'sliding',    label: 'Sliding',        img: 'https://crpozo.github.io/wfs-design-preview/assets/gate-sliding.jpg',      sub: 'Track-mounted, tight driveways' },
    { id: 'cantilever', label: 'Cantilever',     img: 'https://crpozo.github.io/wfs-design-preview/assets/gate-cantilever.jpg',   sub: 'No ground track, up to 30 ft' },
    { id: 'rolling',    label: 'Rolling',        img: 'https://crpozo.github.io/wfs-design-preview/assets/gate-rolling.jpg',      sub: 'Rubber wheels, uneven ground' }
  ];


  /* Variantes de color de las FOTOS de porton, en assets/gates/tinted.
     Es la misma foto con el panel repintado, no otra foto: al cambiar el color
     se ve el mismo porton pintado de otro color.
     Las genera wordpress-theme/tools/tint-gates.py.
     Falta a proposito pvc-privacy-cantilever-gate-white: en esa foto el cielo,
     las nubes, el vinilo y el hormigon comparten tono y no hay umbral que
     separe la valla. Haria falta una foto de estudio de ese porton. */
  var TINTADO_PORTON = {
    'DOUBLE_GATE-gray': 1,
    'DOUBLE_GATE-tan': 1,
    'DOUBLE_GATE-white': 1,
    'gate-single-custom-pvc-gray': 1,
    'gate-single-custom-pvc-tan': 1,
    'gate-single-custom-pvc-white': 1,
    'gate-single-matching-ecfence-black': 1,
    'gate-single-matching-ecfence-bronze': 1,
    'gate-single-matching-ecfence-white': 1,
    'gate-single-matching-ecfence-woodgrain': 1,
    'pvc-gate-sand-gray': 1,
    'pvc-gate-sand-tan': 1,
    'pvc-gate-sand-white': 1
  };

  /* ── fotos de porton ──────────────────────────────────────────────────────
     En una pagina de porton no puede salir un panel de cerca: el cliente esta
     comprando la hoja, no el tramo. Aqui esta lo que hay fotografiado de
     verdad en assets, y se busca de lo mas concreto a lo mas general:
     tipo+acabado, acabado, tipo, y por ultimo el del material.
     Ojo con las genericas: gate-single-swing / sliding / cantilever / rolling
     son de chain link, y gate-double es de vinilo blanco. Por eso van dentro
     del material que les toca y no como comodin de todos. */
  var PORTONES = {
    aluminum: {
      def: 'https://crpozo.github.io/wfs-design-preview/assets/projects/alum-4-rail-smooth-bottom-custom-gate-black.jpg'
    },
    'chain-link': {
      'sliding|Galvanized':          'https://crpozo.github.io/wfs-design-preview/assets/gate-sliding.jpg',
      'rolling|Galvanized':          'https://crpozo.github.io/wfs-design-preview/assets/gate-rolling.jpg',
      'cantilever|Black PVC-coated': 'https://crpozo.github.io/wfs-design-preview/assets/gate-cantilever.jpg',
      'Galvanized':                  'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-swing-gate-galv-4.jpg',
      'Black PVC-coated':            'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-gate-black.jpg',
      single:     'https://crpozo.github.io/wfs-design-preview/assets/gate-single-swing.jpg',
      sliding:    'https://crpozo.github.io/wfs-design-preview/assets/gate-sliding.jpg',
      cantilever: 'https://crpozo.github.io/wfs-design-preview/assets/gate-cantilever.jpg',
      rolling:    'https://crpozo.github.io/wfs-design-preview/assets/gate-rolling.jpg',
      def:        'https://crpozo.github.io/wfs-design-preview/assets/projects/cl-gate-black.jpg'
    },
    vinyl: {
      'cantilever|White': 'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-cantilever-gate-white.jpg',
      'double|White':     'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-double-gate-white.jpg',
      'White':            'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-gate-white.jpg',
      'Tan':              'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-gate-sand.jpg',
      def:                'https://crpozo.github.io/wfs-design-preview/assets/projects/pvc-privacy-gate-white.jpg'
    },
    /* DuraFence es tabla horizontal, igual que esta hoja. No hay foto propia
       de porton DuraFence; esta se le parece mucho mas que cualquier picket. */
    metal:   { def: 'https://crpozo.github.io/wfs-design-preview/assets/projects/gate-single-matching-ecfence.webp' },
    ecfence: { def: 'https://crpozo.github.io/wfs-design-preview/assets/projects/gate-single-matching-ecfence.webp' }
  };

  /**
   * La mejor foto de porton para un material.
   *
   * El acabado es s.color donde existe, y s.style donde el color ES el paso de
   * estilo (chain link, EC Fence).
   */
  function fotoPorton(mat, tipo, acabado) {
    var tabla = PORTONES[mat];
    if (!tabla) { return null; }
    /* El TIPO manda sobre el acabado: en la pagina de Cantilever, buscar
       primero por acabado devolvia una foto de porton batiente galvanizado,
       que es cualquier cosa menos un cantilever. */
    var claves = [tipo + '|' + acabado, tipo, acabado, 'def'];
    for (var i = 0; i < claves.length; i++) {
      if (claves[i] && tabla[claves[i]]) { return tabla[claves[i]]; }
    }
    return null;
  }

  /* Fichas que existen en assets/specs. Si la combinacion no esta, se dice en
     vez de ofrecer un enlace roto. */
  var SHEETS = {
    'alum-4ft-com-2rail-smooth-bottom-3in-panel': 1, 'alum-4ft-res-2rail-smooth-bottom-3in-panel': 1,
    'alum-4ft-res-2rail-smooth-bottom-panel': 1, 'alum-4ft-res-3rail-puppy-picket-panel': 1,
    'alum-4ft-res-3rail-rake-bottom-panel': 1, 'alum-5ft-res-3rail-rake-bottom-panel': 1,
    'alum-6ft-com-3rail-rake-bottom-panel': 1,
    'alum-4x4-com-2rail-smooth-bottom-3in-gate': 1, 'alum-4x4-res-2rail-smooth-bottom-gate': 1,
    'alum-4x4-res-3rail-puppy-picket-gate': 1, 'alum-4x4-res-3rail-rake-bottom-gate': 1,
    'alum-4x5-com-2rail-smooth-bottom-3in-gate': 1, 'alum-4x5-res-2rail-smooth-bottom-gate': 1,
    'alum-4x5-res-3rail-puppy-picket-gate': 1, 'alum-4x5-res-3rail-rake-bottom-gate': 1,
    'alum-5x4-res-3rail-rake-bottom-gate': 1, 'alum-5x5-res-3rail-rake-bottom-gate': 1,
    'alum-6x4-com-3rail-rake-bottom-gate': 1, 'alum-6x5-com-3rail-rake-bottom-gate': 1,
    'chainlink-gate-single': 1, 'chainlink-gate-double': 1, 'chainlink-gate-cantilever': 1
  };


  /* ── Variantes de color ──────────────────────────────────────────────────
     Generadas desde el MISMO dibujo del perfil, cambiandole solo el color: en
     assets/profiles/tinted, una por perfil y acabado. Asi al cambiar de color
     no salta a otra escena, se ve la misma valla pintada de otro color.
     Los claros van sobre fondo gris, que en blanco sobre blanco no se veria. */
  var TINTED = {
    'aluminum-2-rail-smooth-black': 1,
    'aluminum-2-rail-smooth-bronze': 1,
    'aluminum-2-rail-smooth-white': 1,
    'aluminum-3-rail-rake-black': 1,
    'aluminum-3-rail-rake-bronze': 1,
    'aluminum-3-rail-rake-white': 1,
    'aluminum-custom-black': 1,
    'aluminum-custom-bronze': 1,
    'aluminum-custom-white': 1,
    'aluminum-pool-code-black': 1,
    'aluminum-pool-code-bronze': 1,
    'aluminum-pool-code-white': 1,
    'aluminum-puppy-picket-black': 1,
    'aluminum-puppy-picket-bronze': 1,
    'aluminum-puppy-picket-white': 1,
    'aluminum-spear-top-black': 1,
    'aluminum-spear-top-bronze': 1,
    'aluminum-spear-top-white': 1,
    'metal-modern-black': 1,
    'metal-modern-bronze': 1,
    'metal-modern-white': 1,
    'metal-modern-woodgrain': 1,
    'metal-original-black': 1,
    'metal-original-bronze': 1,
    'metal-original-white': 1,
    'metal-original-woodgrain': 1,
    'metal-p1-black': 1,
    'metal-p1-bronze': 1,
    'metal-p1-white': 1,
    'metal-p1-woodgrain': 1,
    'vinyl-picket-gray': 1,
    'vinyl-picket-white': 1,
    'vinyl-privacy-gray': 1,
    'vinyl-privacy-white': 1,
    'vinyl-ranch-rail-gray': 1,
    'vinyl-ranch-rail-white': 1,
    'vinyl-semi-privacy-gray': 1,
    'vinyl-semi-privacy-white': 1
  };
  var COLOR_SLUG = { 'Black':'black', 'Bronze':'bronze', 'White':'white',
                     'Woodgrain':'woodgrain', 'Gray':'gray', 'Tan':'tan' };
  /* Los acabados claros se generaron sobre gris para que se vieran; el resto
     sobre claro. El marco copia ese fondo, asi al escalar el dibujo por altura
     no se ve el borde de la imagen. */
  /* Fondo del marco = fondo real de la imagen que se este mostrando, medido en
     el archivo. Sin igualarlo se veia el recuadro de la imagen recortado dentro
     del marco. Las originales vienen sobre blanco puro; las variantes se
     generaron sobre gris claro, y las blancas sobre gris medio para que la
     pieza blanca se distinga. */
  var FONDO_ORIGINAL = '#ffffff';
  var FONDO_TINTE    = '#ebebeb';
  var FONDO_BLANCO   = '#787e8a';
  var FONDO_FOTO     = '#e9eaec';


  var ORDER = ['aluminum', 'chain-link', 'vinyl', 'metal', 'ecfence'];

  /* Que material se vende para cada tipo de porton. Sale del texto de cada
     pagina de porton (la tarjeta de materiales), pero vive AQUI y no alli para
     que el configurador suelto de fence-builder.html aplique la misma regla:
     alli no llega nada de page-gate.jsx y ofrecia aluminio para un rolling.
       sliding y cantilever: "chain link, vinyl, metal, and EC Fence" - sin aluminio
       rolling: "chain link is the recommended build" */
  var GATE_MATS = {
    single:     ORDER,
    double:     ORDER,
    sliding:    ['chain-link', 'vinyl', 'metal', 'ecfence'],
    cantilever: ['chain-link', 'vinyl', 'metal', 'ecfence'],
    rolling:    ['chain-link']
  };

  /* El visualizador 3D pesa medio mega: no se descarga hasta que alguien
     pulsa el boton, y una sola vez por pagina aunque haya varios
     configuradores. La ruta la puede fijar el tema de WordPress, donde el
     archivo no cuelga de la raiz del sitio. */
  var carga3D = null;
  function cargar3D() {
    if (window.WFS3D) { return Promise.resolve(); }
    if (carga3D) { return carga3D; }
    carga3D = new Promise(function (ok, mal) {
      var sc = document.createElement('script');
      sc.src = window.WFS3D_SRC || 'fence-3d.js';
      sc.onload = function () { window.WFS3D ? ok() : mal(new Error('sin WFS3D')); };
      sc.onerror = function () { carga3D = null; mal(new Error('no carga')); };
      document.head.appendChild(sc);
    });
    return carga3D;
  }

  var ESQUELETO =
    '<div class="bld__grid">' +
      '<div class="bld__steps"></div>' +
      '<aside class="bld__stage">' +
        '<div class="bld__frame">' +
          '<span class="bld__badge"></span>' +
          '<span class="bld__media"><img class="bld__img" alt="Fence preview" decoding="async"></span>' +
          '<div class="bld__escala"></div>' +
        '</div>' +
        '<div class="bld__spec"><dl></dl></div>' +
        '<div class="bld__acciones">' +
          '<button class="bld__3d" type="button" disabled>' +
            '<span class="bld__3d-ico" aria-hidden="true"></span>View in 3D' +
          '</button>' +
          '<p class="bld__3d-pie">See it on a real home, with the yard around it.</p>' +
        '</div>' +
      '</aside>' +
    '</div>';

  function crear(root, opts) {
  opts = opts || {};
  root.innerHTML = ESQUELETO;

  /* Lo que viene fijado por la pagina no se pregunta. */
  /* Fijado = no se puede cambiar y desaparece como paso. Preseleccionado =
     viene puesto pero sigue a la vista. En una pagina de porton el tipo va
     PRESELECCIONADO, no fijado: el primer paso de un porton es que porton es,
     no de que esta hecho. Fijarlo dejaba "Material" como paso 01. */
  var FIJO = { product: opts.product || null, mat: opts.material || null, gate: opts.gate || null };

  /* El paso que la pagina ya contesta llega PLEGADO: estas en la ficha de
     Single Swing, no hace falta que el paso 01 ocupe cinco tarjetas para
     decirtelo. Se abre con "Change". */
  var PLEGABLE = opts.gateInicial ? 'gate' : null;
  var reabierto = {};

  var s = { product: FIJO.product, gate: FIJO.gate || opts.gateInicial || null, mat: FIJO.mat,
            opcion: null, ancho: null, marco: null, style: null, height: null, color: null };

  /* Que ofrece cada tipo de porton, segun lo que dice SU pagina: las tarjetas
     de obra y los materiales que se venden para ese porton. Un corredero no
     lleva aluminio y un rolling es chain link, y ofrecerlos era prometer algo
     que la pagina no vende. */
  var GATES_CFG = opts.gates || {};
  function cfg() { return GATES_CFG[s.gate] || {}; }
  /* Las tarjetas de obra son contenido de la pagina y llegan desde ella. */
  function opciones() { return cfg().opciones || []; }
  function matsPermitidos() {
    var lista = GATE_MATS[s.gate];
    if (!lista || !lista.length) { return ORDER; }
    return ORDER.filter(function (id) { return lista.indexOf(id) !== -1; });
  }

  /* Un porton sin tarjetas arranca ya con su material por defecto, para que
     Height y Color tengan de donde salir sin pedirle nada al visitante. Va
     AQUI y no junto a la declaracion de s: alli GATES_CFG todavia no tiene
     valor y cfg() reventaba. */
  if (s.product === 'gate' && s.gate && !s.mat && !opciones().length) {
    s.mat = cfg().matDefecto || 'chain-link';
    s.style = MAT[s.mat] ? MAT[s.mat].styles[0].label : null;
  }

  var $ = function (clase) { return root.querySelector('.bld__' + clase); };

  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  var m = function () { return s.mat ? MAT[s.mat] : null; };
  var styleObj = function () {
    return m() ? (m().styles.filter(function (x) { return x.label === s.style; })[0] || null) : null; };
  var gateObj = function () { return GATES.filter(function (g) { return g.id === s.gate; })[0] || null; };

  /* Se puede llegar desde una tarjeta:
     ?m=aluminum&p=aluminum-3-rail-rake   (perfil de una pagina de material)
     ?g=double                            (tipo de porton) */
  (function precargar() {
    var q = new URLSearchParams(location.search);
    var g = q.get('g'), mat = q.get('m'), img = q.get('p');
    if (g && GATES.filter(function (x) { return x.id === g; })[0]) {
      s.product = 'gate'; s.gate = g;
    } else if (mat && MAT[mat]) {
      s.product = 'fence'; s.mat = mat;
      if (img) {
        var enc = MAT[mat].styles.filter(function (x) { return x.img === img; })[0];
        if (enc) { s.style = enc.label; }
      }
    }
  })();

  /* Los pasos se derivan del estado: un porton pide ancho, una cerca no; el
     color y el grado solo salen donde el material los ofrece. */
  function steps() {
    var out = [];
    if (!FIJO.product) { out.push({ key: 'product', title: 'What are you building' }); }
    if (!s.product) { return out; }
    if (s.product === 'gate' && !FIJO.gate) { out.push({ key: 'gate', title: 'Gate type' }); }
    if (!s.gate && s.product === 'gate') { return out; }
    /* Solo si esa pagina trae tarjetas de obra. Cantilever y rolling no
       tienen: sus tarjetas son componentes, no variantes. */
    if (s.product === 'gate' && opciones().length) { out.push({ key: 'opcion', title: 'Gate option' }); }
    /* El material NO es un paso en portones: lo que se elige ahi es que porton
       es, y cada opcion trae el suyo. En una cerca si lo es, porque la cerca
       ES el material. */
    if (s.product !== 'gate' && !FIJO.mat) { out.push({ key: 'mat', title: 'Material' }); }
    if (!s.mat) { return out; }
    /* El perfil no se pregunta en un porton: es del material, y en un porton el
       material viene con la tarjeta.
       La excepcion es chain link y EC Fence, donde ese paso NO es el perfil
       sino el ACABADO (galvanizado, negro, verde). Quitarlo dejaba un porton
       cantilever que solo podia ser galvanizado, porque ademas esos materiales
       tienen la lista de colores vacia y tampoco tenian paso de color. */
    if (s.product !== 'gate' || !(m().colors && m().colors.length)) {
      out.push({ key: 'style', title: m().styleLabel });
    }
    out.push({ key: 'height', title: 'Height' });
    if (m().colors && m().colors.length) { out.push({ key: 'color', title: 'Color' }); }
    return out;
  }
  function value(k) {
    if (k === 'product') { return s.product ? (s.product === 'gate' ? 'Gate' : 'Fence run') : null; }
    if (k === 'gate') { return gateObj() ? gateObj().label : null; }
    if (k === 'opcion') { return s.opcion || null; }
    if (k === 'mat') { return m() ? m().name : null; }
    return s[k] || null;
  }
  function completo() { return steps().every(function (st) { return value(st.key); }); }

  function sheetKey() {
    if (!m()) { return null; }
    if (s.product === 'gate' && s.mat === 'chain-link' && s.gate &&
        SHEETS['chainlink-gate-' + s.gate]) { return 'chainlink-gate-' + s.gate; }
    var st = styleObj();
    if (s.mat !== 'aluminum' || !st || !st.slug || !s.height) { return null; }
    var n = s.height.replace("'", '');
    /* Se prueban los dos grados: la residencial primero, que es la habitual. */
    /* Sin paso de ancho, se prueban las medidas que existen y se ofrece la
       primera que tenga plano. El ancho del porton lo confirma el rep, que es
       lo que pasa igualmente: depende de la abertura real. */
    var grados = ['res', 'com'];
    for (var i = 0; i < grados.length; i++) {
      if (s.product === 'gate') {
        var anchos = ['4', '5'];
        for (var j = 0; j < anchos.length; j++) {
          var kg = 'alum-' + n + 'x' + anchos[j] + '-' + grados[i] + '-' + st.slug + '-gate';
          if (SHEETS[kg]) { return kg; }
        }
      } else {
        var kp = 'alum-' + n + 'ft-' + grados[i] + '-' + st.slug + '-panel';
        if (SHEETS[kp]) { return kp; }
      }
    }
    return null;
  }


  function imgSrc() {
    var st = styleObj();

    /* En una pagina de porton manda la foto de porton. Antes se caia al panel
       del material y salia una cerca de vinilo en la ficha de "Double Swing
       Gate", que es justo lo que el cliente NO esta comprando. */
    if (s.product === 'gate') {
      /* La foto de la opcion elegida, que es la misma que enseña su tarjeta:
         al pulsarla, arriba aparece exactamente eso. */
      var o = opciones().filter(function (x) { return x.name === s.opcion; })[0];
      if (o && o.img) {
        /* Misma foto, repintada al color elegido, si esa variante existe. */
        var slug = COLOR_SLUG[s.color];
        var base = o.img.split('/').pop().replace(/\.(jpg|jpeg|png|webp)$/i, '');
        if (slug && TINTADO_PORTON[base + '-' + slug]) {
          return 'https://crpozo.github.io/wfs-design-preview/assets/gates/tinted/' + base + '-' + slug + '.jpg';
        }
        return o.img;
      }
      var fp = fotoPorton(s.mat, s.gate, s.color || s.style);
      if (fp) { return fp; }
      if (gateObj()) { return gateObj().img; }
    }

    if (st && s.color) {
      /* Tan en vinilo es el color del propio dibujo, asi que no hay variante. */
      var slug = COLOR_SLUG[s.color];
      if (slug && TINTED[st.img + '-' + slug]) {
        return 'https://crpozo.github.io/wfs-design-preview/assets/profiles/tinted/' + st.img + '-' + slug + '.jpg';
      }
    }
    if (st) { return 'https://crpozo.github.io/wfs-design-preview/assets/profiles/' + st.img + '.jpg'; }
    /* Con material elegido pero sin perfil, se enseña ese material. Antes caia
       a la foto del tipo de porton, que es la misma para todos: al cambiar de
       vinilo a chain link la imagen no se movia. */
    if (m()) { return 'https://crpozo.github.io/wfs-design-preview/assets/profiles/' + m().styles[0].img + '.jpg'; }
    return 'https://crpozo.github.io/wfs-design-preview/assets/profiles/aluminum-2-rail-smooth.jpg';
  }

  /** Las filas del resumen. Las usan el panel y la cabecera de la vista 3D. */
  function ficha() {
    var filas = [];
    if (s.product) { filas.push(['Building', value('product')]); }
    if (s.product === 'gate') { filas.push(['Gate type', value('gate')]); }
    if (s.product === 'gate' && opciones().length) { filas.push(['Gate option', value('opcion')]); }
    if (s.product !== 'gate') { filas.push(['Material', value('mat')]); }
    if (m()) {
      if (s.product !== 'gate' || !(m().colors && m().colors.length)) {
        filas.push([m().styleLabel, s.style]);
      }
      filas.push(['Height', s.height]);
      if (m().colors.length) { filas.push(['Color', s.color]); }
    }
    return filas;
  }

  /**
   * Lo que falta por elegir para poder montar la escena.
   *
   * La vista 3D tiene que enseñar EXACTAMENTE lo que hay en el resumen. Antes
   * rellenaba lo que faltaba con la primera opcion del material, y eso llevaba
   * a que el panel dijera "Color: not chosen yet" mientras la casa salia con
   * una cerca negra que nadie habia pedido.
   */
  function faltan() {
    var out = [];
    if (!s.product) { out.push('what you are building'); }
    if (s.product === 'gate' && !s.gate) { out.push('a gate type'); return out; }
    if (s.product === 'gate' && opciones().length && !s.opcion) { out.push('a gate option'); }
    var mm = m();
    if (!mm) { out.push(s.product === 'gate' ? 'a gate option' : 'a material'); return out; }
    if (!s.style && (s.product !== 'gate' || !(mm.colors && mm.colors.length))) {
      out.push('a ' + String(mm.styleLabel).toLowerCase());
    }
    if (!s.height) { out.push('a height'); }
    /* En chain link y EC Fence el acabado ES el paso de estilo, y colors va
       vacio: ahi no hay nada mas que pedir. */
    if (mm.colors.length && !s.color) { out.push('a color'); }
    return out;
  }

  function enumerar(lista) {
    if (lista.length === 1) { return lista[0]; }
    return lista.slice(0, -1).join(', ') + ' and ' + lista[lista.length - 1];
  }

  /** Lo que la escena 3D necesita saber. Null mientras falte algo. */
  function estado3D() {
    if (faltan().length) { return null; }
    var mm = m();
    var col = null;
    if (mm.colors.length) {
      var elegido = mm.colors.filter(function (c) { return c.label === s.color; })[0];
      col = elegido ? elegido.hex : null;
    }
    return {
      mat: s.mat, estilo: s.style, alto: s.height, colorHex: col,
      producto: s.product, gate: s.gate, ancho: s.ancho, marco: s.marco,
      etiqueta: mm.tag,
      titulo: mm.name + (s.product === 'gate' ? ' gate' : ' fence'),
      resumen: ficha().filter(function (f) { return f[1]; })
    };
  }

  /* 5 pies 9: la estatura media de un adulto en EE.UU. Cambiarla desajusta la
     lectura de todas las alturas. */
  var PERSONA_FT = 5.75;

  /**
   * Referencia de altura: la cota elegida al lado de una persona.
   *
   * Va ENCIMA de la foto, en una esquina, y no en una columna propia: como
   * columna le quitaba ancho a la imagen, que es lo que se ha venido a ver.
   * Es un diagrama, no una medida sobre la foto: la foto es de un porton
   * concreto y no cambia de alto, asi que la comparacion honesta es cota
   * contra persona, las dos a la misma escala.
   */
  function pintarEscala() {
    var caja = $('escala');
    if (!caja) { return; }
    var ft = parseFloat(s.height);
    if (!s.height || !isFinite(ft)) { caja.innerHTML = ''; caja.classList.remove('is-on'); return; }
    caja.classList.add('is-on');

    var H = 200, base = 184, top = 14;
    var tope = Math.max(8, ft, PERSONA_FT);
    var px = function (f) { return (f / tope) * (base - top); };
    var yCerca = base - px(ft);
    var yPers = base - px(PERSONA_FT), hPers = px(PERSONA_FT);

    caja.innerHTML =
      '<svg viewBox="0 0 108 ' + H + '" role="img" aria-label="' +
        esc(s.height) + ' next to a 5 foot 9 person">' +
        '<line x1="6" y1="' + base + '" x2="102" y2="' + base + '" class="sc-base"/>' +
        '<g class="sc-person" transform="translate(72,' + yPers + ') scale(' + (hPers / 100) + ')">' +
          '<circle cx="11" cy="11" r="11"/>' +
          '<path d="M11 24c-8 0-13 5-13 13v26h6l1 37h5l1-37h1l1 37h5l1-37h6V37c0-8-5-13-13-13z"/>' +
        '</g>' +
        '<line x1="24" y1="' + yCerca + '" x2="24" y2="' + base + '" class="sc-line"/>' +
        '<line x1="18" y1="' + yCerca + '" x2="30" y2="' + yCerca + '" class="sc-tick"/>' +
        '<line x1="18" y1="' + base + '" x2="30" y2="' + base + '" class="sc-tick"/>' +
        '<text x="34" y="' + (yCerca + (base - yCerca) / 2 + 5) + '" class="sc-label">' + esc(s.height) + '</text>' +
      '</svg>';
  }

  function pintarVista() {
    var img = $('img'), src = imgSrc();
    var marco = img.closest('.bld__frame');
    pintarEscala();
    var esTinte = src.indexOf('/tinted/') !== -1;
    /* Los perfiles son recortes sobre blanco y piden aire alrededor; las fotos
       de porton son fotografias y quedan mejor llenando el marco. */
    var esFoto = src.indexOf('/profiles/') === -1;
    marco.classList.toggle('is-foto', esFoto);
    marco.style.background = esFoto ? FONDO_FOTO
      : (!esTinte ? FONDO_ORIGINAL
        : (src.indexOf('-white.jpg') !== -1 ? FONDO_BLANCO : FONDO_TINTE));
    if (img.getAttribute('src') !== src) {
      img.classList.add('is-swapping');
      var n = new Image();
      n.onload = function () {
        /* Una foto vertical recortada a 4:3 pierde media hoja, asi que esa se
           encaja entera en vez de llenar. */
        marco.classList.toggle('is-vertical', esFoto && n.naturalWidth / n.naturalHeight < 1.15);
        img.src = src;
        img.classList.remove('is-swapping');
      };
      n.onerror = function () { img.classList.remove('is-swapping'); };
      n.src = src;
    }
    /* La etiqueta dice QUE es lo que se ve. En un porton eso no es el material:
       el material dejo de ser un paso y ahora viaja dentro de la opcion, asi
       que poner "Vinyl / PVC" encima de la foto era enseñar un dato interno.
       Se pone la opcion elegida, o el tipo de porton mientras no la haya. */
    var etiqueta;
    if (s.product === 'gate') {
      etiqueta = s.opcion || (gateObj() ? gateObj().label : 'Start here');
    } else {
      etiqueta = m() ? m().name : 'Start here';
    }
    $('badge').textContent = etiqueta;

    /* El boton se enciende cuando la configuracion esta completa, y mientras
       tanto dice que falta. Encenderlo antes obligaba a inventar las opciones
       sin elegir, y la casa acababa enseñando otra cerca. */
    var b3d = root.querySelector('.bld__3d');
    if (b3d) {
      var falta = faltan();
      b3d.disabled = falta.length > 0;
      b3d.title = falta.length ? 'Pick ' + enumerar(falta) + ' first' : '';
      var pie = root.querySelector('.bld__3d-pie');
      if (pie) {
        pie.textContent = falta.length
          ? 'Pick ' + enumerar(falta) + ' to see it in 3D.'
          : 'See it on a real home, with the yard around it.';
      }
    }

    var filas = ficha();
    root.querySelector('.bld__spec dl').innerHTML = filas.map(function (f) {
      var sw = '';
      if (f[0] === 'Color' && f[1] && m()) {
        var c = m().colors.filter(function (x) { return x.label === f[1]; })[0];
        if (c) { sw = '<i class="sw" style="background:' + c.hex + '"></i>'; }
      }
      return '<dt>' + esc(f[0]) + '</dt><dd' + (f[1] ? '' : ' class="is-empty"') + '>' +
             sw + esc(f[1] || 'Not chosen yet') + '</dd>';
    }).join('');
  }

  function opt(set, v, nombre, sub, img) {
    return '<button class="opt" data-set="' + set + '" data-v="' + esc(v) + '" aria-pressed="' + (s[set === 'mat' ? 'mat' : set] === v) + '">' +
      (img ? '<img class="opt__thumb" src="' + img + '" alt="" loading="lazy">' : '') +
      '<span><span class="opt__name">' + esc(nombre) + '</span>' +
      (sub ? '<span class="opt__sub">' + esc(sub) + '</span>' : '') + '</span>' +
      '<span class="opt__tick"></span></button>';
  }

  function cuerpo(k) {
    if (k === 'product') {
      return opt('product', 'fence', 'Fence run', 'Panels, posts and rails for a run', 'https://crpozo.github.io/wfs-design-preview/assets/profiles/aluminum-3-rail-rake.jpg') +
             opt('product', 'gate',  'Gate',      'Single, double, sliding, cantilever or rolling', 'https://crpozo.github.io/wfs-design-preview/assets/gate-double.jpg');
    }
    if (k === 'gate') {
      return GATES.map(function (g) { return opt('gate', g.id, g.label, g.sub, g.img); }).join('');
    }
    if (k === 'opcion') {
      return opciones().map(function (o) {
        return opt('opcion', o.name, o.name, o.notes, o.img);
      }).join('');
    }
    if (k === 'mat') {
      return matsPermitidos().map(function (id) {
        var x = MAT[id];
        /* Recorte de producto, tambien en portones. Se probo con las fotos de
           porton y a 62x46 no se leen: la de aluminio pasa por un camino, la de
           chain link por unas escaleras, y DuraFence y EC Fence comparten foto,
           o sea dos opciones identicas. Aqui lo que hay que distinguir es el
           MATERIAL, y para eso el recorte gana. La foto de porton manda donde
           importa, que es la vista grande. */
        return opt('mat', id, x.name, x.tag, 'https://crpozo.github.io/wfs-design-preview/assets/profiles/' + x.styles[0].img + '.jpg');
      }).join('');
    }
    if (k === 'style') {
      return m().styles.map(function (x) {
        return opt('style', x.label, x.label, x.sub, 'https://crpozo.github.io/wfs-design-preview/assets/profiles/' + x.img + '.jpg');
      }).join('');
    }
    if (k === 'height') {
      var lista = m().heights;
      return '<div class="opts-row">' + lista.map(function (h) {
        return '<button class="chip" data-set="' + k + '" data-v="' + esc(h) + '" aria-pressed="' + (s[k] === h) + '">' + esc(h) + '</button>';
      }).join('') + '</div>';
    }
    if (k === 'color') {
      return '<div class="opts-row">' + m().colors.map(function (c) {
        return '<button class="chip chip--color" data-set="color" data-v="' + esc(c.label) + '" aria-pressed="' + (s.color === c.label) + '">' +
          '<i class="sw" style="background:' + c.hex + '"></i>' + esc(c.label) + '</button>';
      }).join('') + '</div>';
    }
    return '';
  }

  function pintarPasos() {
    var lista = steps();
    /* Ningun paso se cierra al contestarlo. Elegir abre el siguiente, y el que
       acabas de tocar sigue desplegado para poder comparar: mirar el aluminio,
       volver al vinilo, probar otra altura. Plegarlos obligaba a pulsar
       "Change" para cada comparacion, que es justo lo que uno hace al elegir.
       Lo unico que sigue cerrado es lo que aun no toca, para que se vea que
       hay un orden. */
    var html = lista.map(function (st, i) {
      var val = value(st.key);
      var bloqueado = i > 0 && !value(lista[i - 1].key);
      var plegado = st.key === PLEGABLE && val && !reabierto[st.key];
      var abierto = !bloqueado && !plegado;
      var cls = 'step' + (abierto ? ' is-open' : '') + (bloqueado ? ' is-locked' : '');
      var h = '<section class="' + cls + '" data-i="' + i + '">' +
        '<div class="step__head"' + (plegado ? ' data-edit="' + esc(st.key) + '"' : '') + '>' +
          '<span class="step__n">' + ('0' + (i + 1)) + '</span>' +
          '<span class="step__t">' + esc(st.title) + '</span>' +
          /* El valor elegido se enseña tambien con el paso abierto: asi el
             resumen esta a mano sin bajar al panel de la derecha. */
          (val ? '<span class="step__val">' + esc(val) + '</span>' : '') +
          (plegado ? '<button class="step__edit" type="button" data-edit="' + esc(st.key) + '">Change</button>' : '') +
        '</div>';
      if (abierto) { h += '<div class="step__body">' + cuerpo(st.key) + '</div>'; }
      return h + '</section>';
    }).join('');

    if (completo()) {
      var k = sheetKey();
      var titulo = [m().name, s.style, s.height, s.color]
        .filter(Boolean).join(' · ');
      html += '<div class="bld__done">' +
        '<span class="wfs-kicker">Your build</span>' +
        '<h2>' + esc((s.product === 'gate' ? gateObj().label + ' gate · ' : '') + titulo) + '</h2>' +
        '<p>Send it over with your linear footage and we come back with pricing in 24 hours.</p>' +
        '<div class="bld__actions">' +
          '<a class="btn btn-primary" href="estimate.html">Request a Quote</a>' +
          '<a class="btn btn-ghost on-dark" href="specs.html">Browse all spec sheets</a>' +
        '</div>' +
        '<div class="bld__sheet">' + (k ?
          'Spec sheet for this build: <a href="https://crpozo.github.io/wfs-design-preview/assets/specs/' + k + '.pdf" download>' + esc(k) + '.pdf</a>' :
          '<span class="none">No spec sheet drawn for this exact build yet. Ask us and we will send the closest one.</span>') +
        '</div></div>';
    }
    $('steps').innerHTML = html;
  }

  function render() { pintarPasos(); pintarVista(); }

  root.addEventListener('click', function (e) {
    var v3d = e.target.closest('.bld__3d');
    if (v3d) {
      var est = estado3D();
      if (!est) { return; }
      v3d.classList.add('is-cargando');
      cargar3D().then(function () {
        v3d.classList.remove('is-cargando');
        window.WFS3D.abrir(est);
      }, function () {
        v3d.classList.remove('is-cargando');
        v3d.classList.add('is-error');
        v3d.lastChild.textContent = '3D view unavailable';
      });
      return;
    }
    var edit = e.target.closest('[data-edit]');
    if (edit) { reabierto[edit.dataset.edit] = true; return render(); }
    var b = e.target.closest('[data-set]');
    if (!b) { return; }
    var campo = b.dataset.set, v = b.dataset.v;

    /* Cambiar algo de arriba invalida lo de abajo: un perfil de vinilo no
       existe en chain link, y un ancho de porton no aplica a una cerca. */
    if (campo === 'product' && s.product !== v) {
      s.product = v; s.gate = null; s.opcion = null; s.mat = null; s.style = null;
      s.height = null; s.color = null; s.grade = null;
    } else if (campo === 'gate' && s.gate !== v) {
      /* Cambiar de tipo de porton cambia lo que ese porton ofrece: las
         tarjetas son otras y puede que el material elegido ya no se venda
         (un corredero no lleva aluminio). Se conserva lo que siga valiendo. */
      s.gate = v;
      s.opcion = null; s.ancho = null; s.marco = null;
      s.mat = null; s.style = null; s.height = null; s.color = null; s.grade = null;
      /* Sin tarjetas (cantilever, rolling) no hay de donde sacar el material,
         asi que se pone el que esa pagina da por defecto. */
      if (!opciones().length) {
        s.mat = cfg().matDefecto || 'chain-link';
        s.style = MAT[s.mat] ? MAT[s.mat].styles[0].label : null;
      }
    } else if (campo === 'opcion' && s.opcion !== v) {
      /* La opcion trae su material y su perfil: es lo que enseña su foto en la
         pagina. Si cambian, lo de abajo deja de valer. */
      var o = opciones().filter(function (x) { return x.name === v; })[0] || {};
      var cambiaMat = o.mat && o.mat !== s.mat;
      s.opcion = v;
      s.ancho = o.ancho || null;
      s.marco = o.marco || null;
      if (cambiaMat) { s.mat = o.mat; s.height = null; s.color = null; }
      s.style = o.estilo || (MAT[s.mat] ? MAT[s.mat].styles[0].label : null);
    } else if (campo === 'mat' && s.mat !== v) {
      s.mat = v; s.style = null; s.height = null; s.color = null; s.grade = null;
    } else { s[campo] = v; }

    render();
  });

  render();

  /* API para que las tarjetas de la pagina elijan un perfil sin recargar. */
  return {
    elegirPorImagen: function (img) {
      if (!m()) { return false; }
      var enc = m().styles.filter(function (x) { return x.img === img; })[0];
      if (!enc) { return false; }
      s.style = enc.label;
      render();
      return true;
    }
  };
  }

  /* Montaje. En la pagina suelta del configurador se llama sin fijar nada. */
  /**
   * Cuanto ocupa la cabecera fija, en una variable CSS.
   *
   * El panel derecho se queda pegado al hacer scroll, pero a 24px del borde:
   * la cabecera del sitio es sticky y mide 132px, asi que le tapaba 108px y
   * la foto salia cortada por arriba. La altura no es fija (cambia entre
   * escritorio y movil), asi que se mide.
   */
  function medirCabecera() {
    var alto = 0;
    var cabs = document.querySelectorAll('header');
    for (var i = 0; i < cabs.length; i++) {
      var c = getComputedStyle(cabs[i]);
      if (c.position !== 'sticky' && c.position !== 'fixed') { continue; }
      var r = cabs[i].getBoundingClientRect();
      if (r.top <= 2 && r.width > window.innerWidth * 0.5) { alto = Math.max(alto, r.height); }
    }
    document.documentElement.style.setProperty('--wfs-cabecera', Math.round(alto) + 'px');
  }

  window.WFSBuilder = {
    instancias: [],
    mount: function (root, opts) {
      if (!root) { return null; }
      medirCabecera();
      if (!this._obsCab) {
        this._obsCab = true;
        window.addEventListener('resize', medirCabecera, { passive: true });
      }
      var api = crear(root, opts);
      this.instancias.push({ root: root, api: api });
      return api;
    },
    /* Las tarjetas de perfil llaman aqui: eligen la variante y llevan la vista
       al configurador, en vez de navegar a otra pagina. */
    elegir: function (img) {
      var hecho = false;
      this.instancias.forEach(function (i) { if (i.api.elegirPorImagen(img)) { hecho = true; } });
      if (hecho) { this.ir(); }
      return hecho;
    },
    /* Las tarjetas que no corresponden a una variante del configurador (por
       ejemplo las de porton, que son fotos de proyecto) solo llevan la vista
       al configurador ya embebido, sin cambiar de pagina. */
    ir: function () {
      if (!this.instancias.length) { return false; }
      var raiz = this.instancias[0].root;
      /* Animacion propia en vez de behavior:'smooth': el configurador reescribe
         su DOM en este mismo tick y el anclaje de scroll cancela el suave
         nativo. Con la pestaña en segundo plano rAF se congela, asi que un
         temporizador toma el relevo y el salto se hace igual. */
      var hecho = false;
      var arrancar = function () {
        if (hecho) { return; }
        hecho = true;
        var destino = raiz.getBoundingClientRect().top + window.pageYOffset - 24;
        var tope = document.documentElement.scrollHeight - window.innerHeight;
        destino = Math.max(0, Math.min(destino, tope));
        var quieto = document.hidden ||
          (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        if (quieto) { window.scrollTo(0, destino); return; }
        var desde = window.pageYOffset, dur = 520, t0 = null;
        (function paso(ahora) {
          if (t0 === null) { t0 = ahora; }
          var k = Math.min(1, (ahora - t0) / dur);
          var e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
          window.scrollTo(0, desde + (destino - desde) * e);
          if (k < 1) { requestAnimationFrame(paso); }
        })(performance.now());
      };
      requestAnimationFrame(arrancar);
      setTimeout(arrancar, 120);
      return true;
    }
  };
})();
