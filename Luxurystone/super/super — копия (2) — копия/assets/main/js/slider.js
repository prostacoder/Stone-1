"use strict";

$(".main__slider-1").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  prevArrow: '<img src="images/previous.svg" class="slick-prev">',
  nextArrow: '<img src="images/next.svg" class="slick-next">',
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

let slider_dots_1 = document.querySelectorAll(
  ".main__slider-1 > .slick-dots > li > button"
);

for (let dot of slider_dots_1) {
  dot.innerHTML = "";
}

$(".main__our-partners__slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1515,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
      },
    }
  ],
});

let slider_dots_2 = document.querySelectorAll(
  ".main__our-partners__slider > .slick-dots > li > button"
);

for (let dot of slider_dots_2) {
  dot.innerHTML = "";
}

$(".main__reviews__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

let slider_dots_3 = document.querySelectorAll(
  ".main__reviews__slider > .slick-dots > li > button"
);

for (let dot of slider_dots_3) {
  dot.innerHTML = "";
}
