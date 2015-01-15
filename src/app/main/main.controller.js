'use strict';

angular.module('woodhouse')
  .controller('MainController', function (weather) {

    var vm = this;
    vm.weather = weather.data;
  });
