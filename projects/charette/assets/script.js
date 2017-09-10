$(document).ready(function(){
	
	/*$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '0.6in',
			fontSize: '24px',
			borderWidth: '10px'
		}, 1000 );
	});*/



	$('#button-1').click(function() {
		$(this).animate({
			borderRadius: '100%',
		})
	});

	$('#catimg').click(function() {
		$(this).animate({
			opacity: 1,
		})
	});

	$('#button-3').click(function() {
    	$(this).animate({
    		opacity: 0,
    	}, 2000);
	});

	$('#button-4').click(function() {
    	$(this).animate({
    		opacity: .5,
    	}, 2000);
	});

	$('#button-5').click(function() {
		$(this).animate({
			wordSpacing: "+=.1em",
		})
	})

	$("#button-8").click(function() {
		$(this).slideUp(2000).slideDown(2000);
	})

	$("#button-11").click(function() {
		window.confirm("if you floss you don't have to think about dental insurance");
	})

	$("#button-13").click(function() {
		$(this).animate({
			fontSize: "+=1px",
		})
	})
	
	$("#button-14b").hide(0);

	$("#button-14").click(function() {
		$("#button-14b").toggle(1000);
	});

	$("#button-15").click(function() {
		$("#button-15b").animate({
			left: "3000px",
		}, 4000);
	});

	$("#button-16").click(function() {
		location.reload();
	})

	$("#button-17").click(function() {
		$(this).animate({
			borderRadius: "+=1%",	
		})
	});

	$("#button-18").click(function() {
		$(this).animate({ 
			width: "-=100px",
		})
	});

	$("#button-19").click(function() {
		$("#button-18").animate({ 
			width: "+=100px",
		})
	});

	$("#button-20").click(function() {
		$(this).animate({
			height: "+=30px",
		})
	});

	$("#button-22").click(function() {
		$("#button-20").animate({
			height: "-=30px",
		})
	});

});