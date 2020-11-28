'use strict'
$(function() {
  $('.blog__item').click(function(evt) {
    if (window.innerWidth < 768 && !$(this).hasClass('active')) {
      evt.preventDefault();
      $(this).addClass('active');
    }
  });
  $('.blog__item').on('touchstart', function(evt) {
    if (window.innerWidth < 768 && !$(this).hasClass('active')) {
      evt.preventDefault();
      $(this).addClass('active');
    }
  });
});


