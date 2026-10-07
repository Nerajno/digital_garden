document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

// Add a click event on each of them
$navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
    const isOpen = el.classList.contains('is-active');
    el.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    // The menu sits before the burger in the DOM, so Tab would skip it:
    // move focus to its first link when it opens.
    const firstLink = $target.querySelector('a');
    if (isOpen && firstLink) firstLink.focus();

    });
});
}
});