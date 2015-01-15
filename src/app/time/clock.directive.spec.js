'use strict';

describe('Clock Directive', function(){
  var elm, scope, time, date;

  beforeEach(module('woodhouse'));

  // load the templates
  beforeEach(module('templates'));

  beforeEach(inject(function($rootScope, $compile, dateFilter) {
    elm = angular.element('<clock time-format="hh:mm" date-format="EEE MMM dd" template="home"></clock>');

    var now = Date.now();
    time = dateFilter(now, 'hh:mm');
    date = dateFilter(now, 'EEE MMM dd');

    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();
  }));

  it('should create a clock', inject(function($compile, $rootScope) {
    var datas = elm.find('p');
    expect(datas.length).toBe(2);
    expect(datas.eq(0).text()).toBe(date);
    expect(datas.eq(1).text()).toBe(time);
  }));
});
