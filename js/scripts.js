$(document).ready(function() {
  "use strict";

// TOGGLE BG COLOR

  $('.bg_button').click(function() {
    $('.bg_white').toggleClass('bg_black');
  });

// PAGE SCROLLING EASING FEATURE

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
        top: 0
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

// CONTACT FORM

  $("#contact_form").on('submit',function(e) {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    if(name.length === 0 || email.length === 0 || message.length === 0) {
      $('input,textarea').css('border-color','rgba(255, 0, 0, 0.5)');
      $("#error").show().fadeIn(1000);
      e.preventDefault();
      return;
    } else {
      $.ajax({
        url:'contact_form.php',
        data: $(this).serialize(),
        type:'POST',
        success: function(data){
          $("#success").show().fadeIn(1000);
          $("#name").val("").css('border-color','#909090');
          $("#email").val("").css('border-color','#909090');
          $("#message").val("").css('border-color','#909090');
          $("#error").fadeOut();
          $("#contact_form").each(function(){
            $(this).reset();
          });
          data();
        },
      });
    }
    e.preventDefault();
  });

var shopName = "blewphotography";
var apiKey = "xis6u17jgj9lpn3icytgtzxq";
var photoArray = [];
// GET IMAGES FUNCTION

  function getImages(section) {
    // CLEAR GRID
    $('.photos').html('');
    // GET DATA FROM ETSY
    $.ajax({
      url: "https://openapi.etsy.com/v2/shops/" + shopName + "/sections/" + section + "/listings/active.js?api_key=" + apiKey + "&includes=MainImage&fields=title,listing_id,url&limit=100",
      dataType: "jsonp",
      success: function(data) {
        data.results.sort(function() {
          return 0.5 - Math.random();
        });
        // photoArray.push(data.results);
        var photoArray = {"results": data.results}
        console.log(photoArray.results.length)
        $.each(photoArray.results, function(i) {
          if(photoArray.results[i].listing_id === 259259197) {
            photoArray.results.splice(i,1);
          } else if(photoArray.results[i].listing_id === 210787557) {
            photoArray.results.splice(i,1);
          } else if(photoArray.results[i].listing_id === 185468274) {
            photoArray.results.splice(i,1);
          }

          if (i < 12) {
            var photos = $('.photos');
            $.each(photos, function(x) {
              if(i === x ) {
                $(photos[x]).append('<a href="#" data-toggle="modal" data-target="#' + data.results[i].listing_id + '"><img src="' + data.results[i].MainImage.url_570xN + '" alt="' + data.results[i].title + '"  class="image"></a>');
              }
            })
            $('#modals').append('<div id="' + data.results[i].listing_id + '" class="modal fade"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body"><button class="close" type="button" data-dismiss="modal">&times;</button><img class="img-responsive" src="' + data.results[i].MainImage.url_fullxfull + '"></div><div class="modal-footer"><h4 class="modal-title">' + data.results[i].title + '</h4><a href="' + data.results[i].url + '" target="_blank"><button type="button">purchase on etsy</button></a></div></div></div></div>');
          }
        });
      }
    });
  }

  getImages('15306280');

  $('#northAmerica').click(function() {
    getImages("15311764");
  });
  $('#europe').click(function() {
    getImages("15306643");
  });
  $('#africa').click(function() {
    getImages("15311634");
  });
  $('#asia').click(function() {
    getImages("15306280");
  });

}); // END JQUERY
