require.config({
	paths: {
		'jquery': 'jquery/jquery',
		'angular': 'angular/angular',
		'angular-route': 'angular/angular-route',
		'bootstrap': 'bootstrap/bootstrap'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular'],
			exports: 'angular-route'
		},
		'jquery':{
			exports:'jquery'
		},
		'bootstrap':{
			exports:'bootstrap'
		}
	},
});
define(['jquery','angular','angular-route','bootstrap','app',],
	function ($, ng,ngroute,bootstrap,app) {
		$(document).ready(
			function (document) {
				ng.bootstrap(document, ['app']);
		});

		return app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
			$routeProvider.when('/events', {
				templateUrl: 'views/events.html',
				controller : "eventsCntrl"
			});
			$routeProvider.when('/profile', {
				templateUrl: 'views/profile.html',
				controller : "profileCntrl"
			});
			$routeProvider.when('/event/:id', {
				templateUrl: 'views/event.html',
				controller : "eventCntrl"
			});
			$routeProvider.when('/login',{
				templateUrl: 'views/login.html',
				controller: "loginCntrl"
			});
			$routeProvider.when('/register',{
				templateUrl: 'views/register.html',
			});
			$routeProvider.when('/:section',{
				templateUrl: 'views/main.html',
				controller : "mainCntrl"
			});
			$routeProvider.otherwise({
				templateUrl: 'views/main.html',
				controller : "mainCntrl"
			});

    }]);

	}
);