'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('MainCtrl', function ($scope, $state) {
    $state.go('search');
  });
