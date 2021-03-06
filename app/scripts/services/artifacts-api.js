'use strict';

/**
 * @ngdoc service
 * @name qWebApp.artifactsApi
 * @description
 * # artifactsApi
 * Service in the qWebApp.
 */
angular.module('qWebApp')
  .service('artifactsApi', function artifactsApi(qApi, $http, qTypes) {
    var that = this;

    that.getArtifactList = function () {
      return qApi.getVariables().then(function (artifactResponse) {
        _.forEach(artifactResponse, function (artifact) {
          artifact.typeObject =  _.chain(qTypes).where({num: artifact.type}).first().value();
        });
        return artifactResponse;
      });
    };

    that.getTableArtifact = function (artifact) {
      return qApi.getValue(artifact.name);
    };

    that.getValueArtifact = function (artifact) {
      if (artifact.typeObject) {
        return qApi.getValue(artifact.name);
      } else {
        return qApi.getStringValue(artifact.name);
      }
    };
  });
