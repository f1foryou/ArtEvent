define([
	'angular',
	'angular-route',
	'../controllers/mainCntrl',
	'../controllers/eventsCntrl',
	'../controllers/eventCntrl',
	'../controllers/profileCntrl',
], function (angular) {

	return angular.module('app', [
		'app.controllers',
		'ngRoute'
	]);
});