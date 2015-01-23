'use strict';

describe('Controller: HyperGridCtrl', function () {

  // load the controller's module
  beforeEach(module('qWebApp'));

  var HyperGridCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HyperGridCtrl = $controller('HyperGridCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
