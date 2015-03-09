'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('SearchCtrl', function ($scope, Users) {

    $scope.searchResult;
    $scope.search = search;
    $scope.searchInput;

    function search() {
      Users.getUsers().then(success, error, always);

      function success(result) {
        $scope.searchResult = result;
      }

      function error(result) {
        //Error handling
      }

      function always(result) {
      }
    }

  });
