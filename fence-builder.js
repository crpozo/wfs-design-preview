/* Configurador paso a paso, para cercas y para portones.
   Todo lo que ofrece sale de lo que existe de verdad: las imagenes de
   assets/profiles y assets/, y las fichas tecnicas de assets/specs. Cuando una
   combinacion tiene plano, se ofrece; cuando no, se dice. */
(function () {

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
      gateWidths: ["4'", "5'"],
      colors: [ { label: 'Black', hex: '#1c1c1c' }, { label: 'Bronze', hex: '#4a3728' }, { label: 'White', hex: '#f2f2ee' } ],
      gradeLabel: 'Grade',
      grades: [
        { label: 'Residential', slug: 'res', sub: '5/8" pickets · 1" channels' },
        { label: 'Commercial',  slug: 'com', sub: '3/4" pickets · 1-1/4" channels' }
      ]
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
      heights: ["4'", "5'", "6'", "8'"], gateWidths: ["4'", "6'", "10'", "12'"], colors: [], grades: []
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
      heights: ["4'", "5'", "6'"], gateWidths: ["4'", "5'", "6'"],
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
      heights: ["6'", "8'"], gateWidths: ["4'", "5'", "6'"],
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
      heights: ["6'"], gateWidths: ["4'", "5'", "6'"], colors: [], grades: []
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


  /* ── Fotos por color ─────────────────────────────────────────────────────
     Fotos reales de instalacion, de assets/projects. La busqueda va de lo mas
     concreto a lo mas general: primero material+perfil+color, luego
     material+color, y si no hay ninguna se queda el dibujo del perfil. Asi el
     color siempre se ve, y nunca se enseña una foto que no corresponde. */
  var COLOR_IMG = {
    /* material | perfil | color */
    'aluminum|Pool Code|White':            'assets/projects/alum-2-rail-smooth-bottom-pool-code-white.jpg',
    'aluminum|3-Rail Puppy Picket|Bronze': 'assets/projects/alum-puppy-picket-bronze.jpg',
    'aluminum|4-Rail Custom|Black':        'assets/projects/alum-4-rail-smooth-bottom-custom-gate-black.jpg',
    'vinyl|Semi-Privacy|Tan':              'assets/projects/pvc-semi-privacy-alternative-pickets-sand.jpg',
    'vinyl|Privacy|White':                 'assets/projects/pvc-closed-top-white.jpg',
    'metal|Modern|Black':                  'assets/projects/met-fence-horizontal-black.jpg',
    /* material | color */
    'aluminum|White':   'assets/projects/alum-2-rail-smooth-bottom-white.jpg',
    'aluminum|Bronze':  'assets/projects/alum-puppy-picket-bronze.jpg',
    'aluminum|Black':   'assets/projects/alum-4-rail-smooth-bottom-custom-gate-black.jpg',
    'vinyl|White':      'assets/projects/pvc-closed-top-white.jpg',
    'vinyl|Tan':        'assets/projects/pvc-gate-sand.jpg',
    'vinyl|Gray':       'assets/projects/pvc-privacy-two-tone-white-and-gray.webp',
    'metal|White':      'assets/projects/met-fence-2-rail-white.jpg',
    'metal|Black':      'assets/projects/met-fence-3-rail-black.jpg',
    'metal|Woodgrain':  'assets/projects/met-fence-3-rail-brown.jpg'
  };

  var ORDER = ['aluminum', 'chain-link', 'vinyl', 'metal', 'ecfence'];
  var s = { product: null, gate: null, mat: null, style: null, height: null, width: null, color: null, grade: null, open: 0 };

  var $ = function (id) { return document.getElementById(id); };
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
    var out = [{ key: 'product', title: 'What are you building' }];
    if (!s.product) { return out; }
    if (s.product === 'gate') { out.push({ key: 'gate', title: 'Gate type' }); }
    out.push({ key: 'mat', title: 'Material' });
    if (!s.mat) { return out; }
    out.push({ key: 'style', title: m().styleLabel });
    out.push({ key: 'height', title: 'Height' });
    if (s.product === 'gate') { out.push({ key: 'width', title: 'Opening width' }); }
    if (m().colors && m().colors.length) { out.push({ key: 'color', title: 'Color' }); }
    if (m().grades && m().grades.length) { out.push({ key: 'grade', title: m().gradeLabel }); }
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
    if (s.mat !== 'aluminum' || !st || !st.slug || !s.height || !s.grade) { return null; }
    var g = m().grades.filter(function (x) { return x.label === s.grade; })[0];
    var n = s.height.replace("'", '');
    var k = s.product === 'gate'
      ? (s.width ? 'alum-' + n + 'x' + s.width.replace("'", '') + '-' + g.slug + '-' + st.slug + '-gate' : null)
      : 'alum-' + n + 'ft-' + g.slug + '-' + st.slug + '-panel';
    return k && SHEETS[k] ? k : null;
  }

  function imgSrc() {
    var st = styleObj();
    if (s.color && s.mat) {
      var exacta = COLOR_IMG[s.mat + '|' + s.style + '|' + s.color];
      if (exacta) { return exacta; }
      var porColor = COLOR_IMG[s.mat + '|' + s.color];
      if (porColor) { return porColor; }
    }
    if (st) { return 'assets/profiles/' + st.img + '.jpg'; }
    if (s.product === 'gate' && gateObj()) { return gateObj().img; }
    return 'assets/profiles/aluminum-2-rail-smooth.jpg';
  }

  function pintarVista() {
    var img = $('preview'), src = imgSrc();
    /* Un recorte de producto se ve entero (contain, sobre blanco); una foto de
       instalacion se recorta a la caja (cover). Tratarlas igual dejaba la foto
       flotando con franjas blancas. */
    img.classList.toggle('is-photo', src.indexOf('assets/projects/') === 0);
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
      if (s.product === 'gate') { filas.push(['Width', s.width]); }
      if (m().colors.length) { filas.push(['Color', s.color]); }
      if (m().grades.length) { filas.push([m().gradeLabel, s.grade]); }
    }
    $('spec').innerHTML = filas.map(function (f) {
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
        return opt('mat', id, x.name, x.tag, 'assets/profiles/' + x.styles[0].img + '.jpg');
      }).join('');
    }
    if (k === 'style') {
      return m().styles.map(function (x) {
        return opt('style', x.label, x.label, x.sub, 'assets/profiles/' + x.img + '.jpg');
      }).join('');
    }
    if (k === 'height' || k === 'width') {
      var lista = k === 'height' ? m().heights : m().gateWidths;
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
    return m().grades.map(function (g) { return opt('grade', g.label, g.label, g.sub, null); }).join('');
  }

  function pintarPasos() {
    var lista = steps();
    var html = lista.map(function (st, i) {
      var val = value(st.key), abierto = s.open === i;
      var bloqueado = i > 0 && !value(lista[i - 1].key);
      var cls = 'step' + (abierto ? ' is-open' : '') + (bloqueado ? ' is-locked' : '');
      var h = '<section class="' + cls + '" data-i="' + i + '">' +
        '<div class="step__head">' +
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
      var titulo = [m().name, s.style, s.height + (s.width ? ' x ' + s.width : ''), s.color, s.grade]
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

  document.addEventListener('click', function (e) {
    var edit = e.target.closest('[data-edit]');
    if (edit) { s.open = +edit.dataset.edit; return render(); }
    var b = e.target.closest('[data-set]');
    if (!b) { return; }
    var campo = b.dataset.set, v = b.dataset.v;

    /* Cambiar algo de arriba invalida lo de abajo: un perfil de vinilo no
       existe en chain link, y un ancho de porton no aplica a una cerca. */
    if (campo === 'product' && s.product !== v) {
      s.product = v; s.gate = null; s.mat = null; s.style = null;
      s.height = null; s.width = null; s.color = null; s.grade = null;
    } else if (campo === 'mat' && s.mat !== v) {
      s.mat = v; s.style = null; s.height = null; s.width = null; s.color = null; s.grade = null;
    } else { s[campo] = v; }

    var lista = steps();
    var i = lista.map(function (x) { return x.key; }).indexOf(campo);
    s.open = i + 1 < lista.length ? i + 1 : lista.length;
    render();
  });

  render();
})();
