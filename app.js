$(document).ready(function(){
	let circle = $('.circle');
	let content = $('.content');
	let h2 = $('h2');
	let row = $('.row');
	let close = $('.close');
	$('.btn').click(function(){
		if(circle.attr('data-state') == "closed"){
			circle.attr('r', '500');
			circle.attr('data-state', 'opened');
			content.css({
				"transform":"translateX(0)"
			})
			h2.css({
				"color":"#FFF"
			});
			row.css('display', 'none');
			close.css('display', 'flex');
		} else {
			circle.attr('r', '22');
			circle.attr('data-state', 'closed');
			content.css({
				"transform":"translateX(-200px)"
			});

			h2.css({
				"color":"transparent"
			});
			row.css('display', 'flex');
			close.css('display', 'none');
		}
	})
});