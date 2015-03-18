'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:CreatecampaignCtrl
 * @description
 * # CreatecampaignCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('CreatecampaignCtrl', function ($scope, Campaigns) {
    $scope.onCreate = onCreate;

		$scope.campaignInput;

		function onCreate() {
			var data = {
				name: $scope.campaignInput
			};

			Campaigns.addCampaign(data).then(success, error, always);

			function success() {
				alert("Oprettet");
			}

			function error() {
			}

			function always() {
			}

		}
  });
