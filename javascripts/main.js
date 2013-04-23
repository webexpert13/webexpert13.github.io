function menuHandler() {
    jQuery("#header .header-top .menu ul li").live('click', function () {
        jQuery("#header .header-top .menu ul").find("li.active").removeClass("active");
        jQuery(this).addClass("active");
    });
}