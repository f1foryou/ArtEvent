define(['./module'], function (controllers) {
	controllers.controller('tempCntrl', ['$scope','$routeParams', function ($scope,$routeParams) {
		$scope.show={"index":0};

		$scope.change = function(){
			$scope.show.index+=1;
		}
		angular.element(document).ready(function() {
			dTable = $('.datatable');
			dTable.DataTable();
			$("#preloader").hide();
		});

		return $scope;
	}]);
});