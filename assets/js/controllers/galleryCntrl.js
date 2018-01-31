define(['./module'], function (controllers) {
	controllers.controller('galleryCntrl', ['$scope', function ($scope) {

  $scope.thumbs = [
      {"image":"assets/images/400x400.png","name":"Cat on Fence","id":"0"},
      {"image":"assets/images/400x400.png","name":"Cat in Sun","id":"1"},
      {"image":"assets/images/400x400.png", "name":"Blue Eyed Cat","id":"2"},
      {"image":"assets/images/400x400.png", "name":"Patchy Cat","id":"3"},
      {"image":"assets/images/400x400.png", "name":"Feral Cats","id":"4"},
      {"image":"assets/images/400x400.png", "name":"Mad Cat","id":"5"},
      {"image":"assets/images/400x400.png", "name":"Fluffy Cat","id":"6"},
      {"image":"assets/images/400x400.png", "name":"Cat Laying Down","id":"7"},
      {"image":"assets/images/400x400.png", "name":"Content Cat","id":"8"},
      {"image":"assets/images/400x400.png", "name":"Hissing Cat","id":"9"},
      {"image":"assets/images/400x400.png", "name":"Not a Cat","id":"10"},
      {"image":"assets/images/400x400.png", "name":"Also not a Cat","id":"11"}
    ];

    $scope.addDiv = function(data){
      var caption = data.name;
      var image = data.image;
      var item = $('<div class="item"><img src='+image+' alt="'+caption+'" class="thumbnail img-responsive"/><div class="carousel-caption">'+caption+'</div></div>');
      var itemDiv = $(this).parents('div');
      item.attr("title",caption);
      $(itemDiv.html()).appendTo(item);
      // $(img.html()).appendTo(item);
      item.appendTo('.carousel-inner'); 
      if (data.id==0){ // set first item active
       item.addClass('active');
      }
    }

    $scope.openLightboxModal = function(index) {
      $('#myModal').modal('show');
      $('#modalCarousel').carousel(index).addClass("active");;
    }

    /* activate the carousel */
    $('#modalCarousel').carousel({interval:false});

    /* change modal title when slide changes */
    $('#modalCarousel').on('slid.bs.carousel', function () {
      $('.modal-title').html($(this).find('.active').attr("title"));
    })

	}]);
});

