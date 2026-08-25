/* Configurador de cerca, paso a paso.
   Los ejes y las imagenes salen de lo que existe de verdad en assets/profiles,
   y cada combinacion que tiene ficha tecnica en assets/specs ofrece su PDF. */
(function () {
  var MAT = {
    aluminum: {
      name: 'Aluminum', tag: 'Powder-coat · 6063-T6',
      styleLabel: 'Profile',
      styles: [
        { label: '2-Rail Smooth Bottom',       img: 'aluminum-2-rail-smooth',  slug: '2rail-smooth-bottom',      sub: 'Flush bottom rail, clean line' },
        { label: '2-Rail Smooth, 3" Spacing',  img: 'aluminum-2-rail-smooth',  slug: '2rail-smooth-bottom-3in',  sub: 'Tighter picket spacing' },
        { label: '3-Rail Rake Bottom',         img: 'aluminum-3-rail-rake',    slug: '3rail-rake-bottom',        sub: 'Pickets extend past the bottom rail' },
        { label: '3-Rail Puppy Picket',        img: 'aluminum-puppy-picket',   slug: '3rail-puppy-picket',       sub: 'Extra pickets low down, for pets' },
        { label: 'Pool Code',                  img: 'aluminum-pool-code',      slug: null,                       sub: 'Non-climbable, FBC barrier' },
        { label: 'Spear Top',                  img: 'aluminum-spear-top',      slug: null,                       sub: 'Ornamental spear finials' },
        { label: '4-Rail Custom',              img: 'aluminum-custom',         slug: null,                       sub: 'Taller runs and custom configurations' }
      ],
      heights: ["4'", "5'", "6'"],
      gradeLabel: 'Grade',
      grades: [
        { label: 'Residential', slug: 'res', sub: '5/8" pickets · 1" channels' },
        { label: 'Commercial',  slug: 'com', sub: '3/4" pickets · 1-1/4" channels' }
      ]
    },
    'chain-link': {
      name: 'Chain Link', tag: 'Galvanized + vinyl-coated',
      styleLabel: 'Finish',
      styles: [
        { label: 'Galvanized',       img: 'chainlink-galvanized', slug: null, sub: 'ASTM A392 zinc coat' },
        { label: 'Black PVC-coated', img: 'chainlink-black',      slug: null, sub: 'Reads cleaner on residential' },
        { label: 'Green PVC-coated', img: 'chainlink-green',      slug: null, sub: 'Blends into landscaping' },
        { label: 'Heavy Gauge',      img: 'chainlink-heavy-gauge',slug: null, sub: 'For industrial perimeters' }
      ],
      heights: ["4'", "5'", "6'", "8'"], grades: []
    },
    vinyl: {
      name: 'Vinyl / PVC', tag: 'Catalyst-extruded PVC',
      styleLabel: 'Profile',
      styles: [
        { label: 'Privacy',      img: 'vinyl-privacy',      slug: null, sub: 'Solid panel, no gaps' },
        { label: 'Semi-Privacy', img: 'vinyl-semi-privacy', slug: null, sub: 'Airflow with partial screening' },
        { label: 'Picket',       img: 'vinyl-picket',       slug: null, sub: 'Open front-yard look' },
        { label: 'Ranch Rail',   img: 'vinyl-ranch-rail',   slug: null, sub: 'Two or three rail, acreage' }
      ],
      heights: ["4'", "5'", "6'"], grades: []
    },
    metal: {
      name: 'Metal / DuraFence', tag: 'Aluminum board privacy',
      styleLabel: 'Style',
      styles: [
        { label: 'Modern',   img: 'metal-modern',   slug: null, sub: 'Wide horizontal boards' },
        { label: 'Original', img: 'metal-original', slug: null, sub: 'Classic board profile' },
        { label: 'P1',       img: 'metal-p1',       slug: null, sub: 'Narrow slat pattern' }
      ],
      heights: ["6'", "8'"], grades: []
    },
    ecfence: {
      name: 'EC Fence', tag: 'Self-mating galvanized steel',
      styleLabel: 'Color',
      styles: [
        { label: 'Bronze', img: 'ecfence-bronze', slug: null, sub: 'Warm dark finish' },
        { label: 'White',  img: 'ecfence-white',  slug: null, sub: 'Bright coastal finish' },
        { label: 'Matching Gate', img: 'ecfence-gate', slug: null, sub: 'Gate built to match the run' }
      ],
      heights: ["6'"], grades: []
    }
  };

  /* Fichas de panel que existen. Fuente: assets/specs. Si la combinacion no
     esta, se dice claro en vez de ofrecer un enlace roto. */
  var SHEETS = {
    'alum-4ft-com-2rail-smooth-bottom-3in': 1, 'alum-4ft-res-2rail-smooth-bottom-3in': 1,
    'alum-4ft-res-2rail-smooth-bottom': 1, 'alum-4ft-res-3rail-puppy-picket': 1,
    'alum-4ft-res-3rail-rake-bottom': 1, 'alum-5ft-res-3rail-rake-bottom': 1,
    'alum-6ft-com-3rail-rake-bottom': 1
  };

  var ORDER = ['aluminum', 'chain-link', 'vinyl', 'metal', 'ecfence'];
  var s = { mat: 'aluminum', style: null, height: null, grade: null, open: 0 };

  /* Se puede llegar desde una tarjeta de perfil de la pagina del material:
     fence-builder.html?m=aluminum&p=aluminum-3-rail-rake
     El perfil se identifica por su IMAGEN, no por el nombre: la ficha del
     material y este configurador usan etiquetas distintas ("3-Rail" frente a
     "3-Rail Rake Bottom") y la imagen es lo unico que coincide siempre. */
  (function precargar() {
    var q = new URLSearchParams(location.search);
    var mat = q.get('m'), img = q.get('p');
    if (mat && MAT[mat]) { s.mat = mat; s.open = 1; }
    if (img) {
      var enc = MAT[s.mat].styles.filter(function (x) { return x.img === img; })[0];
      if (enc) { s.style = enc.label; s.open = 2; }
    }
  })();

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); };
  var m = function () { return MAT[s.mat]; };
  var styleObj = function () {
    return m().styles.filter(function (x) { return x.label === s.style; })[0] || null; };

  /* Que pasos existen para el material elegido: no todos tienen grado. */
  function steps() {
    var out = [{ key: 'mat', title: 'Material' }, { key: 'style', title: m().styleLabel }, { key: 'height', title: 'Height' }];
    if (m().grades && m().grades.length) { out.push({ key: 'grade', title: m().gradeLabel }); }
    return out;
  }
  function value(k) {
    return k === 'mat' ? m().name : (s[k] || null);
  }
  function completo() {
    return steps().every(function (st) { return value(st.key); });
  }
  function sheetKey() {
    var st = styleObj();
    if (s.mat !== 'aluminum' || !st || !st.slug || !s.height || !s.grade) { return null; }
    var g = m().grades.filter(function (x) { return x.label === s.grade; })[0];
    return 'alum-' + s.height.replace("'", '') + 'ft-' + g.slug + '-' + st.slug;
  }

  function imgSrc() {
    var st = styleObj();
    return 'assets/profiles/' + (st ? st.img : m().styles[0].img) + '.jpg';
  }

  function pintarVista() {
    var img = $('preview');
    var src = imgSrc();
    if (img.getAttribute('src') !== src) {
      img.classList.add('is-swapping');
      var nueva = new Image();
      nueva.onload = function () { img.src = src; img.classList.remove('is-swapping'); };
      nueva.onerror = function () { img.classList.remove('is-swapping'); };
      nueva.src = src;
    }
    $('badge').textContent = m().name;
    $('preview').alt = m().name + (s.style ? ' ' + s.style : '') + ' fence panel';

    var filas = [['Material', m().name], [m().styleLabel, s.style], ['Height', s.height]];
    if (m().grades && m().grades.length) { filas.push([m().gradeLabel, s.grade]); }
    $('spec').innerHTML = filas.map(function (f) {
      return '<dt>' + esc(f[0]) + '</dt><dd' + (f[1] ? '' : ' class="is-empty"') + '>' +
             esc(f[1] || 'Not chosen yet') + '</dd>';
    }).join('');
  }

  function pintarPasos() {
    var lista = steps();
    var html = lista.map(function (st, i) {
      var val = value(st.key);
      var abierto = s.open === i;
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
      html += '<div class="bld__done">' +
        '<span class="wfs-kicker">Your build</span>' +
        '<h2>' + esc(m().name + ' · ' + s.style + ' · ' + s.height + (s.grade ? ' · ' + s.grade : '')) + '</h2>' +
        '<p>Send it over with your linear footage and gate count and we come back with pricing in 24 hours.</p>' +
        '<div class="bld__actions">' +
          '<a class="btn btn-primary" href="estimate.html">Request a Quote</a>' +
          '<a class="btn btn-ghost on-dark" href="specs.html">Browse all spec sheets</a>' +
        '</div>' +
        '<div class="bld__sheet">' + (k ?
          'Spec sheet for this build: <a href="assets/specs/' + k + '-panel.pdf" download>' + esc(k) + '-panel.pdf</a>' :
          '<span class="none">No spec sheet drawn for this exact build yet. Ask us and we will send the closest one.</span>') +
        '</div>' +
      '</div>';
    }
    $('steps').innerHTML = html;
  }

  function cuerpo(k) {
    if (k === 'mat') {
      return ORDER.map(function (id) {
        var x = MAT[id];
        return '<button class="opt" data-set="mat" data-v="' + id + '" aria-pressed="' + (s.mat === id) + '">' +
          '<img class="opt__thumb" src="assets/profiles/' + x.styles[0].img + '.jpg" alt="" loading="lazy">' +
          '<span><span class="opt__name">' + esc(x.name) + '</span>' +
          '<span class="opt__sub">' + esc(x.tag) + '</span></span>' +
          '<span class="opt__tick"></span></button>';
      }).join('');
    }
    if (k === 'style') {
      return m().styles.map(function (x) {
        return '<button class="opt" data-set="style" data-v="' + esc(x.label) + '" aria-pressed="' + (s.style === x.label) + '">' +
          '<img class="opt__thumb" src="assets/profiles/' + x.img + '.jpg" alt="" loading="lazy">' +
          '<span><span class="opt__name">' + esc(x.label) + '</span>' +
          '<span class="opt__sub">' + esc(x.sub) + '</span></span>' +
          '<span class="opt__tick"></span></button>';
      }).join('');
    }
    if (k === 'height') {
      return '<div class="opts-row">' + m().heights.map(function (h) {
        return '<button class="chip" data-set="height" data-v="' + esc(h) + '" aria-pressed="' + (s.height === h) + '">' + esc(h) + '</button>';
      }).join('') + '</div>';
    }
    return m().grades.map(function (g) {
      return '<button class="opt" data-set="grade" data-v="' + esc(g.label) + '" aria-pressed="' + (s.grade === g.label) + '">' +
        '<span><span class="opt__name">' + esc(g.label) + '</span>' +
        '<span class="opt__sub">' + esc(g.sub) + '</span></span>' +
        '<span class="opt__tick"></span></button>';
    }).join('');
  }

  function render() { pintarPasos(); pintarVista(); }

  document.addEventListener('click', function (e) {
    var edit = e.target.closest('[data-edit]');
    if (edit) { s.open = +edit.dataset.edit; return render(); }

    var b = e.target.closest('[data-set]');
    if (!b) { return; }
    var campo = b.dataset.set, v = b.dataset.v;

    if (campo === 'mat') {
      /* Cambiar de material invalida lo elegido despues: un perfil de vinilo no
         existe en chain link, y una altura de 8' no existe en aluminio. */
      if (s.mat !== v) { s.mat = v; s.style = null; s.height = null; s.grade = null; }
    } else {
      s[campo] = v;
    }
    var lista = steps();
    var i = lista.map(function (x) { return x.key; }).indexOf(campo);
    s.open = i + 1 < lista.length ? i + 1 : lista.length;
    render();
  });

  render();
})();
