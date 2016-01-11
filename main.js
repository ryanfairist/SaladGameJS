$(document).ready(function(){
	$('.style').click(function() 
		{$(this).next().toggle(); 
			$(this).find('.receipe');//.toggleClass('glyphicon-minus'); this is if you have an image you would like to toggle witht he button/thing that was clicked
			 });
});