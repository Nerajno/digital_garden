/* Notes index (/notes): By type / By stage toggle (?view=, replaceState) and search over
   titles + excerpts. Without JS both views render, type first. Markup: pages/notes.md. */
(function () {
  var root = document.querySelector('[data-notes]');
  if (!root) return;
  var all = function (s) { return root.querySelectorAll(s); };
  var input = root.querySelector('#notes-search'), empty = root.querySelector('[data-empty]');

  function show(view, save) {
    if (view !== 'stage') view = 'type';
    all('[data-view]').forEach(function (el) { el.hidden = el.dataset.view !== view; });
    all('[data-view-btn]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.viewBtn === view)); });
    if (save) {
      var params = new URLSearchParams(location.search);
      params.set('view', view);
      history.replaceState(null, '', location.pathname + '?' + params);
    }
  }

  function filter() {
    var q = input.value.trim().toLowerCase();
    all('[data-item]').forEach(function (it) { it.hidden = !!q && it.dataset.search.indexOf(q) === -1; });
    all('[data-group]').forEach(function (g) { g.hidden = !!q && !g.querySelector('[data-item]:not([hidden])'); });
    var shown = all('[data-view="type"] [data-item]:not([hidden])').length;
    empty.textContent = q && !shown ? 'No notes match “' + input.value.trim() + '”.' : '';
  }

  all('[data-view-btn]').forEach(function (b) {
    b.addEventListener('click', function () { show(b.dataset.viewBtn, true); });
  });
  input.addEventListener('input', filter);
  all('[data-js-only]').forEach(function (el) { el.hidden = false; });
  all('[data-no-js]').forEach(function (el) { el.hidden = true; });
  show(new URLSearchParams(location.search).get('view'), false);
})();
