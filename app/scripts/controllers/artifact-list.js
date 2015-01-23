'use strict';

/**
 * @ngdoc function
 * @name qWebApp.controller:ArtifactListCtrl
 * @description
 * # ArtifactListCtrl
 * Controller of the qWebApp
 */
angular.module('qWebApp')
  .controller('ArtifactListCtrl', function ($scope) {
    var that = this;
    that.selectItem = function (item) {
      $scope.selectedArtifact = item;
      console.log(item);
    };
  });
