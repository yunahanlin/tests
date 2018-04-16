

/*function nologin(){
	return false;
}*/

//抽奖大转盘
$(function() {

	//nologin();

	var giftmessage='';
	var lottery = {
		place: 0, //请求后指定停留在某个位置
		click: false, //默认值为false可抽奖，防止重复点击
		index: -1, //当前转动到哪个位置，起点位置
		count: 0, //总共有多少个位置
		timer: 0, //setTimeout的ID，用clearTimeout清除
		speed: 20, //初始转动速度
		times: 0, //转动次数
		cycle: 50, //转动基本次数：即至少需要转动多少次再进入抽奖环节
		prize: -1, //中奖位置
		init: function(id) {
			if ($("#" + id).find(".lottery-unit").length > 0) {
				$lottery = $("#" + id);
				$units = $lottery.find(".lottery-unit");
				this.obj = $lottery;
				this.count = $units.length;
				$lottery.find(".lottery-unit-" + this.index).addClass("active");
			};
		},
		roll: function() {
			var index = this.index,
				count = this.count,
				lottery = this.obj;
			$(lottery).find(".lottery-unit-" + index).removeClass("active");
			index += 1;
			if (index > count - 1) {
				index = 0;
			};
			$(lottery).find(".lottery-unit-" + index).addClass("active");
			this.index = index;
			return false;
		},
		stop: function() {
			lottery.times += 1;
			lottery.roll(); //转动过程调用的是lottery的roll方法，这里是第一次调用初始化
			if (lottery.times > lottery.cycle + 10 && lottery.prize == lottery.index) {
				clearTimeout(lottery.timer);
				lottery.prize = -1;
				lottery.times = 0;
				lottery.click = false;
				
				//给两个地方赋值 抽中的奖品
				/*$(".ivfidresult>em").text(giftmessage);*/
                $(".cjjgxsvv>em").text(giftmessage+"一张");//奖品名称（弹窗的）
                //这个位置写上中奖弹框，这个是转盘停止时触发事件
                //$(".cjjgtstcv").removeClass("curdis");
                 setTimeout('$(".cjjgtstcv").removeClass("curdis")',1000);
				console.log('您抽中了第' + lottery.place + '个奖品');
			} else {
				if (lottery.times < lottery.cycle) {
					lottery.speed -= 10;
				} else if (lottery.times == lottery.cycle) {
					//lottery.place = Math.random() * (lottery.count) | 0; //案例中奖物品通过一个随机数生成
					//lottery.prize = lottery.place;
					lottery.prize = lottery.place;  //这个可以通过ajax请求回来的数据赋值给lottery.place
				} else {
					if (lottery.times > lottery.cycle + 10 && ((lottery.prize == 0 && lottery.index == 7) || lottery.prize == lottery.index + 1)) {
						lottery.speed += 110;
					} else {
						lottery.speed += 20;
					}
				}
				if (lottery.speed < 40) {
					lottery.speed = 40;
				};
				lottery.timer = setTimeout(lottery.stop, lottery.speed); //循环调用
			}
			return false;
		},
		getLottery: function() {//ajax请求中奖接口，本案例注释便于案例正常展示效果，实际中可参考注释的代码
			
			
			var sycjnumname = getQueryString('u');
			var sycjnumid = getQueryString("a");
			//alert(sycjnumname);
		    //time($('.lbacodr')[0]);
			var data1 = {"parameters": "{\"username\":\""+sycjnumname+"\",\"authorization\":\""+sycjnumid+"\"}"};
			
			$.ajax({
		        type: "POST",
		        url:adressurl.one.uri+"html5/user/lucky_draw/action",
		        dataType: "jsonp",
		        jsonp:"callback",
		        jsonpCallback:"jsonpCallback",
				data: data1,

				success: function(data){
					console.log("转盘的",data);

					if (data.end == "success") {//登录后的操作
						 giftmessage=data.gift;//把抽奖结果传给giftmessage

				         switch (data.code) {//请求返回的抽中奖品字段
				             case 'G1':
				                 lottery.place = 1;//当前奖品所在九宫格位置
				                 $(".cjjgxsvv>p>img").attr("src","teimg/cjtstc2.png");
				                 break;
				             case 'G2':
				                 lottery.place = 1;
				                 $(".cjjgxsvv>p>img").attr("src","teimg/cjtstc2.png");
				                 break;
				             case 'G3':
				                 lottery.place = 2;
				                 $(".cjjgxsvv>p>img").attr("src","teimg/cjtstc3.png");
				                 break;
				             case 'G4':
				                 lottery.place = 7;
				                 $(".cjjgxsvv>p>img").attr("src","teimg/cjtstc4.png");
				                 break;
				             case 'G5':
				                 lottery.place = 3;
				                 $(".cjjgxsvv>p>img").attr("src","teimg/cjtstc5.png");
				                 break;
				             case 'G6':
				                 lottery.place = 6;
				                 $(".cjjgxsvv>p>img").attr("src","teimg/cjtstc6.png");
				                 break;
				             case 'G7':
				                 lottery.place = 5;
				                 $(".cjjgxsvv>p>img").attr("src","teimg/cjtstc7.png");
				                 break;
				             case 'G8':
				                 lottery.place = 4;
				                 $(".cjjgxsvv>p>img").attr("src","teimg/cjtstc8.png");
				                 break;
				         }

				        // $(".btn").removeClass("disabled");//停到某个奖品的位置后，恢复按钮的click事件

							lottery.speed = 100;
							lottery.stop(); //转圈过程不响应click事件，会将click置为false
							lottery.click = true; //一次抽奖完成后，设置click为true，可继续抽奖


				    } else if (data.end == "error") {//没有抽奖机会
				         //alert(data.message);
				         //console.log(data.message);
				    }

				}
			});
 
		}
	};


	$("#lottery .btn").on('click', function(event) {
		event.preventDefault();

		console.log(lottery.click);
		if (lottery.click){
			return false;
		}
		lottery.click = true;
		//$(".btn").addClass("disabled");
		//剩余抽奖次数减1
		var lastsynum=$(".ivfdchan>span>i").text();
		console.log(lastsynum);
		//alert(lastsynum);
		if(lastsynum<1){
			$(".ivfdchan>span>i").html(0);
			$(".btn>img").attr("src","teimg/cjp52.png");
			//$(".btn").addClass("disabled");
		}else if(lastsynum<0){
			$(".btn>img").attr("src","teimg/cjp52.png");
			//$(".btn").addClass("disabled");
		}
		else{
			$(".ivfdchan>span>i").html(lastsynum-1);
		}
		lottery.init('lottery');
		lottery.getLottery();

	});
});