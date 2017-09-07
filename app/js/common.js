$(document).ready(function() {

    $(".categories__link").click(function (e) {
        e.preventDefault();
        $(".categories__link").removeClass("checked-category");
        $(this).toggleClass("checked-category");
        var dataCategory = $(this).attr("data-category");
        $(".category-produts").removeClass("hidden");
        $(".category-produts").addClass("hidden");
        jQuery.each($(".category-produts"),function(i,val){
            if($(val).attr("data-category") == dataCategory) {
                $(val).removeClass("hidden");
            }
        });
    })
});