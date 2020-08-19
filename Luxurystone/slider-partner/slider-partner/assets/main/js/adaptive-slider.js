"use strict";




// ПОЛУЧАЕМ ПЕРВЫЙ СЛАЙДЕР МОБИЛЬНОЙ ВЕРСИИ САЙТА

let slider_1 = document.querySelector(".main__lower-benefits__wrapper");


// ПОЛУЧАЕМ ПЕРВЫЙ СЛАЙДЕР МОБИЛЬНОЙ ВЕРСИИ САЙТА

let slider_2 = document.querySelector(".main__prices__wrapper");



// ИЗМЕНЯЕМ СОДЕРЖИМОЕ В ЗАВИСИМОСТИ ОТ ИЗМЕНЕНИЯ РАЗМЕРОВ ЭКРАНА

window.addEventListener('resize', event => {
  let window_width = document.body.clientWidth;

  if ( window_width <= 800) {
    slider_1.classList.add("owl-carousel");
    slider_1.classList.add("owl-carousel-4");
    updateSliders();
  }
  else {
    slider_1.classList.remove("owl-carousel");
    slider_1.classList.remove("owl-carousel-4");
    owl_4.trigger('destroy.owl.carousel');
    updateSliders();
  }




  if (window_width <= 811) {
    slider_2.classList.add("owl-carousel");
    slider_2.classList.add("owl-carousel-5");
    updateSliders();
  }
  else {
    slider_2.classList.remove("owl-carousel");
    slider_2.classList.remove("owl-carousel-5");
    owl_5.trigger('destroy.owl.carousel');
    updateSliders();
  }
}, false);


// ИНИЦИАЛИЗИРУЕМ СОБЫТИЕ ИЗМЕНЕНИЯ ЭКРАНА ИЗНАЧАЛЬНО ДЛЯ ПОДСТРОЙКИ САЙТА ПОД МОБ. УСТРОЙСТВА

let resize_event = new Event("resize");
window.dispatchEvent(resize_event);
