$(window).scroll(function () {
    if ($(this).scrollTop() > 170) {
        if ($('#Head').hover(function () {
                $('.whitemenuuser').addClass('white_scroll');
            },
            function () {
                if ($('.whitemenuuser').hover(function () {
                    $('.whitemenuuser').removeClass('white_scroll');
                }));
            }));
    }
    else {
        $('.whitemenuuser').removeClass('white_scroll');
    }
    if ($('.white_field').hover(function () {
            $('.whitemenuuser').addClass('white_scroll');
        },
        function () {
            if ($('.whitemenuuser').hover(function () {
                $('.whitemenuuser').removeClass('white_scroll');
            }));
        }));
});
