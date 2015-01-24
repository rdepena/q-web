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
        value: 'value'
      };

    $scope.$watch('selectedArtifact', function (selectedArtifact) {
      console.log('yea that changed dog');
      if (selectedArtifact.type === 99 || selectedArtifact.type === 98) {
        //do fin grid here man;
        console.log('this could be the grid.');
        that.renderStyle = renderTypes.grid;
      }else {
        getValue(selectedArtifact);
      }
    });

    function getValue(selectedArtifact) {
      artifactsApi.getTableArtifact(selectedArtifact).then(function (artifactResponse) {
        console.log(artifactResponse)
        that.renderStyle = angular.isArray(artifactResponse) ? renderTypes.array : renderTypes.value;
        that.data = artifactResponse;
      });
    };
  });
