'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('LoginCtrl', function ($scope, Users, $state, MessagesUtil) {
    $scope.onLogin = onLogin;

		function onLogin() {
			Users.login().then(success, error, always);

			function success(result) {
				$scope.data = result;
				MessagesUtil.create('Du er nu logget ind');
				$state.go('search');
			}

			function error(result) {
				//Error handling
			}

			function always(result) {
			}
		}
  });
