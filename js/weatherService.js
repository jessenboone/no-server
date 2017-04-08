angular.module('noServerApp')
.service('weatherService', function($http) {


var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?APPID=58ef14a04e353fbd76dafe0f7560d73b&q=';


  this.getWeather = function(city) {
    return $http.get(baseUrl + city).then(function(response) {
      console.log(response)
      return response;
    }, function(err, p2){
      var abc = err;
      var e2 = p2;
    })
  }


})
