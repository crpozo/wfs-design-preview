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

  /* Escala de altura: en vez de estirar el dibujo (que engordaria los rieles y
     mentiria sobre la pieza), se dibuja al lado una cota con el numero y una
     silueta humana. La referencia se lee de un vistazo y el dibujo no se toca.
     Persona de 5'9", que es la estatura media adulta en EE.UU. */
  var PERSONA_FT = 5.75;
  var TOPE_FT = 8;



  var ORDER = ['aluminum', 'chain-link', 'vinyl', 'metal', 'ecfence'];

  var ESQUELETO =
    '<div class="bld__grid">' +
      '<div class="bld__steps"></div>' +
      '<aside class="bld__stage">' +
        '<div class="bld__frame">' +
          '<span class="bld__badge"></span>' +
          '<span class="bld__media"><img class="bld__img" alt="Fence preview" decoding="async"></span>' +
          '<div class="bld__scale"></div>' +
        '</div>' +
        '<div class="bld__spec"><dl></dl></div>' +
      '</aside>' +
    '</div>';

  function crear(root, opts) {
  opts = opts || {};
  root.innerHTML = ESQUELETO;

  /* Lo que viene fijado por la pagina no se pregunta. */
  var FIJO = { product: opts.product || null, mat: opts.material || null, gate: opts.gate || null };

  var s = { product: FIJO.product, gate: FIJO.gate, mat: FIJO.mat,
            style: null, height: null, color: null, open: 0 };

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
      s.product = 'gate'; s.gate = g; s.open = 2;
    } else if (mat && MAT[mat]) {
      s.product = 'fence'; s.mat = mat; s.open = 2;
      if (img) {
        var enc = MAT[mat].styles.filter(function (x) { return x.img === img; })[0];
        if (enc) { s.style = enc.label; s.open = 3; }
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
    if (s.product === 'gate' && gateObj()) { return gateObj().img; }
    return 'https://crpozo.github.io/wfs-design-preview/assets/profiles/aluminum-2-rail-smooth.jpg';
  }

  function pintarVista() {
    var img = $('img'), src = imgSrc();
    var marco = img.closest('.bld__frame');
    var esTinte = src.indexOf('/tinted/') !== -1;
    marco.style.background = !esTinte ? FONDO_ORIGINAL
      : (src.indexOf('-white.jpg') !== -1 ? FONDO_BLANCO : FONDO_TINTE);
    pintarEscala();
    if (img.getAttribute('src') !== src) {
      img.classList.add('is-swapping');
      var n = new Image();
      n.onload = function () { img.src = src; img.classList.remove('is-swapping'); };
      n.onerror = function () { img.classList.remove('is-swapping'); };
      n.src = src;
    }
    $('badge').textContent = m() ? m().name : (gateObj() ? gateObj().label : 'Start here');

    var filas = [];
    if (s.product) { filas.push(['Building', value('product')]); }
    if (s.product === 'gate') { filas.push(['Gate type', value('gate')]); }
    filas.push(['Material', value('mat')]);
    if (m()) {
      filas.push([m().styleLabel, s.style]);
      filas.push(['Height', s.height]);
      if (m().colors.length) { filas.push(['Color', s.color]); }
    }
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
    if (k === 'mat') {
      return ORDER.map(function (id) {
        var x = MAT[id];
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
    /* Los ejes que se comparan mirando (perfil, altura, color) se quedan
       SIEMPRE abiertos en cuanto son alcanzables: al elegir uno no hay que
       reabrir el siguiente ni pulsar Change. Los que acotan (que construyes,
       tipo de porton, material) se pliegan a una linea al contestarlos, que ya
       no hace falta verlos. */
    var VISUALES = { style: 1, height: 1, color: 1 };
    var html = lista.map(function (st, i) {
      var val = value(st.key);
      var bloqueado = i > 0 && !value(lista[i - 1].key);
      var abierto = !bloqueado && (VISUALES[st.key] ? true : (s.open === i || !val));
      var cls = 'step' + (abierto ? ' is-open' : '') + (bloqueado ? ' is-locked' : '');
      /* Cualquier paso alcanzable se abre pulsando su cabecera, para poder ir
         y venir sin depender del boton "Change". */
      var h = '<section class="' + cls + '" data-i="' + i + '">' +
        '<div class="step__head"' + (!bloqueado && !abierto ? ' data-edit="' + i + '"' : '') + '>' +
          '<span class="step__n">' + ('0' + (i + 1)) + '</span>' +
          '<span class="step__t">' + esc(st.title) + '</span>' +
          (!abierto && val ? '<span class="step__val">' + esc(val) + '</span>' +
             '<button class="step__edit" data-edit="' + i + '">Change</button>' : '') +
        '</div>';
      if (abierto && !bloqueado) { h += '<div class="step__body">' + cuerpo(st.key) + '</div>'; }
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
    var edit = e.target.closest('[data-edit]');
    if (edit) { s.open = +edit.dataset.edit; return render(); }
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

    var lista = steps();
    var i = lista.map(function (x) { return x.key; }).indexOf(campo);
    /* Solo avanzan las elecciones que ACOTAN: que construyes, tipo de porton y
       material. Perfil, altura, ancho y color se quedan abiertos, porque son
       las que uno compara mirando el dibujo, y cerrarlas al primer clic obliga
       a reabrir el paso para ver la siguiente opcion.
       Esto incluye el paso de estilo cuando ES el color, como en EC Fence y
       chain link, donde el acabado es el primer eje del material. */
    if (campo === 'product' || campo === 'gate' || campo === 'mat') {
      s.open = i + 1 < lista.length ? i + 1 : lista.length;
    }
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
