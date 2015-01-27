'use strict';

/**
 * @ngdoc service
 * @name qWebApp.configApi
 * @description
 * # configApi
 * Service in the qWebApp.
 */
angular.module('qWebApp')
  .service('configApi', function configApi($q, localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var that = this,
      config = {
        data: null
      },
      storageKey = 'kdbweb:config';

    that.get = function() {
      config.data = config.data || getFromStorage();
      if(config.data){
        return $q.when(config);
      } else {
        return $q.reject();
      }
    };

    that.getDefaults = function () {
      return {
        serverAddress: 'ws://localhost:5000',
        varPollSeconds: 10
      };
    };

    that.set = function (conf, save) {
      config.data = conf;
      if (save) {
        setToStorage(conf);
      }
    };

    function getFromStorage() {
      return localStorageService.get(storageKey);
    }

    function setToStorage(conf) {
      localStorageService.set(storageKey, conf);
    }

  });
