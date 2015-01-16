'use strict';

describe('MainController', function(){
  var weather, calendar;

  beforeEach(module('woodhouse'));

  beforeEach(inject(function() {
  	weather = {
      'condition': 'good'
    };
    calendar = {
      'today': [
        {
          'name': 'Event',
          'assigned_to': ['User'],
          'time': '1421442000',
          'location': 'MAP_LINK'
        }
      ]
    }
  }));

  it('should have weather', inject(function($controller) {
    expect(weather).toBeDefined();

    $controller('MainController', {
      weather: weather,
      calendar: calendar
  	});

    expect(weather.condition).toBe('good');
  }));

  it('should have todays events', inject(function($controller) {
    expect(calendar).toBeDefined();

    $controller('MainController', {
      weather: weather,
      calendar: calendar
    });

    expect(calendar.today).toBeDefined();
    expect(calendar.today.length).toBe(1);
    expect(calendar.today[0].name).toBe('Event');
  }));
});
