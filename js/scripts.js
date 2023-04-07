// PAGE ELEMENTS
var nav = document.getElementById('nav');
var navIcon = document.getElementById('navIcon');
var banner = document.getElementById('banner');
var continents = document.querySelectorAll('.continents');
var photos = document.querySelectorAll('.photos');

// SKIP CONTENT SCROLL
var _skipContent = {
  scroll: function (e) {
    // navigation menu links
    if (e.target && e.target.classList.contains('skipLink')) {
      // prevent default anchor behavior
      e.preventDefault();
      // smooth scroll to href
      _smoothScrolling.goTo(e.target.getAttribute('href'), 0, 500);
    }
  },
};

// RANDOMIZE BANNER IMAGE
var _banner = {
  // images
  images: [
    '2005-1129',
    '2009-1792',
    '2012-1036',
    '2012-1343',
    '2014-0127',
    '2015-0154',
    '2016-0212',
    '2017-0597',
    '2018-1046',
    '2019-0871',
    '2019-1043',
    '2019-2587',
    '2019-2801',
    '2019-3172',
    '2020-0091',
    '2021-1167',
    '2021-1546',
    '2021-2514',
    '2022-0414',
    '2022-0734',
    '2022-2042',
    '2022-2171',
  ],
  // pick random image
  randomize: function () {
    // create random number based on number of images available
    var randomNum = Math.floor(Math.random() * _banner.images.length);
    // set style attribute of banner with random background image
    banner.setAttribute(
      'style',
      'background-image:url(images/banner-' +
        _banner.images[randomNum] +
        '.jpeg);'
    );
  },
};
_banner.randomize();

// NAVIGATION MENU LINKS
var _navigation = {
  // navigation scroll to functionality
  scroll: function (e) {
    // navigation menu links
    if (e.target && e.target.classList.contains('navMenuLink')) {
      // prevent default anchor behavior
      e.preventDefault();
      // smooth scroll to href
      _smoothScrolling.goTo(e.target.getAttribute('href'), 0, 500);
      // uncheck nav icon
      navIcon.checked = false;
    }
  },
  // add class if javascript enabled on browser for navigation animation
  jsEnabled: function (e) {
    // if navIcon is clicked
    if (e.target && e.target.id === 'navIcon') {
      // add jsEnabled class if javascript is turn on
      nav.classList.add('jsEnabled');
    }
  },
};

// MODALS
var _modal = {
  // display modal
  display: function (targetModal) {
    // target modal id
    var modal = document.getElementById(targetModal);
    // add staticBody class to body
    document.body.classList.add('staticBody');
    // add open class to display target modal
    modal.classList.add('open');
  },
  // close open modals
  close: function (targetModal) {
    // target modal id
    var modal = document.getElementById(targetModal);
    // remove staticBody class to body
    document.body.classList.remove('staticBody');
    // remove open class of target modal
    modal.classList.remove('open');
    // add close class to close target modal
    modal.classList.add('close');
    // delay removing close animation class
    setTimeout(function () {
      modal.classList.remove('close');
    }, 500);
  },
};

// STATIC IMAGES
var _staticImages = {
  // images
  images: [
    {
      src: '2009-1792',
      title: 'Istanbul, Turkey',
    },
    {
      src: '2012-1343',
      title: 'Hong Kong',
    },
    {
      src: '2014-0127',
      title: 'Tokyo, Japan',
    },
    {
      src: '2015-0154',
      title: 'Singapore',
    },
    {
      src: '2016-0212',
      title: 'Cape Coast, Ghana',
    },
    {
      src: '2017-0597',
      title: 'Colonia Del Sacramento, Uruguay',
    },
    {
      src: '2018-1046',
      title: 'Kyoto, Japan',
    },
    {
      src: '2019-0871',
      title: 'Copan, Honduras',
    },
    {
      src: '2019-1043',
      title: 'Panama City, Panama',
    },
    {
      src: '2019-2587',
      title: 'Geneva, Switzerland',
    },
    {
      src: '2019-2801',
      title: 'Bern, Switzerland',
    },
    {
      src: '2019-3172',
      title: 'Vaduz, Liechtenstein',
    },
  ],
  initiate: function () {
    // display static images
    for (var x = 0; x < _staticImages.images.length; x++) {
      for (var y = 0; y < photos.length; y++) {
        if (x === y) {
          photos[y].insertAdjacentHTML(
            'afterbegin',
            '<div class="portfolioSlide" onclick="_modal.display(&#39;modal' +
              y +
              '&#39;);"> <img src="images/banner-' +
              _staticImages.images[x].src +
              '.jpeg" alt="' +
              _staticImages.images[x].title +
              '"><div class="portfolioOverlay"></div></div><div id="modal' +
              y +
              '" class="portfolioModalOverlay"><div class="portfolioModal"> <span class="portfolioModalClose" onclick="_modal.close(&#39;modal' +
              y +
              '&#39;);">X</span><div class="portfolioModalHeader"> <img src="images/banner-' +
              _staticImages.images[x].src +
              '.jpeg" alt="' +
              _staticImages.images[x].title +
              '"></div><div class="portfolioModalBody"><p class="h4">' +
              _staticImages.images[x].title +
              '</p></a></div></div></div>'
          );
        }
      }
    }
  },
};
// use static images
_staticImages.initiate();

// SMOOTH SCROLLING FUNCTION
var _smoothScrolling = {
  // go to target element with offset and duration
  goTo: function (target, offset, duration) {
    // target element
    var targetQuery = document.querySelectorAll(target);
    // target element's position with offset
    var targetPosition = targetQuery[0].getBoundingClientRect().top + offset;
    // smooth scrolling interval
    _smoothScrolling.interval(targetPosition, duration);
  },
  // smooth scrolling interval
  interval: function (targetPosition, duration) {
    // entire document height
    var documentHeight = document.body.clientHeight;
    // browser window height
    var windowHeight = window.innerHeight;
    // number of intervals based on duration
    var numberIntervals = Math.ceil(duration / 25);
    // interval scroll by height
    var scrollByHeight = Math.floor(targetPosition / numberIntervals);
    // last interval
    var lastInterval = targetPosition - numberIntervals * scrollByHeight;
    // interval duration counter
    var durationCounter = 0;
    // scroll interval
    var scrollInterval = setInterval(function () {
      durationCounter++;
      // up to number of intervals, scroll by height
      if (durationCounter <= numberIntervals) {
        window.scrollBy(0, scrollByHeight);
      } else {
        // clear interval once number of intervals has been reached
        window.scrollBy(0, lastInterval);
        clearInterval(scrollInterval);
      }
    }, 25); // scroll by height every 25 milliseconds
  },
};

// CLICK EVENT LISTENERS
document.addEventListener('click', function (e) {
  // activate navigation js check for animation
  _navigation.jsEnabled(e);
  // activate skip content anchor scrolling
  _skipContent.scroll(e);
  // activate navigation anchor scrolling
  _navigation.scroll(e);
});
