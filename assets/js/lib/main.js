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
define(['jquery','angular','angular-route','bootstrap','app','../controllers/eventsCntrl','../controllers/eventCntrl'],
	function ($, ng,ngroute,bootstrap,app) {
		$(document).ready(
			function (document) {
				ng.bootstrap(document, ['app']);
		});

		return app.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/events', {
				templateUrl: 'pages/events.html',
				controller : "eventsCntrl"
			});
			$routeProvider.when('/event/:id', {
				templateUrl: 'pages/event.html',
				controller : "eventCntrl"
			});
			$routeProvider.when('/',{
				templateUrl: 'pages/main.html',
			});
    }]);

	}
);