// 'use strict';
// (function() {
//   // активирует дроп-меню
//   window.activateDropMenu = function() {
//     var items = document.querySelectorAll('.js-drop-item');
//     var openClass = 'js-drop-item--open';

//     if (!items) {
//       return;
//     }

//     Array.prototype.forEach.call(items, function(item) {
//       var menu = item.querySelector('.js-drop-menu');
//       var xItemPosition = item.getBoundingClientRect().right + document.body.scrollLeft;
//       var timeout = null;
//       var tabletWidth = 1023;

//       if (!menu) {return;}
//       // открывает дроп-меню
//       function openMenu() {
//         menu.classList.remove('js-hide');
//         item.classList.add('js-drop-item--open');
//         document.addEventListener('click', onDocumentClick);
//       }
//       // закрывает дроп-меню
//       function closeMenu() {
//         menu.classList.add('js-hide');
//         item.classList.remove('js-drop-item--open');
//         document.removeEventListener('click', onDocumentClick);
//       }

//       // устранение дребезга
//       function addTimeout(action) {
//         timeout = setTimeout(action, 300);
//       }

//       // обнуляет таймер
//       function removeTimeout() {
//         clearTimeout(timeout);
//       }

//       function onItemMouseover() {
//         if (window.innerWidth > tabletWidth) {
//           addTimeout(openMenu);
//         }
//       }

//       function onItemMouseleave() {
//         if (window.innerWidth > tabletWidth) {
//           removeTimeout();
//           closeMenu();
//         }
//       }

//       function onItemClick(evt) {
//         if (window.innerWidth > tabletWidth) {
//           return;
//         }
//         if (menu.classList.contains('js-hide')) {
//           evt.preventDefault();
//           openMenu();
//         } else if (!menu.classList.contains('js-hide') && !menu.contains(evt.target)) {
//           evt.preventDefault();
//           closeMenu();
//         }
//       }

//       function onDocumentClick(evt) {
//         if (!menu.contains(evt.target) && !item.contains(evt.target)) {
//           closeMenu();
//         }
//       }

//       // позиционирование дроп-меню (слве/справа) в зависимости от положения пункта меню
//       xItemPosition <= (window.innerWidth / 2) ? menu.classList.add('js-left') : menu.classList.add('js-right');

//       item.addEventListener('mouseout', removeTimeout);
//       item.addEventListener('mouseover', onItemMouseover);
//       item.addEventListener('mouseleave', onItemMouseleave);
//       item.addEventListener('click', onItemClick);

//       window.addEventListener('resize', function() {
//         if (window.innerWidth <= tabletWidth) {
//           item.removeEventListener('mouseover', onItemMouseover);
//           item.removeEventListener('mouseleave', onItemMouseleave);
//           item.removeEventListener('mouseout', removeTimeout);
//           item.addEventListener('click', onItemClick);
//         } else {
//           item.addEventListener('mouseover', onItemMouseover);
//           item.addEventListener('mouseleave', onItemMouseleave);
//           item.addEventListener('mouseout', removeTimeout);
//           item.removeEventListener('click', onItemClick);
//         }
//       });
//     });
//   }

//   activateDropMenu();
// })();
