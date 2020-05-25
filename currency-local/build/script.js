var apiKey = 'c9912ecb5eb02559e15f08d6d3122f2c';
var url = 'http://www.apilayer.net/api/live?access_key=' + apiKey + '&format=1';
function updateCurrencyConversion() {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      var quotes = data.quotes;
      var string = JSON.stringify(quotes);
      string = string.replace(/,/g,'},{');
      string = string.replace(/:/g,',"conversion":');
      string = string.replace(/{"/g,'{"currency":"');
      string = string.replace(/"USD/g,'"');
      string = '{"data":[' + string + ']}';
      parsedJson = JSON.parse(string);
      $.ajax({
        type: "POST",
        url: "/add",
        data: parsedJson,
        success: function(response) {
          document.getElementById('response').innerHTML = response;
        }
      })
    }
  })
}
document.getElementById('updateCurrencyConversion').addEventListener('click', updateCurrencyConversion);
