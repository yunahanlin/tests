


$(document).ready(function() {

	//点击按钮下滑到注册页面
	$(".teimgdd").bind("click",function(e){
		e.defaultPrevented();
		$(".lbaregismain").animate({top:'-11rem'},300);
	});
	//下滑页面到页面最顶端
	var windowTop = 0; //初始话可视区域距离页面顶端的距离
	$(window).scroll(function() {
		var scrolls = $(this).scrollTop(); //获取当前可视区域距离页面顶端的距离
		if(scrolls >= windowTop) { //当B>A时，表示页面在向下滑动
			//需要执行的操作
			//windowTop = scrolls;
			$(".lbaregismain").animate({top:'0rem'},300);
		}
	});
	
	
	$(".lbacodimgr>img").attr("src",adressurl.one.uri+"common/authCode.do?abc=%27+Math.random");
	

	/*手机输入框中     非数字就自动删除*/
	$("#lbaregtelk,#lbaregtelcodk,#lbaregtelcodimg").keyup(function(){
		//var numval=$("#lbaregtelk").val();
		$("#lbamessageout").text("");
		$(".lbacodf label").text("");
		var numval=$(this).val();
		if(isNaN(numval)){
		   //$("#lbaregtelk").val("");
		   $(this).val($(this).val().replace(/\D|^0/g,''));  
		}

		var num = $("#lbaregtelk").val().substr(0, 11);
		$("#lbaregtelk").val(num);
		var lbaregtelcodkva=$("#lbaregtelcodk").val().substr(0,6);
		$("#lbaregtelcodk").val(lbaregtelcodkva);
		var lbaregtelcodkvaimg=$("#lbaregtelcodimg").val().substr(0,4);
		$("#lbaregtelcodimg").val(lbaregtelcodkvaimg);

	});
	
	//已经是会员页面的关闭按钮
	$(".mebredclo").click(function(){
		$(".memberready").addClass("curdis");
	});
	
	//页面底部下载关闭按钮
	$(".lrgclose").click(function(){
		$(".lbargbm").addClass("curdis");
	});
	
	/*表单验证*/
    var validatorCode = $("#lbaform").validate({
        rules: {
          lbaregtel: {
              required:true,
             isMobile: true
          },
            lbacodeimg: {
                required:true,
                number:true
            }
        }
    });
    var validator = $("#lbaform").validate({
        rules: {
            lbaregtel: {
                required:true,
                isMobile: true
            }/*,
            lbacodimg: {
                required:true,
                number:true
            }*/
        }
    });

	/*发送验证码*/
	$('.lbacodr').on('click',function (){
		
		console.log("触发点击事件");
		
		if (validatorCode.form()){
			console.log("验证通过");
			$("#lbamessageout").text("");
			$(".lbacodr").addClass("disabled");
			var phoneNum = $("#lbaregtelk").val();
			 var lbacodimg=$("#lbaregtelcodimg").val();
            //time($('.lbacodr')[0]);
			var data1 = {"parameters": "{\"authCode\":\""+lbacodimg+"\",\"username\":\""+phoneNum+"\",\"type\":\"1\"}"};
			$.ajax({
	            type: "POST", 
	            dataType: "jsonp", 
	            jsonp:"callback",
	            jsonpCallback:"jsonpCallback",
	            url:adressurl.one.uri+"User/getIdentifyingCode/ajax",
				data: data1,
			 /*type: "get",
           // url: "http://192.168.1.128:8081/User/getIdentifyingCode.do",
            url:adressurl.one.uri+"User/getIdentifyingCode/ajax",
             data:data1,
             dataType: "json",*/
				success: function(data){
					console.log("访问接口成功");
					console.log(data);
					console.log(data.msg);
					if (data.message=="该手机号已经注册过") {
						//$("#lbamessageout").val(data.message);
						$("#lbamessageout").text(data.message);
						$(".lbaregtel label").addClass("curdis");
						$(".lbaregcodv label").addClass("curdis");
				    	$(".memberready").removeClass("curdis");
				    	$(".lbacodr").removeClass("disabled");
				    }else if(data.message=="一小时内最多获取三次验证码"){
				    	//$("#lbamessageout").val(data.message);
				    	$("#lbamessageout").text(data.message);
				    	$(".lbaregtel label").addClass("curdis");
						$(".lbaregcodv label").addClass("curdis");
				    }else if(data.msg=="图形验证码校验失败！"){
				    	$(".lbacodr").removeClass("disabled");
				    	$("#lbamessageout").text(data.msg);
				    	//$(".lbacodimgr>img").attr("src","http://api.testfcz.xyz/common/authCode.do?abc=%27+Math.random"+ (new Date).getTime());	
				    	/*$(".lbacodimgr>img").attr("src","http://api.testfcz.xyz/common/authCode.do?abc=%27+Math.random?t=" + new Date().getTime());*/
				    	//$(".lbacodimgr>img").attr("src", adressurl.one.uri+"common/authCode.do?abc="+Math.random);
				    	$(".lbacodimgr>img").attr("src",adressurl.one.uri+"common/authCode.do?abc=%27+Math.random" + new Date().getTime());
				    	//attr("src","getImage.action?t=" + new Date().getTime())
				    
				    }else{
				    	console.log("进入else");
                        //$("#lbamessageout").val(data.message);
                        $("#lbamessageout").text(data.message);
                        $("#lbamessageout").text(data.msg);
                        $(".lbaregtel label").addClass("curdis");
						$(".lbaregcodv label").addClass("curdis");
				    	time($('.lbacodr')[0]);
				    	
				    }/*else if(data.message=="发送成功"){
                        //$("#lbamessageout").val(data.message);
                        $("#lbamessageout").text(data.message);
                        $(".lbaregtel label").addClass("curdis");
						$(".lbaregcodv label").addClass("curdis");
				    	time($('.lbacodr')[0]);
				    	
				    }*/
				}
			});
		}
		
	});

	/*$(".lbacodr").click(function(){


		if($(".lbaregtel label").attr("style")){
			$(".lbacodimg label").removeClass("curdis");
		}else{
			$(".lbacodimg label").addClass("curdis");
		}
		if(validator.form()){
			$(".lbacodimg label").removeClass("curdis");
		}
		if($(".lbaregtel label").css("display")=="none"){
			$(".lbacodimg label").removeClass("curdis");
		}
	});
	$("#lbaregtelk").keyup(function(){
		
		if($(".lbaregtel label").attr("style")){
			$(".lbacodimg label").removeClass("curdis");
		}
	});*/

	//判断安卓 or  ios
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	var registPlatform; 
	var channel;
	var channelres = getQueryString('channel');//获取地址栏channel的值
	if (isAndroid==true) {
		
		if(channelres==null){
			registPlatform=1;
		    channel="000";
		}else{
			registPlatform=1;
		    channel=channelres;
		}
	}else{
		
		if(channelres==null){
			registPlatform=2;
		    channel=2;
		}else{
			registPlatform=2;
		    channel=channelres;
		}
		
	};

	/*注册*/
	$('.regsumit').on('click',function (){
		$("#lbamessageout").text("");
		//$("#lbamessageout").addClass("curdis");
		
		//var lbaregid = $(this).attr('p');
		//调用 获取地址参数方法
		var lbaregid = getQueryString('p');
		
		if(lbaregid==null){
			lbaregid="";
		}
		
		if (validator.form()){
			var phoneNum = $("#lbaregtelk").val();
            var lbacod=$("#lbaregtelcodk").val();
           
	      //var data1 = {"parameters": "{\"username\":\"18573116850\",\"phoneId\":\"\",\"code\":\"286760\",\"registPlatform\":\"1\",\"channel\":\"\",\"inviteId\":\"\",\"type\":\"0\"}"};
			var data2 = {"parameters": "{\"username\":\""+phoneNum+"\",\"phoneId\":\"\",\"code\":\""+lbacod+"\",\"registPlatform\":\""+registPlatform+"\",\"channel\":\""+channel+"\",\"inviteId\":\""+lbaregid+"\",\"type\":\"0\"}"};
	
	console.info(data2);

			$.ajax({
				/*type: "GET",
	             url: "https://interface.yrjr.cn/SmsVerification/send",
	             data:data2,
	             dataType: "json",*/
				

				//url: 'http://192.168.1.128:8081/User/quick/register.do',
				url:adressurl.one.uri+"User/quick/register.do",
				type: 'post',
				data: data2,
				dataType: 'jsonp',
				jsonp: 'callback',
				jsonpCallback:"jsonpCallback",
				success : function(data){
					console.log(data);
					console.log(data.message);
					if(data.end=="ok"){
						window.location="regist-success.html";
					}else if(data.message=="该手机号已经注册过"){
						$("#lbamessageout").text(data.message);
						$(".lbaregtel label").addClass("curdis");
						$(".lbaregcodv label").addClass("curdis");
				    	$(".memberready").removeClass("curdis");
				    	$(".lbacodr").removeClass("disabled");
					}else{
						//$("#lbamessageout").show().val(data.message);
						$("#lbamessageout").show().text(data.message);
					}
				 }
			});
		}else{
			$("#lbamessageout").text("请正确完整填写信息");
			console.log('error');
		}
		
	});

/*倒计时*/
	var wait=60;
	function time(o) {
		
	    if (wait == 0) {
	        o.removeAttribute("disabled");
	        //o.value="免费获取验证码1";
	        o.innerHTML="重新获取";
	        //o.removeClass("disabled");
	        $(".lbacodr").removeClass("disabled");
	        wait = 60;
	    } else {
	        o.setAttribute("disabled", true);
	       // o.value="重新发送1(" + wait + ")";
	        o.innerHTML=wait+"s";
	        wait--;
	        setTimeout(function() {
	                time(o)
	            },
	            1000)
	    }
	}
	
	$(".lbacodr,.regsumit").click(function(){
		
		$("#lbamessageout").text("");
		var telval=$("#lbaregtelk").val();
		
		if($(".lbaregtel label").attr("style")){
			$("#lbamessageout").text("");
		}else if(telval.length>10){
			var imglab=$(".lbacodimg>div label").text();
			$("#lbamessageout").text("");
			$("#lbamessageout").text(imglab);
		}
		
		if($(".lbaregtel label").css("display")=='none'){
			var imglab=$(".lbacodimg>div label").text();
			$("#lbamessageout").text("");
			$("#lbamessageout").text(imglab);
		}
		
	});

});