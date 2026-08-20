/* Traduce los enlaces "products.html" de los componentes a las URLs reales de
   WordPress, y sirve desde este dominio los assets que viajan en el tema.
   Compartido por index.php y por las plantillas del blog: si esto se duplicara,
   una de las dos copias acabaria quedandose atras. */
(function () {
  var map = window.WFS_LINKS || {};
  function resolve(href) {
    if (!href) { return null; }
    var m = href.match(/([A-Za-z0-9._-]+\.html)(#.*)?$/);
    if (!m || !map[m[1]]) { return null; }
    return map[m[1]] + (m[2] || '');
  }
  /* Los assets que viajan en el tema se sirven desde este dominio, no desde
     el preview: la URL es la del cliente y no depende de un repo externo. */
  var local = window.WFS_LOCAL_ASSETS || {};
  var base = (window.WFS_ASSET_BASE || '').replace(/\/$/, '') + '/';
  function localize(el, attr) {
    var v = el.getAttribute(attr);
    if (!v || v.indexOf(base) !== 0) { return; }
    var rel = v.slice(base.length).split('?')[0];
    if (local[rel]) { el.setAttribute(attr, local[rel]); }
  }
  function patch(root) {
    var scope = root || document;
    var links = scope.querySelectorAll('a[href*=".html"]');
    for (var i = 0; i < links.length; i++) {
      var to = resolve(links[i].getAttribute('href'));
      if (to) { links[i].setAttribute('href', to); }
    }
    var a = scope.querySelectorAll('a[href]');
    for (var j = 0; j < a.length; j++) { localize(a[j], 'href'); }
    var m = scope.querySelectorAll('img[src], source[src], video[src]');
    for (var k = 0; k < m.length; k++) { localize(m[k], 'src'); }
  }
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href*=".html"]') : null;
    if (!a) { return; }
    var to = resolve(a.getAttribute('href'));
    if (to) { a.setAttribute('href', to); }
  }, true);
  /* Se observa el body, no solo #root: el blog monta la cabecera y el pie en
     sus propios contenedores y tambien necesitan que se les traduzcan los
     enlaces. */
  if (window.MutationObserver && document.body) {
    new MutationObserver(function () { patch(document.body); })
      .observe(document.body, { childList: true, subtree: true });
  }
  document.addEventListener('DOMContentLoaded', function () { patch(document); });
})();
