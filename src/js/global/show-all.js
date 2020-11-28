// 'use strict'
// $(function() {
// // показывает / скрывает элементы
//   $('.js-show-container').each(function () {
//     var btn = $(this).find('.js-show-btn'),    // кнопка показать еще
//         dataText = btn.attr('data-text'),      // текст после активации
//         data = btn.attr('data-visible'),         // количество видимых блоков
//         items = $(this).find('.js-show-item'), // все блоки
//         dots = $(this).find('.js-dots'),       // точки в конце видимого текста
//         allItems = $(this).find('.js-show-all');// контейнер для отображения количества блоков

//     allItems.text('(' + items.length + ')');

//     var text = btn.text(); // текст кнопки

//     items.each(function (index, el) {
//       // скрывает все блоки кроме количества в атрибуте data-count
//       if (index >= data) {
//         el.classList.add('js-hidden');
//       }
//     });

//     btn.click(function () {
//       if (!btn.hasClass('js-show-btn-active')) {
//         // показывает все блоки после клика на кнопку и меняет текст кнопки на текст в атрибуте data-text
//         btn.addClass('js-show-btn-active');
//         dots.addClass('js-hidden');
//         btn.text(dataText);

//         items.each(function (index, el) {
//           el.classList.remove('js-hidden');
//         });
//       } else {
//         // скрывает все блоки кроме количества в атрибуте data-visible и меняте текст кнопки на дефолтный
//         btn.removeClass('js-show-btn-active');
//         dots.removeClass('js-hidden');
//         btn.text(text);

//         items.each(function (index, el) {
//           if (index >= data) {
//             el.classList.add('js-hidden');
//           }
//         });
//       }
//     });
//   });
// });
