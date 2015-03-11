'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:CampaignCtrl
 * @description
 * # CampaignCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('CampaignCtrl', function ($scope, Campaigns) {

		$scope.getCampaigns = getCampaigns;
		$scope.data;

		activate();

		function activate() {
			getCampaigns();
		}

		function getCampaigns() {
			Campaigns.getCampaigns().then(success, error, always);

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
