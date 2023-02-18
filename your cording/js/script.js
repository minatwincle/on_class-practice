$('#faq dd:nth-of-type(1)').show();
$('#faq dt').on('click', function() {
  $(this).next().slideToggle();
});
$(function() {
  window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
      slidesPerView:1.1,
      breakpoints: {
        1025: {
          slidesPerView: 2.8,
        },
        769: {
          slidesPerView: 1.8,
        },
      },
      spaceBetween: 56,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });
  }
});
$(document).ready(function () {
  const $submitBtn = $('#submit-btn')
  $('#form input, #form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="mail"]').val() !== "" &&
      $('#form textarea').val() !== "" &&
      $('#form #policy').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  });
});
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = -95;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
AOS.init();
$('.burger').on('click', function() {
  $('.burger, ul').toggleClass('slide-menu');
  $('.burger, ul').addClass('slide-out');
});
$('header li a').on('click', function() {
  $('.burger.slide-menu, ul.slide-menu').removeClass('slide-menu');
})

