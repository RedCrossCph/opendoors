'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:EditmeetingplaceCtrl
 * @description
 * # EditmeetingplaceCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('EditmeetingplaceCtrl', function ($scope, $stateParams, Meetingplaces) {

		$scope.id = $stateParams.id;
		$scope.meetingplaceInput;
		$scope.getMeetingplace = getMeetingplace;
		$scope.editMeetingplace = editMeetingplace;

		activate();

		function activate() {
			getMeetingplace();
		}

		function getMeetingplace() {
			//Get only 1
		}

		function editMeetingplace() {
			var data = {
				name: $scope.meetingplaceInput
			};

			Meetingplaces.addMeetingplaces(data).then(success, error, always);

			function success(result) {
				$scope.meetingplaceData = result;
			}

			function error(result) {
				//Error handling
			}

			function always(result) {
			}

		}
	});
