/*$(function(){
 $('.sp-menu').hide();
 $('.sp-menu-open').click(function(){
 	$('.sp-menu').slideToggle();
 	return false;
 });
});

$(function(){
 $('.sp-link-log').hide();
 $('.sp-menu-open').click(function(){
 	$('.sp-link-log').slideToggle();
 	return false;
 });
});


$(function(){
 $('.sp-menu-open').click(function(){
 	$('.sp-menu-open').hide();
 });
});

$(function(){
 $('.sp-link-log').click(function(){
 	$('.sp-link-log').hide(function(){
 		$('.sp-menu-open').show();
 	});
 });
});
$(function(){
 $('.sp-link-log').click(function(){
 	$('.sp-menu').hide(function(){
 	});
 });
});



$(function(){
 $('.top-logo2').click(function(){
 	$('.top-logo2').hide(function(){
 		$('.sp-menu-open').slideToggle();
 	return false;
 	});
 });
});

$(function(){
 $('.top-logo2').click(function(){
 		$('.sp-menu').slideToggle();
 	});
 });*/

$(function(){
$('.top-logo2').click(function() {
        $('.sp-menu-top').slideToggle();
	});
 });

$(function(){
 $('.sp-link-log').click(function(){
 	$('.wrapper').slideToggle();
 });
});

$(function(){
 $('.top-logo2').click(function(){
 	$('.wrapper').hide();
 });
});

$(function(){
 $('.top-logo2').click(function(){
 	$('.last').hide();
 });
});

$(function(){
 $('.sp-link-log').click(function(){
 	$('.sp-menu-top').hide();
 });
});

$(function(){
 $('.sp-link-log').click(function(){
 	$('.last').show();
 });
});

$(function(){
  $(window).scroll(function(){
     if (100 < $(window).scrollTop() && $(window).scrollTop() < 5000) {
       $('.menu2').fadeIn(400);
}
else {
      $('.menu2').fadeOut(400);
    }
 });
 });

$(function(){
  $(window).on('load scroll', function(){
      $('.menu3').hide();
   });
});

$(function(){
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() > 300) {
      $('.sc-top').fadeIn(400);
    } else {
      $('.sc-top').fadeOut(400);
    }
  });
});




