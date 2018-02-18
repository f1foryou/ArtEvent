define(['./module'], function (controllers) {
	controllers.controller('conductedEventCntrl', ['$scope','$routeParams', function ($scope,$routeParams) {

		$scope.user ={
			"id":1,"name":"Aravind",
		};
		$scope.eventDetails={
			"id":1, "name":"Some", "image":"1000x400.png","users_registerd":2,"images_uploaded":2,"total_likes":2,
			"users":[
				{ "id":1, "name":"Some", "phone":"9876543210", "mail_id":"asd@gmail.com",},
				{ "id":2, "name":"Thing", "phone":"9876543210", "mail_id":"asd@gmail.com",}
			],
			"images":[
				{ "id":1, "theme":"Some", "image":"400x400.png", "desc":"Some Thing Nice", "uploaded_date":"10/sep/93", "upload_by":"Some", "liked":12},
				{ "id":1, "theme":"Some", "image":"400x400.png", "desc":"Some Thing Nice", "uploaded_date":"10/sep/93", "upload_by":"Thing", "liked":12}
			],
			"user_likes":[
				{ "id":1, "name":"Some", "image":"400x400.png", "like_time":"12/sep/93"},
				{ "id":1, "name":"Some", "image":"400x400.png", "like_time":"12/sep/93"}
			]
		};

		angular.element(document).ready(function() {
			dTable = $('.datatable');
			dTable.DataTable({responsive: true});
			$("#preloader").hide();
		});
		return $scope;
	}]);
});