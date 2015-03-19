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
      templateUrl: '../../views/popdown.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
