
$(document).ready(function($) {
	// 预加载
	var images = new Array()
	function preload() {
		var len = preload.arguments.length;
		var gain = 100/len;
		var proval = $('#progress');
		var loadingImg = $(".loadingImg");
		// console.log(gain);
	    for (i = 0; i < len; i++) {
	        images[i] = new Image();
	        images[i].src = preload.arguments[i];
	    }
	    var time = setInterval(function(){
	    	// if (images[]) {}
	    	// setTimeout
	    	var loadlen = images.length;
	    	if (loadlen == 0) {
	    		clearInterval(time);
	    		// console.log("加载完毕！");
	    		$(".loading").remove();
	    		$(".contain").removeClass('hide');
	    		$(".music-btn").removeClass('hide');
	    	}
	    	for (var i = 0; i < images.length; i++) {
	    		if (images[i].complete) {
	    			var nowvalue =parseInt(proval.val()+gain);
	    			proval.val(nowvalue);
	    			$(".loadingvalue").text(nowvalue);
	    			loadingImg.css('left', nowvalue +'%');
	    			var a = images.splice(i,1);
	    		}
	    	}
	    },0)
	}
	preload(
		"images/screen.png",
		"images/index-img3.png",
		"images/btn_music.png",
		"images/btn_music_close.png",
		"images/screen.png",
		"images/index_coin1.png",
		"images/index_coin2.png",
		"images/index-img1.png",
		"images/index-img2.png",
		"images/index-img4.png",
		"images/index-img5.png",
		"images/index-img6.png",
		"images/btn_bg.png",
		"images/erweima.png",
		"images/index_bg.jpg",
		"images/letter_bg.jpg",
		"images/resule_bg.jpg",
		"images/letterBtn.png",
		"images/result_chen.png",
		"images/rock_bg.jpg",
		"images/rock_img1.png",
		"images/rock_sign1.png",
		"images/rock_sign2.png",
		"images/zhechen.png"
	)
	var handle = {
		toggleMusic:function(){
			// console.log($(this).hasClass('music-close-img'))
			if ($(this).hasClass('music-close-img')) {
				$(this).removeClass('music-close-img');
				$('#musicControl')[0].play();
			}else{
				$("#musicControl")[0].pause();
				$(this).addClass('music-close-img');
			}
		},
		bindLetterBtn:function(){
			$(".index-page").on('tap', '.letter-btn-bg', function(event) {	
				handle.nextPage($(".index-page"),$(".letter-page"));
			});		
		},
		nextPage:function(thispage,nextpage){
			thispage.remove();
			nextpage.removeClass('hide')
		},
		fallsign:function(){
			var randoms = Math.floor(Math.random() * 6);
			var aniDom = $(".rock-page").find(".rock-signbox .rock-sign").eq(randoms);
			aniDom.addClass("sign-fallDown");
			this.showResult(randoms);
			aniDom.bind('webkitAnimationEnd', function(event) {
				handle.nextPage($('.rock-page'),$('.result-page'));
			});
			aniDom.bind('animationend', function(event) {
				handle.nextPage($('.rock-page'),$('.result-page'));
			});
		},
		showResult:function(index){
			var randoms = Math.floor(Math.random() * 6);
			var resultAry = [
				['杨过和小龙女','开启一段苦尽甘来的师徒之恋吧~'],
				['菩提老祖和孙悟空','开启一段亦师亦友的师徒之情吧~'],
				['花千骨和白子画','开启一段痛彻心扉的师徒之恋吧~'],
				['风清扬和令狐冲','上演一段相见恨晚的师徒之情吧~'],
				['洪七公和郭靖','开启一段赤诚相待的师徒之情吧~']
			];
			var result = resultAry[randoms];
			console.log(index,result)
			$(".result-page .result-content .result-name").text( resultAry[index][0] );
			$(".result-page .result-content .result-font2").text( resultAry[index][1] );
		}
	}
	//摇一摇
	var shake = (function(shake){
		var shakeThreshold = 1500,//设置临界值,即摇一摇灵敏度,越小越灵敏
			shakeTimeLen = 100,//摇一摇最小时长
			lastUpdate = 0,//最后更新时间，用于对比
			curShakeX = curShakeY = curShakeZ = lastShakeX = lastShakeY = lastShakeZ = 0;//位置速率
		var times = 0;
		var limit = 2;
		//初始化	
		shake.init = function(){
			//是否支持设备运动事件
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', shake.begin, false);
			}else{
			    alert('亲，您的设备好像不支持重力感应哦！');
				return false;
			}
		};
		//开始
		shake.begin =function(event){
			// handle.fallsign();
			//获得重力加速
		    var acceleration = event.accelerationIncludingGravity;	 
		    //获得当前时间戳
		    var curTime = new Date().getTime();
		 	//摇一摇时间超过指定时长
		    if ((curTime - lastUpdate)> shakeTimeLen) { 
		        //时间差
		        var diffTime = curTime - lastUpdate;
		        lastUpdate = curTime;
		        //x轴加速度
		        curShakeX = acceleration.x;
		        //y轴加速度
		        curShakeY = acceleration.y;
		        //z轴加速度
		        curShakeZ = acceleration.z;
		        var speed = Math.abs(curShakeX + curShakeY + curShakeZ - lastShakeX - lastShakeY - lastShakeZ) / diffTime * 10000; 
		        //达到灵敏度
		        if (speed > shakeThreshold && times < limit) { 
		        	times++;
					if(times == 1){
						$(".rockTip").hide();
					}else if(times = 2){
						//手机震动500毫秒，停止100毫秒，再震动500毫秒                   
						if (navigator.vibrate) {
							navigator.vibrate([500,100,500]);//接受一个数字参数/数字数组，当使用数组参数时，奇数位的数值是震动秒数，偶数位为等待秒数。            
						}else if (navigator.webkitVibrate) {
							navigator.vibrate([500,100,500]);//震动秒数                           
						}
						handle.fallsign();
						shake.over();//解绑事件
					}
		        }
		        lastShakeX = curShakeX;
		        lastShakeY = curShakeY;
		        lastShakeZ = curShakeZ;
		    }
		};
		shake.over = function(){
			window.removeEventListener("devicemotion",shake.begin);
		}
		return shake;
	})(window.shake || {});
	$(".music-btn").on('tap', '.opened-music', function(event) {
		handle.toggleMusic.apply($(this))
	});
	$(".index-page").on('tap', '.coin2', function(event) {
		$(".show-dhz").fadeIn(500);
	});
	$(".show-dhz").bind('tap', function(event) {
		$(this).fadeOut(500);
	});
	$(".birdbox").bind('webkitAnimationEnd', function(event) {
		handle.bindLetterBtn();
	});
	$(".birdbox").bind('animationend', function(event) {
		handle.bindLetterBtn();
	});
	$('.letter-page').on('tap', '.letterBtnImg', function(event) {
		handle.nextPage($(".letter-page"),$(".rock-page"));
		shake.init();
	});

	$(".result-page").on('tap', '#show-invite', function(event) {
		$(".invite-box").fadeIn(500);
	});
	$(".invite-box").bind('tap', function(event) {
		$(this).fadeOut(500);
	});
	var touchXY = {
		"touchstartX":0,
		"touchstartY":0,
		"touchendX":0,
		"touchendY":0,
		"initTop":parseFloat( $(".fugai").css("top") )		
	}
	console.log(touchXY.initTop);
	$(".fugai").bind('touchstart', function(event) {
		// console.log(event.targetTouches[0].pageX)
		touchXY.touchstartX = event.targetTouches[0].pageX;
		touchXY.touchstartY = event.targetTouches[0].pageY;
	});
	$(".fugai").bind('touchmove', function(event){
		touchXY.touchendX = event.targetTouches[0].pageX;
		touchXY.touchendY = event.targetTouches[0].pageY;
		var thistop =touchXY.touchendY - touchXY.touchstartY + touchXY.initTop ;
		// console.log(parseFloat( $(this).css("top")) )
		$(this).css({
			left: touchXY.touchendX-touchXY.touchstartX,
			top: thistop
		});
	});
	$(".fugai").bind('touchend', function(){
		// console.log
		// difX = Math.abs(touchXY.touchstartX - touchXY.touchendX);
		// difY = Math.abs(touchXY.touchstartY - touchXY.touchendY);
		// console.log(difY,difX)
		// if( difY>50 && difX>50){
			touchXY=null;
			$(this).remove();
		// }
		// else{
		// 	touchXY.touchstartX=touchXY.touchstartY
		// 	=touchXY.touchendX=touchXY.touchendY=0
		// }
	});

});
