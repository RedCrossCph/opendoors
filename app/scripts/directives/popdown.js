'use strict';

/**
 * @ngdoc directive
 * @name rkisApp.directive:popdown
 * @description
 * # popdown
 */
angular.module('rkisApp')
  .directive('popdown', function () {
    return {
      templateUrl: 'scripts/directives/popdown.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
