/**
 * Created by win 10 on 2018/4/2.
 */
//url地址
var adressurl = {
    one: {
        // uri: 'http://192.168.1.197:8001/'
        /*uri: 'http://120.77.212.170:8080/'*/
        uri: 'http://192.168.1.160:8081/' //测试环境
        //uri:'https://api.moneypig.cn/'
        //uri: 'http://api.testfcz.xyz/'
        // uri:'http://openapi.testfcz.xyz/'
        //uri:'http://192.168.1.61:84/'
    },

};

//获取地址后面的参数
var getQueryString = function (name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return unescape(r[2]);return null;
}

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);