'use strict';

/**
 * @ngdoc function
 * @name qWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qWebApp
 */
angular.module('qWebApp')
  .controller('MainCtrl', function (artifactsApi) {
    var that = this;

    that.selectedArtifact = {};

    that.tableList = [];

    artifactsApi.getArtifactList().then(function (artifacts) {
      console.log(artifacts);
      console.log(that.tableList.concat(artifacts.data));
      that.tableList = artifacts.data;
    });

    that.addItem = function () {
      that.tableList.push({
        name:'newListItem'
      });
    };

  });
