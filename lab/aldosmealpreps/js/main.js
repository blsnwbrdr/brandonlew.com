$(document).ready(function() {
  "use strict";
  
// PAGE SCROLLING FEATURE
  
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 0)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });
  
// TOP BOX FEATURE - HIDE OR SHOW
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.top_box').fadeIn(500);
    } else {
      $('.top_box').fadeOut(500);
    }
  });
  
// CLOSE THE RESPONSIVE MENU ON CLICK
  
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });
  
// SCROLL REVEAL ANIMATION
  
  window.sr = ScrollReveal();
    sr.reveal('.sr_checks', {
      duration: 1000,
      delay: 500,
      distance: '0px',
      scale: 0.2
    }, 200);
    sr.reveal('.sr_button', {
      duration: 1000,
    });
    sr.reveal('.sr_contact', {
      duration: 1500,
      origin: 'left'
    });

// MIXITUP MENU ANIMATION
  
    $('#menu_list').mixItUp();
  
});

