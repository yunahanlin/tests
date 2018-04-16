

$(function(){

	$("#jointel,#joinqq").keyup(function(){
		$(".joinerrmeg").text("");
		$('.joinqq label').text("");
		/*输入框中     非数字就自动删除*/
		var numval=$(this).val();
		if(isNaN(numval)){
		   $(this).val($(this).val().replace(/\D|^0/g,''));  
		}

        /*手机号输入框中只能输入11位数*/
		var num = $("#jointel").val().substr(0, 11);
		$("#jointel").val(num);
		
		/*qq号输入框中最多只能输入15位数*/
		var num = $("#joinqq").val().substr(0, 15);
		$("#joinqq").val(num);
	});
	
	
	/*表单验证*/
    var validatorCode = $("#joinform").validate({
        rules: {
          jointel: {
              required:true,
             isMobile: true
          },
            joinqq: {
                required:true,
                number:true
            }
  
        }
    });

    
    /*立即领取*/
	$('.joinbtn').on('click',function (){
		$(".joinerrmeg").text("");
		console.log("触发点击事件");

		if (validatorCode.form()){
			console.log("表单验证通过");
			/*$("#lbamessageout").text("");
			$(".lbacodr").addClass("disabled");*/
			var phoneval = $("#jointel").val();
			 var joinqqval=$("#joinqq").val();
            //time($('.lbacodr')[0]);
			var data1 = {"parameters": "{\"qq\":\""+joinqqval+"\",\"mobile\":\""+phoneval+"\"}"};
			$.ajax({
	            type: "POST",
	            dataType: "jsonp",
	            jsonp:"callback",
	            jsonpCallback:"jsonpCallback",
	            url:adressurl.one.uri+"web/acticity/joinqq/open.do",
				data: data1,


			 /*type: "get",
           // url: "http://192.168.1.128:8081/User/getIdentifyingCode.do",
            url:adressurl.one.uri+"User/getIdentifyingCode/ajax",
             data:data1,
             dataType: "json",*/

				success: function(data){
					console.log(data);
					if (data.code=="err") {
						$(".joinerrmeg").text(data.msg);
						if(data.msg=="手机号码未注册,请确认！"){
							//显示已经注册的弹窗，
							$(".regtc").removeClass("curdis");
						}
				   }else{
                        $(".joinerrmeg").text(data.msg);
                        //$(".successimg").removeClass("curdis");
                        window.location.href = "http://shang.qq.com/wpa/qunwpa?idkey=6236c6ccc49dccc03ce1dcaae3f160130391d81f6f21b741fccb3cced0adfa5d";
				    }

				}
			});
		}

	});
	

	 /*错误提示的显示和隐藏*/
    $(".joinbtn").click(function(){
		
		var telval=$(".jointel label").text();
		if(telval!=''){
			$('.joinqq label').text("");
			$(".joinerrmeg").text("");
		}

	});
	
	
	$(".jointel>input").keyup(function(){
		$(".joinerrmeg").text("");
		$('.joinqq label').text("");
		var telval=$(".jointel label").text();
		if(telval!=''){
			//$('.joinqq label').text("");
			$(".joinerrmeg").text("");
		}
	});
	
	
	
	
	
	//关闭弹窗
	$(".successimg>p>i").click(function(){
		$(".successimg").addClass("curdis");
	});
	$(".regtc>p>i").click(function(){
		$(".regtc").addClass("curdis");
	});
	
	
	//跟app交互-去注册
	
	// 第一：判断设备
	var u = navigator.userAgent;//判断浏览器版本
	$(".regtc>p>span").click(function(){
		//alert("1");
	    if (u.indexOf('Andriod') > -1 || u.indexOf('Linux') > -1) { //安卓手机
	        andriodInit();
	    } else if (u.indexOf('iPhone') > -1) { //苹果手机
	        iosInit();
	    }
	    
	});
	
	
	
	//调用安卓方法
	function andriodInit(){
		window.android.gotoRegister();
	}
	
	//调用ios方法
	function iosInit(){
		sendBought();
	}
	  //调用ios子方法1  
    function sendBought() {
    	connectWebViewJavascriptBridge(function(bridge) {

    		bridge.registerHandler('gotoRegister', function(data, responseCallback) {

    			responseCallback('post');
    		});
    		bridge.send({
    			"status": "gotoRegister" //IOS必须是JSON ,bought   是给ios发的字段
    		});
    	});
    }
    
    
     //调用ios子方法 2 
    function connectWebViewJavascriptBridge(callback) {

    	if(window.WebViewJavascriptBridge) {

    		callback(WebViewJavascriptBridge)
    	} else {

    		document.addEventListener('WebViewJavascriptBridgeReady', function() {

    			callback(WebViewJavascriptBridge)
    		}, false)
    	}
    }
	
	
	
	//跳转到口令红包的页面
	var monynumname = getQueryString('u');
	var monynumid = getQueryString("a");
	$(".joinmoy").click(function(){
		window.location.href="https://www.moneypig.cn/moneybag/index.html?u="+monynumname+"&a="+monynumid;
		//window.location.href="http://192.168.1.63/moneybag/index.html?u="+monynumname+"&a="+monynumid;
	});
	
	


	
});


 
 
 
 



