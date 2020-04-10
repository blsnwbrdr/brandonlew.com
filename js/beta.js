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

// NAVIGATION MENU LINKS
var _navigation = {
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
  jsEnabled: function(e){
    if(e.target && e.target.id === 'navIcon'){
      nav.classList.add('jsEnabled');
    }
  }
}

// CLICK EVENT LISTENERS
document.addEventListener('click',function(e){
  _navigation.jsEnabled(e);
  _navigation.scroll(e);
});
