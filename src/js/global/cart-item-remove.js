'use strict';
(function() {
  var cartForm = document.querySelector('.js-cart-form form');
  var codeEnter = 13;

  if (!cartForm) {
    return;
  }

  function blocksButtons() {
    // блокирует кнопки submit
    var btns = document.querySelectorAll('.js-registration-btn');

    if (!btns) {
      return
    }
    Array.prototype.forEach.call(btns, function(btn) {
      btn.remove();
    });
  }

  function checkItems() {
    // проверяет наличие товаров в корзине
    var cartItems = document.querySelectorAll('.js-cart-item');
    return cartItems.length === null || cartItems.length < 1 ? false : true
  }

  function addItemsRemove() {
    // добавляет удаление товаров из корзины
    var removebtns = document.querySelectorAll('.js-remove-btn');
    if (!removebtns) {
      return;
    }

    Array.prototype.forEach.call(removebtns, function(btn) {
      btn.addEventListener('click', function() {
        btn.parentNode.remove();
        var flag = checkItems();
        if (flag === false) {
          blocksButtons();
        }
      });
      btn.addEventListener('keydown', function() {
        if (evt.keyCode === codeEnter) {
          btn.parentNode.remove();
        }
      });
    });
  }

  if (!Element.prototype.remove) {
    Element.prototype.remove = function remove() {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  }

  addItemsRemove();
  console.log("!");
})();
