$(function(){
		$("main").show();
		$("#preload-page").delay(4000).fadeOut(1000);
  

		$(".carousel").carousel();
		
		$("#top").click(function(){
			parent.history.back();
			return false;
		});
  
		
		
		$("#year-2018a").click(function(){
			$("#slide2a").css("display", "none");
			$("#slide3a").css("display", "none");
			$("#slide1a").css("display", "block");
			$("#year1").css("display", "block");
			$("#year2").css("display", "none");
			$("#year3").css("display", "none");
			$("#year-drop").animate({height: "0%"}, 500);
			$("#year-drop").css("display", "none");
			$("#year-collapse").css("display", "block");
			$("#year-collapseb").css("display", "none");
			$("#year-2018a").off(click);
		});
		
		$("#year-2019a").click(function(){
			$("#slide1a").css("display", "none");
			$("#slide3a").css("display", "none");
			$("#slide2a").css("display", "block");
			$("#year1").css("display", "none");
			$("#year2").css("display", "block");
			$("#year3").css("display", "none");
			$("#year-drop").animate({height: "0%"}, 500);
			$("#year-drop").css("display", "none");
			$("#year-collapse").css("display", "block");
			$("#year-collapseb").css("display", "none");
			$("#year-2019a").off(click);
		});
		
		$("#year-2020a").click(function(){
			$("#slide1a").css("display", "none");
			$("#slide2a").css("display", "none");
			$("#slide3a").css("display", "block");
			$("#year1").css("display", "none");
			$("#year2").css("display", "none");
			$("#year3").css("display", "block");
			$("#year-drop").animate({height: "0%"}, 500);
			$("#year-drop").css("display", "none");
			$("#year-collapse").css("display", "block");
			$("#year-collapseb").css("display", "none");
			$("#year-2020a").off(click);
		});
		
		$("#year-collapse").click(function(){
			$("#year-drop").css("display", "block");
			$("#year-drop").animate({height: "15%"}, 500);
			$("#year-collapse").css("display", "none");
			$("#year-collapseb").css("display", "block");
			$("#year-collapse").off(click);
		});
		
		$("#year-collapseb").click(function(){
			$("#year-drop").animate({height: "0%"}, 500);
			$("#year-drop").css("display", "none");
			$("#year-collapse").css("display", "block");
			$("#year-collapseb").css("display", "none");
			$("#year-collapseb").off(click);
		});
		
		
		$("#year-2018ai").click(function(){
			$("#slide2").css("display", "none");
			$("#slide3").css("display", "none");
			$("#slide1").css("display", "block");
			$("#year1i").css("display", "block");
			$("#year2i").css("display", "none");
			$("#year3i").css("display", "none");
			$("#year-dropi").animate({height: "0%"}, 500);
			$("#year-dropi").css("display", "none");
			$("#year-collapsei").css("display", "block");
			$("#year-collapsebi").css("display", "none");
			$("#year-2018ai").off(click);
		});
		
		$("#year-2019ai").click(function(){
			$("#slide1").animate({display: "none"}, 500);
			$("#slide3").css("display", "none");
			$("#slide2").css("display", "block");
			$("#year1i").css("display", "none");
			$("#year2i").css("display", "block");
			$("#year3i").css("display", "none");
			$("#year-dropi").animate({height: "0%"}, 500);
			$("#year-dropi").css("display", "none");
			$("#year-collapsei").css("display", "block");
			$("#year-collapsebi").css("display", "none");
			$("#year-2019ai").off(click);
		});
		
		$("#year-2020ai").click(function(){
			$("#slide1").animate({display: "none"}, 500);
			$("#slide2").css("display", "none");
			$("#slide3").css("display", "block");
			$("#year1i").css("display", "none");
			$("#year2i").css("display", "none");
			$("#year3i").css("display", "block");
			$("#year-dropi").animate({height: "0%"}, 500);
			$("#year-dropi").css("display", "none");
			$("#year-collapsei").css("display", "block");
			$("#year-collapsebi").css("display", "none");
			$("#year-2020ai").off(click);
		});
		
		$("#year-collapsei").click(function(){
			$("#year-dropi").css("display", "block");
			$("#year-dropi").animate({height: "15%"}, 500);
			$("#year-collapsei").css("display", "none");
			$("#year-collapsebi").css("display", "block");
			$("#year-collapsei").off(click);
		});
		
		$("#year-collapsebi").click(function(){
			$("#year-dropi").animate({height: "0%"}, 500);
			$("#year-dropi").css("display", "none");
			$("#year-collapsei").css("display", "block");
			$("#year-collapsebi").css("display", "none");
			$("#year-collapsebi").off(click);
		});
		
		
		
	});