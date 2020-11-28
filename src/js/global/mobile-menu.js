// 'use strict';
// (function() {
//   var body = document.querySelector('body');
//   var menuBtn = document.querySelector('.js-mobile-menu-btn');

//   if (!menuBtn) {
//     return;
//   }

//   var menuItems = [
//     '.header__menu-btn',
//     '.header__logo',
//     '.footer__phones',
//     '.header__cart',
//     '.header__search',
//     '.main-menu__list'
//   ];

//   var menuClass = 'mobile-menu';

//   var activeClass = 'mobile-menu--active';
//   var closeClass = 'mobile-menu--close';

//   var scrollHiddenClass = 'scroll-hidden';

//   function createMobileMenu(className, items) {
//     var menu = document.createElement('div');
//     var container = document.createElement('div');
//     var containerClass = className + '__container';

//     menu.classList.add(className);
//     container.classList.add(containerClass);

//     Array.prototype.forEach.call(items, function(item) {
//       if (item) {
//         container.appendChild(document.querySelector(item).cloneNode(true));
//       }
//     });

//     menu.appendChild(container);
//     body.appendChild(menu);
//   }

//   function removeMobileMenu(className) {
//     var menu = document.querySelector('.' + className);
//     if (menu) {
//       menu.remove();
//     }
//   }

//   function openMenu() {
//     createMobileMenu(menuClass, menuItems);

//     var menu = document.querySelector('.' + menuClass);
//     var btn = menu.querySelector('.js-mobile-menu-btn');
//     var container = menu.querySelector('.mobile-menu__container');

//     window.activateDropMenu();

//     if (menu) {

//       menu.classList.add(activeClass);
//     }
//     body.classList.add(scrollHiddenClass);

//     btn.addEventListener('click', function() {
//       closeMenu();
//     });
//     menu.addEventListener('click', function(evt) {
//       if (!container.contains(evt.target)) {
//         closeMenu();
//       }
//     });
//   }

//   function closeMenu() {
//     var menu = document.querySelector('.' + menuClass);
//     var btn = menu.querySelector('.js-mobile-menu-btn');

//     if (menu) {
//       menu.classList.add(closeClass);
//       menu.classList.remove(activeClass);
//       btn.disabled = true;
//       menuBtn.disabled = true;
//     }

//     body.classList.remove(scrollHiddenClass);

//     setTimeout(function() {
//       menuBtn.disabled = false;
//       removeMobileMenu(menuClass);
//     }, 600);

//   }
//   menuBtn.addEventListener('click', openMenu);
// })();
