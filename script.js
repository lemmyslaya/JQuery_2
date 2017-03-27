$(function(){

	var carouselList = $("#carousel ul");
	
	setInterval(function(){
	$(carouselList).animate({marginLeft: -450}, 2000, function() {
		$(carouselList).find('li:last').after($(carouselList).find('li:first'));
		$(carouselList).css({marginLeft:0});
	});
},3000);



});