'use strict';

/**
 * @ngdoc function
 * @name tejaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tejaApp
 */
angular.module('appApp')
  .controller('contactCtrl', function ($scope, NgMap) {
    let vm = this;
    console.log("hell contact");
    $scope.contactDetails = {};
    $scope.contactDetails.name = "Tejaswini J";
    $scope.contactDetails.email = "tejajagarlaudi95@gmail.com";
    $scope.x = 42.74 ;
    $scope.y = -76.18 ;
//  AIzaSyBnbRbHgXcER3afS28Bm3of2dz4MEBEhjo  -- google maps API key
    NgMap.getMap().then(function(map) {
    // console.log(map.getCenter());
    // console.log('markers', map.markers);
    // console.log('shapes', map.shapes);
    console.log("maps");
  });

  });
