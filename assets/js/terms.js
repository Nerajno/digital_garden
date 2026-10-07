/* Rolodex filters (/note/Rolodex): text + topic filters hide non-matching
   term cards and empty letter groups. Without JS the controls stay hidden
   and every term shows. Markup: _includes/term-card.html. */
(function () {
  var controls = document.querySelector('[data-terms-controls]');
  if (!controls) return;
  var input = document.getElementById('term-filter');
  var buttons = controls.querySelectorAll('.topic-button');
  var cards = document.querySelectorAll('.term-card');
  var groups = document.querySelectorAll('[data-letter-group]');
  var status = document.querySelector('[data-terms-status]');
  var empty = document.querySelector('[data-terms-empty]');
  var topic = '';

  function apply() {
    var q = input.value.trim().toLowerCase(), shown = 0;
    cards.forEach(function (card) {
      var match = card.dataset.search.indexOf(q) !== -1 &&
        (!topic || (' ' + card.dataset.topics + ' ').indexOf(' ' + topic + ' ') !== -1);
      card.hidden = !match;
      if (match) shown++;
    });
    groups.forEach(function (g) { g.hidden = !g.querySelector('.term-card:not([hidden])'); });
    empty.hidden = shown > 0;
    status.textContent = (q || topic) ? 'Showing ' + shown + ' of ' + cards.length + ' terms' : '';
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      topic = b.dataset.topic;
      buttons.forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
      apply();
    });
  });
  input.addEventListener('input', apply);
  controls.hidden = false;

  // Letter jumps land below the sticky bar (garden.css reads --rolodex-bar-h).
  function measure() {
    document.documentElement.style.setProperty('--rolodex-bar-h', controls.parentNode.offsetHeight + 'px');
  }
  measure();
  window.addEventListener('resize', measure);
})();
