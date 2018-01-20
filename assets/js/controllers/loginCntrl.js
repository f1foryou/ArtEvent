define(['./module'], function (controllers) {
	controllers.controller('loginCntrl', ['$scope','$http', function ($scope,$http) {

		$scope.uname=null;
		$scope.upass=null;
		$scope.loginDetails = function(data,event) {
			alert('Hello  !'+$scope.uname);
			$http({
				method : "GET",
				url : "controllers/usercontroller.php",
				params:{
					uname:'asd',
					upass:'asd',
				}
			}).then(function mySuccess(response) {
				$scope.myWelcome = response.data;
			}, function myError(response) {
				$scope.myWelcome = response.data;
			});
		};
		
		return $scope;
	}]);
});