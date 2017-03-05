$(document).ready(function() {

//-----TOGGLE BG COLOR-----//
  $('#bg_button').click(function() {
    $('#bg_white').toggleClass('bg_black');
  });

//-----PAGE SCROLLING-----//
  
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });
});

//-----NAVBAR-----//

function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

//-----LOADER-----//

//var myVar;
//
//function myFunction() {
//  myVar = setTimeout(showPage, 1000);
//}
//
//function showPage() {
//  document.getElementById("loader").style.display = "none";
//  document.getElementById("myDiv").style.display = "block";
//}

//-----MODAL-----//

function onClick(element) {
  document.getElementById("modal01").style.display = "block";
  document.getElementById("img01").src = element.src;
  document.getElementById("caption").innerHTML = element.alt;
  }
  span.onclick = function() { 
  modal.style.display = "none";
  }