angular.module('noServerApp')
.service('coursesService', function() {

  var courses = [{
    course: 'Glenmoor',
    location: 'Canton, OH',
    image: 'img/Glenmoor.jpg'
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
    course: 'Pebble Beach' ,
    location: 'Pebble Beach, CA',
    image: 'img/pebble beach.jpg'
  },
  {
    course: 'Bethpage',
    location: 'Farmingdale, NY',
    image: 'img/fairway.jpg'
  },
  {
    course: 'Brunswick',
    location: 'Brunswick, ME',
    image: 'img/water golf.jpg'
  }]



    this.getCourses = function() {
      return courses;


    }

})
