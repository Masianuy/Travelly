$(document).ready(function() {

    $('#gumburger').click(function() {
        $('.click-menu').animate({right: '0px'}, 200);
        $('#header').animate({right: '285px'}, 200);
    });

    $('.icon-close').click(function() {
        $('.click-menu').animate({right: '-285px'}, 200);
        $('#header').animate({right: '0px' }, 200);
    });
});