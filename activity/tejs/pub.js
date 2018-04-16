
$(function(){
	
   var data1 ="";
	// 第一：判断设备
	var u = navigator.userAgent;//判断浏览器版本
    if (u.indexOf('Andriod') > -1 || u.indexOf('Linux') > -1) { //安卓手机phone_type
        data1 = {"parameters": "{\"pageSize\":\"20\",\"currentPage\":\"1\",\"type\":\"5\",\"phone_type\":\"1\"}"};
        ajaxdy();
    } else if (u.indexOf('iPhone') > -1) { //苹果手机
        data1 = {"parameters": "{\"pageSize\":\"20\",\"currentPage\":\"1\",\"type\":\"5\",\"phone_type\":\"2\"}"};
        ajaxdy();
    }else{
    	data1 = {"parameters": "{\"pageSize\":\"20\",\"currentPage\":\"1\",\"type\":\"5\",\"phone_type\":\"1\"}"};
    	ajaxdy();
    }

   	function ajaxdy(){
		$.ajax({
	        type: "POST", 
	        dataType: "jsonp", 
	        jsonp:"callback",
	        url:adressurl.one.uri+"web/webinfo/getHotAct/open.do",
			data: data1,
			success: function(data){
	        	console.log(data)
	        	// console.log(adressurl.one.uri+"web/webinfo/getHotAct/open.do")
				// console.log('banner列表：',data);
				//banner图
				var info=data.info?data.info:[];
				for(var b=0;b<info.length;b++){

					var banrurl='';
					if(!!info[b]&&!!info[b].titleUrl){
						banrurl=info[b].titleUrl;
					}
				    var banrurltq=banrurl.substring(0,banrurl.length-1);
				
				
				    var hdUrl='';
				
					hdUrl=info[b].hdUrl;
					// console.log(hdUrl);
					if(hdUrl.indexOf("zhenghaojf.cn")==-1){//非正式环境
						if(hdUrl=="joinQQGroup"){
						
							$(".jbtest").append(
								'<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=1459b091b96ff833f3d8936b587be9b5786bb2beeeaf7ea6f5109180f2fce9b7">' +
									'<img src="http://'+banrurltq+'">' +
								'</a>'
								//'<img src="http://'+banrurltq+'">'
							);
							
						}else if(hdUrl==""){
							
							$(".jbtest").append(
								'<a href="javascript:;"><img src="http://'+banrurltq+'"></a>'
								//'<img src="http://'+banrurltq+'">'
							);
						}else{
							
							$(".jbtest").append(
								'<a href="http://'+hdUrl+'"><img src="http://'+banrurltq+'"></a>'
								//'<img src="http://'+banrurltq+'">'
							);
							
						}
					}else{//正式环境
						if(hdUrl=="joinQQGroup"){

							$(".jbtest").append(
								'<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=1459b091b96ff833f3d8936b587be9b5786bb2beeeaf7ea6f5109180f2fce9b7"><img src="https://'+banrurltq+'"></a>'
								//'<img src="http://'+banrurltq+'">'
							);
							
						}else if(hdUrl==""){
							
							$(".jbtest").append(
								'<a href="javascript:;"><img src="https://'+banrurltq+'"></a>'
								//'<img src="http://'+banrurltq+'">'
							);
						}else{
							
							$(".jbtest").append(
								'<a href="https://'+hdUrl+'"><img src="https://'+banrurltq+'"></a>'
								//'<img src="http://'+banrurltq+'">'
							);
							
						}
				    } 
					
					
					
				}
				
	
			}
		});

	}
});


 
 
 
 



