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
          },
          calendar: function(calendarService) {
            return calendarService.getToday();
          }
        }
      })
      .when('/apps', {
        templateUrl: 'app/apps/apps.html',
        controller: 'AppsController',
        controllerAs: 'main',
        resolve: {
          weather: function(weatherService) {
            return weatherService.getWeather();
          },
          apps: function(appsService) {
            return appsService.getApps();
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
