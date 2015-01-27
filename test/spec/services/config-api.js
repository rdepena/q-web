'use strict';

describe('Service: configApi', function () {

  // load the service's module
  beforeEach(module('qWebApp'));

  // instantiate service
  var configApi;
  beforeEach(inject(function (_configApi_) {
    configApi = _configApi_;
  }));

  it('should do something', function () {
    expect(!!configApi).toBe(true);
  });

});
