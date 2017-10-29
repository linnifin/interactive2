$(document).ready(function(){

/*$(".canvas").mouseover(function() {
		document.getElementById(".pixel").style.WebkitAnimation = "pixelscale 4s infinite";

						//"transform": "scale(1, 1) rotate(45deg)"
		
		});*/

$(".pixel").css({"width": "3.2px", "height": "3.2px", "margin": "7px"});

$(".pixel_b").css({"width": "3.2px", "height": "3.2px", "margin": "7px"});


$(".canvas").hover(function() {
	$(".pixel").animate({
		width: "12.2px",
		height: "12.2px",
		margin: "2.5px",
	}, 1500)
	$(".pixel_b").animate({
		width: "12.8px",
		height: "12.8px",
		margin: "2.2px",
	}, 1500)
});


$(".canvas").mouseout(function() {
	$(".pixel").animate({
		width: "3.2px",
		height: "3.2px",
		margin: "7px",
	}, 1500)
	$(".pixel_b").animate({
		width: "3.2px",
		height: "3.2px",
		margin: "7px",
	}, 1500)
});




});





