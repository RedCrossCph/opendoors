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
			getMeetingplaces: getMeetingplaces,
			addMeetingplace: addMeetingplace,
			getMeetingplace: getMeetingplace,
			editMeetingplace: editMeetingplace,
				deleteMeetingplace: deleteMeetingplace,

		//
			meetingplaces : {
				0: {
					id     : '0',
					name    : 'Nordvest',
				},
				1: {
					id     : '1',
					name    : 'Amager',
				},
				2: {
					id     : '2',
					name    : 'Østerbro',
				},
				3: {
					id     : '3',
					name    : 'Nørrebro',
				},
			}
		};

		return service;

		function getMeetingplaces() {
			var deferred = $q.defer();

			deferred.resolve(service.meetingplaces);

			return deferred.promise;
		};

		function addMeetingplace(data) {

			var deferred = $q.defer();

			service.meetingplaces[Object.keys(service.meetingplaces).length] = {
				id: Object.keys(service.meetingplaces).length+1,
				name: data.name
			}

			deferred.resolve(service.campaigns);

			return deferred.promise;
		}

		function getMeetingplace(id) {
			var deferred = $q.defer();

			deferred.resolve(service.meetingplaces[id]);

			return deferred.promise;
		}

		function editMeetingplace(data) {
			var deferred = $q.defer();

			service.meetingplaces[data.id].name = data.name;

			deferred.resolve("success");

			return deferred.promise;
		}

		function deleteMeetingplace(data) {
			var deferred = $q.defer();

			delete service.meetingplaces[data.id];

			deferred.resolve("success");

			return deferred.promise;
		}
	});
