//rem单位转换
(function (_D) {
    var _self = {};
    _self.Html = _D.getElementsByTagName("html")[0];
    _self.widthProportion = function () {
        var p = (_D.body && _D.body.clientWidth || _self.Html.offsetWidth) / 750;
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
	  /*uri: 'http://api.testfcz.xyz/'*/
	  uri:'https://api.moneypig.cn/'
	},
};


//获取地址后面的参数
var getQueryString = function (name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return unescape(r[2]);return null;
}