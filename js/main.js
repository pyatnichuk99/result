$(document).ready(function () {
    $('.second-button').on('click', function () {
      $('.animated-icon2').toggleClass('open');
      $('.header-menu').toggleClass('open__class');
      $('.header-menu__item').toggleClass('d-block')
    });
  });
  var btn = $('#button__down');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '400');
  });