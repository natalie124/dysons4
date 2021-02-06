'use strict'
$(function() {
  var btn = $('.js-search-btn');
  var menu = $('.js-search');

  function onEscPress(e) {
    if (e.keyCode === 27) {
      btn.removeClass('active');
      menu.fadeOut();
      $(document).off('keydown', onEscPress);
      $(document).off('mouseup', onDocumentMouseup);
    }
  };
  function onDocumentMouseup(e) {


    if (!btn.is(e.target) && btn.has(e.target).length === 0 &&
        !menu.is(e.target) && menu.has(e.target).length === 0) {
      btn.removeClass('active');
      menu.fadeOut();
      $(document).off('keydown', onEscPress);
      $(document).off('mouseup', onDocumentMouseup);
    }
  };

  btn.on('click', function() {
    $(this).toggleClass('active');
    menu.fadeToggle();
    $(document).on('keydown', onEscPress);
    $(document).on('mouseup', onDocumentMouseup);
  });
});
