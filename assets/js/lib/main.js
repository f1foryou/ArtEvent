require.config({
	paths: {
		'jquery': 'jquery/jquery',
		'angular': 'angular/angular',
		'angular-route': 'angular/angular-route',
		'bootstrap': 'bootstrap/bootstrap',
		'bootstrap-datatables':'DataTables/dataTables.bootstrap',
		'datatables': 'DataTables/datatables',
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
		},
		'datatables':{
			deps:['jquery','bootstrap'],
			exports:'datatables'
		},
		'bootstrap-datatables':{
			deps:['jquery','bootstrap'],
			exports:'bootstrap-datatables'
		},
	},
});
define(['jquery','angular','angular-route','bootstrap','datatables',
	'bootstrap-datatables','app',],
	function ($, ng,ngroute,bootstrap,datatables,bootdata,app) {
		$(document).ready(
			function (document) {
				ng.bootstrap(document, ['app']);
		});

		return app.config(['$routeProvider', function ($routeProvider) {
			$("#preloader").show();
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
				controller: "registerCntrl"
			});
			$routeProvider.when('/gallery',{
				templateUrl: 'views/gallery.html',
				controller : "galleryCntrl"
			});
			$routeProvider.when('/leaderboard',{
				templateUrl: 'views/leaderboard.html',
				controller: "leaderCntrl"
			});			
			$routeProvider.when('/conducted/:id',{
				templateUrl: 'views/conducted_event.html',
				controller : "conductedEventCntrl"
			});
			$routeProvider.when('/temp',{
				templateUrl: 'views/temp.html',
				controller : "tempCntrl"
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
