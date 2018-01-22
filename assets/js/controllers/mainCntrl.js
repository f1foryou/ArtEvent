define(['./module'], function (controllers) {
	controllers.controller('mainCntrl', ['$scope','$location', '$anchorScroll','$routeParams', function ($scope,$location, $anchorScroll,$routeParams) {

		$scope.featuredEvents = [
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png"},
			{"id":2,"name":"Event 2", "end_date":"Oct 10 2018","img":"assets/images/1000x400.png"},
			{"id":3,"name":"Event 3", "end_date":"Nov 10 2018","img":"assets/images/1000x400.png"},
		];

		$scope.allEvents=[
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png","type":"image"},
			{"id":2,"name":"Event 2", "end_date":"Oct 10 2018","img":"assets/images/1000x400.png","type":"image"},
			{"id":3,"name":"Event 3", "end_date":"Nov 10 2018","img":"assets/images/1000x400.png","type":"image"},
			{"id":4,"name":"Event 3", "end_date":"Nov 10 2018","img":"assets/images/1000x400.png","type":"image"},
			{"id":5,"name":"Event 3", "end_date":"Nov 10 2018","img":"assets/images/1000x400.png","type":"quiz"},
		];
		$scope.cmngEvents=[
			{"id":1,"name":"Event 1", "start_date":"Sep 10 2018","img":"assets/images/1000x400.png","type":"image"},
			{"id":2,"name":"Event 2", "start_date":"Oct 10 2018","img":"assets/images/1000x400.png","type":"image"},
			{"id":3,"name":"Event 3", "start_date":"Nov 10 2018","img":"assets/images/1000x400.png","type":"image"},
		];

		$scope.sayHello = function() {
			alert('Hello  !');
		};
		
		$location.hash($routeParams.section);
		$anchorScroll();

		return {
			$scope:$scope,
			$location:$location,
			$anchorScroll:$anchorScroll
		};
	}]);
});