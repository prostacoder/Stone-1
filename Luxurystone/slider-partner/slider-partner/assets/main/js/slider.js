"use strict";


// ОБЪВЛЕНИЕ, НЕОБХОДИМОЕ ДЛЯ ВСЕХ СЛАЙДЕРОВ

$(document).ready(function(){
  $(".main__partners-slider").owlCarousel();
});



let owl_5 = $('.owl-carousel-5');
let owl_4 = $('.owl-carousel-4');


// ВКЛЮЧАЕМ РАБОТУ СЛАЙДЕРОВ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ

updateSliders();

function updateSliders(){
  // СЛАЙДЕР, ПОДКЛЮЧАЕМЫЙ В РАЗДЕЛЕ НАШИ РАБОТЫ

  let owl_1 = $('.owl-carousel-1');
  owl_1.owlCarousel({
    loop:true,
    nav:true,
    margin: 30,
    smartSpeed: 1200,
    navText: ["<img src='images/main/arrow_left.png'>", "<img src='images/main/arrow_right.png'>"],
    responsive:{
      0:{
        items:1,
        stagePadding: 40
      },
      380:{
        items: 1,
        stagePadding: 55
      },
      440:{
        items: 1,
        stagePadding: 80
      },
      491:{
        items: 1
      },
      580:{
        items: 1
      },
      910:{
        items: 2
      },
      1300:{
        items: 3
      },
      1400:{
        items: 3
      }
    }
  });
  owl_1.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owl_1.trigger('next.owl');
    } else {
      owl_1.trigger('prev.owl');
    }
    e.preventDefault();
  });


  // СЛАЙДЕР, ПОДКЛЮЧАЕМЫЙ В РАЗДЕЛЕ ОТЗЫВЫ НАШИХ КЛИЕНТОВ

  let owl_2 = $('.owl-carousel-2');
  owl_2.owlCarousel({
    loop:true,
    nav:true,
    margin: 30,
    smartSpeed: 1200,
    navText: ["<img src='images/main/arrow_left.png'>", "<img src='images/main/arrow_right.png'>"],
    responsive:{
      0:{
        items:1,
        stagePadding: 40
      },
      521:{
        items:1,
      },
      896:{
        items:2
      },
      1300:{
        items:3
      }
    }
  });
  owl_2.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owl_2.trigger('next.owl');
    } else {
      owl_2.trigger('prev.owl');
    }
    e.preventDefault();
  });



  // СЛАЙДЕР, ПОДКЛЮЧАЕМЫЙ В РАЗДЕЛЕ СЕРТИФИКАТЫ

  let owl_3 = $('.owl-carousel-3');
  owl_3.owlCarousel({
    loop:true,
    nav:true,
    margin: 15,
    smartSpeed: 1200,
    navText: ["<img src='images/main/arrow_left.png'>", "<img src='images/main/arrow_right.png'>"],
    responsive:{
      0:{
        items:1
      },
      956:{
        items: 2
      },
      960:{
        items: 3,
        margin: 40
      },
      1301:{
        items:5
      }
    }
  });
  owl_3.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owl_3.trigger('next.owl');
    } else {
      owl_3.trigger('prev.owl');
    }
    e.preventDefault();
  });


  // 1 - ЫЙ СЛАЙДЕР, КОТОРЫЙ ПОЯВЛЯЕТСЯ В МОБИЛЬНОЙ ВЕРСИИ РАЗДЕЛА "ПРЕИМУЩЕСТВА"

  owl_4 = $('.owl-carousel-4');
  owl_4.owlCarousel({
    loop:true,
    nav:true,
    margin: 40,
    smartSpeed: 1200,
    navText: ["<img src='images/main/arrow_left.png'>", "<img src='images/main/arrow_right.png'>"],
    responsive:{
      0:{
        items: 1,
        stagePadding: 40,
        margin: 20,
      },
      370:{
        items: 1,
        stagePadding: 50,
        margin: 20,
      },
      390:{
        items: 1,
        stagePadding: 60,
        margin: 20,
      },
      415:{
        items: 1,
        stagePadding: 60,
        margin: 20,
      },
      440:{
        items: 1,
        stagePadding: 80,
        margin: 20,
      },
      540:{
        items: 1,
        stagePadding: 80,
        margin: 20,
      },
      580:{
        items: 1,
        margin: 40,
      },
      801:{
        items: 1
      }
    }
  });
  owl_4.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owl_4.trigger('next.owl');
    } else {
      owl_4.trigger('prev.owl');
    }
    e.preventDefault();
  });




  // 1 - ЫЙ СЛАЙДЕР, КОТОРЫЙ ПОЯВЛЯЕТСЯ В МОБИЛЬНОЙ ВЕРСИИ РАЗДЕЛА "НАШИ РАБОТЫ"

  owl_5 = $('.owl-carousel-5');

  owl_5.owlCarousel({
    loop:true,
    nav:true,
    margin: 15,
    smartSpeed: 1200,
    navText: ["<img src='images/main/arrow_left.png'>", "<img src='images/main/arrow_right.png'>"],
    responsive:{
      0:{
        items: 1,
        stagePadding: 50,
        margin: 80,
      },
      370:{
        items: 1,
        stagePadding: 50,
        margin: 80,
      },
      390:{
        items: 1,
        stagePadding: 60,
        margin: 80,
      },
      415:{
        items: 1,
        stagePadding: 60,
        margin: 80,
      },
      440:{
        items: 1,
        stagePadding: 80,
        margin: 80,
      },
      540:{
        items: 1,
        stagePadding: 80,
        margin: 80,
      },
      580:{
        items: 1,
        margin: 40,
      },
      801:{
        items: 1
      }
    }
  });
  owl_5.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
      owl_5.trigger('next.owl');
    } else {
      owl_5.trigger('prev.owl');
    }
    e.preventDefault();
  });





}
