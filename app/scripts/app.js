'use strict';

/**
 * @ngdoc overview
 * @name tejaApp
 * @description
 * # tejaApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
       .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/views/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl',

      })
      .otherwise({
        redirectTo: '/'
      });
  });
