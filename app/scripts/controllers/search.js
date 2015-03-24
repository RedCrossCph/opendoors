'use strict';

/**
 * @ngdoc function
 * @name rkisApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the rkisApp
 */
angular.module('rkisApp')
	.controller('SearchCtrl', function ($scope, Users, MessagesUtil) {

		$scope.search = search;
		$scope.manuelSearch = manuelSearch;

		$scope.manuelSearchState = false;
		$scope.searchResult;
		$scope.searchInput;

		function search() {
			if($scope.searchInput.length != 0) {
				Users.getUsers().then(success, error, always);

			} else {
				$scope.searchResult = undefined;
				$scope.manuelSearchState = false;
			}

			function success(result) {
				$scope.searchResult = result;
			}

			function error(result) {
				//Error handling
			}

			function always(result) {
			}
		}

		function manuelSearch() {
			$scope.manuelSearchState = true;
		}

	});
