document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('menu-toggle');
  var menu = document.getElementById('menu');

  if (input && menu) {
    if (!input.checked) {
      menu.classList.add('hidden');
    }

    input.addEventListener('change', function () {
      if (input.checked) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
      }
    });
  }

  var typedElement = document.querySelector('.typing');
  if (typedElement && window.Typed) {
    new Typed('.typing', {
      strings: ['', 'FullStack Developer,'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }
});
