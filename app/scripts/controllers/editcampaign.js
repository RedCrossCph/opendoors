'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:EditcampaignCtrl
 * @description
 * # EditcampaignCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('EditcampaignCtrl', function ($scope, Campaigns, $stateParams, MessagesUtil, $state) {

		$scope.getCampaign = getCampaign;
		$scope.onCreate = onCreate;
		var data;
		$scope.nameInput;
		$scope.onDelete = onDelete;

		getCampaign($stateParams.id);

		function getCampaign(id) {

			Campaigns.getCampaign(id).then(success, error, always);

			function success(result) {
				data = result;
				$scope.nameInput = result.name;
			}

			function error(result) {
				$state.go("search");
			}

			function always(result) {

			}
		}

		function onDelete() {
			var dataSend = {
				'id': data.id,
			};

			Campaigns.deleteCampaign(dataSend).then(success, error, always);

			function success(result) {
				MessagesUtil.create("Kampagnen er blevet slettet");
				$state.go('campaign');
			}

			function error(result) {
				$state.go("search");
			}

			function always(result) {

			}
		}

		function onCreate() {
			var dataSend = {
				'id': data.id,
				'name': $scope.nameInput
			};

			Campaigns.editCampaign(dataSend).then(success, error, always);

			function success(result) {
				MessagesUtil.create("Kampagnen er blevet opdateret");

			}

			function error(result) {
				$state.go("search");
			}

			function always(result) {

			}
		}
});
