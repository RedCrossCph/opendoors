'use strict';

/**
 * @ngdoc service
 * @name rkisApp.campaign
 * @description
 * # campaign
 * Factory in the rkisApp.
 */
angular.module('rkisApp')
  .factory('campaign', function () {
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
