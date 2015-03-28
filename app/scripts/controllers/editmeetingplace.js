'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:EditmeetingplaceCtrl
 * @description
 * # EditmeetingplaceCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('EditmeetingplaceCtrl', function ($scope, $stateParams, $state, Meetingplaces, MessagesUtil) {


		$scope.getMeetingplace = getMeetingplace;
		$scope.onCreate = onCreate;
		$scope.onDelete = onDelete;
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

		function onDelete() {
			var dataSend = {
				'id': data.id,
			};

			Meetingplaces.deleteMeetingplace(dataSend).then(success, error, always);

			function success(result) {
				MessagesUtil.create("Mødestedet er blevet slettet");
				$state.go('meetingplace');
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
				MessagesUtil.create("Mødestedet er blevet opdateret");

			}

			function error(result) {
				$state.go("search");
			}

			function always(result) {

			}
		}

	});
