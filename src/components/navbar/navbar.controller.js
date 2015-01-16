'use strict';

angular.module('woodhouse')
  .controller('NavbarController', function ($location) {
    var vm = this;

    vm.isMenuActive = function() {
      return ($location.path() !== '/');
    };
  });
