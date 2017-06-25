/**
 * Created by Administrator on 2017/6/16.
 */
$.fn.ratate = function () {
    $(".musiclist li").on("mouseenter",function () {
        $(this).find("img").removeClass("ratate360");
        
    });
    $(".musiclist li").on("mouseleave",function () {
        $(this).find("img").addClass("ratate360");
    });
};