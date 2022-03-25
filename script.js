$(function(){

    
    var w = window.innerWidth;
    console.log(w);

    if (w <= 450) {
        $(".header-image").css({
            "display": "inline"
        });
        $(".section-one-image").css({
            "width": "100%"
        });
        $(".section-two-image").css({
            "width": "100%"
        });
        $(".section-three-image").css({
            "width": "100%"
        });
        $(".section-four-image").css({
            "width": "100%"
        });
        $(".section-five-image").css({
            "width": "100%"
        });
        $(".section-six-image").css({
            "width": "100%"
        });
    }


});