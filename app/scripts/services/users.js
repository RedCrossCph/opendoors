'use strict';

/**
 * @ngdoc service
 * @name rkisApp.user
 * @description
 * # user
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
	.factory('Users', function ($q, API) {

		var service = {
			getUsers: getUsers, createUser: createUser, users: {
				0   : {
					firstname     : 'Tommy',
					lastname      : 'Jepsen',
					address       : 'Bakekvej 1, 3. 306',
					phonenumber   : '60117793',
					email         : 'tommy@tommyjepsen.com',
					meetingplace  : 'Amager',
					campaign : '',
					collectioncans: 0
				}, 1: {
					firstname     : 'Niels',
					lastname      : 'Poulsen',
					address       : 'Jensengade 5',
					phonenumber   : '55117755',
					email         : 'niels@gmail.com',
					meetingplace  : 'Amager',
					campaign : '',
					collectioncans: 0
				}, 2: {
					firstname     : 'Jakob',
					lastname      : 'Fransen',
					address       : 'Søndermarken 4',
					phonenumber   : '11117793',
					email         : 'jakoooobbbb123@gmail.com',
					meetingplace: 'Amager',
					campaign : '',
					collectioncans: 0
				}, 3: {
					firstname     : 'Jonas',
					lastname      : 'Thomsen',
					address       : 'Poulalle 6',
					phonenumber   : '44117793',
					email         : 'thomsenjonas@gmail.com',
					meetingplace  : 'Amager',
					campaign : '',
					collectioncans: 0
				},
			}
		};

		return service;


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


	});
