// PAGE ELEMENTS
var nav = document.getElementById('nav');
var navIcon = document.getElementById('navIcon');
var banner = document.getElementById('banner');

// RANDOMIZE BANNER IMAGE
var _banner = {
  // images
  images: ['2012_0998','2017_0597'],
  // pick random image
  randomize: function(){
    // create random number based on number of images available
    var randomNum = Math.floor(Math.random() * _banner.images.length);
    // set style attribute of banner with random background image
    banner.setAttribute('style','background-image:url(images/banner_' + _banner.images[randomNum] + '.jpg);');
  }
}
_banner.randomize();

// NAVIGATION MENU LINKS
var _navigation = {
  // navigation scroll to functionality
  scroll: function(e){
    // navigation menu links
    if(e.target && e.target.classList.contains('navMenuLink')){
      // prevent default anchor behavior
      e.preventDefault();
      // smooth scroll to href
      _smoothScrolling.goTo(e.target.getAttribute('href'),0,500);
      // uncheck nav icon
      navIcon.checked = false;
    }
  },
  // add class if javascript enabled on browser for navigation animation
  jsEnabled: function(e){
    // if navIcon is clicked
    if(e.target && e.target.id === 'navIcon'){
      // add jsEnabled class if javascript is turn on
      nav.classList.add('jsEnabled');
    }
  }
}

// MODALS
var _modal = {
  // display modal
  display: function(targetModal){
    // taret modal id
    var modal = document.getElementById(targetModal);
    // add staticBody class to body
    document.body.classList.add('staticBody');
    // add open class to display target modal
    modal.classList.add('open');
  },
  // close open modals
  close: function(targetModal){
    // taret modal id
    var modal = document.getElementById(targetModal);
    // remove staticBody class to body
    document.body.classList.remove('staticBody');
    // remove open class of target modal
    modal.classList.remove('open');
    // add close class to close target modal
    modal.classList.add('close');
    // delay removing close animation class
    setTimeout(function(){
      modal.classList.remove('close');
    },500);
  }
}

// ETSY API
var africa = '15311634';
var asia = '15306280';
var europe = '15306643';
var northAmerica = '15311764';
var southAmerica = '15322811';
var continents = [africa, asia, europe, northAmerica, southAmerica];
var _etsy = {
  getImages: function(section){
    var shopName = "blewphotography";
    var apiKey = "xis6u17jgj9lpn3icytgtzxq";
    var url = 'https://openapi.etsy.com/v2/shops/' + shopName + '/sections/' + section + '/listings/active.js?api_key=' + apiKey + '&includes=MainImage&fields=title,listing_id,url&limit=100'
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(data) {
        // randomize
        data.results.sort(function() {
          return 0.5 - Math.random();
        });
        // remove odd size listings
        for(var x = data.results.length; x--;) {
          if(data.results[x].listing_id === 259259197) {
            data.results.splice(x,1);
          } else if(data.results[x].listing_id === 210787557) {
            data.results.splice(x,1);
          } else if(data.results[x].listing_id === 185468274) {
            data.results.splice(x,1);
          } else if(data.results[x].listing_id === 185488602) {
            data.results.splice(x,1);
          } else if(data.results[x].listing_id === 691028887) {
            data.results.splice(x,1);
          }
        }
        // display 12 listings
        for(var i = 0;i < data.results.length;i++){
          if(i < 12){
            var photos = document.querySelectorAll('.photos');
            for(var j = 0;j < photos.length;j++){
              if(i === j){
                photos[j].insertAdjacentHTML('afterbegin','<div class="portfolioSlide" onclick="_modal.display(&#39;modal' + j + '&#39;);"> <img src="' + data.results[i].MainImage.url_fullxfull + '" alt="' + data.results[i].title + '"><div class="portfolioOverlay"></div></div><div id="modal' + j + '" class="portfolioModalOverlay"><div class="portfolioModal"> <span class="portfolioModalClose" onclick="_modal.close(&#39;modal' + j + '&#39;);">X</span><div class="porfolioModalHeader"> <img src="' + data.results[i].MainImage.url_fullxfull + '" alt="' + data.results[i].title + '"></div><div class="portfolioModalBody"><p class="h4">' + data.results[i].title + '</p><a href="' + data.results[i].url + '" aria-label="' + data.results[i].title + '"  target="_blank"><button type="button">purchase on etsy</button></a></div></div></div>');
              }
            }
          }
        }
      }
    });
  },
  initiate: function(){
    // randomize
    continents.sort(function() {
      return 0.5 - Math.random();
    });
    _etsy.getImages(continents[0]);
  }
}
_etsy.initiate();

// SMOOTH SCROLLING FUNCTION
var _smoothScrolling = {
  // go to target element with offset and duration
  goTo: function(target,offset,duration){
    // target element
    var targetQuery = document.querySelectorAll(target);
    // target element's position with offset
    var targetPosition = targetQuery[0].getBoundingClientRect().top + offset;
    // smooth scrolling interval
    _smoothScrolling.interval(targetPosition,duration);
  },
  // smooth scrolling interval
  interval: function(targetPosition,duration){
    // entire document height
    var documentHeight = document.body.clientHeight;
    // browser window height
    var windowHeight = window.innerHeight;
    // number of intervals based on duration
    var numberIntervals = Math.ceil(duration / 25);
    // interval scroll by height
    var scrollByHeight = Math.floor(targetPosition / numberIntervals);
    // last interval
    var lastInterval = targetPosition - (numberIntervals * scrollByHeight);
    // interval duration counter
    var durationCounter = 0;
    // scroll interval
    var scrollInterval = setInterval(function(){
      durationCounter++;
      // up to number of intervals, scroll by height
      if(durationCounter <= numberIntervals){
        window.scrollBy(0,scrollByHeight);
      }else{
        // clear interval once number of intervals has been reached
        window.scrollBy(0,lastInterval);
        clearInterval(scrollInterval);
      }
    },25); // scroll by height every 25 milliseconds
  }
}

// CLICK EVENT LISTENERS
document.addEventListener('click',function(e){
  // activate navigation js check for animation
  _navigation.jsEnabled(e);
  // activate navigation anchor scrolling
  _navigation.scroll(e);
});
