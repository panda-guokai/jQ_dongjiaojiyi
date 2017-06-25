/**
 * Created by lenvo on 2017/6/15.
 */
$(function () {
        $(".dabeij").css({
            width: $(window).width(),
            height:1500,
            overflow:"hidden",
        });
    $(".top1").css("width",$(window).width())
    $("dl").mouseenter(function () {
        $(this).children("dt").children("a").addClass("active");
        $(this).children("dd").stop().slideDown();
    }).mouseleave(function () {
        $(this).children("dt").children("a").removeClass("active");
        $(this).children("dd").stop().slideUp();

    });

    $(".menu li").click(function () {
        $(this).css("backgroundColor", "#0a8043").siblings()
            .css("backgroundColor", "");
        var indx = $(this).index();
        if (indx == 0) {
            $(".main>div").eq(0).fadeIn(1000).siblings("div")
                .fadeOut(1000);
            $(".a1").css("display", "block");
            $(".a2").css("display", "block");
        } else {
            $(".main>div").eq(indx).fadeIn(1000).siblings("div")
                .fadeOut(1000);
            $(".a1").css("display", "none");
            $(".a2").css("display", "none");
        }
    });
    //第一版的轮播图
    $(".a1").fadeIn(800).animate({"left": -70});
    $(".a2").fadeIn(800).animate({"right": -70});
    var pic = 0;var pic1=0;
    var len = $(".left>ul>li").length - 1;
    var len2 = $(".right>ul>li").length - 1;
    $(".a2").click(function () {
        if (pic == len) {
            $(".left>ul").stop().animate({"left": 0}, 0);
            pic = 0;
        }
        pic++;
        $(".left>ul").stop().animate({"left": -pic * 615});
        //左边
        if (pic1 == 0) {
            $(".right>ul").stop().animate({"left": -len2 * 615}, 0);
            pic1 = len2;
        }
        pic1--;
        $(".right>ul").stop().animate({"left": -pic1 * 615});
    });
    $(".a1").click(function () {
        if (pic == 0) {
            $(".left>ul").stop().animate({"left": -len * 615}, 0);
            pic = len;
        }
        pic--;
        $(".left>ul").stop().animate({"left": -pic * 615});
        //
        if (pic1 == len2) {
            $(".right>ul").stop().animate({"left": 0}, 0);
            pic1 = 0;
        }
        pic1++;
        $(".right>ul").stop().animate({"left": -pic1 * 615});
    });
    $(".first ul li").mouseenter(function () {
        $(this).children("span").stop().slideDown().end().siblings()
            .find("span").stop().slideUp();
        $(this).find("i").stop().fadeIn().end().siblings().find("i").stop().fadeOut();
    });
    $(".first ul li").mouseleave(function () {
        $(this).children("span").stop().slideUp();
        $(this).children("i").stop().fadeOut()

    });

});
