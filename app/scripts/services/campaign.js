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
			getCampaigns: getCampaigns
		};

		return service;

		function getCampaigns() {
			var deferred = $q.defer();

			var campaigns = {
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
			deferred.resolve(campaigns);

			return deferred.promise;
		}

	});
