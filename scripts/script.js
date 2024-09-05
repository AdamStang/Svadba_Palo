const widnowHeight = window.innerHeight / 3;
console.log(widnowHeight);

// ================   NAMES AND ARROW ANIMATIONS   ================ //
$(window).scroll(function() {
    if ($(this).scrollTop() > widnowHeight) { //use `this`, not `document`
        $('.move-down-icon').removeClass("slidein-visible");
        $('.move-down-icon').addClass("slideout-hidden");
    }
    if ($(this).scrollTop() <= widnowHeight) { //use `this`, not `document`
        $('.move-down-icon').removeClass("slideout-hidden");
        $('.move-down-icon').addClass("slidein-visible");
    }

    if ($(this).scrollTop() > widnowHeight) { //use `this`, not `document`
        $('.main-header').removeClass("slidein-visible");
        $('.main-header').addClass("slideout-hidden");
    }
    if ($(this).scrollTop() <= widnowHeight) { //use `this`, not `document`
        $('.main-header').removeClass("slideout-hidden");
        $('.main-header').addClass("slidein-visible");
    }
});
// ================================================================ //