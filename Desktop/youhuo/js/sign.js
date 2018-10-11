$(function() {
    let down_app = $(".down_app");
    let down_app_img = $(".down_app_img");
    down_app.hover(function() {
        down_app_img.show();
    }, function() {
        down_app_img.hide();
    });
    down_app_img.hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();
    });

    let hdbox = $(".hdbox");
    let hdk = $(".hdk");
    let hd = $(".hd");
    hdbox.hover(function() {
        hdk.stop().animate({ "margin-left": "0" }, function() {
            hd.show();
        });
    }, function() {
        hdk.stop().animate({ "margin-left": 65 });
        hd.hide();
    })


    let country = $(".country");
    let country_list = $(".country_list");
    country.click(function() {
        country_list.slideDown();
        return false;
    });
    $("html").click(function() {
        country_list.slideUp();
    })

    let xs = $(".xs");
    let yc = $(".yc");
    let left = $(".left");
    let right = $(".right");
    right.click(function() {
        left.css({ "background": "none", "color": "#000" });
        $(this).css({ "background-image": "url(images/sprite.passport.png)", "background-position": "-323px -35px", "color": "#fff" });
        yc.hide();
        xs.show();
    })
    left.click(function() {
        right.css({ "background": "none", "color": "#000" });
        $(this).css({ "background-image": "url(images/sprite.passport.png)", "background-position": "-323px -35px", "color": "#fff" });
        xs.hide();
        yc.show();
    })



    let qhpc = $(".qhpc");
    let yd = $(".center_2_3");
    let qhyd = $(".qhyd");
    let pc = $(".center_2_2");
    qhpc.click(function() {
        pc.hide();
        yd.show();
    })
    qhyd.click(function() {
        yd.hide();
        pc.show();
    })
})