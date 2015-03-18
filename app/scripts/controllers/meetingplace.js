'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:MeetingplaceCtrl
 * @description
 * # MeetingplaceCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
  .controller('MeetingplaceCtrl', function ($scope, Meetingplaces) {

		$scope.getMeetingplaces = getMeetingplaces;
		$scope.data;

		activate();

		function activate() {
			getMeetingplaces();
		}

		function getMeetingplaces() {
			Meetingplaces.getMeetingplaces().then(success, error, always);

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
