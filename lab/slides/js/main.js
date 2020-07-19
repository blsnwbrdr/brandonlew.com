    // CREATE SLIDE NUMBER IN SHOW ELEMENT
    var slideNumber = 1;    
    var show = document.getElementById('show');
    show.setAttribute('name', '' + slideNumber + '');
    
    // SET WIDTH OF ALL SLIDES
    var slides = document.querySelectorAll('.slides');
    for(var x = 0; x < slides.length; x++) {
      slides[x].style.width = '' + show.offsetWidth + 'px';
    }
    
    // SET INITIAL MARGIN LEFT OF REEL ELEMENT
    var margin = 0;
    var reel = document.getElementById('reel');
    reel.style.marginLeft = '' + margin + 'px'; 
    
    // SET VISIBILITY OF ALL SLIDES
    for(var i = 0; i < slides.length; i++) {
      slides[i].style.visibility = 'hidden';
      slides[slideNumber - 1].style.visibility = 'visible';
    }
        
    // CHANGE WIDTH OF ALL SLIDES ON BROWSER RESIZE
    function responsiveSlides() {
      for(var x = 0; x < slides.length; x++) {
        slides[x].style.width = '' + show.offsetWidth + 'px';
      }  
    }
    window.addEventListener('resize', responsiveSlides);
    
    // CHANGE MARGIN LEFT TO STAY ON SHOWN SLIDE
    function responsiveMargin() {
      var showName = document.getElementById('show').getAttribute('name');    
      var showNameNumber = Number(showName.match(/[0-9]{1,2}/));
      reel.style.marginLeft = '' + show.offsetWidth * (showNameNumber - 1) * -1 + 'px';
    }
    window.addEventListener('resize', responsiveMargin);
    
    // GO TO NEXT SLIDE
    function slideNext() {
      // CHANGE SLIDE NUMBER IN SHOW ELEMENT
      slideNumber = slideNumber + 1;
      show.setAttribute('name', '' + slideNumber + '');
      // GET MARGIN LEFT OF REEL ELEMENT
      var reelMargin = reel.getAttribute('style');
      var reelMarginNumber = Number(reelMargin.match(/[0-9]{1,10}/));        
      // NEW MARGIN = OLD MARGIN - SLIDE WIDTH
      margin = reelMarginNumber * -1 - show.offsetWidth;
      reel.style.marginLeft = '' + margin + 'px';
      // SET VISIBILITY OF ALL SLIDES
      for(i = 0; i < slides.length; i++) {
        slides[i].style.visibility = 'hidden';
        slides[slideNumber - 1].style.visibility = 'visible';
      }      
    }
    document.getElementById('slideOneNext').addEventListener('click', slideNext);
    document.getElementById('slideTwoNext').addEventListener('click', slideNext);
    document.getElementById('slideThreeNext').addEventListener('click', slideNext);
    
    // GO TO PREVIOUS SLIDE
    function slidePrevious() {
      // CHANGE SLIDE NUMBER IN SHOW ELEMENT
      slideNumber = slideNumber - 1; 
      show.setAttribute('name', '' + slideNumber + '');
      // GET MARGIN LEFT OF REEL ELEMENT
      var reelMargin = reel.getAttribute('style');
      var reelMarginNumber = Number(reelMargin.match(/[0-9]{1,10}/));
      // NEW MARGIN = OLD MARGIN - SLIDE WIDTH
      margin = reelMarginNumber * -1 + show.offsetWidth;
      reel.style.marginLeft = '' + margin + 'px';
      // SET VISIBILITY OF ALL SLIDES
      for(i = 0; i < slides.length; i++) {
        slides[i].style.visibility = 'hidden';
        slides[slideNumber - 1].style.visibility = 'visible';
      }   
    }
    document.getElementById('slideTwoBack').addEventListener('click', slidePrevious);
    document.getElementById('slideThreeBack').addEventListener('click', slidePrevious);
    document.getElementById('slideFourBack').addEventListener('click', slidePrevious); 