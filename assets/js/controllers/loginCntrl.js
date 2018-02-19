define(['./module'], function (controllers) {
	controllers.controller('loginCntrl', ['$scope','$http', function ($scope,$http) {

		$scope.umail=null;
		$scope.upass=null;

		$scope.loginDetails = function(data, event) {
			$("#preloader").show();
			$http({
				method : "GET",
				url : "controllers/usercontroller.php",
				params:{
					umail:$scope.umail,
					upass:$scope.upass,
					act:'login',
				}
			}).then(function mySucess(response) {
				$scope.data = response.data;
				console.log($scope.data);
			}, function myError(response) {
				$scope.data = response.data;
			}).finally(function(){
				$("#preloader").hide();
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
