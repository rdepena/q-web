'use strict';

/**
 * @ngdoc service
 * @name qWebApp.artifactsApi
 * @description
 * # artifactsApi
 * Service in the qWebApp.
 */
angular.module('qWebApp')
  .service('artifactsApi', function artifactsApi(qApi, $http) {
    var that = this;

    that.getArtifactList = function () {
      return qApi.getVariables();
    };

    that.getTableArtifact = function (artifact) {
      return qApi.getValue(artifact.name);
    };

    that.getValueArtifact = function (artifact) {
      return qApi.getValue(artifact.name);
    };
  });
