'use strict';

describe('Controller: TableListControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('qWebApp'));

  var TableListControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TableListControllerCtrl = $controller('TableListControllerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
