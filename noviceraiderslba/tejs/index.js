
$(document).ready(function() {

    regcheck();
    function regcheck(){
    	var rval = getQueryString('r');
    	//alert(rval);
    	console.log(rval);
    	if(rval==0){//未注册
    		
    		 
    	}else if(rval==1){//已注册
    		
    		$(".xsglbtn").addClass("curdis");//隐藏注册按钮
    	}
    }

	// 第一：判断设备
	var u = navigator.userAgent;//判断浏览器版本
	$(".xsglbtn").click(function(){
		
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
    			"status": "bought" //IOS必须是JSON
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