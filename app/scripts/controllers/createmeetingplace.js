'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:CreatemeetingplaceCtrl
 * @description
 * # CreatemeetingplaceCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('CreatemeetingplaceCtrl', function ($scope, Meetingplaces, MessagesUtil) {
		$scope.onCreate = onCreate;

		$scope.nameInput;

		function onCreate() {
			var data = {
				name: $scope.campaignInput
			};

			Meetingplaces.addMeetingplace(data).then(success, error, always);

			function success() {
				MessagesUtil.create("Mødestedet er blevet oprettet");
			}

			function error() {
			}

			function always() {
			}

		}
  });
