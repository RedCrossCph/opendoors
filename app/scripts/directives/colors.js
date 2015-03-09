'use strict';

/**
 * @ngdoc directive
 * @name rkisApp.directive:colors
 * @description
 * # colors
 */
angular.module('rkisApp')
  .directive('colors', function () {
    return {
      restrict: 'EA',
      templateUrl: 'scripts/directives/colors.html',
      link: function link(scope, element, attrs) {
      }
    };
  });
