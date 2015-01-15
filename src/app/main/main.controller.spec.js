'use strict';

describe('MainController', function(){
  var weather;

  beforeEach(module('woodhouse'));

  beforeEach(inject(function() {
  	weather = {
      'condition': 'good'
    };
  }));

  it('should have weather', inject(function($controller) {
    expect(weather).toBeDefined();

    $controller('MainController', {
      weather: weather
  	});

    expect(weather.condition).toBe('good');
  }));
});
