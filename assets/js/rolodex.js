/* ==========================================================================
   Rolodex — 3D cylindrical card carousel
   Vanilla JS, no dependencies.
   ========================================================================== */

(function () {
  'use strict';

  // Firefox detection — apply .is-firefox for CSS z-order fallback.
  // See comment in rolodex.css for the bug this addresses.
  if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1) {
    document.documentElement.classList.add('is-firefox');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var stage    = document.getElementById('rolodex-stage');
    var prevBtn  = document.getElementById('rolodex-prev');
    var nextBtn  = document.getElementById('rolodex-next');
    var counter  = document.getElementById('rolodex-counter');
    var liveRegion = document.getElementById('rolodex-live');

    if (!stage || !prevBtn || !nextBtn) return;

    var cards = stage.querySelectorAll('.rolodex__card');
    // Read --total-cards from the CSS custom property set by Liquid in rolodex.html.
    // This keeps the card count as a single source of truth (_data/rolodex.yml → Liquid → CSS var)
    // rather than inferring it by counting DOM nodes at runtime.
    var total = parseInt(getComputedStyle(stage).getPropertyValue('--total-cards').trim(), 10);
    if (!total || total === 0) total = cards.length; // fallback
    if (total === 0) return;

    var currentIndex = 0;

    function getCardTitle(index) {
      var titleEl = cards[index].querySelector('.rolodex__card-title');
      return titleEl ? titleEl.textContent.trim() : '';
    }

    function update() {
      // Rotate the cylinder so the active card faces forward.
      stage.style.setProperty('--active-index', currentIndex);

      // Update the visual counter.
      if (counter) {
        counter.textContent = (currentIndex + 1) + ' / ' + total;
      }

      // Update aria-live region for screen readers.
      if (liveRegion) {
        liveRegion.textContent = getCardTitle(currentIndex);
      }

      // Firefox: mark active card so CSS opacity rule applies.
      cards.forEach(function (card, i) {
        card.classList.toggle('rolodex__card--active', i === currentIndex);
      });
    }

    prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + total) % total;
      update();
    });

    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % total;
      update();
    });

    // Keyboard navigation when focus is inside the rolodex
    stage.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { prevBtn.click(); e.preventDefault(); }
      if (e.key === 'ArrowRight') { nextBtn.click(); e.preventDefault(); }
    });

    // Initialise
    update();
  });
})();
