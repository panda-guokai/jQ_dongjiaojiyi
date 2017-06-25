/**
 * Created by qingyun on 2017/6/16.
 */
$(function(){
    /*-----------纵向滚动条部分   开始---------------------------------------------------------------*/

    /*----------bigBox显示+littleBox隐藏  开始----------*/
    var $lis = $(".reLittleBox li");
    for (var i = 0; i < $lis.length; i++) {
        $lis.eq(i).on("click",function(){
            $(this).find(".littleBox").hide().siblings().show().css("cursor","default");
        });
    }
    $(".bigBox").on("mouseleave",function(){
        $(this).hide().siblings().show();
        $(".txtBar").css("top",0);
        $(".txtBox").css("marginTop",0);
    });
    /*----------bigBox显示+littleBox隐藏  结束----------*/

    /*----------纵向滚动条  开始------------------*/
    //先求滚动条高度
    var height = $(".txtScroll").height()*$(".right_txtBox").height()/$(".txtBox").height();
    //给滚动条高度
    $(".txtBar").height(height);
    //给滚动条注册鼠标按下事件
    $(".txtBar").each(function(index,element){
        $(".txtBar").eq(index).on("mousedown",function(e){
            //先求固定值
            var spaceY = e.clientY - $(this).position().top;
            //注册拖动事件
            $(document).on("mousemove",function(e){
                //滚动范围
                var y = e.clientY - spaceY;
                y = y < 0 ? 0 : y;
                y = y > $(".txtScroll").eq(index).height()-$(".txtBar").eq(index).height()?$(".txtScroll").eq(index).height()-$(".txtBar").eq(index).height():y;
                $(".txtBar").eq(index).css("top",y);
                //文字不被选中
                window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
                //文字跟随鼠标滚动距离
                var textMaxMove = $(".txtBox").eq(index).height()-$(".right_txtBox").eq(index).height();
                //距离顶部的距离
                var textMoveTop = -y*textMaxMove/($(".txtScroll").eq(index).height()-$(".txtBar").eq(index).height());
                $(".txtBox").eq(index).css("marginTop",textMoveTop);
            });
        });
    });

    /*----------纵向滚动条  结束------------------*/

    /*-----------纵向滚动条部分   结束---------------------------------------------------------------*/



    /*-----------横向滚动条   开始------------------------------------------------------------------*/
    //先求滚动条宽
    var outerWidth = $(".scroll").outerWidth()*$(".contBox").outerWidth()/$(".reLittleBox").outerWidth();
    //给滚动条高度
    $(".bar").outerWidth(outerWidth);
    //给滚动条注册鼠标按下事件
    $(".bar").on("mousedown",function(e){
        //先求固定值
        var spaceX = e.clientX - $(this).position().left;
        //注册拖动事件
        $(document).on("mousemove",function(e){
            //滚动范围
            var x = e.clientX - spaceX;
            x = x < 0 ? 0 : x;
            x = x > $(".scroll").outerWidth()-$(".bar").outerWidth()?$(".scroll").outerWidth()-$(".bar").outerWidth():x;
            $(".bar").css("left",x);
            //文字不被选中
            window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
            //文字跟随鼠标滚动距离
            var textMaxMove = $(".reLittleBox ul").outerWidth()-$(".contBox").outerWidth();
            //距离顶部的距离
            var textMoveLeft = -x*textMaxMove/($(".scroll").outerWidth()-$(".bar").outerWidth());
            $(".reLittleBox").css("marginLeft",textMoveLeft);
        });
    });
    /*-----------横向滚动条   结束-----------------------------------------------------------------*/


    /*滚动条共用部分  解绑事件 离开此范围不移动*/
    $(document).on("mouseup",function(){
        $(document).off("mousemove");
    });


    /*-----------首页轮播图   开始------------------------------------------------------------------*/
    $("#tabNav li").on("mouseenter",function(){
        //小方块加类名
        $(this).addClass("active").siblings().removeClass("active");
    });
    $("#tabNav li").on("click",function(){
        //求索引
        var index = $(this).index();
        //直接调用运功函数
        $("#tabList").stop().animate({left:-index*1160});
    });

    /*-----------首页轮播图   开始------------------------------------------------------------------*/

    /*-----头部-------*/
    $("dl").mouseenter(function () {
        $(this).children("dt").children("a").addClass("active");
        $(this).children("dd").stop().slideDown();
    }).mouseleave(function () {

        $(this).children("dt").children("a").removeClass("active");
        $(this).children("dd").stop().slideUp();
    });
});