const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('menu--active');
  document.body.classList.toggle('lock');
});
