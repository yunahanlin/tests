
$(document).ready(function() {
	//抽奖页面-获取剩余抽奖次数
	var sycjnumname = getQueryString('u');
	var sycjnumid = getQueryString("a");
    // var sycjnumname = '17688820814';
    // var sycjnumid = 'e6e44f73-c1b2-4faf-a7dd-53b341a2864c';
    //time($('.lbacodr')[0]);
	var data1 = {"parameters": "{\"username\":\""+sycjnumname+"\",\"authorization\":\""+sycjnumid+"\"}"};
	$.ajax({
        type: "POST", 
        url:adressurl.one.uri+"html5/user/lucky_draw/info",
        dataType: "jsonp", 
        jsonp:"callback",
        jsonpCallback:"jsonpCallback",
		data: data1,
	   /* type: "post",
      // url: "http://192.168.1.128:8081/User/getIdentifyingCode.do",
         url:adressurl.two.uri+"html5/user/lucky_draw/info",
         data:data1,
         dataType: "json",*/
		success: function(data){
			// console.log(data);
			if(data.code=="nologin"){
				alert(data.message);
			}
			//剩余抽奖次数
			var allCount=data.allCount;
            // var allCount=2;
			$(".ivfdchan>span>i").text(allCount);
			//获取剩余抽奖次数决定 抽奖按钮  是否变灰
			var lastsynum=$(".ivfdchan>span>i").text();
			//alert(lastsynum);
			if(lastsynum<=0){
				$(".ivfdchan>span>i").html(0);
				$(".btn>img").attr("src","teimg/cjp52.png");
				//$(".btn").addClass("disabled");
			}
			//获奖结果次数统计var bb =data.assetPackageList?data.assetPackageList:[];
			var cstjnumlist=data.giftSummaryList?data.giftSummaryList:[];
			$(".lbacjjgul").html('');
			for(var i=0;i<cstjnumlist.length;i++){
				//获奖结果次数统计
				var cstjnum=cstjnumlist[i].giftName;
				var cstjnumgb=cstjnumlist[i].giftCount;
				//$(".lbacjjgul>li>em").text(cstjnumgb);
				
				$(".lbacjjgul").append(
					'<li>' +
					'<span>'+cstjnum+'</span>'+
					'<em>'+cstjnumgb+"人"+'</em>'+
					'</li>'
				);
			}
			//抽奖页面给偶数行添加背景色
	        $(".lbacjjgul>li:even").css("background-color","#ff5d31");
	        //获奖结果切换
			var cstjnumqhlist=data.luckyDrawGiftLogs?data.luckyDrawGiftLogs:[];
			$(".marquee2>ul").html('');
			
			for(var i=0;i<cstjnumqhlist.length;i++){
				//获奖结果次数统计
				var cstjqhnumgb=cstjnumqhlist[i].userName;
				var cstjqhnum=cstjnumqhlist[i].giftName;
				$(".marquee2>ul").append(
					'<li>'+
					'恭喜<span>'+cstjqhnumgb+'</span>，获得<em>'+cstjqhnum+'</em>'+
					'</li>'
				);
			}
			//调用切换js
			$('.marquee2').kxbdSuperMarquee({
				distance:1,//移动的距离
				time:0.1,//速度
				direction:'left'
			});
		},
		error:function (error) {
			alert(error.message)
        }
	});
	//抽奖弹窗的关闭

        $(".cjjgxsvv>span").click(function(){
            $(".cjjgtstcv").addClass("curdis");
            $(".mask").addClass("curdis");//点击抽奖结果弹窗的关闭时，给 抽奖结果选中时那个阴影加个curdis
            $(".ivfidresult").removeClass("curdis");
            //获取剩余抽奖次数决定 抽奖按钮  是否变灰
            var lastsynum=$(".ivfdchan>span>i").text();
            //alert(lastsynum);
            if(lastsynum < 1){
                $(".ivfdchan>span>i").html(0);
                $(".btn>img").attr("src","teimg/cjp52.png");
                //$(".btn").addClass("disabled");
            }
        });


    $('.marquee2').kxbdSuperMarquee({
        distance:1,//移动的距离
        time:0.1,//速度
        direction:'left'
    });
	//点击抽奖时，去掉 抽奖结果选中时那个阴影的curdis
	$(".btn").click(function(){
		$(".mask").removeClass("curdis");
	});
});