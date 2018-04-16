//rem单位转换
(function (_D) {
    var _self = {};
    _self.Html = _D.getElementsByTagName("html")[0];
    _self.widthProportion = function () {
        var p = (_D.body && _D.body.clientWidth || _self.Html.offsetWidth) / 640;
        return p > 1 ? 1 : p < 0.5 ? 0.5 : p;
    };
    _self.changePage = function () {
        _self.Html.setAttribute("style", "font-size:" + _self.widthProportion() * 100 + "px !important");
    }
    _self.changePage();
    setInterval(_self.changePage, 100);
})(document);

//url地址
var adressurl = {
	one: {
	    /*uri: 'http://192.168.1.128:8080/'*/
	   /*uri: 'http://120.77.212.170:8080/'*/
	 // uri:'https://api.moneypig.cn/'
	// uri: 'http://api.testfcz.xyz/'
	// uri: ' http://192.168.1.61:84/'
	 //uri:'http://192.168.1.63:93/'
	 // uri:'http://106.15.160.101:83/'
        uri: 'http://192.168.1.160:8081/' //测试环境
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













//获取地址后面的参数
var getQueryString = function (name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return unescape(r[2]);return null;
}