'use strict';

describe('Service: qTypes', function () {

  // load the service's module
  beforeEach(module('qWebApp'));

  // instantiate service
  var qTypes;
  beforeEach(inject(function (_qTypes_) {
    qTypes = _qTypes_;
  }));

  it('should do something', function () {
    expect(!!qTypes).toBe(true);
  });

});
