'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:EditcampaignCtrl
 * @description
 * # EditcampaignCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('EditcampaignCtrl', function ($scope, Campaigns, $stateParams, $state) {

		$scope.getCampaign = getCampaign;
		$scope.onCreate = onCreate;
		var data;
		$scope.nameInput;

		getCampaign($stateParams.id);

		function getCampaign(id) {

			Campaigns.getCampaign(id).then(success, error, always);

			function success(result) {
				data = result;
				console.log(result);
				console.log(data);
				$scope.nameInput = result.name;
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

			}

			function error(result) {
				$state.go("search");
			}

			function always(result) {

			}
		}
});
