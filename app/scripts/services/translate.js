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
          search: 'Søg',

        //User
        allUsers: 'Alle indsamlere',
        createUser: 'Tilmeld bruger',

        //Campaign
        allCampaigns: 'Alle kampagner',
        createCampagin: 'Timeld kampagne'
      }
    }

  });
