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

	$("#b25img").hide(0);

	$("#button-25").click(function() {
		$("#b25img").show(0).hide(4000);
	});

	$(".b26img").hide(0);

	$("#button-26").click(function() {
		$(".b26img").show(0);
	});

	$("#button-27").click(function() {
		$(".b26img").animate({
			top: "+=50px",
		})
	});

	$("#button-28").click(function() {
		$(".b26img").animate({
			top: "100px",
		},0);
	});

	$("#button-29").click(function() {
		$(".b26img").animate({
			maxHeight: "50px",
		})
	});

	$("#button-30").click(function() {
		$(".b26img").animate({
			maxHeight: "200px",
		})
		.hide(10000);
	});

	$(".button-31b").hide(0);

	$("#button-31").click(function() {
		$(".button-31b").show(0);
	});

	$("#button-32").click(function() {
		$(".item-row1").animate({
			height: "-=2px",
			width: "-=2px",
		})
	})

	$("#button-32").click(function() {
		$(".item-row2").animate({
			height: "-=2px",
			width: "-=2",
		})
	})

	$("#button-32").click(function() {
		$(".item-row3").animate({
			height: "-=2px",
			width: "-=2",
		})
	})

	$("#button-32").click(function() {
		$(".item-row4").animate({
			height: "-=2px",
			width: "-=2",
		})
	})

	$("#button-32").click(function() {
		$(".item-row5").animate({
			height: "-=2px",
			width: "-=2",
		})
	})

	$("#button-34").click(function() {
		$(".item-row1").animate({
			height: "+=10px",
		})
	})

	$("#button-34").click(function() {
		$(".item-row2").animate({
			height: "+=10px",
		})
	})

	$("#button-34").click(function() {
		$(".item-row3").animate({
			height: "+=10px",
		})
	})

	$("#button-34").click(function() {
		$(".item-row4").animate({
			height: "+=10px",
		})
	})

	$("#button-34").click(function() {
		$(".item-row5").animate({
			height: "+=10px",
		})
	})

	$("#button-36").click(function() {
		$(".item-row1").animate({
			height: "190px",
			width: "190px",
		},5000);
	})

	$("#button-36").click(function() {
		$(".item-row2").animate({
			height: "190px",
			width: "190px",
		},5000);
	})

	$("#button-36").click(function() {
		$(".item-row3").animate({
			height: "190px",
			width: "190px",
		},5000);
	})

	$("#button-36").click(function() {
		$(".item-row4").animate({
			height: "190px",
			width: "190px",
		},5000);
	})

	$("#button-36").click(function() {
		$(".item-row5").animate({
			height: "190px",
			width: "190px",
		},5000);
	});

	$("#button-37").click(function() {
		$(".button-31b").animate({
			left: "+=10px",
		});
	})

	$("#b38img").hide();

	$("#button-38").click(function() {
		$("#b38img").show();
	})

	$("#p40").hide();

	$("#button-40").click(function() {
		$("#p40").show(2000).hide(2000);
	});

	$("#button-41").click(function() {
		window.print();
	})

	$("#button-42").click(function() {
		$(".button-31b").hide(1000);
	})

	$("#button-43").click(function() {
		$(this).animate({
			height: "-=1px",
			width: "-=1px",
		});
	})

	$("#button-44").click(function() {
		document.getElementById("button-44").innerHTML = (Math.floor(Math.random() * 203));
	});

	$("#button-45").click(function() {
		$("#button-44").animate({
			marginTop: "+=20px",
		})
	});

	$("#button-46").click(function() {
		document.getElementById("button-46").innerHTML = "i ran out of ideas so the next buttons do nothing";
	})

	$("#button-48").click(function() {
		document.getElementById("button-48").innerHTML = "nothing";
	})

	$("#b49img").hide();

	$("#button-49").click(function() {
		$("#b49img").toggle();
	})

	$("#button-50").click(function() {
		document.write("nothing");
	})

});