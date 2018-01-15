define(['./module'], function (controllers) {
	controllers.controller('eventCntrl', ['$scope','$routeParams', function ($scope,$routeParams) {

		$scope.id=$routeParams.id;
		$scope.name=$routeParams.name;
		$scope.event = [
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png"},
		];

		$scope.sayHello = function() {
			$scope.greeting = 'Hello  !';
		};

		return $scope;
	}]);
});