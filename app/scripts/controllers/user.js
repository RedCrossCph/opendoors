'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('UserCtrl', function ($scope, Users) {

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
