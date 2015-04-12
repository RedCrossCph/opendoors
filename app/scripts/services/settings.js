'use strict';

/**
 * @ngdoc service
 * @name rkisApp.settings
 * @description
 * # settings
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
  .factory('Settings', function () {

		var service = {
			'niveau': 0,
			'meetingplace': 'Østerbro'
		};

		return service;
  });
