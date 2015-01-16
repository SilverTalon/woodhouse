'use strict';

describe('weatherService', function(){
  var weatherService, httpBackend;

  beforeEach(module('woodhouse'));

  beforeEach(inject(function(_weatherService_, _$httpBackend_) {
    weatherService = _weatherService_;
    httpBackend = _$httpBackend_;
  }));

  it('should get weather information', inject(function() {
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
