define(['./module'], function (controllers) {
	controllers.controller('leaderCntrl', ['$scope', function ($scope) {
		//Get it with Ajax call
		$scope.event = {
			"id":0,
			"name":"Event Name",
			"desc":"Event description"
		}
		angular.element(document).ready(function() {
			dTable = $('#example');
			dTable.DataTable({
			//Get this data with Ajax call
			"aaData":[
			    ["assets/images/cats1.png","Cat on Fence","The cat is on the fence","Aparna","2013-01-10 12:00:00","30"],
			    ["assets/images/400x400.png","Cat in Sun","The cat is under the sun","Aravind","2013-01-11 12:00:00","10"]
			],
			"aoColumnDefs":[{
			    "sTitle":"Image Picture"
			    , "aTargets": [ "image_name" ]
			},{
			    "aTargets": [ 0 ]
			    , "bSortable": false
			    , "mRender": function ( url, type, full )  {
			        var image = full[0];
			        var imgTag = '<img src="' + image + '" width="50%" style="display:block;"/>';
			        return imgTag;
			    }
			 }]
			});
			$("#preloader").hide();
		});
		return $scope;
	}]);
});
