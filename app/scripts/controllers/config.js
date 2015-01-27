'use strict';

/**
 * @ngdoc function
 * @name qWebApp.controller:ConfigCtrl
 * @description
 * # ConfigCtrl
 * Controller of the qWebApp
 */
angular.module('qWebApp')
  .controller('ConfigCtrl', function (configApi, $location) {
    var that = this;

    that.rememberSettings = false;
    configApi.get().then(function (conf) {
      that.config = conf.data;
    }).catch(function () {
      that.config = configApi.getDefaults();
    });


    that.save = function () {
      configApi.set(that.config, that.rememberSettings);
      $location.path('/');
    };
  });
