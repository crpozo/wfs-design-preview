/* Monta la cabecera y el pie reales del sitio alrededor del contenido del blog.
   El contenido lo pinta PHP; React solo pone el marco, asi que la entrada se
   lee igual si el JavaScript falla o tarda. */
(function () {
  function mount(id, el) {
    var node = document.getElementById(id);
    if (!node || !window.React || !window.ReactDOM || !el) { return; }
    ReactDOM.createRoot(node).render(el);
  }
  function go() {
    if (window.SiteHeader) {
      mount('wfs-header', React.createElement(window.SiteHeader, { active: 'Fence Education Hub' }));
    }
    if (window.Footer) { mount('wfs-footer', React.createElement(window.Footer)); }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', go);
  } else { go(); }
})();
