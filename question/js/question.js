/**
 * Created by asus8 on 2016/10/17.
 */
/**
 * 若 标题长度太长 给它加个P标签。我设置了P的样式
 * **/

//判断title
$(function() {
    $(".art_title").click(function () {
        if ($(this).next().hasClass("hide")) {//点击文本显示
            $(this).next().removeClass("hide");
            $(this).addClass("cur")
            $(this).children().css({"white-space":"normal"});
            if($(this).children().length<0){//没有p
                $(this).css({"padding-top":"0.8rem"})
            }
        } else { //点击文本隐藏
            $(this).next().addClass("hide")
            $(this).removeClass("cur")
            $(this).css({"white-space":"nowrap"});
            if($(this).children().length>0){//有p
                $(this).css({"padding-top":"0.8rem","line-height": "0.9rem"})
                $(this).children().css({   "white-space": "nowrap"});
            }
        }
    })


})