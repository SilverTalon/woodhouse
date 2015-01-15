'use strict';

angular.module('woodhouse')
  .controller('MainController', function ($scope, weather) {

    var vm = this;
    vm.weather = weather.data;
  });
