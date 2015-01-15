'use strict';

angular.module('woodhouse', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        resolve: {
          weather: function(weatherService) {
            return weatherService.getWeather();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
