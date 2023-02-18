$(function(){
	$(".header-button, .form-botton").click(function(){
	  $(".warp-form-bottom").css( "display", "block" );
	  $(".form-warp").css( "display", "block" );
	  
	});
});
$(function(){
	$(".iks").click(function(){
	  $(".warp-form-bottom").css( "display", "none" );
	  $(".form-warp").css( "display", "none" );
	});
});
$(function(){
	$(".warp-form-bottom").click(function(){
	  $(this).css( "display", "none" );
	  $(".form-warp").css( "display", "none" );
	});
});



$(function(){
	$(".title-blog-item3").click(function(){
	  $(this).children(".text-itswork").slideToggle();
	  return false;
	});
});

$(document).ready(function(){
    $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});


$(document).ready(function() {
	var element = $('.cat-more-cat');
	function math_height() {
		element.height(element.width());
	}
	math_height();
	$(window).on('resize',function () {
		math_height();
	});
});