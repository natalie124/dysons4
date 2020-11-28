'use strict';
(function() {
  var tabs = document.querySelector('.js-tabs');

  if (!tabs) {
    return;
  }

  var btns = tabs.querySelectorAll('label');

  function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
  }

  function addCnt(btn) {
    var btnNum = btn.getAttribute('data-tabs');
    var cnt = document.querySelector('.js-tabs-content[data-tabs="' + btnNum + '"]');
    var clone = cnt.cloneNode(true);

    clone.classList.add("active");
    btn.classList.add("active");
    insertAfter(clone, btn);
  }

  function removeCtn() {
    var cnt = tabs.querySelector('.js-tabs-content.active');
    var btn = tabs.querySelector('label.active');

    if (!cnt || !btn) {
      return;
    }

    cnt.remove();
    btn.classList.remove('active');
  }

  Array.prototype.forEach.call(btns, function(btn) {
    btn.addEventListener('click', function() {
      if (window.innerWidth < 768 && !btn.classList.contains('active')) {
        removeCtn();
        addCnt(btn);
      } else {
        removeCtn();
      }
    });
  });
})();
