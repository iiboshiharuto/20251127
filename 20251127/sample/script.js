/*** AOS.js ***/
AOS.init({
  offset: 0,
  duration: 1000,
  easing: 'ease-in',
  delay: 400,
  once: false,
  anchorPlacement: 'bottom-top',
});

/*** jQuery スライドイン ***/
$(window).on('load', function () {
  var $slideIn = $('.slide-in'),
      slideInOffsetTop = $slideIn.offset().top,
      windowH = $(window).height();
  
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > slideInOffsetTop - windowH) {
      $slideIn.addClass('show');
    } else {
      $slideIn.removeClass('show');
    }
  });
});
