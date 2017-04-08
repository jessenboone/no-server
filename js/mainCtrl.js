angular.module('noServerApp')
.controller('mainCtrl', function($scope, mainService) {

$scope.test= mainService.test

})
