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


		$scope.getMeetingplace = getMeetingplace;
		$scope.onCreate = onCreate;
		var data;
		$scope.nameInput;

		getMeetingplace($stateParams.id);

		function getMeetingplace(id) {

			Meetingplaces.getMeetingplace(id).then(success, error, always);

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

		function onCreate() {
			var dataSend = {
				'id': data.id,
				'name': $scope.nameInput
			};

			Meetingplaces.editMeetingplace(dataSend).then(success, error, always);

			function success(result) {

			}

			function error(result) {
				$state.go("search");
			}

			function always(result) {

			}
		}

	});
