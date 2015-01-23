'use strict';

/**
 * @ngdoc service
 * @name qWebApp.artifactsApi
 * @description
 * # artifactsApi
 * Service in the qWebApp.
 */
angular.module('qWebApp')
  .service('artifactsApi', function artifactsApi($http) {
    var that = this;

    that.getArtifactList = function () {
      return $http.get('mocks/artifactList.json');
    };

    that.getTableArtifact = function () {
      return $http.get('mocks/mockArtifact.json');
    };

    that.getValueArtifact = function () {
      return $http.get('mocks/mockValueArtifact.json');
    };
  });
