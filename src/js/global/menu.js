'use strict'
$(function() {
  var btn = $('.js-menu-btn');
  var menu = $('.js-menu');
  var menuContainer = $('.js-menu .menu__wrapper');

  var menuItems = [
    '.header .logo',
    '.js-menu-btn',
    '.js-search',
    '.header .nav-menu',
    '.header .phones'
  ];

  function openMenu() {
    if (window.outerWidth  < 768) {
      if (!menu.hasClass('mobile-menu')) {
        $.each(menuItems, function(index, value) {
        $(value).clone().appendTo(menuContainer);
      });
      menu.addClass('mobile-menu');
      menu.find('.js-menu-btn').on('click', function() {
        closeMenu();
      });
      }
    }
    btn.toggleClass('active');
    menu.fadeToggle();
    $(document).on('keydown', onEscPress);
    $(document).on('mouseup', onDocumentMouseup);
    $('body').toggleClass('scroll-hidden');
  }

  function closeMenu() {
    btn.removeClass('active');
    menu.fadeOut();
    $(document).off('keydown', onEscPress);
    $(document).off('mouseup', onDocumentMouseup);
    $('body').removeClass('scroll-hidden');
  }

  function onEscPress(e) {
    if (e.keyCode === 27) {
      closeMenu();
    }
  };

  function onDocumentMouseup(e) {
    if (!btn.is(e.target) && btn.has(e.target).length === 0 &&
        !menuContainer.is(e.target) && menuContainer.has(e.target).length === 0) {
      closeMenu();
    }
  };

  btn.on('click', function() {
    openMenu();
  });
});
