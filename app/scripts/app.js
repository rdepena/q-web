'use strict';

/**
 * @ngdoc overview
 * @name qWebApp
 * @description
 * # qWebApp
 *
 * Main module of the application.
 */
angular
  .module('qWebApp', [
    'ngRoute',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl',
        resolve: {
          settings: function (configApi, $location){
            return configApi.get().catch(function (){
              $location.path('/config');
            });
          }
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/query', {
        templateUrl: 'views/query.html',
        controller: 'QueryCtrl',
        controllerAs: 'queryCtrl'
      })
      .when('/config', {
        templateUrl: 'views/config.html',
        controller: 'ConfigCtrl',
        controllerAs: 'configCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
