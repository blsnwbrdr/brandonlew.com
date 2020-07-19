$(document).ready(function() {
  // CONSTRUCTOR
  function photo(image, caption, etsy, modal) {
    this.image = image;
    this.caption = caption;
    this.etsy = etsy;
  }
  // OBJECTS
  var i2005_0447 = new photo("2005_0447", "Arches National Park, Utah", "https://www.etsy.com/listing/185488178/a-nice-morning-in-arches-national-park");
  var i2005_0663 = new photo("2005_0663", "South Luangwa, Zambia", "https://www.etsy.com/listing/185495639/a-hippo-resting-in-a-water-hole-south");
  var i2005_1019 = new photo("2005_1019", "Cape Town, South Africa", "https://www.etsy.com/listing/185485634/brightly-colored-houses-in-bo-kaap-cape");
  var i2009_1770 = new photo("2009_1770", "Istanbul, Turkey", "https://www.etsy.com/listing/185491645/the-basilica-cistern-and-its-redorange");
  var i2009_2110 = new photo("2009_2110", "Budapest, Hungary", "https://www.etsy.com/listing/185481026/the-tree-of-life-at-the-great-synagogue");
  var i2009_2351 = new photo("2009_2351", "Ljubljana, Slovenia", "https://www.etsy.com/listing/185484705/evening-in-the-city-center-of-ljubljana");
  var i2012_1036 = new photo("2012_1036", "Xian, China", "https://www.etsy.com/listing/185462091/terracotta-warriors-in-xian-china");
  var i2012_1343 = new photo("2012_1343", "Hong Kong", "https://www.etsy.com/listing/185448462/from-the-top-of-victoria-peak-looking");
  var i2013_0621 = new photo("2013_0621", "Vienna, Austria", "https://www.etsy.com/listing/210776446/the-albertina-in-vienna-austria");
  var i2014_0027 = new photo("2014_0027", "Ueno Park,Tokyo, Japan", "https://www.etsy.com/listing/185439458/cherry-blossoms-in-ueno-park-in-early");
  var i2014_0127a = new photo("2014_0127a", "Shibuya, Tokyo, Japan", "https://www.etsy.com/listing/185445917/shibuya-crossing-at-night-in-the-rain");
  var i2014_0157 = new photo("2014_0157", "Tokyo, Japan", "https://www.etsy.com/listing/185432724/sake-barrels-at-meiji-shrine-located-in");
  var i2016_0002 = new photo("2016_0002", "Mt. Yotei, Japan", "https://www.etsy.com/listing/268332770/mt-yotei-in-the-distance-during-the");
  var i2016_0225 = new photo("2016_0225", "Accra, Ghana", "https://www.etsy.com/listing/449591224/jamestown-in-accra-ghana");
  var i2017_0434 = new photo("2017_0434", "Niseko, Hokkaido, Japan", "https://www.etsy.com/listing/511419788/mt-yotei-hokkaido-japan");
  

  // ARRAY
  var array = [];
  // PUSH OBJECTS TO THE ARRAY
  array.push(i2005_0447);
  array.push(i2005_0663);
  array.push(i2005_1019);
  array.push(i2009_1770);
  array.push(i2009_2110);
  array.push(i2009_2351);
  array.push(i2012_1036);
  array.push(i2012_1343);
  array.push(i2013_0621);
  array.push(i2014_0127a);
  array.push(i2014_0027);
  array.push(i2014_0157);
  array.push(i2016_0002);
  array.push(i2016_0225);
  array.push(i2017_0434);

  // HTML
  $('body').append('<div class="main-carousel"><div>');
  // ALL PHOTOS
  for(var i=0;i<array.length;i++) {
    $('.main-carousel').append('<div class="carousel-cell text-center"><img class="img-responsive" src="img/small_' + array[i].image + '.jpg"><h3>' + array[i].caption + '</h3><div class="purchase"><a href="' + array[i].etsy + '" target="_blank"><button type="button">purchase</button></a></div><a href="#" data-toggle="modal" data-target="#' + array[i].image + '"><i class="fa fa-expand"></i></a></div>');
    // MODALS FOR EACH PHOTO
    $('body').append('<div id="' + array[i].image + '" class="modal fade"><div class="modal-dialog" style="background-image:url(img/big_' + array[i].image + '.jpg);><div class="modal-content"><button type="button" class="close" data-dismiss="modal">&times;</button></div></div></div>');
  }      
  // FLICKITY
  $('.main-carousel').flickity({
    contain: true,
    groupCells: '120%',
    pageDots: false,
    imagesLoaded: true
  });
}); // END JQUERY