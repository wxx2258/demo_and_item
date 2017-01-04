// $("#musicControl")[0].pause();
$(document).ready(function($) {
	$('.contian').on('tap', '#musicBtn', function(event) {
		event.preventDefault();
		console.log($("#musicControl")[0].paused)
		if($("#musicControl")[0].paused){
			$("#musicControl")[0].play();
			$(this).attr('src', 'images/btn_music.png');
		}else{
			$("#musicControl")[0].pause();
			$(this).attr('src', 'images/btn_music_close.png');

		}
	});
	$('.contian').on('tap', '#endMusicBtn', function(event) {
		event.preventDefault();
		console.log($("#musicControl")[0].paused)
		if($("#musicControl")[0].paused){
			$("#musicControl")[0].play();
			$(this).attr('src', 'images/btn_music.png');
		}else{
			$("#musicControl")[0].pause();
			$(this).attr('src', 'images/btn_music_close.png');

		}
	});
	

	$(".div_ear_bottom").one('tap', '#ear_bottom', function(event) {
		event.preventDefault();
		eventHandler.page1EarringsHandle();
		setTimeout(function(){
			$(".div_ear_bottom").one('tap', '#ear_bottom', function(event) {
				eventHandler.page2EarringsHandle();
			})			
		},2000)

	});

	$(".page3").one('tap', function(event) {
		eventHandler.page3EarringsHandle();
	});

	$("#page4_earrings_Btn").one('tap', function(event) {
		eventHandler.page4EarringsHandle();
	});

	$(".page5").on('touchstart', '#heti_btn', function(event) {
		event.preventDefault();
		/* Act on the event */
		eventHandler.page5EarringsHandle();
	});

	$(".page5").on('touchend', '#heti_btn', function(event) {
		event.preventDefault();
		/* Act on the event */
		eventHandler.page5EarringsHandle2();
	});

	$(".page6").on('tap', '#endMenu_gift', function(event) {
		event.preventDefault();
		$(".modalDiv").show();
	});
	$(".modalDiv").on('tap', '#closeModal', function(event) {
		event.preventDefault();
		$(".modalDiv").hide();
	});
	console.log($("#heti_btn"))

	var eventHandler = {
		page1EarringsHandle:function(){
			$("#handear").css({
				'animation':'movehand 2s linear 1 forwards ',
				'-webkit-animation':'movehand 2s linear 1 forwards ' ,
				'-o-keyframes-animation':'movehand 2s linear 1 forwards ', 
				'-moz-animation':'movehand 2s linear 1 forwards ',
			});

			$(".handwhole").css({
				'animation':'handMoveEar 1.5s 0.5s linear 1 forwards ',
				'-webkit-animation':'handMoveEar 1.5s 0.5s linear 1 forwards ' ,
				'-o-keyframes-animation':'handMoveEar 1.5s 0.5s linear 1 forwards ', 
				'-moz-animation':'handMoveEar 1.5s 0.5s linear 1 forwards ',
			});
			$(".page1-content").hide();
			$(".page1").hide();
			$(".page2").show();
		},
		page2EarringsHandle:function(){
			$(".handlewhole").hide();
			$(".page2").hide();
			$(".page3").show();
		},
		page3EarringsHandle:function(){
			$(".page3").hide();
			$(".page4").show();
		},
		page4EarringsHandle:function(){
			$(".page_tipContent").hide();
			$(".page4_earrings").css({
				'animation':'fall 1.5s 0.5s linear 1 forwards ',
				'-webkit-animation':'fall 1.5s 0.5s linear 1 forwards ' ,
				'-o-keyframes-animation':'fall 1.5s 0.5s linear 1 forwards ', 
				'-moz-animation':'fall 1.5s 0.5s linear 1 forwards ',
			});
			setTimeout(function(){
				$(".beijiHand img").attr('src', 'images/fit_hand.png');
				setTimeout(function(){
					$("#fit_btn").one('tap', function(event) {
						$(".page4").hide();
						$(".page5").show();
					});
					$("#fit_btn").show();
				},500)
								
			},1700)
		},
		'touchTime':0,
		page5EarringsHandle:function(){
			this.touchTime = +new Date;
			console.log(this.touchTime)
			$(".page5_tip_txt").hide();
			$(".page5_wukong").addClass('ltoc');
			$(".page5_beijita").addClass('rtoc');
			setTimeout(function(){
				var wukongTop = parseFloat($(".page5_wukong").css("top")); 
				console.log(wukongTop > parseFloat($(document.body).css("height"))/4)
				
				if (wukongTop > parseFloat($(document.body).css("height"))/4 ) {
					$(".page5").hide();
					$(".music").hide();
					$(".page6").show();
				}
			},1500)
			// var wukongTop = parseFloat($(".page5_wukong").css("top")); 
			// if (wukongTop > this.deviceTop/4 ) {
			// 	$(".page5").hide();
			// 	$(".music").hide();
			// 	$(".page6").show();	
			// }
		},
		'deviceTop' :  parseFloat($(document.body).css("height")) ,
		page5EarringsHandle2:function(){
			var touchendTime = +new Date;
			// console.log(touchendTime-this.touchTime);
			
			if(touchendTime-this.touchTime >= 1500){
				$(".page5").hide();
				$(".music").hide();
				$(".page6").show();								
			}else{
				$(".page5_tip_txt").show();
				$(".page5_wukong").removeClass('ltoc');
				$(".page5_beijita").removeClass('rtoc');

			}

		}
	}

  

});
