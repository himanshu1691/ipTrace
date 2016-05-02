'use strict';
var ipTrace = angular.module("ipTrace",['ngRoute','ui.bootstrap'])
.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/home',{
		templateUrl : 'partials/home',
		controller : 'HomeCtrl'
	}).otherwise({
		redirectTo : '/home'
	});
	
	
	/**
	 * to remove hash in the URL
	 */
	$locationProvider.html5Mode({
		enabled : true,
		requireBase : false
	});


	
})