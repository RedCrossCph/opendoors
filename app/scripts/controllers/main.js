'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('MainCtrl', function ($scope, $state, Users) {
		console.log(Users.checkLogin());
		if(!Users.checkLogin()) {
			$state.go('login');
		} else {
			$state.go('search');
		}
  });
