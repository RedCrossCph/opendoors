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
				controller: 'MainCtrl',
			})
			.state('edituser', {
				url: "edituser/{id}",
				templateUrl: "views/edituser.html",
				controller: 'EdituserCtrl',
				parent: 'main'
			})
			.state('editcampaign', {
				url: "editcampaign",
				templateUrl: "views/editcampaign.html",
				controller: 'EditcampaignCtrl',
				parent: 'main'
			})
			.state('editmeetingplace', {
				url: "editmeetingplace",
				templateUrl: "views/editmeetingplace.html",
				controller: 'eEitmeetingplaceCtrl',
				parent: 'main'
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
			})
			.state('createuser', {
				url: "createuser",
				templateUrl: "views/createuser.html",
				controller: 'CreateuserCtrl',
				parent: 'main'
			})
			.state('createcampaign', {
				url: "createcampaign",
				templateUrl: "views/createcampaign.html",
				controller: 'CreatecampaignCtrl',
				parent: 'main'
			})
			.state('createmeetingplace', {
				url: "createmeetingplace",
				templateUrl: "views/createmeetingplace.html",
				controller: 'CreatemeetingplaceCtrl',
				parent: 'main'
			})

	}).run(function(translate) {
		translate.init();
	});
