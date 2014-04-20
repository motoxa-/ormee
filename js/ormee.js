/*$(document).ready(function(){

	$(".ormee > .btn.switch_mode").toggle(function() {
		$(".ormee > .btn.control_page").animate({top:10, opacity:0}, 200);
		$(".ormee > .btn.add_element").animate({top:10, opacity:0}, 200);
	}, function() {
		$(".ormee > .btn.control_page").animate({top:62, opacity:1}, 200);
		$(".ormee > .btn.add_element").animate({top:114, opacity:1}, 200);
	});

	$(".ormee > .btn.add_element").toggle(function() {
		$(".ormee > .btn.control_page").animate({opacity:0.5}, 200);
		$(".ormee > .btn.switch_mode").animate({opacity:0.5}, 200);
		var elem = $(this);
		$({deg: 0}).animate({deg: 45}, {
			duration: 200,
			step: function(now) {
				elem.css({webkitTransform: 'rotate('+now+'deg)', transform: 'rotate('+now+'deg)'});
			}
		});
	}, function() {
		$(".ormee > .btn.control_page").animate({opacity:1}, 150);
		$(".ormee > .btn.switch_mode").animate({opacity:1}, 150);
		var elem = $(this);
		$({deg: 45}).animate({deg: 0}, {
			duration: 200,
			step: function(now) {
				elem.css({webkitTransform: 'rotate('+now+'deg)', transform: 'rotate('+now+'deg)'});
			}
		});
	});
});*/


(function( $ ){
	$.fn.ormee = function() {  
		
		// initialization
		// определим классы оформления для основы
		// покатаемся на пони
		// и запустимся
		var backbone = '<div class="ormee btn switch_mode active"></div><div class="ormee btn control_page"></div><div class="ormee btn add_element"></div><div class="ormee wrap"></div>';

		this.html(backbone);

	};
})( jQuery );