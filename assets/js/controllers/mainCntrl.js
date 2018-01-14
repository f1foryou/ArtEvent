define(['./module'], function (controllers) {
	controllers.controller('mainCntrl', ['$scope', function ($scope) {

		$scope.featuredEvents = [
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png"},
			{"id":2,"name":"Event 2", "end_date":"Oct 10 2018","img":"assets/images/1000x400.png"},
			{"id":3,"name":"Event 3", "end_date":"Nov 10 2018","img":"assets/images/1000x400.png"},
		];

		$scope.sayHello = function() {
			alert('Hello  !');
		};

		return $scope;
	}]);
});