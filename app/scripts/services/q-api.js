'use strict';

/**
 * @ngdoc service
 * @name qWebApp.qApi
 * @description
 * # qApi
 * Service in the qWebApp.
 */
angular.module('qWebApp')
  .service('qApi', function qApi($q, configApi) {
    var that = this,
      ws;

    var requestBuffer = [],
      commands = {
        fetchVariables: 'fetchVariables',
        fetchData: 'fetchData',
        fetchAsString: 'fetchAsString'
      },
      isConnected = false,
      config;

    configApi.get().then(function (conf) {
      config = conf;
      init();
    });

    function init () {
      ws = new WebSocket(config.data.serverAddress);
      ws.onopen = function () {
        isConnected = true;
      };
      ws.onmessage = function (message) {
        var payload = JSON.parse(message.data);

        processRequest(payload);
      };
      ws.onerror = function (error) {
        console.log(error);
        alert(error);
      }
    }

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
      var deffered = $q.defer(),
        requestId = Date.now().toString(),
        requestObject = JSON.stringify({
            cmd: command,
            data : data,
            id: requestId
          });

      if(isConnected) {
        addToRequestBuffer(requestId, function(data) {
          deffered.resolve(data);
        });
        ws.send(requestObject);
      }

      return deffered.promise;
    }

    function processRequest(responseObject) {
      var request = _.chain(requestBuffer)
      .where({id: responseObject.id})
      .first()
      .value();

      if(_.isFunction(request.funct)){
        request.funct(responseObject.data);
      }
    }

    function addToRequestBuffer(id, funct) {
        requestBuffer.push({id:id, funct:funct});
    }

  });
