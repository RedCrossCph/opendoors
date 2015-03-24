'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('LogoutCtrl', function ($scope, Users, MessagesUtil, $state) {
		Users.logout();
		MessagesUtil.create("Du er nu logget ud");
		$state.go('login');
	});
