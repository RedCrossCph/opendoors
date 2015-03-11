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
			console.log(API.root);
			var deferred = $q.defer();

			var campaigns = {
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
			deferred.resolve(campaigns);

			return deferred.promise;
		}

	});
