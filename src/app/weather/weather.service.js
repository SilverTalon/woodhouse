'use strict';

angular.module('woodhouse')
  .service('WeatherService', function ($http) {

    this.getWeather = function() {
      return $http.get('/json/weather.json');

      // Free API only gets 10 calls per hour, so don't make this call until server side caching is implemented
      // The weather.json file above is a copy/paste of the output
      //return $http.get('http://api.wunderground.com/api/0439b2277ec31379/forecast/conditions/q/MI/Macomb.json');
    };

  });
