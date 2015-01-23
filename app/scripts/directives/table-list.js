'use strict';

/**
 * @ngdoc directive
 * @name qWebApp.directive:tableList
 * @description
 * # tableList
 */
angular.module('qWebApp')
  .directive('tableList', function () {
    return {
      templateUrl: 'templates/table-list.html',
      restrict: 'E',
      scope: {
        artifactList : '='
      },
      controller: 'TableListCtrl',
      controllerAs: 'tableListCtrl'
    };
  });
