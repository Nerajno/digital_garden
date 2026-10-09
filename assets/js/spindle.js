/* Rolodex spindle (/note/Rolodex): one term card at a time; the URL hash is the state.
   Without JS every card shows as an A–Z list. Markup: _includes/rolodex-spindle.html. */
(function () {
  var root = document.querySelector('[data-spindle]');
  if (!root) return;
  var $ = function (s) { return root.querySelector(s); };
  var all = function (s) { return Array.from(root.querySelectorAll(s)); };
  var cards = all('.term-card'), tiles = all('[data-tile]'), tabs = all('[data-tab]');
  var prev = $('[data-prev]'), next = $('[data-next]'), topic = $('[data-topic]'), listBtn = $('[data-list]');
  var order = cards, deck = cards, list = false;
  var current = byId(location.hash.slice(1)) || cards[0];

  function byId(id) {
    try { id = decodeURIComponent(id); } catch (e) { return null; }
    var el = id && document.getElementById(id);
    return cards.indexOf(el) !== -1 ? el : null;
  }
  function name(c) { return c.querySelector('.term-card__term').textContent; }
  function inDeck(c) { return !topic.value || (' ' + c.dataset.topics + ' ').indexOf(' ' + topic.value + ' ') !== -1; }

  function render(announce) {
    deck = order.filter(inDeck);
    if (deck.indexOf(current) === -1) { current = deck[0]; history.replaceState(null, '', '#' + current.id); }
    var i = deck.indexOf(current), n = deck.length, p = deck[(i - 1 + n) % n], q = deck[(i + 1) % n];
    cards.forEach(function (c) {
      c.hidden = !inDeck(c) || (!list && c !== current);
      c.querySelector('details').open = list;
    });
    tiles.forEach(function (t) {
      var on = t.dataset.tile === current.id;
      t.parentNode.hidden = !inDeck(byId(t.dataset.tile));
      t.classList.toggle('is-current', on);
      on ? t.setAttribute('aria-current', 'true') : t.removeAttribute('aria-current');
    });
    tabs.forEach(function (t) { t.classList.toggle('is-current', t.dataset.tab === current.dataset.letter); });
    $('[data-count]').textContent = current.dataset.letter + ' \u00b7 card ' + (i + 1) + ' of ' + n;
    prev.querySelector('[data-name]').textContent = name(p);
    next.querySelector('[data-name]').textContent = name(q);
    prev.setAttribute('aria-label', 'Previous term: ' + name(p));
    next.setAttribute('aria-label', 'Next term: ' + name(q));
    if (announce) $('[data-live]').textContent = name(current);
  }
  function go(c) { current = c; history.pushState(null, '', '#' + c.id); render(true); }
  function step(d) { var i = deck.indexOf(current), n = deck.length; go(deck[(i + d + n) % n]); }

  prev.addEventListener('click', function () { step(-1); });
  next.addEventListener('click', function () { step(1); });
  topic.addEventListener('change', function () { render(true); });
  $('[data-shuffle]').addEventListener('click', function () {
    order = cards.map(function (c) { return [Math.random(), c]; })
      .sort(function (a, b) { return a[0] - b[0]; })
      .map(function (pair) { return pair[1]; });
    list = false;
    listBtn.setAttribute('aria-pressed', 'false');
    root.classList.remove('is-list');
    go(order.filter(inDeck)[0]);
  });
  listBtn.addEventListener('click', function () {
    list = !list;
    listBtn.setAttribute('aria-pressed', String(list));
    root.classList.toggle('is-list', list);
    render(false);
  });
  window.addEventListener('hashchange', function () {
    var c = byId(location.hash.slice(1));
    if (c && c !== current) { current = c; render(true); }
  });
  document.addEventListener('keydown', function (e) {
    if (list || e.altKey || e.ctrlKey || e.metaKey || e.target.closest('input, select, textarea, [contenteditable]')) return;
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });

  all('[data-js-only]').forEach(function (el) { el.hidden = false; });
  root.classList.add('is-spindle');
  render(false);
})();
