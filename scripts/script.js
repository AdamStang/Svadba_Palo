var mainHeaderHeight = document.getElementsByClassName("main-header")[0].offsetHeight;
var moveDownIconHeight = document.getElementsByClassName("move-down-icon")[0].offsetHeight;

// ================   NAMES AND ARROW ANIMATIONS   ================ //
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) { //use `this`, not `document`
        $('.move-down-icon').removeClass("slidein-visible");
        $('.move-down-icon').addClass("slideout-hidden");
    }
    if ($(this).scrollTop() <= 400) { //use `this`, not `document`
        $('.move-down-icon').removeClass("slideout-hidden");
        $('.move-down-icon').addClass("slidein-visible");
    }

    if ($(this).scrollTop() > 400) { //use `this`, not `document`
        $('.main-header').removeClass("slidein-visible");
        $('.main-header').addClass("slideout-hidden");
    }
    if ($(this).scrollTop() <= 400) { //use `this`, not `document`
        $('.main-header').removeClass("slideout-hidden");
        $('.main-header').addClass("slidein-visible");
    }
});
// ================================================================ //