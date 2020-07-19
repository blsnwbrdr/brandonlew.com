// ARRAY OF PHOTOS
var photos = [
  "http://brandonsco.de/portfolio/tipjar/img/banner1.jpg",
  "http://brandonsco.de/portfolio/tipjar/img/banner2.jpg",
  "http://brandonsco.de/portfolio/tipjar/img/banner3.jpg",
  "http://brandonsco.de/portfolio/tipjar/img/banner4.jpg",
  "http://brandonsco.de/portfolio/tipjar/img/banner5.jpg"
];

// VARIABLES
var banner = document.getElementById('banner');
var random = Math.floor(Math.random() * photos.length);
var id = 1;
var z = -1;
var bannerId = 'banner' + id;

// CREATE INITIAL BANNER
banner.innerHTML += '<div id="banner' + id + '" class="banners"></div>';
document.getElementById(bannerId).style.backgroundImage = 'url("' + photos[random] + '")';
document.getElementById(bannerId).style.zIndex = z;

// ROTATE BANNER FUNCTION
function slideShow() {
  // 4 SECOND INTERVAL
  setInterval(function() {
    // CHANGE VARIABLE VALUES
    random = random +1;
    if(random === photos.length) {
      random = 0;
    }
    id = id + 1;
    z = z - 1;
    bannerId = 'banner' + id;
    var oldBannerId = 'banner' + (id - 1);
    // CREATE NEW BANNER
    banner.innerHTML += '<div id="banner' + id + '" class="banners"></div>';
    document.getElementById(bannerId).style.zIndex = z;    
    document.getElementById(bannerId).style.backgroundImage = 'url("' + photos[random] + '")';
    // 1 SECOND AFTER THE INTERVAL
    setTimeout(function() {
      // FADE OUT OLD BANNER
      document.getElementById(oldBannerId).className += ' fadeOut';
    }, 1000);
    // 2 SECONDS AFTER THE INTERVAL
    setTimeout(function() {
      // REMOVE OLD BANNER
      banner.removeChild(document.getElementById(oldBannerId));
    }, 2000);
  }, 4000);
}

slideShow();