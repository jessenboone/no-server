angular.module('noServerApp')
.service('coursesService', function() {

  var courses = [{
    course: 'Pebble Beach' ,
    location: 'Pebble Beach, CA',
    image: 'img/pebble beach.jpg'
  },
  {
    course: 'Augusta National',
    location: 'Augusta, GA',
    image: 'img/augusta glass.jpg'
  },
  {
    course: 'Delfino Resort',
    location: 'Palm Desert, CA',
    image: 'img/delfino course.jpg'
  },
  {
    course: 'Brunswick',
    location: 'Brunswick, ME',
    image: 'img/fairway.jpg'
  }]



    this.getCourses = function() {
      return courses;


    }

})
