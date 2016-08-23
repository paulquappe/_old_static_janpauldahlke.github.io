//foo

$(document).ready(function (){
	$('.lightbox, .lb-inner ').on('click', function(){
		console.log('klick on');
		$(' .lb-inner, .lightbox').addClass('non-active');
	})
});

