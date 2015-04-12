'use strict';

/**
 * @ngdoc service
 * @name rkisApp.user
 * @description
 * # user
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
	.factory('Users', function ($q, API, $rootScope, Settings) {

		var service = {
			login: login,
			checkLogin: checkLogin,
			logout: logout,
			getUsers: getUsers,
			createUser: createUser,
			getUser: getUser,
			users: {
				0   : {
					id: 0,
					firstname     : 'Tommy',
					lastname      : 'Jepsen',
					address       : 'Bakekvej 1, 3. 306',
					phonenumber   : '60117793',
					email         : 'tommy@tommyjepsen.com',
					meetingplace  : 'Amager',
					campaign : 'CPH',
					collectioncans: 0,
					niveau: 0,
				}, 1: {
					id: 1,
					firstname     : 'Niels',
					lastname      : 'Poulsen',
					address       : 'Jensengade 5',
					phonenumber   : '55117755',
					email         : 'niels@gmail.com',
					meetingplace  : 'Amager',
					campaign : 'CPH',
					collectioncans: 0,
					niveau: 0
				}, 2: {
					id: 2,
					firstname     : 'Jakob',
					lastname      : 'Fransen',
					address       : 'Søndermarken 4',
					phonenumber   : '11117793',
					email         : 'jakoooob123@gmail.com',
					meetingplace: 'Amager',
					campaign : 'CPH',
					collectioncans: 0,
					niveau: 0
				}, 3: {
					id: 3,
					firstname     : 'Jonas',
					lastname      : 'Thomsen',
					address       : 'Poulalle 6',
					phonenumber   : '44117793',
					email         : 'thomsenjonas@gmail.com',
					meetingplace  : 'Amager',
					campaign : 'Nybeboer',
					collectioncans: 0,
					niveau: 0
				},
			}
		};

		return service;

		function login(data) {
			var deferred = $q.defer();

			$rootScope.userID = service.users[0].id;

			//Settings which niveau the user i on. If administrator then do stuff
			Settings.niveau = service.users[0].niveau;
			Settings.meetingplace = service.users[0].meetingplace;

			deferred.resolve(service.users[0]);

			return deferred.promise;
		}

		function checkLogin() {
			if($rootScope.userID != undefined) {
				return true;
			} else {
				return false;
			}
		}

		function logout() {
			delete $rootScope.userID;
		}


		function getUsers() {
			var deferred = $q.defer();

			deferred.resolve(service.users);

			return deferred.promise;
		}

		function createUser(data) {
			var deferred = $q.defer();

			service.users[Object.keys(service.users).length] = {
				firstname     : data.firstname,
				lastname    : data.lastname,
				address       : data.address,
				phonenumber   : data.phonenumber,
				email         : data.email,
				meetingplace:  data.meetingplace,
				campaign:  data.campaign,
				collectioncans: 0
			};
			console.log(service.users);

			deferred.resolve(service.users);

			return deferred.promise;
		}

		function getUser(id) {
			var deferred = $q.defer();

			deferred.resolve(service.users[id]);

			return deferred.promise;
		}


	});
