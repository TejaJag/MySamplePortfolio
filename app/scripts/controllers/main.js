'use strict';

/**
 * @ngdoc function
 * @name tejaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tejaApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope) {
    let vm = this;
    console.log("hell");
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
