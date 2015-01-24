'use strict';

/**
 * @ngdoc directive
 * @name qWebApp.directive:artifactRenderer
 * @description
 * # artifactRenderer
 */
angular.module('qWebApp')
  .directive('artifactRenderer', function () {
    return {
      templateUrl: 'templates/artifact-renderer.html',
      restrict: 'E',
      transclude: true,
      scope: {
        artifacts : '=',
        selectedArtifact : '='
      },
      controller: 'ArtifactRendererCtrl',
      controllerAs: 'artifactRendererCtrl'
    };
  });
