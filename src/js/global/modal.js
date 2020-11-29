'use strict';
(function() {
  var modals = document.querySelectorAll('.js-modal');
  var hideClass = 'js-hide';

  var body = document.querySelector('body');
  var scrollHiddenClass = 'scroll-hidden';

  var codeEsc = 27;
  var codeEnter = 13;

  var modalSelector = [
  // для открытия модалок
    { // для примера
      BTN: 'селектор кнопки',
      MODAL: 'селектор модалки',
      CALLBACK: 'название функции (если есть)' // например CALLBACK: 'имя'
    },
    { // для модалки товар добавлен в корзину
      BTN: '.js-card-cart',
      MODAL: '.js-modal-add'
    },
    { // для модалки купить в клик
      BTN: '.js-buy-click-btn',
      MODAL: '.js-modal-buy-click'
    },
  ];

  if (!modals) {
    return;
  }

  function addInputFocus(modal) {
    // добавляет фокус на первое поле
    var input = modal.querySelector('form input[type]:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="range"]):not([type="file"]):not([type="image"])');
    if (!input) {
      return;
    }
    input.focus();
  }

  function activateModalOpen() {
    function modalOpen(modalSelector) {
      // открывает модалку
      var modal = document.querySelector(modalSelector);
      if (!modal) {
        return;
      }
      modal.classList.remove(hideClass);
      body.classList.add(scrollHiddenClass);
      addInputFocus(modal);
    }
    Array.prototype.forEach.call(modalSelector, function(it) {
      document.addEventListener('click', function(evt) {
        if (evt.target.closest(it.BTN)) {
          evt.preventDefault();
          modalOpen(it.MODAL);
          it.CALLBACK && typeof window[it.CALLBACK] === 'function' ? window[it.CALLBACK]() : false;
        }
      });
      document.addEventListener('keydown', function(evt) {
        if (evt.target.closest(it.BTN) && evt.keyCode === codeEnter) {
          evt.preventDefault();
          modalOpen(it.MODAL);
          it.CALLBACK && typeof window[it.CALLBACK] === 'function' ? window[it.CALLBACK]() : false;
        }
      });
    });
  }

  function activateModalClose() {
    Array.prototype.forEach.call(modals, function(modal) {
      var closeBtns = modal.querySelectorAll('.js-close-btn');
      var container = modal.querySelector('.modal__container');

      function modalClose() {
        // закрывает модалку
        modal.classList.add(hideClass);
        body.classList.remove(scrollHiddenClass);
      }

      Array.prototype.forEach.call(closeBtns, function(btn) {
        btn.addEventListener('click', modalClose);
        btn.addEventListener('keydown', function(evt) {
          if (evt.keyCode === codeEnter) {
            modalClose();
          }
        });
      });

      modal.addEventListener('click', function(evt) {
        if (!container.contains(evt.target)) {
          modalClose();
        }
      });

      document.addEventListener('keydown', function(evt) {
        if (evt.keyCode === codeEsc) {
          evt.preventDefault();
          modalClose();
        }
      });
    });
  }

  (function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
      if (!this) return null;
      if (this.matches(selector)) return this;
      if (!this.parentElement) { return null } else return this.parentElement.closest(selector)
    };
  }(Element.prototype));

  activateModalClose();
  activateModalOpen();
})();
