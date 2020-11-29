'use strict'
$(function() {
  $('.js-submenu-item').on('click', function(e) {
    if (window.outerWidth  < 768){
      e.preventDefault();
      var menu = $(this).children('.js-submenu');
      menu.slideToggle();
    }
  });
});
