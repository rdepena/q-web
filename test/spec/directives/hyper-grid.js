'use strict';

describe('Directive: hyperGrid', function () {

  // load the directive's module
  beforeEach(module('qWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hyper-grid></hyper-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hyperGrid directive');
  }));
});
