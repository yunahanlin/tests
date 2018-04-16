
$(document).ready(function() {

	// 投资列表页的- 第一：判断设备
	var u = navigator.userAgent;//判断浏览器版本
	$(".gotopolist").click(function(){
		
	    if (u.indexOf('Andriod') > -1 || u.indexOf('Linux') > -1) { //安卓手机
	        andriodInit();
	    } else if (u.indexOf('iPhone') > -1) { //苹果手机
	        iosInit();
	    }
	    
	});

	//调用安卓方法
	function andriodInit(){
		window.android.gotoprolist();//安卓的去投资
	}
	
	//调用ios方法
	function iosInit(){
		sendBought();
	}
	  //调用ios子方法1  
    function sendBought() {
    	connectWebViewJavascriptBridge(function(bridge) {
            
    		bridge.registerHandler('test', function(data, responseCallback) {

    			responseCallback('post');
    		});
    		bridge.send({
    			"status": "gotoprolist" //IOS必须是JSON,//bought  是传给安卓和ios的字段名称
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
    
    
    
    // 口令红包的-- 第一：判断设备
	var u = navigator.userAgent;//判断浏览器版本
	$(".gotomoneybag").click(function(){
		
	    if (u.indexOf('Andriod') > -1 || u.indexOf('Linux') > -1) { //安卓手机
	        andriodInit2();
	    } else if (u.indexOf('iPhone') > -1) { //苹果手机
	        iosInit2();
	    }
	    
	});
	//调用安卓方法
	function andriodInit2(){
		window.android.gotoMoneybag();//安卓的口令红包
	}
	
	//调用ios方法
	function iosInit2(){
		sendBought2();
	}
	  //调用ios子方法1  
    function sendBought2() {
    	connectWebViewJavascriptBridge2(function(bridge) {

    		bridge.registerHandler('gotoProdlist', function(data, responseCallback) {

    			responseCallback('post');
    		});
    		bridge.send({
    			"status": "gotoMoneybag" //IOS必须是JSON
    		});
    	});
    }

     //调用ios子方法 2 
    function connectWebViewJavascriptBridge2(callback) {

    	if(window.WebViewJavascriptBridge) {

    		callback(WebViewJavascriptBridge)
    	} else {

    		document.addEventListener('WebViewJavascriptBridgeReady', function() {

    			callback(WebViewJavascriptBridge)
    		}, false)
    	}
    }
	

});