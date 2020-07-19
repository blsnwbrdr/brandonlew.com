var app = angular.module('searchApp', []);

app.controller('searchCtrl', function($scope, $http) {
  $http.get('http://brandonsco.de/portfolio/tipjar/data/countryTipData.json').then(function(response) {
    // SEARCH COUNTRY LIST USING REGEX ON KEYUP
    $scope.search = function() {
      document.getElementById('list').style.display = 'block';
      var userInput = document.getElementById('userInput').value;
      var pattern = new RegExp(userInput, 'gi');
      var userMatches = [];
      for(var x = 0; x < response.data.length; x++) {
        if(userInput === '') {
          // DO NOTHING
        } else if(response.data[x].country.search(pattern) >= 0) {
          userMatches.push(response.data[x].country);
        }
      }
      userMatches.sort();
      $scope.matches = userMatches;
    };
    // RETURN DATA FOR SELECTED COUNTRY ON CLICK
    $scope.select = function(selection) {
      for(var x = 0; x < response.data.length; x++) {
        if(selection === response.data[x].country) {
          document.getElementById('userInput').value = selection;
          document.getElementById('list').style.display = 'none';
          document.getElementById('data').style.display = 'block';
          $scope.country = response.data[x].country;
          $scope.dining = response.data[x].dining;
          $scope.transportation = response.data[x].transportation;
          $scope.accommodation = response.data[x].accommodation;
          $scope.thankyou = response.data[x].thankyou;
          $scope.goodbye = response.data[x].goodbye;          
        }
      }
    };
  });  
});

// CLOSE LIST IF MOUSE CLICK OUTSIDE THE ELEMENT
function closeList(e) {
  if(document.getElementById('list').contains(e.target)) {
    // DO NOTHING
  } else {
    document.getElementById('list').style.display = 'none';
    document.getElementById('userInput').value = '';
  }
}
window.addEventListener('click', closeList);