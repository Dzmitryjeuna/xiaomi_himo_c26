$(function () {

  $('.primary__slider, .slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });



  $('.nav__btn').on('click', function () {
    $('.nav__list').toggleClass('nav__list--active')
  });
});