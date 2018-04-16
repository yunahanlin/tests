
$(function(){
	//访问接口
    var username = getQueryString('u');//获取地址栏用户名
	var authorization = getQueryString('a');//获取地址栏的登录授权码
	var gift_name="新春大吉";
	
	//判断日期先后
	var chuxistar = "2018-02-14 23:59:59";
	var chuxisstar=new Date(chuxistar).getTime();//除夕当天开始的秒数
	var chuxiend = "2018-02-15 23:59:59";
	var chuxisend=new Date(chuxiend).getTime();//除夕当天结束的秒数
	
	
	var nowdate = new Date().getTime();//当前时间
	//alert(nowdate);
    console.log(nowdate);
    console.log(chuxisstar);
    console.log(chuxisend);
	

	
	if(username==null||username==""||username=="null"||username=="（null）"||username=="(null)"){//先判断是否注册
		$(".newyerbtn>img").attr("src","teimg/newyear_08b.jpg");
		$(".newyerbtn").addClass("disabled");//禁用点击按钮
	}else{
		if(nowdate<chuxisstar||nowdate>chuxisend){
			$(".newyerbtn>img").attr("src","teimg/newyear_08t.jpg");
			$(".newyerbtn").addClass("disabled");//禁用点击按钮
		}else{
			$(".newyerbtn>img").attr("src","teimg/newyear_08.png");
			$(".newyerbtn").removeClass("disabled");//禁用点击按钮
		}
	}
	

	
	/*if(username==null||username==""||username=="null"||username=="（null）"||username=="(null)"){//先判断是否注册
		$(".newyerbtn>img").attr("src","teimg/newyear_08b.jpg");
		$(".newyerbtn").addClass("disabled");//禁用点击按钮
	}*/
	
	function ajafun(){
		var data1 = {"parameters": "{\"username\":\"" + username + "\",\"authorization\":\"" + authorization + "\",\"gift_name\":\""+gift_name+"\"}"};
		$.ajax({
	        type: "POST", 
	        dataType: "jsonp", 
	        jsonp:"callback",
	        jsonpCallback:"jsonpCallback",
	        url:adressurl.one.uri+"web/acticity/getKeyGift/open.do",
			data: data1,
			success: function(data){
				console.log(data);
				
				if(data.code=="success"){
					
					var coupon=data.coupon?data.coupon:[];
					var money='';
					if(!!coupon.money){
						money=coupon.money/100;
					}else{
						console.log(data.msg);
					}
					console.log(money);
					$(".resutc").removeClass("curdis");
					//$(".newyerbtn").removeClass("disabled");
					
					
				}else if(data.msg=="该密令已被领取过了，请勿重复领取"){
					$(".newyerbtn>img").attr("src","teimg/newyear_08c.jpg");
					console.log(data.msg);
				}else if(data.message=="用户验证失败请登录"){
					$(".newyerbtn>img").attr("src","teimg/newyear_08d.jpg");
					console.log(data.message);
				}else{
					//没找到该密令
					console.log("其他情况：",data.message);
				}
					
			}
		});
	}
	
	//关闭按钮
	$(".resdv>span").click(function(){
		$(".resutc").hide();
		$(".newyerbtn>img").attr("src","teimg/newyear_08c.jpg");
	});
	
	/*$(document).delegate('.qdclobtn', 'click', function () {
        $(".bgbgimng").hide();
    });*/

	
	
	//点击签到按钮
	$(".newyerbtn").click(function(){
		$(".newyerbtn").addClass("disabled");
		ajafun();//调用接口
	});
	
	
	/*$(".newyerbtn").click(function(){
		$(".resutc").removeClass("curdis");
	});*/
	
	
	/*function popup(popupName){ 
		_windowHeight = $(".wrap").height(),//获取当前窗口高度 
		_windowWidth = $(".wrap").width(),//获取当前窗口宽度 
		_popupHeight = popupName.height(),//获取弹出层高度 
		_popupWeight = popupName.width();//获取弹出层宽度 
		_posiTop = (_windowHeight - _popupHeight)/2; 
		_posiLeft = (_windowWidth - _popupWeight)/2; 
		popupName.css({"left": _posiLeft + "px","top":_posiTop + "px","display":"block"});//设置position 
	} */
	
});


 
 
 
 



