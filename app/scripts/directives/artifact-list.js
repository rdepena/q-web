'use strict';

/**
 * @ngdoc directive
 * @name qWebApp.directive:artifactList
 * @description
 * # artifactList
 */
angular.module('qWebApp')
  .directive('artifactList', function () {
    return {
      templateUrl: 'templates/artifact-list.html',
      restrict: 'E',
      transclude: true,
      scope: {
        artifacts : '=',
        selectedArtifact : '='
      },
      controller: 'ArtifactListCtrl',
      controllerAs: 'artifactListCtrl'
    };
  });
