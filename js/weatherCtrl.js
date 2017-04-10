angular.module('noServerApp')
.controller('weatherCtrl', function($scope, weatherService) {

$scope.flag = false;

  $scope.getWeather = function(city) {
    console.log('response')
 weatherService.getWeather(city).then(function(res) {
   $scope.flag = true;
      $scope.weather = res;
      console.log(res)
      var low = res.data.list[0].main.temp_min;
      $scope.lowF = Math.round((low * 9 / 5) - 459.67);
      var high = res.data.list[0].main.temp_max;
      $scope.highF = Math.round((high * 9 / 5) - 459.67);
      });
    };


});
