

// RANDOMIZE BANNER IMAGE
var _banner = {
  images: ['2012_0998','2017_0597'],
  randomize: function(){
    var banner = document.getElementById('banner');
    var randomNum = Math.floor(Math.random() * _banner.images.length);
    banner.setAttribute('style','background-image:url(images/' + _banner.images[randomNum] + '.jpg);');
  }
}
_banner.randomize();
