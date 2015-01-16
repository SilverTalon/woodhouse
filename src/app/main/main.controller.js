'use strict';

angular.module('woodhouse')
  .controller('MainController', function (weather, calendar) {

    var vm = this;
    vm.weather = weather.data;
    vm.calendar = calendar.data;

    console.dir(vm.calendar);
  });
