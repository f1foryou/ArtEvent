define([
	'angular',
	'angular-route',
	'../controllers/eventsCntrl',
], function (angular) {

	return angular.module('app', [
		'app.controllers',
		'ngRoute'
	]);
});