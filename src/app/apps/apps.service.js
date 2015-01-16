'use strict';

angular.module('woodhouse')
  .service('appsService', function ($http) {

    this.getApps = function() {
      return $http.get('/json/apps.json');
    };
  });
