$('.multiple-items').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
  $('.center').slick({
    centerMode: true,
    slidesToShow: 3,
  });
let slider = $("#Header__slider");

slider.slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true,
});