

//url地址
var adressurl = {
	one: {
	   // uri: 'http://192.168.1.197:8001/'
	   /*uri: 'http://120.77.212.170:8080/'*/
	  //uri:'https://api.moneypig.cn/'
	     //uri: 'http://api.testfcz.xyz/'
	     //uri:'http://openapi.testfcz.xyz/'
	   uri:'http://192.168.1.63:94/'
	   //uri:'https://openapi.moneypig.cn/'
	},

};

//转换日期格式-s
function dateFormat_1(ee){  
    var dateType = "";  
    var date = new Date();  
    date.setTime(ee);  
    dateType += date.getFullYear();   //年  
    dateType += "-" + getMonth(date); //月   
    dateType += "-" + getDay(date);   //日  
    return dateType;
} 
//返回 01-12 的月份值   
function getMonth(date){  
    var month = "";  
    month = date.getMonth() + 1; //getMonth()得到的月份是0-11  
    if(month<10){  
        month = "0" + month;  
    }  
    return month;  
}  
//返回01-30的日期  
function getDay(date){  
    var day = "";  
    day = date.getDate();  
    if(day<10){  
        day = "0" + day;  
    }  
    return day;  
}
//转换日期格式-e


//获取地址后面的参数
var getQueryString = function (name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return unescape(r[2]);return null;
}