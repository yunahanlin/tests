
$(function () {
        var sycjnumname = getQueryString('u');
        var sycjnumid = getQueryString("a");
        // var sycjnumname = '18679031713';
        // var sycjnumid = '211c18e5-27a9-49eb-852e-fa4854eae446';
        var timem14 = '2018-04-14 00:00:00';
        var timen14 = '2018-04-14 23:59:59';
        var timem17 = '2018-04-17 00:00:00';
        var timen17 = '2018-04-17 23:59:59';
        var timem20 = '2018-04-20 00:00:00';
        var timen20 = '2018-04-20 23:59:59';
        var timem23 = '2018-04-23 00:00:00';
        var timen23 = '2018-04-23 23:59:59';
        var timem26 = '2018-04-26 00:00:00';
        var timen26 = '2018-04-26 23:59:59';
        var nowTimeStamp = new Date().getTime();
        // var stampm14 =  new Date(timem14).getTime();
        var stampm14 = Date.parse(timem14.replace(/-/g,"/"));
        // var stampn14 =  new Date(timen14).getTime();
        var stampn14 =   Date.parse(timen14.replace(/-/g,"/"));
        // var stampm17 =  new Date(timem17).getTime();
        var stampm17 =   Date.parse(timem17.replace(/-/g,"/"));
        // var stampn17 =  new Date(timen17).getTime();
        var stampn17 =  Date.parse(timen17.replace(/-/g,"/"));
        // var stampm20 =  new Date(timem20).getTime();
        var stampm20 =   Date.parse(timem20.replace(/-/g,"/"));
        // var stampn20 =  new Date(timen20).getTime();
        var stampn20 =   Date.parse(timen20.replace(/-/g,"/"));
        // var stampm23 =  new Date(timem23).getTime();
        var stampm23 =   Date.parse(timem23.replace(/-/g,"/"));
        // var stampn23 =  new Date(timen23).getTime();
        var stampn23 =   Date.parse(timen23.replace(/-/g,"/"));
        // var stampm26 =  new Date(timem26).getTime();
        var stampm26 =   Date.parse(timem26.replace(/-/g,"/"));
        // var stampn26 =  new Date(timen26).getTime();
        var stampn26 =   Date.parse(timen26.replace(/-/g,"/"));

        var drawBtn = document.getElementById('draw-btn');
        var draw = document.getElementById('draw');
        var slider = document.getElementById('slider');
        var data1 = {"parameters": "{\"username\":\""+sycjnumname+"\",\"authorization\":\""+sycjnumid+"\"}"};
        var u = navigator.userAgent;//判断浏览器版本
        var flag= false;
        //弹框
        function tip(txt) {
            $('.tip-txt').html(txt);
            $('.tip').show();
            setTimeout("$('.tip').fadeOut()", 2000);
        }
        if (sycjnumname === '' || sycjnumname === undefined || sycjnumname === null) {
            if (nowTimeStamp < stampm14) {
                slider.classList.add('sliderall');
                drawBtn.classList.add('time');
            } else if (nowTimeStamp >= stampm14 && nowTimeStamp <= stampn14) {
                slider.classList.add('sliderall');
                drawBtn.classList.remove('time');
                drawBtn.classList.add('drawbtn');
                statusBtn()
            } else if (nowTimeStamp > stampn14 && nowTimeStamp < stampm17) {
                slider.classList.remove('sliderall');
                slider.classList.add('slider14');
                drawBtn.classList.remove('drawbtn');
                drawBtn.classList.add('time');
            } else if (nowTimeStamp >= stampm17 && nowTimeStamp <= stampn17) {
                slider.classList.add('slider14');
                drawBtn.classList.remove('time');
                drawBtn.classList.add('drawbtn');
                statusBtn()
            } else if (nowTimeStamp > stampn17 && nowTimeStamp < stampm20) {
                slider.classList.remove('sliderl4');
                slider.classList.add('slider17');
                drawBtn.classList.remove('drawbtn');
                drawBtn.classList.add('time');
            } else if (nowTimeStamp >= stampm20 && nowTimeStamp <= stampn20) {
                slider.classList.add('slider17');
                drawBtn.classList.remove('time');
                drawBtn.classList.add('drawbtn');
                statusBtn()
            } else if (nowTimeStamp > stampn20 && nowTimeStamp < stampm23) {
                slider.classList.remove('slider17');
                slider.classList.add('slider20');
                drawBtn.classList.remove('drawbtn');
                drawBtn.classList.add('time');
            } else if (nowTimeStamp >= stampm23 && nowTimeStamp <= stampn23) {
                slider.classList.add('slider20');
                drawBtn.classList.remove('time');
                drawBtn.classList.add('drawbtn');
                statusBtn()
            } else if (nowTimeStamp > stampn23 && nowTimeStamp < stampm26) {
                slider.classList.remove('slider20');
                slider.classList.add('slider23');
                drawBtn.classList.remove('drawbtn');
                drawBtn.classList.add('time');
            } else if (nowTimeStamp >= stampm26 && nowTimeStamp <= stampn26) {
                slider.classList.add('slider23');
                drawBtn.classList.remove('time');
                drawBtn.classList.add('drawbtn');
                statusBtn()
            } else if (nowTimeStamp > stampn26) {
                slider.classList.remove('slider23');
                slider.classList.add('slider26');
                draw.style.display = 'none';
            }
        }
    $.ajax({
        type: "POST",
        url:adressurl.one.uri+"html5/user/activity_log/info",
        dataType: "jsonp",
        jsonp:"callback",
        jsonpCallback:"jsonpCallback",
        data: data1,
        success: function(data){
            var status = data.status;
            var code = data.code;
                if (status == 0) {
                    drawBtn.classList.remove('time');
                    drawBtn.classList.add('drawbtn');
                    flag = false;
                    statusBtn();

                } else if (status == 1) {
                    drawBtn.classList.remove('drawbtn');
                    drawBtn.classList.add('time');
                } else if (status == 2) {
                    drawBtn.classList.remove('time');
                    drawBtn.classList.add('hasget')
                } else if (status == 3) {
                    draw.style.display = 'none';
                }

                if (code == 0) {
                    slider.classList.add('sliderall');
                }
                else if (code == 1) {
                    slider.classList.add('slider14');
                }
                else if (code == 2) {
                    slider.classList.add('slider17');
                }
                else if (code == 3) {
                    slider.classList.add('slider20');
                }
                else if (code == 4) {
                    slider.classList.add('slider23');
                }
                else if (code == 5) {
                    slider.classList.add('slider26');
                }
        }
    });
    function statusBtn() {
        //调用安卓方法
        function andriodInit(){
            window.android.gotoLogin();
        }
        //调用ios方法
        function iosInit(){
            sendBought();
        }
        //调用ios子方法1
        function sendBought() {
            connectWebViewJavascriptBridge(function(bridge) {

                bridge.registerHandler('gotoLogin', function(data, responseCallback) {

                    responseCallback('post');
                });
                bridge.send({
                    "status": "gotoLogin" //IOS必须是JSON ,bought   是给ios发的字段
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
            drawBtn.onclick = function () {
                if (sycjnumname === '' || sycjnumname === undefined || sycjnumname === null) {
                    if (u.indexOf('Andriod') > -1 || u.indexOf('Linux') > -1) { //安卓手机
                        andriodInit();
                    } else if (u.indexOf('iPhone') > -1) { //苹果手机
                        iosInit();
                    }
                } else if (sycjnumname && sycjnumid && !flag){
                    flag = true;
                    $.ajax({
                        type: "POST",
                        url: adressurl.one.uri + "html5//user/activity_log/onclike",
                        dataType: "jsonp",
                        jsonp: "callback",
                        jsonpCallback: "jsonpCallback",
                        data: data1,
                        success: function (data) {
                            var code = data.code;
                            if (code == 0) {
                                drawBtn.classList.remove('drawbtn');
                                drawBtn.classList.add('hasget');
                                tip("领取成功");
                            }
                        }
                    });
                }
            };
    }
});