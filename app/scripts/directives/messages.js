'use strict';

/**
 * @ngdoc directive
 * @name rkisApp.directive:messages
 * @description
 * # messages
 */
angular.module('rkisApp')
	.directive('messages', function ($rootScope, $timeout) {
		return {
			templateUrl: '../../views/messages.html',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				scope.message = "";
				scope.fire = false;

				//Watch if the message gets called
				var watch = $rootScope.$watch('messageFire', function(data) {

					if(data) {

						scope.fire = true;
						scope.message = $rootScope.message;

						//Remove message again at some point
						$timeout(function() {

							scope.fire = false;

							delete $rootScope.messageFire;
							delete $rootScope.message;

						}, 2500);
					}
				});

			}
		};
	});
