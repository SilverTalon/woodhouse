'use strict';

angular.module('woodhouse')
  .directive('clock', function (dateFilter, $timeout) {
    return {
      restrict: 'E',
      scope: {
        timeFormat: '@',
        dateFormat: '@'
      },
      link: function(scope, element, attrs) {
        if(_.isUndefined(scope.timeFormat)) {
          scope.timeFormat = '';
        }

        if(_.isUndefined(scope.dateFormat)) {
          scope.dateFormat = '';
        }

        var format = scope.timeFormat + ' ' + scope.dateFormat;

        var updateTime = function() {
          var now = Date.now();

          element.html(dateFilter(now, format));
          $timeout(updateTime, 1000);
        };

        updateTime();
      }
    };
  });
