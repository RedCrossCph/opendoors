'use strict';

/**
 * @ngdoc service
 * @name rkisApp.messagesutil
 * @description
 * # messagesutil
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
	.factory('MessagesUtil', function ($q, $rootScope) {

		var service = {
			create: create
		};

		return service;

		function create(message) {
			$rootScope.messageFire = true;
			$rootScope.message = message;
		}
	});
