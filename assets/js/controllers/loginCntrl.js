define(['./module'], function (controllers) {
	controllers.controller('loginCntrl', ['$scope','$http', function ($scope,$http) {

		$scope.umail=null;
		$scope.upass=null;
		$scope.confirm_upass=null;
		$scope.uname=null;

		$scope.loginDetails = function(data, event) {
			$http({
				method : "GET",
				url : "controllers/usercontroller.php",
				params:{
					umail:$scope.umail,
					upass:$scope.upass,
					act:'login',
				}
			}).then(function mySuccess(response) {
				$scope.myWelcome = response.data;
			}, function myError(response) {
				$scope.myWelcome = response.data;
			});
		};

		$scope.registerUser = function(data, event) {
			$http({
				method : "POST",
				url : "controllers/usercontroller.php",
				params:{
					umail:$scope.umail,
					upass:$scope.upass,
					uname:$scope.uname,
					act:'register',
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
