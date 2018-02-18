define(['./module'], function (controllers) {
	controllers.controller('registerCntrl', ['$scope','$http', function ($scope,$http) {

		$scope.umail=null;
		$scope.upass=null;
		$scope.confirm_upass=null;
		$scope.uname=null;

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
		angular.element(document).ready(function() {
			dTable = $('.datatable');
			dTable.DataTable();
			$("#preloader").hide();
		});
		return $scope;
	}]);
});
