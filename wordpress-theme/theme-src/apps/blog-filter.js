/* Buscador y filtros del indice del blog.
   Trabaja sobre las tarjetas que ya pinto PHP: no pide nada al servidor, y sin
   JavaScript la pagina sigue mostrando todas las entradas. */
(function () {
  var q     = document.getElementById('wfs-q');
  var grid  = document.getElementById('wfs-posts');
  var vacio = document.getElementById('wfs-noresults');
  if (!grid) { return; }

  var chips = [].slice.call(document.querySelectorAll('.wfs-chip'));
  var cards = [].slice.call(grid.querySelectorAll('.wfs-post-card'));
  var cat = '';

  function aplicar() {
    var texto = (q && q.value || '').trim().toLowerCase();
    var visibles = 0;
    cards.forEach(function (c) {
      var okCat = !cat || c.getAttribute('data-cat') === cat;
      var okTxt = !texto || (c.getAttribute('data-text') || '').indexOf(texto) !== -1;
      var ver = okCat && okTxt;
      c.hidden = !ver;
      if (ver) { visibles++; }
    });
    if (vacio) { vacio.hidden = visibles !== 0; }
  }

  chips.forEach(function (b) {
    b.addEventListener('click', function () {
      cat = b.getAttribute('data-cat') || '';
      chips.forEach(function (o) { o.classList.toggle('is-on', o === b); });
      aplicar();
    });
  });
  if (q) { q.addEventListener('input', aplicar); }
})();
