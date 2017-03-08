$(document).ready(function() {
  "use strict";

// TOGGLE BG COLOR
  $('#bg_button').click(function() {
    $('#bg_white').toggleClass('bg_black');
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
  $('#mainNav').affix({
    offset: {
        top: 100
    }
  });
  
});



//-----MODAL-----//

function onClick(element) {
  document.getElementById("modal01").style.display = "block";
  document.getElementById("img01").src = element.src;
  document.getElementById("caption").innerHTML = element.alt;
  }
  span.onclick = function() { 
  modal.style.display = "none";
  }