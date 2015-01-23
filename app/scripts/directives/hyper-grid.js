'use strict';

/**
 * @ngdoc directive
 * @name qWebApp.directive:hyperGrid
 * @description
 * # hyperGrid
 */
angular.module('qWebApp')
  .directive('hyperGrid', function () {
    return {
      templateUrl: 'templates/hyper-grid.html',
      restrict: 'E',
      transclude: true,
      scope: {
        selectedArtifact: '='
      },
      controller: 'HyperGridCtrl',
      controllerAs: 'hyperGridCtrl'
    };
  });
