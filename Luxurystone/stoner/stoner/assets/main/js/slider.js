"use strict";


async function launch_1_slider(){

  $(".main__slider-1").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    prevArrow: '<img src="images/previous.svg" class="slick-prev">',
    nextArrow: '<img src="images/next.svg" class="slick-next">',
  });
  
  
  let slider_dots_1 = document.querySelectorAll(
    ".main__slider-1 > .slick-dots > li > button"
  );
  
  for (let dot of slider_dots_1) {
      dot.innerHTML = "";
  }


}
launch_1_slider().then(function(result) {

  $(".main__our-partners__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: true,
  });

    let slider_dots_2 = document.querySelectorAll(
      ".main__our-partners__slider > .slick-dots > li > button"
    );

    for (let dot of slider_dots_2) {
      dot.innerHTML = "";
    }
  

}).then(function(result) {


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
  



})


