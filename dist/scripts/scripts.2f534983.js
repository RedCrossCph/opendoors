"use strict";angular.module("rkisApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("main",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("login",{url:"login/",templateUrl:"views/login.html",controller:"LoginCtrl",parent:"main"}).state("logout",{url:"logout/",templateUrl:"views/logout.html",controller:"LogoutCtrl",parent:"main"}).state("edituser",{url:"edituser/{id}",templateUrl:"views/edituser.html",controller:"EdituserCtrl",parent:"main"}).state("editcampaign",{url:"editcampaign/{id}",templateUrl:"views/editcampaign.html",controller:"EditcampaignCtrl",parent:"main"}).state("editmeetingplace",{url:"editmeetingplace/{id}",templateUrl:"views/editmeetingplace.html",controller:"EditmeetingplaceCtrl",parent:"main"}).state("about",{url:"about",templateUrl:"views/about.html",controller:"AboutCtrl",parent:"main"}).state("search",{url:"search",templateUrl:"views/search.html",controller:"SearchCtrl",parent:"main"}).state("user",{url:"user",templateUrl:"views/user.html",controller:"UserCtrl",parent:"main"}).state("campaign",{url:"campaign",templateUrl:"views/campaign.html",controller:"CampaignCtrl",parent:"main"}).state("meetingplace",{url:"meetingplace",templateUrl:"views/meetingplace.html",controller:"MeetingplaceCtrl",parent:"main"}).state("createuser",{url:"createuser",templateUrl:"views/createuser.html",controller:"CreateuserCtrl",parent:"main"}).state("createcampaign",{url:"createcampaign",templateUrl:"views/createcampaign.html",controller:"CreatecampaignCtrl",parent:"main"}).state("createmeetingplace",{url:"createmeetingplace",templateUrl:"views/createmeetingplace.html",controller:"CreatemeetingplaceCtrl",parent:"main"})}]).run(["translate",function(a){a.init()}]),angular.module("rkisApp").controller("MainCtrl",["$scope","$state","Users",function(a,b,c){console.log(c.checkLogin()),b.go(c.checkLogin()?"search":"login")}]),angular.module("rkisApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("rkisApp").controller("SearchCtrl",["$scope","Users","MessagesUtil",function(a,b){function c(){function c(b){a.searchResult=b}function d(){}function e(){}0!=a.searchInput.length?b.getUsers().then(c,d,e):(a.searchResult=void 0,a.manuelSearchState=!1)}function d(){a.manuelSearchState=!0}a.search=c,a.manuelSearch=d,a.manuelSearchState=!1,a.searchResult,a.searchInput}]),angular.module("rkisApp").controller("UserCtrl",["$scope","Users",function(a,b){function c(){function c(b){a.data=b}function d(){}function e(){}b.getUsers().then(c,d,e)}a.data=[],c()}]),angular.module("rkisApp").controller("CampaignCtrl",["$scope","Campaigns",function(a,b){function c(){d()}function d(){function c(b){a.data=b}function d(){}function e(){}b.getCampaigns().then(c,d,e)}a.getCampaigns=d,a.data,c()}]),angular.module("rkisApp").controller("MeetingplaceCtrl",["$scope","Meetingplaces",function(a,b){function c(){d()}function d(){function c(b){a.data=b}function d(){}function e(){}b.getMeetingplaces().then(c,d,e)}a.getMeetingplaces=d,a.data,c()}]),angular.module("rkisApp").controller("CreateuserCtrl",["$scope","Campaigns","Users","Meetingplaces","MessagesUtil","$state",function(a,b,c,d,e,f){function g(){function c(b){a.campaignData=b}function d(){}function e(){}b.getCampaigns().then(c,d,e)}function h(b,c){a.campaignInput=c,a.campaignData=[]}function i(){function b(b){a.meetingplaceData=b}function c(){}function e(){}d.getMeetingplaces().then(b,c,e)}function j(b,c){a.meetingplaceInput=c,a.meetingplaceData=[]}function k(){function b(){e.create("Indsamleren er blevet oprettet"),f.go("search")}function d(){}function g(){}var h={firstname:a.firstnameInput,lastname:a.lastnameInput,address:a.addressInput,phonenumber:a.phonenumberInput,email:a.emailInput,collectingcans:a.collectingcansInput,campaign:a.campaignInput,meetingplace:a.meetingplaceInput};c.createUser(h).then(b,d,g)}a.campaignInput,a.campaignData,a.meetingplaceData,a.meetingplaceInput,a.onChangeCampaign=g,a.onClickCampaign=h,a.onCreate=k,a.onChangeMeetingplace=i,a.onClickMeetingplace=j}]),angular.module("rkisApp").controller("CreatecampaignCtrl",["$scope","Campaigns","MessagesUtil",function(a,b,c){function d(){function d(){c.create("Kampagnen er blevet oprettet")}function e(){}function f(){}var g={name:a.campaignInput};b.addCampaign(g).then(d,e,f)}a.onCreate=d,a.campaignInput}]),angular.module("rkisApp").controller("CreatemeetingplaceCtrl",["$scope","Meetingplaces","MessagesUtil",function(a,b,c){function d(){function d(){c.create("Mødestedet er blevet oprettet")}function e(){}function f(){}var g={name:a.campaignInput};b.addMeetingplace(g).then(d,e,f)}a.onCreate=d,a.nameInput}]),angular.module("rkisApp").factory("translate",["$rootScope",function(a){function b(){a.translate={utilLogout:"Log ud",search:"Find indsamler",allUsers:"Indsamlere",createUser:"Opret helt ny indsamler",allCampaigns:"Kampagner",createCampagin:"Opret kampagne",allMeetingplace:"Mødesteder",createMeetingplace:"Opret mødested"}}var c={init:b};return c}]),angular.module("rkisApp").directive("colors",function(){return{restrict:"EA",templateUrl:"../../views/colors.html",link:function(){}}}),angular.module("rkisApp").factory("Users",["$q","API","$rootScope",function(a,b,c){function d(b){var d=a.defer();return console.log(b.email),console.log(b.password),c.userID=j.users[0].id,d.resolve(j.users[0]),d.promise}function e(){return void 0!=c.userID?!0:!1}function f(){delete c.userID}function g(){var b=a.defer();return b.resolve(j.users),b.promise}function h(b){var c=a.defer();return j.users[Object.keys(j.users).length]={firstname:b.firstname,lastname:b.lastname,address:b.address,phonenumber:b.phonenumber,email:b.email,meetingplace:b.meetingplace,campaign:b.campaign,collectioncans:0},console.log(j.users),c.resolve(j.users),c.promise}function i(b){var c=a.defer();return c.resolve(j.users[b]),c.promise}var j={login:d,checkLogin:e,logout:f,getUsers:g,createUser:h,getUser:i,users:{0:{id:0,firstname:"Tommy",lastname:"Jepsen",address:"Bakekvej 1, 3. 306",phonenumber:"60117793",email:"tommy@tommyjepsen.com",meetingplace:"Amager",campaign:"CPH",collectioncans:0},1:{id:1,firstname:"Niels",lastname:"Poulsen",address:"Jensengade 5",phonenumber:"55117755",email:"niels@gmail.com",meetingplace:"Amager",campaign:"CPH",collectioncans:0},2:{id:2,firstname:"Jakob",lastname:"Fransen",address:"Søndermarken 4",phonenumber:"11117793",email:"jakoooob123@gmail.com",meetingplace:"Amager",campaign:"CPH",collectioncans:0},3:{id:3,firstname:"Jonas",lastname:"Thomsen",address:"Poulalle 6",phonenumber:"44117793",email:"thomsenjonas@gmail.com",meetingplace:"Amager",campaign:"Nybeboer",collectioncans:0}}};return j}]),angular.module("rkisApp").factory("Campaigns",["$q","API",function(a){function b(){var b=a.defer();return b.resolve(g.campaigns),b.promise}function c(b){var c=a.defer();return delete g.campaigns[b.id],c.resolve("success"),c.promise}function d(b){var c=a.defer();return g.campaigns[Object.keys(g.campaigns).length]={id:Object.keys(g.campaigns).length+1,name:b.name},c.resolve(g.campaigns),c.promise}function e(b){var c=a.defer();return c.resolve(g.campaigns[b]),c.promise}function f(b){var c=a.defer();return g.campaigns[b.id].name=b.name,c.resolve("success"),c.promise}var g={getCampaigns:b,addCampaign:d,getCampaign:e,editCampaign:f,deleteCampaign:c,campaigns:{0:{id:"0",name:"Russerne på KU"},1:{id:"1",name:"Tyskerne"},2:{id:"2",name:"Steven Seagal"},3:{id:"3",name:"Nye beboer"}}};return g}]),angular.module("rkisApp").factory("Meetingplaces",["$q","API",function(a){function b(){var b=a.defer();return b.resolve(g.meetingplaces),b.promise}function c(b){var c=a.defer();return g.meetingplaces[Object.keys(g.meetingplaces).length]={id:Object.keys(g.meetingplaces).length+1,name:b.name},c.resolve(g.campaigns),c.promise}function d(b){var c=a.defer();return c.resolve(g.meetingplaces[b]),c.promise}function e(b){var c=a.defer();return g.meetingplaces[b.id].name=b.name,c.resolve("success"),c.promise}function f(b){var c=a.defer();return delete g.meetingplaces[b.id],c.resolve("success"),c.promise}var g={getMeetingplaces:b,addMeetingplace:c,getMeetingplace:d,editMeetingplace:e,deleteMeetingplace:f,meetingplaces:{0:{id:"0",name:"Nordvest"},1:{id:"1",name:"Amager"},2:{id:"2",name:"Østerbro"},3:{id:"3",name:"Nørrebro"}}};return g}]),angular.module("rkisApp").factory("MessagesUtil",["$q","$rootScope",function(a,b){function c(a){b.messageFire=!0,b.message=a}var d={create:c};return d}]),angular.module("rkisApp").constant("API",{root:"http://rkis.dk/api/"}),angular.module("rkisApp").directive("popdown",function(){return{templateUrl:"../../views/popdown.html",restrict:"E",scope:{data:"="},link:function(){}}}),angular.module("rkisApp").controller("EdituserCtrl",["$scope","Users","$stateParams","$state","MessagesUtil",function(a,b,c,d,e){function f(){return void 0==c.id?void d.go("search"):void g(c.id)}function g(c){function d(b){a.firstnameInput=b.firstname,a.lastnameInput=b.lastname,a.addressInput=b.address,a.phonenumberInput=b.phonenumber,a.emailInput=b.email,a.collectingcansInput=b.collectingcans,a.campaignInput=b.campaign,a.meetingplaceInput=b.meetingplace}function e(){}function f(){}b.getUser(c).then(d,e,f)}function h(){function a(){e.create("Indsamleren er blevet opdateret")}function c(){}function d(){}b.getUser().then(a,c,d)}a.firstnameInput,a.lastnameInput,a.addressInput,a.phonenumberInput,a.emailInput,a.collectingcansInput,a.campaignInput,a.meetingplaceInput,a.getUser=g,a.onCreate=h,f()}]),angular.module("rkisApp").controller("EditcampaignCtrl",["$scope","Campaigns","$stateParams","MessagesUtil","$state",function(a,b,c,d,e){function f(c){function d(b){i=b,a.nameInput=b.name}function f(){e.go("search")}function g(){}b.getCampaign(c).then(d,f,g)}function g(){function a(){d.create("Kampagnen er blevet slettet"),e.go("campaign")}function c(){e.go("search")}function f(){}var g={id:i.id};b.deleteCampaign(g).then(a,c,f)}function h(){function c(){d.create("Kampagnen er blevet opdateret")}function f(){e.go("search")}function g(){}var h={id:i.id,name:a.nameInput};b.editCampaign(h).then(c,f,g)}a.getCampaign=f,a.onCreate=h;var i;a.nameInput,a.onDelete=g,f(c.id)}]),angular.module("rkisApp").controller("EditmeetingplaceCtrl",["$scope","$stateParams","$state","Meetingplaces","MessagesUtil",function(a,b,c,d,e){function f(b){function e(b){i=b,a.nameInput=b.name}function f(){c.go("search")}function g(){}d.getMeetingplace(b).then(e,f,g)}function g(){function a(){e.create("Mødestedet er blevet slettet"),c.go("meetingplace")}function b(){c.go("search")}function f(){}var g={id:i.id};d.deleteMeetingplace(g).then(a,b,f)}function h(){function b(){e.create("Mødestedet er blevet opdateret")}function f(){c.go("search")}function g(){}var h={id:i.id,name:a.nameInput};d.editMeetingplace(h).then(b,f,g)}a.getMeetingplace=f,a.onCreate=h,a.onDelete=g;var i;a.nameInput,f(b.id)}]),angular.module("rkisApp").directive("messages",["$rootScope","$timeout",function(a,b){return{templateUrl:"../../views/messages.html",restrict:"E",link:function(c){c.message="",c.fire=!1;a.$watch("messageFire",function(d){d&&(c.fire=!0,c.message=a.message,b(function(){c.fire=!1,delete a.messageFire,delete a.message},2500))})}}}]),angular.module("rkisApp").controller("LoginCtrl",["$scope","Users","$state","MessagesUtil",function(a,b,c,d){function e(){function e(b){a.data=b,d.create("Du er nu logget ind"),c.go("search")}function f(){}function g(){}var h={email:a.emailInput,password:a.passwordInput};b.login(h).then(e,f,g)}a.onLogin=e,a.passwordInput,a.emailInput}]),angular.module("rkisApp").controller("LogoutCtrl",["$scope","Users","MessagesUtil","$state",function(a,b,c,d){b.logout(),c.create("Du er nu logget ud"),d.go("login")}]);