'use strict';

/**
 * @ngdoc service
 * @name rkisApp.meetingplace
 * @description
 * # meetingplace
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
	.factory('Meetingplaces', function ($q, API) {

		var service = {
			getMeetingplaces: getMeetingplaces
		};

		return service;

		function getMeetingplaces() {
			var deferred = $q.defer();

			var meetingplaces = {
				0: {
					id     : '1',
					name    : 'Nordvest',
				},
				1: {
					id     : '2',
					name    : 'Amager',
				},
				2: {
					id     : '3',
					name    : 'Østerbro',
				},
				3: {
					id     : '4',
					name    : 'Nørrebro',
				},
			}
			deferred.resolve(meetingplaces);

			return deferred.promise;

		};
	});
