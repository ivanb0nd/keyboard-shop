$(document).ready(function () {
  $('.slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    arrows: false,
    asNavFor: '.slider-bottom',
  });

  $('.slider-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    arrows: true,
    asNavFor: '.slider-top',
    focusOnSelect: true,
  });
});
