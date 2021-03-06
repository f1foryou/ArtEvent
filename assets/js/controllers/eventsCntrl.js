define(['./module'], function (controllers) {
	controllers.controller('eventsCntrl', ['$scope', function ($scope) {

		$scope.events = [
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png","sayHello":$scope.sayHello},
			{"id":2,"name":"Event 2", "end_date":"Oct 10 2018","img":"assets/images/1000x400.png","sayHello":$scope.sayHello},
			{"id":3,"name":"Event 3", "end_date":"Nov 10 2018","img":"assets/images/1000x400.png","sayHello":$scope.sayHello},
		];

		angular.element(document).ready(function() {
			dTable = $('.datatable');
			dTable.DataTable();
			$("#preloader").hide();
		});
		
		return $scope;
	}]);
});