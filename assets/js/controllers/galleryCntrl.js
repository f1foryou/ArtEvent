define(['./module'], function (controllers) {
	controllers.controller('galleryCntrl', ['$scope', function ($scope) {
		$scope.eventDet =
		{
			"id":0,
			"name":"Event Name",
			"desc":"Event description",
			"images": [
				{"image":"assets/images/400x400.png","name":"Cat on Fence","id":"0","description":"The cat is on the fence","liked":0},
				{"image":"assets/images/400x400.png","name":"Cat in Sun","id":"1","description":"The cat is under the sun","liked":0},
				{"image":"assets/images/400x400.png", "name":"Blue Eyed Cat","id":"2","description":"The cat has a blue eye","liked":0},
				{"image":"assets/images/400x400.png", "name":"Patchy Cat","id":"3","description":"The cat is a patchy cat","liked":0},
				{"image":"assets/images/400x400.png", "name":"Feral Cats","id":"4","description":"This is a FERAL cat","liked":0},
				{"image":"assets/images/400x400.png", "name":"Mad Cat","id":"5","description":"The cat is completely mad","liked":0},
				{"image":"assets/images/400x400.png", "name":"Fluffy Cat","id":"6","description":"The cat is fluffyyyyyy","liked":0},
				{"image":"assets/images/400x400.png", "name":"Cat Laying Down","id":"7","description":"The cat lying down","liked":0},
			]
		};

		$scope.addDiv = function(data){
			var caption = data.name;
			var image = data.image;
			var description = data.description;
			var img_id = data.id;
			var item = $('<div class="item"><img src='+image+' alt="'+caption+'" id="'+img_id+'" class="thumbnail img-responsive"/></div>');
			var itemDiv = $(this).parents('div');
			item.attr("title",caption);
			item.attr("desc",description);
			item.attr("id",img_id);
			$(itemDiv.html()).appendTo(item);
			item.appendTo('.carousel-inner'); 

			if (data.id==0){ // set first item active
				item.addClass('active');
			}
		}

		$scope.openLightboxModal = function(index,data) {
			$('#myModal').modal('show');
			$('#modalCarousel').carousel(index).addClass("active");
			if(index==0){
				$('.modal-title').html(data.name);
				$('.modal-desc').html(data.description);
				$('.modal_like').attr('id',data.id);
			}
		}
		$scope.likeImage = function(event){
			console.log("Event_ID "+ $scope.eventDet.id +" Image_id "+event.target.id);
		}
		/* activate the carousel */
		$('#modalCarousel').carousel({interval:false});

		/* change modal title when slide changes */
		$('#modalCarousel').on('slid.bs.carousel', function () {
			$('.modal-title').html($(this).find('.active').attr("title"));
			$('.modal-desc').html($(this).find('.active').attr("desc"));
			$('.modal_like').attr('id',$(this).find('.active').attr("id"));
		})
		$("#preloader").hide();
		return $scope;
	}]);
});