'use strict';
/*
 * @ngdoc overview
 * @name rkisApp
 * @description
 * # rkisApp
 *
 * Main module of the application.
 */
angular
  .module('rkisApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'MainCtrl'
    })
    .state('about', {
      url: "about",
      templateUrl: "views/about.html",
      controller: 'AboutCtrl',
      parent: 'main'
    })
    .state('search', {
      url: "search",
      templateUrl: "views/search.html",
      controller: 'SearchCtrl',
      parent: 'main'

    })
    .state('user', {
      url: "user",
      templateUrl: "views/user.html",
      controller: 'UserCtrl',
      parent: 'main'
    })
    .state('campaign', {
      url: "campaign",
      templateUrl: "views/campaign.html",
      controller: 'CampaignCtrl',
      parent: 'main'
    })
    .state('meetingplace', {
      url: "meetingplace",
      templateUrl: "views/meetingplace.html",
      controller: 'MeetingplaceCtrl',
      parent: 'main'
    });
});
