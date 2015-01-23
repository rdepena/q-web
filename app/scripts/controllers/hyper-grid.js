'use strict';

/**
 * @ngdoc function
 * @name qWebApp.controller:HyperGridCtrl
 * @description
 * # HyperGridCtrl
 * Controller of the qWebApp
 */
angular.module('qWebApp')
  .controller('HyperGridCtrl', function ($scope, artifactsApi) {
    $scope.$watch('selectedArtifact', function (selectedArtifact) {
      if (!angular.equals(selectedArtifact, {})) {
        console.log('this changed', selectedArtifact);
        init(selectedArtifact);
      }
    });

    //TODO: Take this out
    //setup random data for the JSON tab example
    function init (selectedArtifact){
      artifactsApi.getArtifact(selectedArtifact).then(function (artifactResponse) {
        if (artifactResponse.data.length < 1) {
          return;
        }
        //get ahold of our json grid example
        var jsonGrid = document.querySelector('#json-example'),
          jsonModel = jsonGrid.getBehavior(),
          headers = _.keys(artifactResponse.data[0]);

        jsonGrid.toggleHiDPI();
        jsonModel.setHeaders(headers);
        jsonModel.setFields(headers);
        jsonModel.setData(artifactResponse.data);
      });
    }
  });
