'use strict';

angular.module('woodhouse')
  .service('calendarService', function ($http) {

    this.getCalendar = function() {
      return $http.get('/json/calendar.json');
    };

    this.getToday = function() {
      var promise = $http.get('/json/calendar.json')
        .then(function(response) {
          if(!_.has(response.data, 'today')) { return {}; }
          return response.data.today;
        });

      return promise;
    };

  });
