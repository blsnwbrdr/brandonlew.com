$(document).ready(function() {
  "use strict";
  // BUTTONS
  $('#northAmerica').click(function() {
    getImages("15311764");
    arrow();
  });
  $('#europe').click(function() {
    getImages("15306643");
    arrow();
  });
  $('#africa').click(function() {
    getImages("15311634");
    arrow();
  });
  $('#asia').click(function() {
    getImages("15306280");
    arrow();
  });
  // ARROW FUNCTION
  function arrow() {
    $('#arrow').replaceWith('<i id="arrow" class="fa fa-arrow-down animated bounce"></i>');
  }
  // GET IMAGES FUNCTION
  function getImages(section) {
    var apiKey = "xis6u17jgj9lpn3icytgtzxq";
    var shopName = "blewphotography";
    // CLEAR GRID
    $('.grid').replaceWith('<div class="grid"><div class="grid-sizer"></div></div>');
    // GET DATA FROM ETSY
    $.ajax({
      url: "https:openapi.etsy.com/v2/shops/" + shopName + "/sections/" + section + "/listings/active.js?api_key=" + apiKey + "&includes=MainImage&fields=title,listing_id,url&limit=100",
      dataType: "jsonp",
      success: function(data) {
        data.results.sort(function() {
          return 0.5 - Math.random();
        });
        $.each(data.results, function(i) {
//        for(var i = 0; i < data.results.length; i++) {
          if(i < 12) {
            $('.grid').append('<a href="#" data-toggle="modal" data-target="#' + data.results[i].listing_id + '"><div class="grid-item" style="background-image:url(' + data.results[i].MainImage.url_fullxfull + ')"><div class="hover"></div></div></a>');
            $('#modals').append('<div id="' + data.results[i].listing_id + '" class="modal fade"><div class="modal-dialog modal-lg"><div class="modal-content"><div class="modal-body"><button class="close" type="button" data-dismiss="modal">&times;</button><img class="img-responsive" src="' + data.results[i].MainImage.url_fullxfull + '"></div><div class="modal-footer"><h4 class="modal-title">' + data.results[i].title + '</h4><a href="' + data.results[i].url + '" target="_blank"><button type="button">purchase on etsy</button></a></div></div></div></div>');
          }
        });
      }
    }); // END AJAX
  }
  // INITIALIZE ISOTOPE AFTER IMAGES HAVE BEEN LOADED WITH IMAGESLOADED
  var $grid = $('.grid').imagesLoaded( function() {
  // ISOTOPE
    $grid.isotope({
      layoutMode: 'masonry',
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {columnWidth: '.grid-sizer'}
    });
  });
  // PAGE SCROLLING EASING FEATURE
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 0)
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
  });
  // TOP BOX
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.top_box').fadeIn(500);
    } else {
      $('.top_box').fadeOut(500);
    }
  });
}); // END JQUERY
