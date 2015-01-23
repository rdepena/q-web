'use strict';

/**
 * @ngdoc function
 * @name qWebApp.controller:QueryCtrl
 * @description
 * # QueryCtrl
 * Controller of the qWebApp
 */
angular.module('qWebApp')
  .controller('QueryCtrl', function () {
    var that = this;

    that.process = function (query) {
      console.log(query);
    };
  });
