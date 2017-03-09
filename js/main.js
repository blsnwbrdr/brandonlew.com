$(document).ready(function() {
  "use strict";

// TOGGLE BG COLOR
  
  $('.bg_button').click(function() {
    $('.bg_white').toggleClass('bg_black');
  });

// PAGE SCROLLING FEATURE
  
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });
  
// CLOSE THE RESPONSIVE MENU ON CLICK
  
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });
  
// OFFSET MAIN NAV  
  
  $('#navbar').affix({
    offset: {
        top: 100
    }
  });
  
// SCROLL REVEAL ANIMATION  
  
  window.sr = ScrollReveal();
  sr.reveal('.sr_button', {
    duration: 1000,
    delay: 300
  });
  sr.reveal('.sr_icon', {
    duration: 500,
    delay: 500,
    distance: '0px',
    scale: 0.2,
  }, 300);
  
});

// MODAL

function onClick(element) {
  "use strict";
  document.getElementById("modal01").style.display = "block";
  document.getElementById("img01").src = element.src;
  document.getElementById("caption").innerHTML = element.alt;
  }
  span.onclick = function() { 
  modal.style.display = "none";
  }