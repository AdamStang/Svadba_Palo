$(window).scroll(function() {
    if ($(this).scrollTop() > 200) { //use `this`, not `document`
        $('.move-down-icon').css({
            'visibility': 'hidden',
            'scale': '0',
            'height': '0'
        });
    }
    if ($(this).scrollTop() <= 200) { //use `this`, not `document`
        $('.move-down-icon').css({
            'visibility': 'visible',
            'scale': '1',
            'height': '42px'
        });
    }
});