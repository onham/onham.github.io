$(function() {

	$(window).scroll(function(){
		$(".fullbleed").css("opacity", (1 - $(window).scrollTop() / 500) + 0.25);
		if ($(this).scrollTop() > 350) { 
			$(".navbar").addClass("scrollPast");
			$(".barLink").addClass("textScroll");
		} else { 
			$('.navbar').removeClass("scrollPast"); 
			$(".barLink").removeClass("textScroll");
		}
		if ($(this).scrollTop() > 750) {
			$(".carousel-label").addClass("show");
		} else {
			$(".carousel-label").removeClass("show");
		}
	});

	$('.burger').on('click', function(){
		$('.navSide').toggleClass('show');
		$('.pageWrapper').toggleClass('hide');
		$('.navbar').toggleClass('hide');
	});

	$('.sideBarArrow').on('click', function(){
		$('.navSide').toggleClass('show');
		$('.pageWrapper').toggleClass('hide');
		$('.navbar').toggleClass('hide');
	});

	$('a').smoothScroll({
		offset: -120
	});
	
});