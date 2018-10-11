$(function() {
    let banner_bimg = $("#banner .banner-con>img");
    let banner_mark = $("#banner .banner-con .mark");
    let lbtn = $("#banner .banner-con .btn_l");
    let rbtn = $("#banner .banner-con .btn_r");
    let indeX = 0;
    lbtn.mouseenter(function() {
        $(this).css("opacity", 0.7);
    });
    lbtn.mouseleave(function() {
        $(this).css("opacity", 0.55);
    });
    rbtn.mouseenter(function() {
        $(this).css("opacity", 0.7);
    });
    rbtn.mouseleave(function() {
        $(this).css("opacity", 0.55);
    });
    lbtn.click(function() {
        banner_mark.removeClass("active");
        indeX--;
        if (indeX == -1) {
            indeX = banner_bimg.length - 1;
        }
        slide(indeX)
    });
    rbtn.click(function() {
        banner_mark.removeClass("active");
        indeX++;
        if (indeX == banner_bimg.length) {
            indeX = 0;
        }
        slide(indeX)
    });
    // 封装轮播函数
    function slide(indeX) {
        banner_bimg.each(function(index, value) {
            $(value).css("opacity", 0);
        })
        banner_bimg.eq(indeX).css("opacity", 1); //这里真重要
        banner_mark.each(function(index, value) {
            $(value).css("opacity", 0.3);

        })
        banner_mark.eq(indeX).css("opacity", 0);
    }
    banner_mark.each(function(index, value) {
        $(value).mouseover(function() {
            $(this).addClass("active").parent().siblings().children(1).removeClass("active");
            indeX = index;
            slide(indeX);
        })
    })
    let nav_xl1 = $(".xiala1");
    let nav_xl_1 = $(".xiala_1");
    nav_xl1.each(function(index, value) {
        $(value).mouseenter(function() {
            nav_xl_1.eq(index).show();
        })
    })
    nav_xl1.each(function(index, value) {
        $(value).mouseleave(function() {
            nav_xl_1.eq(index).hide();
        })
    })
    nav_xl_1.mouseenter(function() {
        $(this).css("display", "block");
    });
    nav_xl_1.mouseleave(function() {
        $(this).css("display", "none");
    });
    let fdewm = $(".fdewm");
    let fdcha = $(".fdcha");
    fdcha.click(function() {
        $(this).hide();
        fdewm.hide();
    })
    let guanzhu = $(".guanzhu");
    let guanzhu_1 = $(".guanzhu_1");
    guanzhu.hover(function() {
        guanzhu_1.show();
    }, function() {
        guanzhu_1.hide();
    });
    guanzhu_1.hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
    let shouji = $(".shouji");
    let shouji_1 = $(".shouji_1");
    shouji.hover(function() {
        shouji_1.show();
    }, function() {
        shouji_1.hide();
    });
    shouji_1.hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });
    let gwc = $(".input3");
    let gwclist = $(".input3_1");
    gwc.hover(function() {
        gwclist.show();
    }, function() {
        gwclist.hide();
    })
    gwclist.hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    })
})