'use strict';
(function() {
  var telInputs = document.querySelectorAll('input[type="tel"]');

  if (!telInputs) {
    return
  }

  Array.prototype.forEach.call(telInputs, function(it) {
    // маска для поля с телефоном
    var phoneMask = new IMask(it, {
      mask: '+7(000)000-00-00'
    });
  });
})();
