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
    { id: 'single',     label: 'Single Swing',   img: 'assets/gate-single-swing.jpg', sub: 'Walk and entry gates' },
    { id: 'double',     label: 'Double Swing',   img: 'assets/gate-double.jpg',       sub: 'Driveways and wide openings' },
    { id: 'sliding',    label: 'Sliding',        img: 'assets/gate-sliding.jpg',      sub: 'Track-mounted, tight driveways' },
    { id: 'cantilever', label: 'Cantilever',     img: 'assets/gate-cantilever.jpg',   sub: 'No ground track, up to 30 ft' },
    { id: 'rolling',    label: 'Rolling',        img: 'assets/gate-rolling.jpg',      sub: 'Rubber wheels, uneven ground' }
  ];


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
      def: 'assets/projects/alum-4-rail-smooth-bottom-custom-gate-black.jpg'
    },
    'chain-link': {
      'sliding|Galvanized':          'assets/gate-sliding.jpg',
      'rolling|Galvanized':          'assets/gate-rolling.jpg',
      'cantilever|Black PVC-coated': 'assets/gate-cantilever.jpg',
      'Galvanized':                  'assets/projects/cl-swing-gate-galv-4.jpg',
      'Black PVC-coated':            'assets/projects/cl-gate-black.jpg',
      single:     'assets/gate-single-swing.jpg',
      sliding:    'assets/gate-sliding.jpg',
      cantilever: 'assets/gate-cantilever.jpg',
      rolling:    'assets/gate-rolling.jpg',
      def:        'assets/projects/cl-gate-black.jpg'
    },
    vinyl: {
      'cantilever|White': 'assets/projects/pvc-privacy-cantilever-gate-white.jpg',
      'double|White':     'assets/projects/pvc-double-gate-white.jpg',
      'White':            'assets/projects/pvc-privacy-gate-white.jpg',
      'Tan':              'assets/projects/pvc-gate-sand.jpg',
      def:                'assets/projects/pvc-privacy-gate-white.jpg'
    },
    /* DuraFence es tabla horizontal, igual que esta hoja. No hay foto propia
       de porton DuraFence; esta se le parece mucho mas que cualquier picket. */
    metal:   { def: 'assets/projects/gate-single-matching-ecfence.webp' },
    ecfence: { def: 'assets/projects/gate-single-matching-ecfence.webp' }
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
    var claves = [tipo + '|' + acabado, acabado, tipo, 'def'];
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
                     'Woodgrain':'woodgrain', 'Gray':'gray', 'Tan':null };
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

  /* Escala de altura: en vez de estirar el dibujo (que engordaria los rieles y
     mentiria sobre la pieza), se dibuja al lado una cota con el numero y una
     silueta humana. La referencia se lee de un vistazo y el dibujo no se toca.
     Persona de 5'9", que es la estatura media adulta en EE.UU. */
  var PERSONA_FT = 5.75;
  var TOPE_FT = 8;



  var ORDER = ['aluminum', 'chain-link', 'vinyl', 'metal', 'ecfence'];

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
          '<span class="bld__media">' +
            '<img class="bld__img" alt="Fence preview" decoding="async">' +
            '<canvas class="bld__vista3d" hidden></canvas>' +
          '</span>' +
          '<div class="bld__scale"></div>' +
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

  var s = { product: FIJO.product, gate: FIJO.gate || opts.gateInicial || null, mat: FIJO.mat,
            style: null, height: null, color: null };

  var $ = function (clase) { return root.querySelector('.bld__' + clase); };

  function pintarEscala() {
    var caja = $('scale');
    if (!caja) { return; }
    if (!s.height) { caja.innerHTML = ''; caja.classList.remove('is-on'); return; }
    caja.classList.add('is-on');

    var ft = parseFloat(s.height);
    var H = 200, base = 188, top = 12;
    var px = function (f) { return (f / TOPE_FT) * (base - top); };
    var yCerca = base - px(ft);
    var yPers  = base - px(PERSONA_FT);
    var hPers  = px(PERSONA_FT);

    caja.innerHTML =
      '<svg viewBox="0 0 116 ' + H + '" role="img" aria-label="' + esc(s.height) + ' fence next to a 5 foot 9 person">' +
        '<line x1="8" y1="' + base + '" x2="108" y2="' + base + '" class="sc-base"/>' +
        /* silueta humana, a la misma escala */
        '<g class="sc-person" transform="translate(78,' + yPers + ') scale(' + (hPers / 100) + ')">' +
          '<circle cx="11" cy="11" r="11"/>' +
          '<path d="M11 24c-8 0-13 5-13 13v26h6l1 37h5l1-37h1l1 37h5l1-37h6V37c0-8-5-13-13-13z"/>' +
        '</g>' +
        /* cota de la altura elegida */
        '<line x1="30" y1="' + yCerca + '" x2="30" y2="' + base + '" class="sc-line"/>' +
        '<line x1="24" y1="' + yCerca + '" x2="36" y2="' + yCerca + '" class="sc-tick"/>' +
        '<line x1="24" y1="' + base + '" x2="36" y2="' + base + '" class="sc-tick"/>' +
        '<text x="40" y="' + (yCerca + (base - yCerca) / 2 + 5) + '" class="sc-label">' + esc(s.height) + '</text>' +
      '</svg>';
  }

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
    if (!FIJO.mat) { out.push({ key: 'mat', title: 'Material' }); }
    if (!s.mat) { return out; }
    out.push({ key: 'style', title: m().styleLabel });
    out.push({ key: 'height', title: 'Height' });
    if (m().colors && m().colors.length) { out.push({ key: 'color', title: 'Color' }); }
    return out;
  }
  function value(k) {
    if (k === 'product') { return s.product ? (s.product === 'gate' ? 'Gate' : 'Fence run') : null; }
    if (k === 'gate') { return gateObj() ? gateObj().label : null; }
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
      var fp = fotoPorton(s.mat, s.gate, s.color || s.style);
      if (fp) { return fp; }
      if (gateObj()) { return gateObj().img; }
    }

    if (st && s.color) {
      /* Tan en vinilo es el color del propio dibujo, asi que no hay variante. */
      var slug = COLOR_SLUG[s.color];
      if (slug && TINTED[st.img + '-' + slug]) {
        return 'assets/profiles/tinted/' + st.img + '-' + slug + '.jpg';
      }
    }
    if (st) { return 'assets/profiles/' + st.img + '.jpg'; }
    /* Con material elegido pero sin perfil, se enseña ese material. Antes caia
       a la foto del tipo de porton, que es la misma para todos: al cambiar de
       vinilo a chain link la imagen no se movia. */
    if (m()) { return 'assets/profiles/' + m().styles[0].img + '.jpg'; }
    return 'assets/profiles/aluminum-2-rail-smooth.jpg';
  }

  /** Las filas del resumen. Las usan el panel y la cabecera de la vista 3D. */
  function ficha() {
    var filas = [];
    if (s.product) { filas.push(['Building', value('product')]); }
    if (s.product === 'gate') { filas.push(['Gate type', value('gate')]); }
    filas.push(['Material', value('mat')]);
    if (m()) {
      filas.push([m().styleLabel, s.style]);
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
    if (s.product === 'gate' && !s.gate) { out.push('a gate type'); }
    var mm = m();
    if (!mm) { out.push('a material'); return out; }
    if (!s.style) { out.push('a ' + String(mm.styleLabel).toLowerCase()); }
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
      producto: s.product, gate: s.gate,
      etiqueta: mm.tag,
      titulo: mm.name + (s.product === 'gate' ? ' gate' : ' fence'),
      resumen: ficha().filter(function (f) { return f[1]; })
    };
  }

  /* ── vista previa del porton, dibujada ────────────────────────────────────
     En cercas la foto de producto existe para cada perfil y color, asi que se
     usa. En portones no existe ni de lejos, y la foto mas parecida acaba
     enseñando un porton blanco a quien eligio bronce. Aqui se dibuja el
     porton de verdad, con las mismas cotas que la vista 3D de la casa. */
  var vista3d = null, obsVista = null;

  /** Lo minimo para poder dibujar: material y perfil. */
  function estadoVista() {
    var mm = m();
    if (s.product !== 'gate' || !mm || !s.style) { return null; }
    var col = null;
    if (mm.colors.length) {
      var c = mm.colors.filter(function (x) { return x.label === s.color; })[0];
      /* Sin color elegido va null y cerca.js pone el del material, igual que
         la foto de una cerca sale sin tinte hasta que se elige. */
      col = c ? c.hex : null;
    }
    return { mat: s.mat, estilo: s.style, alto: s.height || mm.heights[0],
             colorHex: col, gate: s.gate };
  }

  function medirVista() {
    if (!vista3d) { return; }
    var lz = root.querySelector('.bld__vista3d');
    var r = lz.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) { return; }
    try {
      vista3d.medir(r.width, r.height);
      vista3d.pintar();
    } catch (err) { soltarVista(); }
  }

  /* Ocultar NO es soltar. Al cambiar de material se borra el perfil y la vista
     se queda sin nada que dibujar, pero destruirla ahi soltaba el contexto
     WebGL del lienzo, y sobre un lienzo con el contexto perdido ya no se puede
     montar otro: el configurador se quedaba sin vista para siempre. */
  function ocultarVista() {
    var lz = root.querySelector('.bld__vista3d');
    if (lz) { lz.hidden = true; }
    root.querySelector('.bld__frame').classList.remove('is-3d');
  }

  /* Soltar de verdad. Solo cuando el navegador nos quita el contexto: se tira
     el lienzo y se pone uno limpio, para que un montaje posterior pueda
     empezar de cero. */
  function soltarVista() {
    if (obsVista) { obsVista.disconnect(); obsVista = null; }
    if (vista3d) { try { vista3d.soltar(); } catch (e) {} vista3d = null; }
    root.__vista = null;
    ocultarVista();
    var lz = root.querySelector('.bld__vista3d');
    if (lz && lz.parentNode) {
      var nuevo = document.createElement('canvas');
      nuevo.className = lz.className;
      nuevo.hidden = true;
      lz.parentNode.replaceChild(nuevo, lz);
    }
  }

  var pidiendoVista = false;
  function sincronizarVista() {
    var est = estadoVista();
    var lz = root.querySelector('.bld__vista3d');
    if (!est) { ocultarVista(); return false; }

    if (vista3d) {
      try {
        vista3d.actualizar(est);
        lz.hidden = false;
        root.querySelector('.bld__frame').classList.add('is-3d');
        medirVista();
        return true;
      } catch (err) {
        soltarVista();      // se sigue viendo la foto
        return false;
      }
    }
    if (pidiendoVista) { return false; }
    pidiendoVista = true;
    cargar3D().then(function () {
      pidiendoVista = false;
      /* Pudo cambiar de material o volver a cerca mientras se descargaba. */
      var e2 = estadoVista();
      if (!e2 || !window.WFS3D || !window.WFS3D.vista) { return; }
      try {
        vista3d = window.WFS3D.vista(lz);
      } catch (err) {
        return;                       // sin WebGL se queda la foto
      }
      lz.hidden = false;
      root.querySelector('.bld__frame').classList.add('is-3d');
      /* Asa para inspeccionar y forzar un fotograma sin depender del
         compositor, igual que window.WFS3D.visor() en la ventana grande. */
      root.__vista = vista3d;
      /* El navegador puede quitarnos el contexto (poca memoria, demasiados
         lienzos, la GPU reiniciando). Si pasa, three revienta al recompilar
         el shader; mejor soltar la vista y dejar que se vea la foto, que
         sigue debajo. */
      lz.addEventListener('webglcontextlost', function (ev) {
        ev.preventDefault();
        vista3d = null;
        root.__vista = null;
        soltarVista();
        pintarVista();
      });
      vista3d.actualizar(e2);
      medirVista();
      if (window.ResizeObserver) {
        obsVista = new ResizeObserver(medirVista);
        obsVista.observe(lz);
      }
      /* Arrastrar gira un poco: es lo primero que intenta todo el mundo al
         ver algo dibujado, y sale barato. */
      var x0 = null;
      lz.addEventListener('pointerdown', function (ev) { x0 = ev.clientX; lz.setPointerCapture(ev.pointerId); });
      lz.addEventListener('pointermove', function (ev) {
        if (x0 === null || !vista3d) { return; }
        vista3d.girar((ev.clientX - x0) * -0.006);
        vista3d.pintar();
        x0 = ev.clientX;
      });
      var fin = function (ev) { x0 = null; lz.releasePointerCapture && lz.releasePointerCapture(ev.pointerId); };
      lz.addEventListener('pointerup', fin);
      lz.addEventListener('pointercancel', fin);
    }, function () { pidiendoVista = false; });
    return false;
  }

  function pintarVista() {
    var img = $('img'), src = imgSrc();
    var marco = img.closest('.bld__frame');
    /* En portones manda el dibujo en cuanto hay material y perfil. Hasta
       entonces, y en cercas, sigue la foto. */
    sincronizarVista();
    var esTinte = src.indexOf('/tinted/') !== -1;
    /* Los perfiles son recortes sobre blanco y piden aire alrededor; las fotos
       de porton son fotografias y quedan mejor llenando el marco. */
    var esFoto = src.indexOf('/profiles/') === -1;
    marco.classList.toggle('is-foto', esFoto);
    marco.style.background = esFoto ? FONDO_FOTO
      : (!esTinte ? FONDO_ORIGINAL
        : (src.indexOf('-white.jpg') !== -1 ? FONDO_BLANCO : FONDO_TINTE));
    pintarEscala();
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
    $('badge').textContent = m() ? m().name : (gateObj() ? gateObj().label : 'Start here');

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
      return opt('product', 'fence', 'Fence run', 'Panels, posts and rails for a run', 'assets/profiles/aluminum-3-rail-rake.jpg') +
             opt('product', 'gate',  'Gate',      'Single, double, sliding, cantilever or rolling', 'assets/gate-double.jpg');
    }
    if (k === 'gate') {
      return GATES.map(function (g) { return opt('gate', g.id, g.label, g.sub, g.img); }).join('');
    }
    if (k === 'mat') {
      return ORDER.map(function (id) {
        var x = MAT[id];
        /* Recorte de producto, tambien en portones. Se probo con las fotos de
           porton y a 62x46 no se leen: la de aluminio pasa por un camino, la de
           chain link por unas escaleras, y DuraFence y EC Fence comparten foto,
           o sea dos opciones identicas. Aqui lo que hay que distinguir es el
           MATERIAL, y para eso el recorte gana. La foto de porton manda donde
           importa, que es la vista grande. */
        return opt('mat', id, x.name, x.tag, 'assets/profiles/' + x.styles[0].img + '.jpg');
      }).join('');
    }
    if (k === 'style') {
      return m().styles.map(function (x) {
        return opt('style', x.label, x.label, x.sub, 'assets/profiles/' + x.img + '.jpg');
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
      var abierto = !bloqueado;
      var cls = 'step' + (abierto ? ' is-open' : '') + (bloqueado ? ' is-locked' : '');
      var h = '<section class="' + cls + '" data-i="' + i + '">' +
        '<div class="step__head">' +
          '<span class="step__n">' + ('0' + (i + 1)) + '</span>' +
          '<span class="step__t">' + esc(st.title) + '</span>' +
          /* El valor elegido se enseña tambien con el paso abierto: asi el
             resumen esta a mano sin bajar al panel de la derecha. */
          (val ? '<span class="step__val">' + esc(val) + '</span>' : '') +
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
          'Spec sheet for this build: <a href="assets/specs/' + k + '.pdf" download>' + esc(k) + '.pdf</a>' :
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
    var b = e.target.closest('[data-set]');
    if (!b) { return; }
    var campo = b.dataset.set, v = b.dataset.v;

    /* Cambiar algo de arriba invalida lo de abajo: un perfil de vinilo no
       existe en chain link, y un ancho de porton no aplica a una cerca. */
    if (campo === 'product' && s.product !== v) {
      s.product = v; s.gate = null; s.mat = null; s.style = null;
      s.height = null; s.color = null; s.grade = null;
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
  window.WFSBuilder = {
    instancias: [],
    mount: function (root, opts) {
      if (!root) { return null; }
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
