'use strict';

/**
 * @ngdoc service
 * @name rkisApp.Campaigns
 * @description
 * # campaign
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
	.factory('Campaigns', function ($q, API) {

		var service = {
			getCampaigns: getCampaigns,
			addCampaign: addCampaign,

			//
			campaigns: {
				0: {
					id     : '1',
					name    : 'Russerne på KU',
				},
				1: {
					id     : '2',
					name    : 'Tyskerne',
				},
				2: {
					id     : '3',
					name    : 'Steven Seagal',
				},
				3: {
					id     : '4',
					name    : 'Nye beboer',
				},
			}
		};

		return service;

		function getCampaigns() {
			var deferred = $q.defer();


			deferred.resolve(service.campaigns);

			return deferred.promise;
		}

		function addCampaign(data) {
			var deferred = $q.defer();

			service.campaigns[Object.keys(service.campaigns).length] = {
				id: Object.keys(service.campaigns).length+1,
				name: data.name
			}

			deferred.resolve(service.campaigns);

			return deferred.promise;
		}

	});
