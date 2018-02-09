define(['./module'], function (controllers) {
	controllers.controller('galleryCntrl', ['$scope', function ($scope) {

  $scope.eventDet =
    {"name":"Event Name","desc":"Event description",
    "images": [
      {"image":"assets/images/400x400.png","name":"Cat on Fence","id":"0","description":"The cat is on the fence"},
      {"image":"assets/images/400x400.png","name":"Cat in Sun","id":"1","description":"The cat is under the sun"},
      {"image":"assets/images/400x400.png", "name":"Blue Eyed Cat","id":"2","description":"The cat has a blue eye"},
      {"image":"assets/images/400x400.png", "name":"Patchy Cat","id":"3","description":"The cat is a patchy cat"},
      {"image":"assets/images/400x400.png", "name":"Feral Cats","id":"4","description":"This is a FERAL cat"},
      {"image":"assets/images/400x400.png", "name":"Mad Cat","id":"5","description":"The cat is completely mad"},
      {"image":"assets/images/400x400.png", "name":"Fluffy Cat","id":"6","description":"The cat is fluffyyyyyy"},
      {"image":"assets/images/400x400.png", "name":"Cat Laying Down","id":"7","description":"The cat lying down"}
      ]
    };

    $scope.addDiv = function(data){
      var caption = data.name;
      var image = data.image;
      var description = data.description;
      var item = $('<div class="item"><img src='+image+' alt="'+caption+'" class="thumbnail img-responsive"/><div class="caption"><p>'+description+'</p></div></div>');
      var itemDiv = $(this).parents('div');
      item.attr("title",caption);
      item.attr("desc",description);
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
      }
    }

    /* activate the carousel */
    $('#modalCarousel').carousel({interval:false});

    /* change modal title when slide changes */
    $('#modalCarousel').on('slid.bs.carousel', function () {
      $('.modal-title').html($(this).find('.active').attr("title"));
      $('.modal-desc').html($(this).find('.active').attr("desc"));
    })

	}]);
	$("#preloader").hide();
});