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
    var jsonGrid,
      jsonModel;

    $scope.$watch('selectedArtifact', function (selectedArtifact) {
      if (!angular.equals(selectedArtifact, {})) {
        console.log('this changed', selectedArtifact);
        var getFunction = selectedArtifact.type === 'table' ? getTable : getValue;

        getFunction(render);
      }
    });

    setTimeout(init, 5);

    function getTable(callBack) {
      artifactsApi.getTableArtifact($scope.selectedArtifact).then(function (artifactResponse) {
        if (artifactResponse.data.length < 1) {
          return;
        }
        callBack(artifactResponse.data);
      });
    }
    function getValue(callBack) {
      artifactsApi.getValueArtifact($scope.selectedArtifact).then(function (artifactResponse) {
        callBack([artifactResponse.data]);
      });
    }

    function render(data) {
      var headers = _.keys(data[0]);
      jsonModel.setHeaders(headers);
      jsonModel.setFields(headers);
      jsonModel.setData(data);
      console.log(data);
    }
    //setup random data for the JSON tab example
    function init (){
        console.log('this happened');
        //get ahold of our json grid example
        jsonGrid = document.querySelector('#json-example');
        jsonModel = jsonGrid.getBehavior();
        console.log(jsonGrid);
        jsonGrid.toggleHiDPI();
    }
  });
