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
      getUsers: getUsers
    };

    return service;

    function getUsers() {
      console.log(API.root);
      var deferred = $q.defer();

      var users = {
        0: {
          firstname     : 'Tommy',
          secondname    : 'Jepsen',
          address       : 'Bakekvej 1, 3. 306',
          phonenumber   : '60117793',
          email         : 'tommy@tommyjepsen.com',
          collectioncans: 0
        },
        1: {
          firstname     : 'Niels',
          secondname    : 'Poulsen',
          address       : 'Jensengade 5',
          phonenumber   : '55117755',
          email         : 'niels@gmail.com',
          collectioncans: 0
        },
        2: {
          firstname     : 'Jakob',
          secondname    : 'Fransen',
          address       : 'Søndermarken 4',
          phonenumber   : '11117793',
          email         : 'jakoooobbbb123@gmail.com',
          collectioncans: 0
        },
        3: {
          firstname     : 'Jonas',
          secondname    : 'Thomsen',
          address       : 'Poulalle 6',
          phonenumber   : '44117793',
          email         : 'thomsenjonas@gmail.com',
          collectioncans: 0
        },
      }
      deferred.resolve(users);

      return deferred.promise;
    }


  });
