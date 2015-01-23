'use strict';

describe('Service: artifactsApi', function () {

  // load the service's module
  beforeEach(module('qWebApp'));

  // instantiate service
  var artifactsApi;
  beforeEach(inject(function (_artifactsApi_) {
    artifactsApi = _artifactsApi_;
  }));

  it('should do something', function () {
    expect(!!artifactsApi).toBe(true);
  });

});
