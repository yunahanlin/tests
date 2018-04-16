
$(function(){
	var username = getQueryString('u');//获取地址栏用户名
	var authorization = getQueryString('a');//获取地址栏的登录授权码
    // var username ="17512345333";//获取地址栏用户名
    // var authorization ="6a184586-90b9-4af4-a816-92aeec4d853e";
	//访问接口
	var data1 = {"parameters": "{\"username\":\"" + username + "\",\"authorization\":\"" + authorization + "\"}"};
	$.ajax({
        type: "POST", 
        dataType: "jsonp", 
        jsonp:"callback",
        jsonpCallback:"jsonpCallback",
        url:adressurl.one.uri+"/web/acticity/openGoldegg/open.do",
		data: data1,
		success: function(data){
			console.log(data);
			//送金宝
			var coupon=data.coupon?data.coupon:[];
			for(var x=0;x<coupon.length;x++){
				//卡券金额
				var money='';
				if(!!coupon[x]&&!!coupon[x].money){
					money=coupon[x].money/100;
				}
				//起投金额
				var invMoney='';
				if(!!coupon[x]&&!!coupon[x].invMoney){
					invMoney=coupon[x].invMoney/100;
				}
				//截止时间
				var overTime='';
				if(!!coupon[x]&&!!coupon[x].overTime){
					overTime=coupon[x].overTime;
				}
				//转化时间格式-s
				var dateType = "";  
			    var date = new Date();  
			    date.setTime(overTime); 
			    dateType = date.getFullYear()+"-"+date.getMonth(date)+"-"+date.getDay(date);//yyyy-MM-dd格式日期
				//转化时间格式-e
				$(".rescodul").append(
					'<li>'+
					  '<p class="rescodqf">'+
					     '<span>送金宝</span>'+
					     '<em>到期日：'+dateType+'</em>'+
					  '</p>'+
					  '<p class="rescodqr">'+
					    '<span><i>'+money+'</i>个</span>'+
					    '<em>起投金额：'+invMoney+'元</em>'+
					  '</p>'+
					'</li>'
				);
			}
			//助力宝
			var couponCapitals=data.couponCapitals?data.couponCapitals:[];
			for(var b=0;b<couponCapitals.length;b++){
				//卡券金额
				var moneyb='';
				if(!!couponCapitals[b]&&!!couponCapitals[b].money){
					moneyb=couponCapitals[b].money/100;
				}
				//起投金额
				var invMoneyb='';
				if(!!couponCapitals[b]&&!!couponCapitals[b].invMoney){
					invMoneyb=couponCapitals[b].invMoney/100;
				}
				//截止时间
				var overTimeb='';
				if(!!couponCapitals[b]&&!!couponCapitals[b].overTime){
					overTimeb=couponCapitals[b].overTime;
				}
				//转化时间格式-s
				var dateType = "";  
			    var date = new Date();  
			    date.setTime(overTimeb); 
			    dateType = date.getFullYear()+"-"+date.getMonth(date)+"-"+date.getDay(date);//yyyy-MM-dd格式日期
				//转化时间格式-e
				$(".rescodul").append(
					'<li>'+
					  '<p class="rescodqf">'+
					     '<span>助力宝</span>'+
					     '<em>到期日：'+dateType+'</em>'+
					  '</p>'+
					  '<p class="rescodqr">'+
					    '<span><i>'+moneyb+'</i>个</span>'+
					    '<em>起投金额：'+invMoneyb+'元</em>'+
					  '</p>'+
					'</li>'
				);
			}
			//正息宝
			var couponInterests=data.couponInterests?data.couponInterests:[];
			for(var j=0;j<couponInterests.length;j++){
				//加息率
				var interestrate='';
				if(!!couponInterests[j]&&!!couponInterests[j].interestrate){
					interestrate=couponInterests[j].interestrate;
				}
				//最低投资期限
				var invTermMin='';
				if(!!couponInterests[j]&&!!couponInterests[j].invTermMin){
					invTermMin=couponInterests[j].invTermMin;
				}
				//最高投资期限
				var invTerm='';
				if(!!couponInterests[j]&&!!couponInterests[j].invTerm){
					invTerm=couponInterests[j].invTerm;
				}
				//截止时间
				var overTimej='';
				if(!!couponInterests[j]&&!!couponInterests[j].overTime){
					overTimej=couponInterests[j].overTime;
				}
				//转化时间格式-s
				var dateType = "";  
			    var date = new Date();  
			    date.setTime(overTimej); 
			    dateType = date.getFullYear()+"-"+date.getMonth(date)+"-"+date.getDay(date);//yyyy-MM-dd格式日期
				//转化时间格式-e
				$(".rescodul").append(
					'<li>'+
					  '<p class="rescodqf">'+
					     '<span>正息宝</span>'+
					     '<em>到期日：'+dateType+'</em>'+
					  '</p>'+
					  '<p class="rescodqr">'+
					    '<span><i>'+interestrate+'</i>%</span>'+
					    '<em>起投期限：'+invTermMin+'天</em>'+
					  '</p>'+
					'</li>'
				);
			}
		}
	});
	//关闭按钮
	$(".resclobtn").click(function(){
		$(".zjddvd").hide();
	});
});


 
 
 
 



