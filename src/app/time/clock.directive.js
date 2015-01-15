'use strict';

angular.module('woodhouse')
  .directive('clock', function (dateFilter, $timeout) {
    return {
      restrict: 'E',
      scope: {
        timeFormat: '@',
        dateFormat: '@',
        template: '@'
      },
      templateUrl: function(elem,attrs) {
        return 'app/time/time-'+attrs.template+'.html';
      },
      controller: function($element, $attrs) {
        var timeoutId;

        var vm = this;
        vm.time = '';
        vm.date = '';

        var updateTime = function() {
          var now = Date.now();
          if($attrs.timeFormat) { vm.time = dateFilter(now, $attrs.timeFormat); }
          if($attrs.dateFormat) { vm.date = dateFilter(now, $attrs.dateFormat); }
          timeoutId = $timeout(updateTime, 1000);
        };

        $element.bind('$destroy', function() {
          $timeout.cancel(timeoutId);
        });

        updateTime();
      },
      controllerAs: 'clock'
    };
  });
