'use strict';

angular.module('noServerApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: "html/home.html"
    }).state('courses', {
        url: '/courses',
        templateUrl: 'html/courses.html',
        controller: 'coursesCtrl'
    }).state('weather', {
        url: '/weather',
        templateUrl: 'html/weather.html',
        controller: 'weatherCtrl'
    }).state('schedule', {
        url: '/schedule',
        templateUrl: 'html/shedule.html',
        controller: 'scheduleCtrl'

    });

    $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('noServerApp').controller('coursesCtrl', function ($scope, coursesService) {

  $scope.getCourses = function () {
    $scope.courses = coursesService.getCourses();
  };

  $scope.getCourses();
});
'use strict';

angular.module('noServerApp').service('coursesService', function () {

  var courses = [{
    course: 'Glenmoor',
    location: 'Canton, OH',
    image: 'img/Glenmoor.jpg'
  }, {
    course: 'Augusta National',
    location: 'Augusta, GA',
    image: 'img/augusta glass.jpg'
  }, {
    course: 'Delfino Resort',
    location: 'Palm Desert, CA',
    image: 'img/delfino course.jpg'
  }, {
    course: 'Pebble Beach',
    location: 'Pebble Beach, CA',
    image: 'img/pebble beach.jpg'
  }, {
    course: 'Bethpage',
    location: 'Farmingdale, NY',
    image: 'img/fairway.jpg'
  }, {
    course: 'Brunswick',
    location: 'Brunswick, ME',
    image: 'img/water golf.jpg'
  }];

  this.getCourses = function () {
    return courses;
  };
});
'use strict';

angular.module('noServerApp').controller('mainCtrl', function ($scope, mainService) {

  $scope.test = mainService.test;
});
'use strict';

angular.module('noServerApp').service('mainService', function () {});
'use strict';

angular.module('noServerApp').controller('scheduleCtrl', function ($scope, scheduleService) {

  $scope.test = "dougs magic";
});
'use strict';

angular.module('noServerApp').service('scheduleService', function () {});
'use strict';

angular.module('noServerApp').controller('weatherCtrl', function ($scope, weatherService) {
  $scope.getWeather = function (city) {
    console.log('response');
    weatherService.getWeather(city).then(function (res) {
      $scope.weather = res;
      console.log(res);
    });
  };
});
'use strict';

angular.module('noServerApp').service('weatherService', function ($http) {

  var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?APPID=58ef14a04e353fbd76dafe0f7560d73b&q=';

  this.getWeather = function (city) {
    return $http.get(baseUrl + city).then(function (response) {
      console.log(response);
      return response;
    }, function (err, p2) {
      var abc = err;
      var e2 = p2;
    });
  };
});
//# sourceMappingURL=bundle.js.map
