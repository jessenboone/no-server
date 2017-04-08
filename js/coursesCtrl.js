angular.module('noServerApp')
.controller('coursesCtrl', function($scope, coursesService) {



  $scope.getCourses = function() {
  $scope.courses =   coursesService.getCourses()}

  $scope.getCourses();




  });
