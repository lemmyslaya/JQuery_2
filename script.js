$(function(){

	var carouselList = $("#carousel ul");
	
	setInterval(function(){
	carouselList.animate({marginLeft: -400}, 1000, function() {
		carouselList.find('li:last').after(carouselList.find('li:first'));
		carouselList.css({marginLeft:0});
	});
},3000);



});