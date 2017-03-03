$(document).ready(function() {
  $('#bg_button').click(function() {
    $('#bg_white').toggleClass('bg_black');
  });
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function onClick(element) {
  document.getElementById("modal01").style.display = "block";
  document.getElementById("img01").src = element.src;
  document.getElementById("caption").innerHTML = element.alt;
  }
  span.onclick = function() { 
  modal.style.display = "none";
  }