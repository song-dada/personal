$(document).ready(function(){
	
	//상단메뉴 내려오기
	$("header button").click(function(){
		$("nav").stop().slideDown();
		$("body").css("overflow","hidden");//스크롤잠김
	});
	//상단메뉴 올라가기
	$("nav a, main").click(function(){
		$("nav").stop().slideUp();
		$("body").css("overflow","auto");//스크롤사용가능
	});
	
	//부드럽게 위치 이동
	$("a").click(function(){
		const go = $(this.hash).offset().top;
		$("html,body").stop().animate({scrollTop  : go  }, "slow");
	});
	
	//스크롤 내릴때의 애니 효과
	$(document).scroll(function(){
		if( $(document).scrollTop() > 200){
			//console.log("200이상 내렸음");
			$("#whitePaper").stop().animate({top : "550px"},3000);
		}
		if($(document).scrollTop()>500){
			$("#menu3>figure").addClass("show");
		}
	});
	
	
	
	
	//패션 구성 탭키
	$("#menu4>div>h3>button").click(function(){
		$(this).addClass("active");
		$(this).parent().siblings().children().removeClass("active");
		const x = $("#menu4>.content.hide");
		const y = $("#menu4>.content.active");
		if(x){
			x.removeClass("hide").addClass("active");
			y.removeClass("active").addClass("hide");			
		}		
	});
	
});