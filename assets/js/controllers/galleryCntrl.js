define(['./module'], function (controllers) {
	controllers.controller('galleryCntrl', ['$scope', function ($scope) {

  $scope.thumbs = [
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-10.jpg","name":"Cat on Fence","id":"0"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-7.jpg","name":"Cat in Sun","id":"1"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-9.jpg", "name":"Blue Eyed Cat","id":"2"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-5.jpg", "name":"Patchy Cat","id":"3"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-6.jpg", "name":"Feral Cats","id":"4"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-3.jpg", "name":"Mad Cat","id":"5"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-1.jpg", "name":"Fluffy Cat","id":"6"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-4.jpg", "name":"Cat Laying Down","id":"7"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-8.jpg", "name":"Content Cat","id":"8"},
      {"image":"http://lorempixel.com/output/cats-q-c-640-480-2.jpg", "name":"Hissing Cat","id":"9"},
      {"image":"http://lorempixel.com/output/animals-q-c-640-480-4.jpg", "name":"Not a Cat","id":"10"},
      {"image":"http://lorempixel.com/output/animals-q-c-640-480-10.jpg", "name":"Also not a Cat","id":"11"}
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

