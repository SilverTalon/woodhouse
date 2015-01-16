'use strict';

angular.module('woodhouse')
  .controller('AppsController', function (weather, apps) {
    var vm = this;
    vm.weather = weather.data;
    vm.apps = apps.data;
    vm.menuURL = '#/';
  });
