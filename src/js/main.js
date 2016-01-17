$(window).ready(function (){
	var cHeight = $(window).height();
	$('#container').height(cHeight - 40);

	$('.pages').fullpage();
});