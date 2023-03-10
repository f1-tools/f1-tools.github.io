//navbar code for burger menu for mobile
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

  // get all a elements in #navbarBasicExample
  const $navbarLinks = Array.prototype.slice.call(document.querySelectorAll('#navbarBasicExample a'), 0);

  const $navbarMenu = document.getElementById('navbarBasicExample');

  // add click event to each link
  $navbarLinks.forEach( el => {
    el.addEventListener('click', () => {

      // remove is-active class from all navbar-burger elements
      $navbarBurgers.forEach( el => {
        el.classList.remove('is-active');
      });

      // remove is-active class from navbar-menu
      $navbarMenu.classList.remove('is-active');

    }
  )});

});