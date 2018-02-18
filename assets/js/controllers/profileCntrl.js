define(['./module'], function (controllers) {
	controllers.controller('profileCntrl', ['$scope','$routeParams', function ($scope,$routeParams) {

		$scope.user ={
			"id":1,"name":"Aravind",
		};
		$scope.ongoingEvents=[
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png"},
			{"id":2,"name":"Event 2", "end_date":"Oct 10 2018","img":"assets/images/1000x400.png"},
			{"id":3,"name":"Event 3", "end_date":"Nov 10 2018","img":"assets/images/1000x400.png"},
		];
		$scope.participatedEvents=[
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png"},
			{"id":2,"name":"Event 2", "end_date":"Oct 10 2018","img":"assets/images/1000x400.png"},
		];
		$scope.conductedEvents = [
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png"},
			{"id":2,"name":"Event 2", "end_date":"Oct 10 2018","img":"assets/images/1000x400.png"},
		]
		angular.element(document).ready(function() {
			dTable = $('.datatable');
			dTable.DataTable();
			$("#preloader").hide();
		});
		return $scope;
	}]);
});