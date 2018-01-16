define(['./module'], function (controllers) {
	controllers.controller('galleryCntrl', ['$scope', function ($scope) {

	$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).parent('a').attr("title");
  	$('.modal-title').html(title);
  	$($(this).parents('div').html()).appendTo('.modal-body');
  	// $('#myModal').modal({show:true});	
  	$('#myModal').trigger("click");
	});
	
	}]);
});


