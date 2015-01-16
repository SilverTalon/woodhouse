'use strict';

describe('AppsController', function(){
  var weather, apps;

  beforeEach(module('woodhouse'));

  beforeEach(inject(function() {
    weather = {
      'condition': 'good'
    };
    apps = [{
      'name': 'app_1',
      'icon': 'icon'
    }];
  }));

  it('should have weather', inject(function($controller) {
    expect(weather).toBeDefined();

    $controller('AppsController', {
      weather: weather,
      apps: apps
    });

    expect(weather.condition).toBe('good');
  }));

  it('should have apps', inject(function($controller) {
    expect(apps).toBeDefined();

    $controller('AppsController', {
      weather: weather,
      apps: apps
    });

    expect(apps[0].name).toBe('app_1');
  }));
});
