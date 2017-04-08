angular.module('noServerApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "html/home.html"
            })
            .state('courses', {
                url: '/courses',
                templateUrl: 'html/courses.html',
                controller: 'coursesCtrl'
            })
            .state('weather', {
              url: '/weather',
              templateUrl: 'html/weather.html',
              controller: 'weatherCtrl'
            })

            .state('schedule', {
                url: '/schedule',
                templateUrl: 'html/shedule.html',
                controller: 'scheduleCtrl'

              })

        $urlRouterProvider
            .otherwise('/');



    });
