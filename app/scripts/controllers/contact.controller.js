'use strict';

/**
 * @ngdoc function
 * @name tejaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tejaApp
 */
angular.module('appApp')
  .controller('contactCtrl', function ($scope) {
    let vm = this;
    console.log("hell contact");
    $scope.contactDetails = {};
    $scope.contactDetails.name = "Tejaswini J";
    $scope.contactDetails.email = "tejajagarlaudi95@gmail.com";

  });
