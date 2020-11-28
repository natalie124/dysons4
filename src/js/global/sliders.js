'use strict';
// (function() {
//   // для главного баннера
//   var swiper = new Swiper('.main-banner', {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     speed: 1000,
//     loop: true,
//     grabCursor: true,
//     keyboard: {
//       enabled: true,
//     },
//     pagination: {
//       el: '.main-banner__pagination.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.main-banner__next',
//       prevEl: '.main-banner__prev',
//     },
//   });
// })();
// (function() {
// // для карточек
//   function activateSliders() {
//     var sliders = document.querySelectorAll('.cards-slider');

//     if (!sliders) {
//       return;
//     }

//     Array.prototype.forEach.call(sliders, function(it) {
//       var slider = it.querySelector('.cards-slider__wrapper');
//       var next = it.querySelector('.cards-slider__next');
//       var prev = it.querySelector('.cards-slider__prev');

//       console.log(slider);

//       var swiper = new Swiper(slider, {
//         slidesPerView: 'auto',
//         slidesPerGroup: 3,
//         navigation: {
//           nextEl: next,
//           prevEl: prev,
//         },
//         speed: 400,
//       });
//     });
//   }

//   activateSliders();
// })();

(function() {
// для галереи
  function activateSliders() {
    var sliders = document.querySelectorAll('.product-gallery');

    if (!sliders) {
      return;
    }

    Array.prototype.forEach.call(sliders, function(slider) {
      var sliderThumbs = slider.querySelector('.product-gallery__thumbs');
      var sliderTop = slider.querySelector('.product-gallery__top');
      var next = slider.querySelector('.product-gallery__nav--next');
      var prev = slider.querySelector('.product-gallery__nav--prev');

      var galleryThumbs = new Swiper(sliderThumbs, {
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        breakpoints: {
        1200: {
          direction: 'vertical'
          }
        },
      });
      var galleryTop = new Swiper(sliderTop, {
        // direction: 'vertical',
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        // effect: 'fade',
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
        thumbs: {
          swiper: galleryThumbs
        }
      });
    });
  }

  activateSliders();
})();
