define(['./module'], function (controllers) {
	controllers.controller('profileCntrl', ['$scope','$routeParams', function ($scope,$routeParams) {

		$scope.event = [
			{"id":1,"name":"Event 1", "end_date":"Sep 10 2018","img":"assets/images/1000x400.png"},
		];

		return $scope;
	}]);
});