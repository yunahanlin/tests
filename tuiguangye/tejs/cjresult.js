
$(document).ready(function() {
	
	cjnew();
	
	function cjnew(){
		//alert(1);
		//抽奖页面-获取剩余抽奖次数
		var sycjnumname = getQueryString('u');
		var sycjnumid = getQueryString("a");
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
				console.log(data);
				
				
				var giftSummaryList=data.giftSummaryList?data.giftSummaryList:[];
					
				var giftCount0='0';
				if(!!giftSummaryList[0]&&!!giftSummaryList[0].giftCount){
					giftCount0=giftSummaryList[0].giftCount;
				}
				
				$(".lottery-unit-0").append(
					    '<span class="cjres cjres1">' + giftCount0 +"人中奖"+ '</span>' 
				);
	
			
				
				var giftCount1='0';
				if(!!giftSummaryList[1]&&!!giftSummaryList[1].giftCount){
					giftCount1=giftSummaryList[1].giftCount;
				}
				
				$(".lottery-unit-1").append(
					    '<span class="cjres cjres2">' + giftCount1 +"人中奖"+ '</span>' 
				);
	
			
		
				
				var giftCount2='0';
				if(!!giftSummaryList[2]&&!!giftSummaryList[2].giftCount){
					giftCount2=giftSummaryList[2].giftCount;
				}
				
				$(".lottery-unit-2").append(
					    '<span class="cjres cjres3">' + giftCount2 +"人中奖"+ '</span>' 
				);
				
				var giftCount3='0';
				if(!!giftSummaryList[3]&&!!giftSummaryList[3].giftCount){
					giftCount3=giftSummaryList[3].giftCount;
				}
				
				$(".lottery-unit-7").append(
					    '<span class="cjres cjres4">' + giftCount3 +"人中奖"+ '</span>' 
				);
				
				var giftCount4='0';
				if(!!giftSummaryList[4]&&!!giftSummaryList[4].giftCount){
					giftCount4=giftSummaryList[4].giftCount;
				}
				
				$(".lottery-unit-3").append(
					    '<span class="cjres cjres5">' + giftCount4 +"人中奖"+ '</span>' 
				);
				
				var giftCount5='0';
				if(!!giftSummaryList[5]&&!!giftSummaryList[5].giftCount){
					giftCount5=giftSummaryList[5].giftCount;
				}
				
				$(".lottery-unit-6").append(
					    '<span class="cjres cjres6">' + giftCount5 +"人中奖"+ '</span>' 
				);
				
				var giftCount6='0';
				if(!!giftSummaryList[6]&&!!giftSummaryList[6].giftCount){
					giftCount6=giftSummaryList[6].giftCount;
				}
				
				$(".lottery-unit-5").append(
					    '<span class="cjres cjres7">' + giftCount6 +"人中奖"+ '</span>' 
				);
				
				var giftCount7='0';
				if(!!giftSummaryList[7]&&!!giftSummaryList[7].giftCount){
					giftCount7=giftSummaryList[7].giftCount;
				}
				
				$(".lottery-unit-4").append(
					   // '<span class="cjres cjres8">' + giftCount +""+ '</span>' 
					    '<span class="cjres cjres8"><em>'+giftCount7+'</em>人中奖</span>'
				);
	
				
				
			
				
				if(data.code=="nologin"){
					//alert(data.message);
				}
				
				
				//剩余抽奖次数
				var allCount=data.allCount;
				$(".ivfdchan>span>i").text(allCount);
				
				//获取剩余抽奖次数决定 抽奖按钮  是否变灰
				var lastsynum=$(".ivfdchan>span>i").text();
				//alert(lastsynum);
				if(lastsynum<=0){
					$(".ivfdchan>span>i").html(0);
					$(".btn>img").attr("src","teimg/cjp52.png");
					//$(".btn").addClass("disabled");
				}
				
				
				
				
	
				/*//获奖结果次数统计var bb =data.assetPackageList?data.assetPackageList:[];
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
				}*/
				
				
				
		       /* //获奖结果切换
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
					time:0.15,//速度
					direction:'up'
				});*/
				
				
			}
		});
		
	}
	
	
	
	
	
	//抽奖弹窗的关闭
	$(".cjjgxsvv>span").click(function(){
		$(".cjjgtstcv").addClass("curdis");
		
		
		//重新获取中奖次数
	    // window.location.reload();
		cjnew();

		$(".ivfidresult").removeClass("curdis");
		//获取剩余抽奖次数决定 抽奖按钮  是否变灰
		var lastsynum=$(".ivfdchan>span>i").text();
			//alert(lastsynum);
			if(lastsynum<=0){
				$(".ivfdchan>span>i").html(0);
				$(".btn>img").attr("src","teimg/cjp52.png");
				//$(".btn").addClass("disabled");
			}
		
		
	});
	
	    
		


});