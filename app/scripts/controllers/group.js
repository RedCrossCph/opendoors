'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:GroupCtrl
 * @description
 * # GroupCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('GroupCtrl', function ($scope, Users) {

		$scope.data = [];

		getUsers();


		function getUsers() {
			Users.getUsers().then(success, error, always);

			function success(result) {
				$scope.data = result;
			}

			function error(result) {
				//Error handling
			}

			function always(result) {
			}
		}

	});
