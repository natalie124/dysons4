'use strict'
$(function() {
  function createIframe(video) {
    var iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(video));
    iframe.classList.add('video__media');

    return iframe;
  }

  function generateURL(video) {
    return video.getAttribute('data-url') + '?rel=0&autoplay=1';
  }

  function setupVideo(video) {
    var iframe = createIframe(video);

    $(video).find('.video__link').removeAttr('href').hide('slow');
    $(video).find('.video__btn').hide('slow');
    $(video).addClass('active');
    video.appendChild(iframe)
  }

  $('.video').click(
    function() {
      if (!$(this).hasClass('active')) {
        setupVideo(this);
      }
    }
  );
});
