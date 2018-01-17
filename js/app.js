$(document).ready(function(){
	var imgItems = $('.slider li').length; // Slides numbers
	var imgPos = 1;

	// Adding pagination --
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	}
	//------------------------

	$('.slider li').hide(); // Hidden all slides
	$('.slider li:first').show(); // Show the first slide
	$('.pagination li:first').css({'color': '#ff9b9b'}); //Giving style at first element of pagination

	// Exectting all functions
	$('.pagination li').click(pagination);
	$('.right span').click(nextSlider);
	$('.left span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCTIONS =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Position of selected page

		$('.slider li').hide(); // Hidden all slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); // Show the selected slide

		// Giving style of selected pagination
		$('.pagination li').css({'color': '#a8c0fc'});
		$(this).css({'color': '#ff9b9b'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;}
		else {imgPos++;}

		$('.pagination li').css({'color': '#a8c0fc'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#ff9b9b'});

		$('.slider li').hide(); // Hidden all slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // Show selected slide

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;}
		else {imgPos--;}

		$('.pagination li').css({'color': '#a8c0fc'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#ff9b9b'});

		$('.slider li').hide(); // Hidden all slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); //how selected slide
	}

});
