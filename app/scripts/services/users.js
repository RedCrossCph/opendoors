'use strict';

/**
 * @ngdoc service
 * @name rkisApp.user
 * @description
 * # user
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
  .factory('Users', function ($q) {

    var service = {
      getUsers: getUsers
    };

    return service;

    function getUsers() {
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
          firstname     : 'Tommy',
          secondname    : 'Jepsen',
          address       : 'Bakekvej 1, 3. 306',
          phonenumber   : '60117793',
          email         : 'tommy@tommyjepsen.com',
          collectioncans: 0
        },
        2: {
          firstname     : 'Tommy',
          secondname    : 'Jepsen',
          address       : 'Bakekvej 1, 3. 306',
          phonenumber   : '60117793',
          email         : 'tommy@tommyjepsen.com',
          collectioncans: 0
        },
        3: {
          firstname     : 'Tommy',
          secondname    : 'Jepsen',
          address       : 'Bakekvej 1, 3. 306',
          phonenumber   : '60117793',
          email         : 'tommy@tommyjepsen.com',
          collectioncans: 0
        },
      }
      deferred.resolve(users);

      return deferred.promise;
    }


  });
