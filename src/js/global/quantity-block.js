'use strict';
(function() {
  function quantityProducts() {
    // для полей с количеством товара
    var items = document.querySelectorAll('.quantity-block');

    if (!items) {
      return;
    }

    Array.prototype.forEach.call(items, function(item) {
      var minus = item.querySelector('.quantity-block__btn--minus');
      var plus = item.querySelector('.quantity-block__btn--plus');
      var input = item.querySelector('input');

      var defaultMin = 2;
      var defaultMax = 100;
      var dataMin = input.getAttribute('data-min');
      var dataMax = input.getAttribute('data-max');

      var min = dataMin && parseInt(dataMin) ? dataMin : defaultMin;
      var max = dataMin && parseInt(dataMin) ? dataMax : defaultMax;

      var quantityFieldMask = new IMask(input, {
        mask: Number,
        min: min,
        max: max
      });

      function quantityMinus() {
        if (input.value > min) {
          input.value = +input.value - 1;
        }
      }

      function quantityPlus() {
        if (input.value < max) {
          input.value = +input.value + 1;
        }
      }

      minus.addEventListener('click', quantityMinus);
      plus.addEventListener('click', quantityPlus);
    });
  }

  quantityProducts();
})();
