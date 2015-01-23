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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
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
      .otherwise({
        redirectTo: '/'
      });
  });

