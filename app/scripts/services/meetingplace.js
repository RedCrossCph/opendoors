'use strict';

/**
 * @ngdoc service
 * @name rkisApp.meetingplace
 * @description
 * # meetingplace
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
  .factory('meetingplace', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
