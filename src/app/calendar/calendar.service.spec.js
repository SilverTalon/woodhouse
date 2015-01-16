'use strict';

describe('calendarService', function(){
  var calendarService, $rootScope, $httpBackend, $q;

  beforeEach(module('woodhouse'));

  beforeEach(inject(function(_calendarService_, _$rootScope_, _$httpBackend_, _$q_) {
    calendarService = _calendarService_;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;
  }));

  it('should get calendar information', inject(function() {
    $httpBackend.whenGET('/json/calendar.json').respond({
      'today': {},
      'tomorrow': {},
      'week': {},
      'month': {},
      'year': {}
    });

    calendarService.getCalendar().then(function(calendar) {
      expect(calendar.data.today).toBeDefined();
      expect(calendar.data.tomorrow).toBeDefined();
      expect(calendar.data.week).toBeDefined();
      expect(calendar.data.month).toBeDefined();
      expect(calendar.data.year).toBeDefined();
    });
    $httpBackend.flush();
  }));

  describe('function getToday', function(){
    it('should return a promise', function () {
      expect(calendarService.getToday().then).toBeDefined();
    });

    it('should resolve with todays events', function () {
      $httpBackend.whenGET('/json/calendar.json').respond({
        'today': [
          {
            'name': 'Event',
            'assigned_to': ['user'],
            'time': '1421442000',
            'location': 'MAP_LINK'
          }
        ],
        'tomorrow': {},
        'week': {},
        'month': {},
        'year': {}
      });

      var promise = calendarService.getToday();
      var data;

      promise.then(function(response) {
        data = response;
      });

      $httpBackend.flush();
      expect(data.length).toBe(1);
      expect(data[0].name).toBe('Event');
    });



    it('should resolve with today with no events', function () {
      $httpBackend.whenGET('/json/calendar.json').respond({
        'today': [],
        'tomorrow': {},
        'week': {},
        'month': {},
        'year': {}
      });

      var promise = calendarService.getToday();
      var data;

      promise.then(function(response) {
        data = response;
      });

      $httpBackend.flush();
      expect(data.length).toBe(0);
    });
  });
});
