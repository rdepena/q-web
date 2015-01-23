'use strict';

/**
 * @ngdoc function
 * @name qWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the qWebApp
 */
angular.module('qWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
