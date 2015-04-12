'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('MainCtrl', function ($scope, $state, Users, Settings) {

		$scope.dropdown = false;
		$scope.user;
		$scope.meetingplace = Settings.meetingplace;

		activate();

		function activate() {
			Users.getUser(0).then(success, error, always);

			function success(result) {
				$scope.user = result;
			}

			function error(result) {
			}

			function always(result) {
			}
		}

		if(!Users.checkLogin()) {
			$state.go('login');
		} else {
			$state.go('search');
		}
  });
