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
})