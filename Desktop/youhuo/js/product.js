$(function() {
    let img_show = $(".img_show");
    let img_active = $(".img_active");
    // img_show.click(function() {
    //     $(this).attr("src", "images/product_2_2.jpg");
    // })
    img_active.each(function(index, value) {
        $(value).mouseenter(function(index) {
            $(this).css("border", "2px solid #000").siblings(index).css("border", "2px solid #fff");
            let src2 = $(this).attr("src2");
            let src3 = $(this).attr("src3");
            img_show.attr("src", src2);
            img_max.attr("src", src3);
        });
    });
    let zzc = $(".zzc");
    let zzk = $(".zzk");
    let img_max = $(".img_max");
    let img_box = $(".img_box");
    zzc.hover(function() {
        zzk.show();
        img_box.show();
    }, function() {
        zzk.hide();
        img_box.hide();
    })
    zzc.mousemove(function(evt) {
        let e = evt || window.event;
        let x = e.pageX - zzc.offset().left - zzk.width() / 2;
        let y = e.pageY - zzc.offset().top - zzk.height() / 2;
        if (x <= 0) {
            x = 0;
        } else if (x >= zzc.width() - zzk.width()) {
            x = zzc.width() - zzk.width();
        }
        if (y <= 0) {
            y = 0;
        } else if (y >= zzc.height() - zzk.height()) {
            y = zzc.height() - zzk.height();
        }
        zzk.css({ "left": x, "top": y })
        let bfbx = x / (zzc.width() - zzk.width());
        let bfby = y / (zzc.height() - zzk.height());
        img_max.css({ "left": -bfbx * (img_max.width() - img_box.width()), "top": -bfby * (img_max.height() - img_box.width()) });
    });


})