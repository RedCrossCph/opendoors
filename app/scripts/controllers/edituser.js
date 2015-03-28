'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:EdituserCtrl
 * @description
 * # EdituserCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('EdituserCtrl', function ($scope, Users, $stateParams, $state, MessagesUtil) {

		$scope.firstnameInput;
		$scope.lastnameInput;
		$scope.addressInput;
		$scope.phonenumberInput;
		$scope.emailInput;
		$scope.collectingcansInput;
		$scope.campaignInput;
		$scope.meetingplaceInput;

			$scope.getUser = getUser;
		$scope.onCreate = onCreate;

		activate();

		function activate() {
			if($stateParams.id == undefined) {
				$state.go("search");
				return;
			}
			getUser($stateParams.id);
		}

		function getUser(id) {
			Users.getUser(id).then(success, error, always);

			function success(result) {
				$scope.firstnameInput = result.firstname;
				$scope.lastnameInput = result.lastname;
				$scope.addressInput = result.address;
				$scope.phonenumberInput = result.phonenumber;
				$scope.emailInput = result.email;
				$scope.collectingcansInput = result.collectingcans;
				$scope.campaignInput = result.campaign;
				$scope.meetingplaceInput = result.meetingplace;

			}

			function error(result) {

			}

			function always(result) {

			}
		}

		function onCreate() {
			Users.getUser().then(success, error, always);

			function success(result) {
				MessagesUtil.create("Indsamleren er blevet opdateret");

			}

			function error(result) {

			}

			function always(result) {

			}
		}



	});
