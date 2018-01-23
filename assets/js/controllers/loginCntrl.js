define(['./module'], function (controllers) {
	controllers.controller('loginCntrl', ['$scope','$http', function ($scope,$http) {

		$scope.umail=null;
		$scope.upass=null;
		$scope.loginDetails = function(data,event) {
			alert('Hello  !'+$scope.uname);
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
		
		return $scope;
	}]);
});