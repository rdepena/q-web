'use strict';

/**
 * @ngdoc service
 * @name qWebApp.qApi
 * @description
 * # qApi
 * Service in the qWebApp.
 */
angular.module('qWebApp')
  .service('qApi', function qApi($q) {
    var that = this;

    var requestMap = {},
      commands = {
        fetchVariables: 'fetchVariables',
        fetchData: 'fetchData',
        fetchAsString: 'fetchAsString'
      },
      isConnected = false;

    var ws = new WebSocket('ws://localhost:5000');

    ws.onopen = function () {
      isConnected = true;
    };

    ws.onmessage = function (message) {
      var payload = JSON.parse(message.data);

      if(angular.isFunction(requestMap[payload.cmd])) {
        requestMap[payload.cmd](payload.data);
      }
    };

    that.getVariables = function () {
      return qRequest(commands.fetchVariables, {});
    };

    that.getStringValue = function (artifactName) {
      return qRequest(commands.fetchAsString, artifactName);
    };

    that.getValue = function (artifactName) {
      return qRequest(commands.fetchData, artifactName);
    };

    function qRequest(command, data) {
      var deffered = $q.defer();

      if(isConnected) {
        requestMap[command] = function(data) {
          deffered.resolve(data);
        };

        ws.send(JSON.stringify({
          cmd: command,
          data : data,
          id:'1'
        }));
      }

      return deffered.promise;
    }

  });
