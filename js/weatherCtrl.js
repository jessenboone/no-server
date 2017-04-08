angular.module('noServerApp')
.controller('weatherCtrl', function($scope, weatherService) {
  $scope.getWeather = function(city) {
    console.log('response')
 weatherService.getWeather(city).then(function(res) {
      $scope.weather = res;
      console.log(res)
      });
    };


});
