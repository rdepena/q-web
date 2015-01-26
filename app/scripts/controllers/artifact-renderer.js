'use strict';

/**
 * @ngdoc function
 * @name qWebApp.controller:ArtifactRendererCtrl
 * @description
 * # ArtifactRendererCtrl
 * Controller of the qWebApp
 */
angular.module('qWebApp')
  .controller('ArtifactRendererCtrl', function ($scope, artifactsApi) {
    var that = this,
      renderTypes = {
        array : 'array',
        grid: 'grid',
        value: 'value',
        default: 'default'
      };

    $scope.$watch('selectedArtifact', function (selectedArtifact) {
      if (selectedArtifact.type === 99 || selectedArtifact.type === 98) {
        //do fin grid here man;
        console.log('this could be the grid.');
        that.renderStyle = renderTypes.grid;
      }else {
        getValue(selectedArtifact);
      }
    });

    function getValue(selectedArtifact) {
      artifactsApi.getValueArtifact(selectedArtifact).then(function (artifactResponse) {
        that.renderStyle = angular.isArray(artifactResponse) ? renderTypes.array : renderTypes.value;
        if (!selectedArtifact.type) {
          that.renderStyle = renderTypes.default;
        }
        that.data = artifactResponse;
      });
    }
  });
