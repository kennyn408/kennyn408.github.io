$(document).ready(function() {

  var $overlay = $('<div class="overlay"></div>');
  var $href = $('this').attr('href');
  var $popup = $('.pop-window');

  $('<div class="close">x</div>').appendTo($popup);
  $popup.hide();

  $('a').click(function(e) {
    e.preventDefault();
    $overlay.fadeIn(800).appendTo('body');
    $popup.delay(800).slideDown();
  });

  $overlay.click(function() {
    $overlay.delay(800).fadeOut();
    $popup.slideUp();
  });

  $('.close').click(function() {
    $popup.slideUp();
    $overlay.delay(800).fadeOut();
  });
});