$(document).ready(function() {
  'use strict';
  // PAGE SCROLLING FEATURE
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 0)
      }, 500, 'easeInOutExpo');
      event.preventDefault();
  });
  // GET JSON FILE
  $.ajax({
    url: "story.json",
    dataType: "text",
    success: function(data) {
      // PARSE JSON FILE
      var story = $.parseJSON(data);
      // INITIAL STORY, IMAGE, AND BUTTONS
      $('#image').attr('src',story[0].image);
      $('#story').html(story[0].text);
      $('#1').html(story[0].button1);
      $('#2').html(story[0].button2);
      $('#1,#2').css('display',story[0].display);
      // COUNTER
      var start = 0;
      // CHOICE 1
      $('#1').click(function() {
        // USE THE COUNTER FOR CHOICE 1
        var x = (start + '1');
        for (var i = 0; i < story.length; i++ ) {
          if ( x === story[i].story) {
            start = story[i].story;
            if ( story[i].image === '') {
              $('#image').attr('src',story[0].image);
            } else {
              $('#image').attr('src',story[i].image);        
            }
            $('#story').html(story[i].text);
            $('#1').html(story[i].button1);
            $('#2').html(story[i].button2);
            $('#1,#2').css('display',story[i].display);
            return;
          } else {
          }
        }
      });
      // CHOICE 2
      $('#2').click(function() {
        // USE THE COUNTER FOR CHOICE 2
        var x = (start + '2');
        for (var i = 0; i < story.length; i++ ) {
          if ( x === story[i].story) {
            start = story[i].story;   
            if ( story[i].image === '') {
              $('#image').attr('src',story[0].image);
            } else {
              $('#image').attr('src',story[i].image);        
            }        
            $('#story').html(story[i].text);
            $('#1').html(story[i].button1);
            $('#2').html(story[i].button2);
            $('#1,#2').css('display',story[i].display);
            return;
          } else {
          }
        }
      }); // END CHOICE 2
    } // END SUCCESS GETTING JSON FILE
  }); // END GET JSON FILE
}); // END JQUERY