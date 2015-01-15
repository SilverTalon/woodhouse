'use strict';

describe('weatherService', function(){
  var weatherService, httpBackend;

  beforeEach(module('woodhouse'));

  beforeEach(inject(function(_weatherService_, $httpBackend) {
    weatherService = _weatherService_;
    httpBackend = $httpBackend;
  }));

  it('should get weather information', inject(function($compile, $rootScope) {
    httpBackend.whenGET('/json/weather.json').respond({
      'response': {},
      'current_observation': {},
      'forecast': {}
    });

    weatherService.getWeather().then(function(weather) {
      expect(weather.data.response).toBeDefined();
      expect(weather.data.current_observation).toBeDefined();
      expect(weather.data.forecast).toBeDefined();
    });
    httpBackend.flush();
  }));
});
