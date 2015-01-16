'use strict';

describe('Clock Directive', function(){
  var elm, $rootScope, $compile, dateFilter, time, date;

  beforeEach(module('woodhouse'));

  // load the templates
  beforeEach(module('templates'));

  beforeEach(inject(function(_$rootScope_, _$compile_, _dateFilter_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    dateFilter = _dateFilter_;

    elm = angular.element('<clock time-format="hh:mm" date-format="EEE MMM dd" template="home"></clock>');

    var now = Date.now();
    time = _dateFilter_(now, 'hh:mm');
    date = _dateFilter_(now, 'EEE MMM dd');

    $compile(elm)($rootScope);
    $rootScope.$digest();
  }));

  it('should create a clock', inject(function() {
    var datas = elm.find('p');
    expect(datas.length).toBe(2);
    expect(datas.eq(0).text()).toBe(date);
    expect(datas.eq(1).text()).toBe(time);
  }));
});
