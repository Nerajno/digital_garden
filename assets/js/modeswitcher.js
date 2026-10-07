/*
  Theme toggle (#38). Based on Derek Kedziora's mode switcher
  (https://github.com/derekkedziora/jekyll-demo, CC BY 4.0), rewritten.

  - The visitor's choice is saved in localStorage and applied before CSS
    loads by the inline script at the top of the layout <head>.
  - With no saved choice, CSS prefers-color-scheme follows the OS live;
    this script only keeps the button's label in sync.
  - The theme lives on <html data-theme>; components never check it.
*/
(function () {
  var root = document.documentElement;
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function savedTheme() {
    try {
      var t = localStorage.getItem('theme');
      return t === 'dark' || t === 'light' ? t : null;
    } catch (e) {
      return null;
    }
  }

  function currentTheme() {
    return root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light');
  }

  function updateButtons() {
    var isDark = currentTheme() === 'dark';
    var buttons = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      buttons[i].setAttribute('data-current', isDark ? 'dark' : 'light');
    }
  }

  function toggleTheme() {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    updateButtons();
  }

  // Follow OS changes while no choice is saved.
  systemDark.addEventListener('change', function () {
    if (!savedTheme()) updateButtons();
  });

  // Keep other open tabs in sync with a choice made here.
  window.addEventListener('storage', function (event) {
    if (event.key !== 'theme') return;
    var t = savedTheme();
    if (t) root.setAttribute('data-theme', t);
    else root.removeAttribute('data-theme');
    updateButtons();
  });

  function init() {
    var buttons = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', toggleTheme);
    }
    updateButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
