'use strict';

describe('App', function() {
  var route;

  beforeEach(module('woodhouse'));

  beforeEach(inject(function($route) {
    route = $route;
  }));

  it('should redirect no route to /', inject(function() {
    expect(route.routes[null].redirectTo).toEqual('/');
  }));


  it('should map to MainController by default', inject(function() {
    expect(route.routes['/'].controller).toBe('MainController');
    expect(route.routes['/'].resolve).toBeDefined();
  }));
});
