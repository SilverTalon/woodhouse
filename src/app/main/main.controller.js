'use strict';

angular.module('woodhouse')
  .controller('MainController', function ($scope, weather) {

    this.weather = weather.data;
  });
