'use strict';

describe('appsService', function(){
  var appsService, httpBackend;

  beforeEach(module('woodhouse'));

  beforeEach(inject(function(_appsService_, _$httpBackend_) {
    appsService = _appsService_;
    httpBackend = _$httpBackend_;
  }));

  it('should get apps information', inject(function() {
    httpBackend.whenGET('/json/apps.json').respond([{
      'name': 'app_1',
      'icon': 'icon'
    }]);

    appsService.getApps().then(function(weather) {
      expect(weather.data.length).toBe(1);
      expect(weather.data[0].name).toBe('app_1');
      expect(weather.data[0].icon).toBe('icon');
    });
    httpBackend.flush();
  }));
});
