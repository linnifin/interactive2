$(document).ready(function(){

$('.button').click(function(){
	document.getElementById('butt').style.backgroundColor = "#7782D9";

	/*$('.button').click(function(){
	document.getElementById('butt').style.backgroundColor = "white";
	return true;
	})*/
})


$("#pic1").hide();
$("#pic1_a").hide();

$("#a").click(function(){
  		$('#pic1').show(10);
		$("#pic1").animate({
			top: "-185px",
			},9000)
		$('#pic1').hide(0);
		$("#pic1").animate({
			top: "85%"
		}, 0);
		$("#pic1").delay(9000).stop();
});

/*$("#a").click(function(){
    	$('#pic1_a').show(10);
		$("#pic1_a").animate({
			top: "-185px",
			},8000)
		$('#pic1_a').hide(0);
		$("#pic1_a").animate({
			top: "85%",
		}, 0);
		$("#pic1_a").delay(8000).stop();
		
		
	});*/


$("#pic2").hide();
$("#pic2_a").hide();

$('#b').click(function() {
		$('#pic2').show();
		$("#pic2").animate({
			top: "-185px",
			},10100)
		$('#pic2').hide(0);
		$("#pic2").animate({
			top: "75%",
		}, 0);
		$("#pic1_a").delay(7000).stop();
});

$("#b").click(function(){
    	$('#pic2_a').show();
		$("#pic2_a").animate({
			top: "-185px",
			},10100)
		$("#pic2_a").animate({
			top: "75%",
		}, 0);
		$('#pic2_a').hide(0);
});

$("#pic3").hide();
$("#pic3_a").hide();

$('#c').click(function() {
	$('#pic3').show();
	$("#pic3").animate({
		top: "-185px",
		},10200)
	$('#pic3').hide(0);
	$("#pic3").animate({
		top: "75%",
	}, 0);

	$("#c").click(function(){
    	$('#pic3_a').show();
		$("#pic3_a").animate({
			top: "-185px",
			},10200)
		$("#pic3_a").animate({
			top: "75%",
		}, 0);
		$('#pic3_a').hide(0);
	});
});

$("#pic4").hide();
$("#pic4_a").hide();

$('#d').click(function() {
		$('#pic4').show();
		$("#pic4").animate({
			top: "-185px",
			},10050)
		$('#pic4').hide(0);
		$("#pic4").animate({
			top: "75%",
		}, 0);

	$("#d").click(function(){
    	$('#pic4_a').show();
		$("#pic4_a").animate({
			top: "-185px",
			},10050)
		$("#pic4_a").animate({
			top: "75%",
		}, 0);
		$('#pic4_a').hide(0);
	});

});


$("#pic5").hide();
$("#pic5_a").hide();

$(".button").hide();

$('#e').click(function() {
		$('.button').show(1000);
		$('#pic5').show();
		$("#pic5").animate({
			top: "-185px",
			},10150)
		$("#pic5").hide(0);
		$("#pic5").animate({
			top: "75%",
		}, 0);

	$("#e").click(function(){
    	$('#pic5_a').show();
		$("#pic5_a").animate({
			top: "-185px",
			},10050)
		$("#pic5_a").animate({
			top: "75%",
		}, 0);
		$('#pic5_a').hide(0);
	});

});

$("#pic6").hide();
$("#pic6_a").hide();

$('#f').click(function() {
		$('#pic6').show();
		$("#pic6").animate({
			top: "-185px",
			},10175)
		$("#pic6").hide(0);
		$("#pic6").animate({
			top: "75%",
		}, 0);

	$("#f").click(function(){
    	$('#pic6_a').show();
		$("#pic6_a").animate({
			top: "-185px",
			},10175)
		$("#pic6_a").animate({
			top: "75%",
		}, 0);
		$('#pic6_a').hide(0);
	});

});

$("#pic7").hide();
$("#pic7_a").hide();

$('#g').click(function() {
		$('#pic7').show();
		$("#pic7").animate({
			top: "-185px",
			},10100)
		$("#pic7").hide(0);
		$("#pic7").animate({
			top: "75%",
		}, 0);

	$("#g").click(function(){
    	$('#pic7_a').show();
		$("#pic7_a").animate({
			top: "-185px",
			},10100)
		$("#pic7_a").animate({
			top: "75%",
		}, 0);
		$('#pic7_a').hide(0);
	});

});

$("#pic8").hide();
$("#pic8_a").hide();

$('#h').click(function() {
		$('#pic8').show();
		$("#pic8").animate({
			top: "-185px",
			},10200)
		$("#pic8").hide(0);
		$("#pic8").animate({
			top: "75%",
		}, 0);

	$("#h").click(function(){
    	$('#pic8_a').show();
		$("#pic8_a").animate({
			top: "-185px",
			},10200)
		$("#pic8_a").animate({
			top: "75%",
		}, 0);
		$('#pic8_a').hide(0);
	});

});

$("#pic9").hide();
$("#pic9_a").hide();

$('#i').click(function() {
		$('#pic9').show();
		$("#pic9").animate({
			top: "-185px",
			},10000)
		$("#pic9").hide(0);
		$("#pic9").animate({
			top: "75%",
		}, 0);

	$("#i").click(function(){
    	$('#pic9_a').show();
		$("#pic9_a").animate({
			top: "-185px",
			},10200)
		$("#pic9_a").animate({
			top: "75%",
		}, 0);
		$('#pic9_a').hide(0);
	});

});

$("#pic10").hide();
$("#pic10_a").hide();

$('#j').click(function() {
		$('#pic10').show();
		$("#pic10").animate({
			top: "-185px",
			},10100)
		$("#pic10").hide(0);
		$("#pic10").animate({
			top: "75%",
		}, 0);

	$("#j").click(function(){
    	$('#pic10_a').show();
		$("#pic10_a").animate({
			top: "-185px",
			},10200)
		$("#pic10_a").animate({
			top: "75%",
		}, 0);
		$('#pic10_a').hide(0);
	});

});

$("#pic11").hide();
$("#pic11_a").hide();

$('#k').click(function() {
		$('#pic11').show();
		$("#pic11").animate({
			top: "-185px",
			},10150)
		$("#pic11").hide(0);
		$("#pic11").animate({
			top: "75%",
		}, 0);

	$("#k").click(function(){
    	$('#pic11_a').show();
		$("#pic11_a").animate({
			top: "-185px",
			},10150)
		$("#pic11_a").animate({
			top: "75%",
		}, 0);
		$('#pic11_a').hide(0);
	});

});

$("#pic12").hide();
$("#pic12_a").hide();

$('#l').click(function() {
		$('#pic12').show();
		$("#pic12").animate({
			top: "-185px",
			},10200)
		$("#pic12").hide(0);
		$("#pic12").animate({
			top: "75%",
		}, 0);

	$("#l").click(function(){
    	$('#pic12_a').show();
		$("#pic12_a").animate({
			top: "-185px",
			},10200)
		$("#pic12_a").animate({
			top: "75%",
		}, 0);
		$('#pic12_a').hide(0);
	});

});

$("#pic13").hide();
$("#pic13_a").hide();

$('#m').click(function() {
		$('#pic13').show();
		$("#pic13").animate({
			top: "-185px",
			},10050)
		$("#pic13").hide(0);
		$("#pic13").animate({
			top: "75%",
		}, 0);

	$("#m").click(function(){
    	$('#pic13_a').show();
		$("#pic13_a").animate({
			top: "-185px",
			},10050)
		$("#pic13_a").animate({
			top: "75%",
		}, 0);
		$('#pic13_a').hide(0);
	});

});

$("#pic14").hide();
$("#pic14_a").hide();

$('#n').click(function() {
		$('#pic14').show();
		$("#pic14").animate({
			top: "-185px",
			},10075)
		$("#pic14").hide(0);
		$("#pic14").animate({
			top: "75%",
		}, 0);

	$("#n").click(function(){
    	$('#pic14_a').show();
		$("#pic14_a").animate({
			top: "-185px",
			},10075)
		$("#pic14_a").animate({
			top: "75%",
		}, 0);
		$('#pic14_a').hide(0);
	});

});

/*function myFunction() {
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
}*/


/*$('.clickable2').click(function() {
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
})*/



});