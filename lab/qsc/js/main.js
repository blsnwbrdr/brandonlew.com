$(document).ready(function() {
  "use strict";
  
// CLOSE THE RESPONSIVE MENU ON CLICK
  
  $('.navbar-collapse ul li a').click(function() {
      $('.navbar-toggle:visible').click();
  });
  
// SCROLL REVEAL ANIMATION  
  
  window.sr = ScrollReveal();
  sr.reveal('.sr_blurb', {
    duration: 1000,
    delay: 300
  });
  sr.reveal('.sr_icon', {
    duration: 500,
    delay: 500,
    distance: '0px',
    scale: 0.2,
  });

  
});