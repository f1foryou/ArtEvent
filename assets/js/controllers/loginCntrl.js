define(['./module'], function (controllers) {
	controllers.controller('loginCntrl', ['$scope', function ($scope) {

		$scope.uname=null;
		$scope.upass=null;
		$scope.loginDetails = function(data,event) {
			alert('Hello  !'+$scope.uname);
		};
		
		return $scope;
	}]);
});