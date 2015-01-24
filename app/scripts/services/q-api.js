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
        fetchData: 'fetchData'
      },
      isConnected = false,
      queuedRequests = [];

    var ws = new WebSocket("ws://localhost:12345");

    ws.onopen = function () {
      console.log('woohooo connected to q');
      isConnected = true;
    };

    ws.onmessage = function (message) {
      console.log('from q');
      console.log(message.data);
      var payload = JSON.parse(message.data);

      console.log(payload);
      if(angular.isFunction(requestMap[payload.cmd])) {
        requestMap[payload.cmd](payload.data);
      }
    };

    that.getVariables = function () {
      return qRequest(commands.fetchVariables, {});
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
          data : data
        }));
      }

      return deffered.promise;
    };

  });
