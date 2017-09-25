$(document).ready(function(){

var myImage = document.getElementById("img-a");

var imageArray1 = ["images/thm_a1.jpg","images/thm_b1.jpg","images/thm_c1.jpg",
  "images/thm_d1.jpg","images/thm_e1.jpg","images/thm_f1.jpg"];

/*var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src",imageArray[imageIndex]);
  imageIndex = (imageIndex + 1) % imageArray.length;
}

setInterval(changeImage, 500);*/



/*$("#a").click(function(){
    var pic1 = $("#pic1");
    if(pic1.hasClass('visible'))
        pic1.removeClass('visible').animate({top: '460px'}, 1200);
    else
        pic1.addClass('visible').animate({top: '-185px'}, 1200);
});*/

$("#pic1").hide();

$('#a').click(function() {
		$('#pic1').show();
		$("#pic1").animate({
			top: "-185px",
			},10000)
		$("#pic1").animate({
			top: "460px",
		}, 0);
		$('#pic1').hide(0);
		return false;

		});


$("#pic2").hide();

$('#b').click(function() {

		$('#pic2').show();
		$("#pic2").animate({
			top: "-185px",
			},10100)
		$("#pic2").animate({
			top: "460px",
		}, 0)
		$('#pic2').hide(0);
		return false;

		});

$("#pic3").hide();

$('#c').click(function() {

		$('#pic3').show();
		$("#pic3").animate({
			top: "-185px",
			},10200)
		$("#pic3").animate({
			top: "460px",
		}, 0)
		$('#pic3').hide(0);
		return false;

		});

$("#pic4").hide();

$('#d').click(function() {

		$('#pic4').show();
		$("#pic4").animate({
			top: "-185px",
			},10050)
		$("#pic4").animate({
			top: "460px",
		}, 0)
		$('#pic4').hide(0);
		return false;

		});

$("#pic5").hide();

$('#e').click(function() {

		$('#pic5').show();
		$("#pic5").animate({
			top: "-185px",
			},10150)
		$("#pic5").animate({
			top: "460px",
		}, 0)
		$("#pic5").hide(0);
		return false;

		});

$("#pic6").hide();

$('#f').click(function() {

		$('#pic6').show();
		$("#pic6").animate({
			top: "-185px",
			},10175)
		$("#pic6").animate({
			top: "460px",
		}, 0)
		$("#pic6").hide(0);
		return false;

		});

$("#pic7").hide();

$('#g').click(function() {

		$('#pic7').show();
		$("#pic7").animate({
			top: "-185px",
			},10100)
		$("#pic7").animate({
			top: "460px",
		}, 0)
		$("#pic7").hide(0);
		return false;


		});

$("#pic8").hide();

$('#h').click(function() {

		$('#pic8').show();
		$("#pic8").animate({
			top: "-185px",
			},10200)
		$("#pic8").animate({
			top: "460px",
		}, 0)
		$("#pic8").hide(0);
		return false;

		});

$("#pic9").hide();

$('#i').click(function() {

		$('#pic9').show();
		$("#pic9").animate({
			top: "-185px",
			},10000)
		$("#pic9").animate({
			top: "460px",
		}, 0)
		$("#pic9").hide(0);
		return false;

		});

$("#pic10").hide();

$('#j').click(function() {

		$('#pic10').show();
		$("#pic10").animate({
			top: "-185px",
			},10100)
		$("#pic10").animate({
			top: "460px",
		}, 0)
		$("#pic10").hide(0);
		return false;

		});

$("#pic11").hide();

$('#k').click(function() {

		$('#pic11').show();
		$("#pic11").animate({
			top: "-185px",
			},10150)
		$("#pic11").animate({
			top: "460px",
		}, 0)
		$("#pic11").hide(0);
		return false;

		});

$("#pic12").hide();

$('#l').click(function() {

		$('#pic12').show();
		$("#pic12").animate({
			top: "-185px",
			},10200)
		$("#pic12").animate({
			top: "460px",
		}, 0)
		$("#pic12").hide(0);
		return false;

		});

$("#pic13").hide();

$('#m').click(function() {

		$('#pic13').show();
		$("#pic13").animate({
			top: "-185px",
			},10050)
		$("#pic13").animate({
			top: "460px",
		}, 0)
		$("#pic13").hide(0);
		return false;

		});

$("#pic14").hide();

$('#n').click(function() {

		$('#pic14').show();
		$("#pic14").animate({
			top: "-185px",
			},10075)
		$("#pic14").animate({
			top: "460px",
		}, 0)
		$("#pic14").hide(0);
		return false;

		});


$('.clickable2').onclick = function() {
	$('#pic1').stop(50);
	$('#pic2').stop(50);
	$('#pic3').stop(50);
	$('#pic4').stop(50);
	$('#pic5').stop(50);
	$('#pic6').stop(50);
	$('#pic7').stop(50);
	$('#pic8').stop(50);
	$('#pic9').stop(50);
	$('#pic10').stop(50);
	$('#pic11').stop(50);
	$('#pic12').stop(50);
	$('#pic13').stop(50);
	$('#pic14').stop(50);
}




});