'use strict';

/**
 * @ngdoc function
 * @name qWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qWebApp
 */
angular.module('qWebApp')
  .controller('MainCtrl', function (artifactsApi, qApi, $scope) {
    var that = this;

    that.selectedArtifact = {};

    that.tableList = [];
    that.addItem = function () {
      that.tableList.push({
        name:'newListItem'
      });
    };

    setTimeout(function (){
      artifactsApi.getArtifactList().then(function (artifacts) {
        console.log(artifacts);
        console.log(that.tableList.concat(artifacts.data));
        that.tableList = artifacts;
      });
    }, 1000);


    $scope.$watch('selectedArtifact', function (selectedArtifact) {
      console.log('yea that changed dog');
    });
  });
