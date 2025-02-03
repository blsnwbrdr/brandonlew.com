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
    '2005_0857',
    '2009_1792',
    '2012_1036',
    '2013_0739',
    '2014_0127',
    '2015_0154',
    '2016_0212',
    '2017_0575',
    '2018_1046',
    '2018_1703',
    '2019_0871',
    '2019_2096',
    '2019_2587',
    '2021_0765',
    '2021_1546',
    '2022_0601',
    '2022_1112',
    '2022_2168',
    '2023_0388',
    '2023_0892',
    '2023_2460',
    '2024_0293',
    '2024_0720',
    '2024_1483',
  ],
  // pick random image
  randomize: function () {
    // create random number based on number of images available
    var randomNum = Math.floor(Math.random() * _banner.images.length);
    // set style attribute of banner with random background image
    banner.setAttribute(
      'style',
      'background-image:url(images/' +
        _banner.images[randomNum] +
        '_c1_web.jpg);'
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
      src: '2005_0857',
      title: 'South Luangwa National Park, Zambia',
    },
    {
      src: '2009_1792',
      title: 'Istanbul, Turkey',
    },
    {
      src: '2012_1036',
      title: "Xi'an, China",
    },
    {
      src: '2013_0739',
      title: 'Bratislava, Slovakia',
    },
    {
      src: '2014_0127',
      title: 'Tokyo, Japan',
    },
    {
      src: '2015_0154',
      title: 'Singapore',
    },
    {
      src: '2016_0212',
      title: 'Cape Coast, Ghana',
    },
    {
      src: '2017_0575',
      title: 'Montevideo, Uruguay',
    },
    {
      src: '2018_1046',
      title: 'Kyoto, Japan',
    },
    {
      src: '2018_1703',
      title: 'Riga, Latvia',
    },
    {
      src: '2019_0871',
      title: 'Copan, Honduras',
    },
    {
      src: '2019_2096',
      title: 'Cotopaxi, Ecuador',
    },
    {
      src: '2019_2587',
      title: 'Geneva, Switzerland',
    },
    {
      src: '2021_0765',
      title: 'Laekjavik, Iceland',
    },
    {
      src: '2021_1546',
      title: 'Gdansk, Poland',
    },
    {
      src: '2022_0601',
      title: 'Bayahibe, Dominican Republic',
    },
    {
      src: '2022_1112',
      title: 'Lisbon, Portugal',
    },
    {
      src: '2022_2168',
      title: 'Samarkand, Uzbekistan',
    },
    {
      src: '2023_0388',
      title: 'Glenorchy, New Zealand',
    },
    {
      src: '2023_0892',
      title: 'Copenhagen, Denmark',
    },
    {
      src: '2023_2460',
      title: 'Abu Dhabi, United Arab Emirates',
    },
    {
      src: '2024_0293',
      title: 'Casablanca, Morocco',
    },
    {
      src: '2024_0720',
      title: 'Skopje, North Macedonia',
    },
    {
      src: '2024_1483',
      title: 'Fukuoka, Japan',
    },
  ],
  randomize: function (array) {
    // randomize function
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  },
  initiate: function () {
    // randomize images
    var randomizedImages = _staticImages.randomize(_staticImages.images);
    // display static images
    for (var x = 0; x < randomizedImages.length; x++) {
      for (var y = 0; y < photos.length; y++) {
        if (x === y) {
          photos[y].insertAdjacentHTML(
            'afterbegin',
            '<div class="portfolioSlide" onclick="_modal.display(&#39;modal' +
              y +
              '&#39;);"> <img src="images/' +
              randomizedImages[x].src +
              '_c1_web.jpg" alt="' +
              randomizedImages[x].title +
              '"><div class="portfolioOverlay"></div></div><div id="modal' +
              y +
              '" class="portfolioModalOverlay"><div class="portfolioModal"> <span class="portfolioModalClose" onclick="_modal.close(&#39;modal' +
              y +
              '&#39;);">X</span><div class="portfolioModalHeader"> <img src="images/' +
              randomizedImages[x].src +
              '_c1_web.jpg" alt="' +
              randomizedImages[x].title +
              '"></div><div class="portfolioModalBody"><p class="h4">' +
              randomizedImages[x].title +
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
