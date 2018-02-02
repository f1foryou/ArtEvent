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

		$scope.pricingPlans=[
			{"id":1,"name":"Free","cost":"00","features":{"participants":10,"support":"12/5","type":"jpeg / multiple choice","report":"Basic Report"},},
			{"id":2,"name":"Planet","cost":"09","features":{"participants":20,"support":"12/5","type":"jpeg,png / multiple choice","report":"Basic Report"},},
			{"id":3,"name":"Standard","cost":"19","features":{"participants":50,"support":"24/7","type":"jpeg,png / multiple choice","report":"Advanced Report"},},
			{"id":3,"name":"Professional","cost":"29","features":{"participants":"Unlimited","support":"24/7","type":"jpeg,png,gif / multiple choice","report":"Professional Report"},},
		];
		
		$location.hash($routeParams.section);
		$anchorScroll();

		return {
			$scope:$scope,
			$location:$location,
			$anchorScroll:$anchorScroll
		};
	}]);
});