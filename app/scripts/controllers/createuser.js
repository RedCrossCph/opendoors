'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:CreateuserCtrl
 * @description
 * # CreateuserCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('CreateuserCtrl', function ($scope, Campaigns, Users, Meetingplaces, MessagesUtil) {

		$scope.campaignInput;
		$scope.campaignData;
		$scope.meetingplaceData;
		$scope.meetingplaceInput;

		$scope.onChangeCampaign = onChangeCampaign;
		$scope.onClickCampaign = onClickCampaign;
		$scope.onCreate = onCreate;
		$scope.onChangeMeetingplace = onChangeMeetingplace;
		$scope.onClickMeetingplace = onClickMeetingplace;

		function onChangeCampaign() {
			Campaigns.getCampaigns().then(success, error, always);

			function success(result) {
				$scope.campaignData = result;
			}

			function error(result) {
				//Error handling
			}

			function always(result) {
			}

		}

		function onClickCampaign(id, name) {
			$scope.campaignInput = name;
			$scope.campaignData = [];
		}

		function onChangeMeetingplace() {
			Meetingplaces.getMeetingplaces().then(success, error, always);

			function success(result) {
				$scope.meetingplaceData = result;
			}

			function error(result) {
				//Error handling
			}

			function always(result) {
			}
		}

		function onClickMeetingplace(id, name) {
			$scope.meetingplaceInput = name;
			$scope.meetingplaceData = [];
		}

		function onCreate() {

			var data = {
					firstname: $scope.firstnameInput,
					lastname: $scope.lastnameInput,
					address: $scope.addressInput,
					phonenumber: $scope.phonenumberInput,
					email: $scope.emailInput,
					collectingcans: $scope.collectingcansInput,
					campaign: $scope.campaignInput,
					meetingplace: $scope.meetingplaceInput,
			}

			Users.createUser(data).then(success, error, always);

			function success(result) {
				// TODO
				MessagesUtil.create("Indsamleren er blevet oprettet");
				$state.go('search');
			}

			function error(result) {
				//Error handling
			}

			function always(result) {
			}
		}

	});
