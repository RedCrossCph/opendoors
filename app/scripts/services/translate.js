'use strict';

/**
 * @ngdoc service
 * @name rkisApp.translate
 * @description
 * # translate
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
	.factory('translate', function ($rootScope) {

		var service = {
			init: init
		};

		return service;

		function init() {

			$rootScope.translate = {
				//Util
				utilLogout: 'Log ud',

				//Search
				search: 'Find indsamler',

				//User
				allUsers: 'Indsamlere',
				createUser: 'Opret helt ny indsamler',

				//Campaign
				allCampaigns: 'Kampagner',
				createCampagin: 'Opret kampagne',


				//Meetingplace
				allMeetingplace: 'Mødesteder',
				createMeetingplace: 'Opret mødested',

				//Group
				allGroups: 'Indsamlingsgrupper',
				createGroups: 'Opret indsamlingsgrupper'
			}
		}

	});
