$(function(){
		$("main").show();
		$("#preload-page").delay(4000).fadeOut(1000);
  

		$(".carousel").carousel();
		
		$("#top").click(function(){
			parent.history.back();
			return false;
		});
  
		
		$("#year-2018").click(function(){
			$("#slide2").css("display", "none");
			$("#slide3").css("display", "none");
			$("#slide1").css("display", "block");
			$("#year-2018").off(click);
		});
		
		$("#year-2019").click(function(){
			$("#slide1").animate({display: "none"}, 500);
			$("#slide3").css("display", "none");
			$("#slide2").css("display", "block");
			$("#year-2019").off(click);
		});
		
		$("#year-2020").click(function(){
			$("#slide1").animate({display: "none"}, 500);
			$("#slide2").css("display", "none");
			$("#slide3").css("display", "block");
			$("#year-2020").off(click);
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
		
		
		
	});