define([
	'angular',
	'angular-route',
	'../controllers/mainCntrl',
	'../controllers/eventsCntrl',
	'../controllers/eventCntrl',
	'../controllers/profileCntrl',
	'../controllers/loginCntrl',
	'../controllers/registerCntrl',
	'../controllers/galleryCntrl',
], function (angular) {

	return angular.module('app', [
		'app.controllers',
		'ngRoute'
	]);
});
