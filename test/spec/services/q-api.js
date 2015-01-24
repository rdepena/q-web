'use strict';

describe('Service: qApi', function () {

  // load the service's module
  beforeEach(module('qWebApp'));

  // instantiate service
  var qApi;
  beforeEach(inject(function (_qApi_) {
    qApi = _qApi_;
  }));

  it('should do something', function () {
    expect(!!qApi).toBe(true);
  });

});
