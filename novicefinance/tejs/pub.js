/**
 * Created by Administrator on 2015/3/24.
 */



 
 

$(function(){
	
	
	//先判断是否注册
	regcheck();
    function regcheck(){
    	var rval = getQueryString('u');
    	//var u=rval.length;
    	//alert(rval);
    	console.log(rval);
    	if(rval==null||rval==""){//未注册
    		
    		 
    	}else{//已注册
    		$(".newreg").addClass("curdis");//隐藏注册按钮
    		
    	}
    }
    
    
    
    //点击注册给安卓和ios传参
     // 注册的-- 第一：判断设备
	var u = navigator.userAgent;//判断浏览器版本
	$(".newreg").click(function(){
		
		
	    if (u.indexOf('Andriod') > -1 || u.indexOf('Linux') > -1) { //安卓手机
	        andriodInit();
	    } else if (u.indexOf('iPhone') > -1) { //苹果手机
	        iosInit();
	    }
	    
	});
	

	
	//调用安卓方法
	function andriodInit(){
		window.android.gotoRegister();//跳注册页
	}
	
	//调用ios方法
	function iosInit(){
			sendBought();//跳注册页
	}
	  //调用ios子方法1  
    function sendBought() {
    	connectWebViewJavascriptBridge(function(bridge) {

    		bridge.registerHandler('gotoRegister', function(data, responseCallback) {

    			responseCallback('post');
    		});
    		bridge.send({
    			"status": "gotoRegister" //传给ios的参数(IOS必须是JSON)
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
	


	
});


 
 
 
 



