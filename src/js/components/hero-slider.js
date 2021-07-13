$(document).ready(function () {

  $('.hero-slider').slick({
    infinite: true,
    slidersToShow: 1,
    slidersToScroll: 1,
    speed: 600,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
      },
    ]
  });
});

