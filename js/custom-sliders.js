$(window).ready(function() {

    /*******************************************
     ******************* sliders
     ********************************************/

    $('.slider-clients').slick({
        appendArrows: '.clients-control',
        prevArrow: '.clients-control-prev',
        nextArrow: '.clients-control-next',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    /* reviews set height */
    var reviews = $('.slider-reviews').find('.slide');
    var maxHeight = 0;

    for(var i = 0; i < reviews.length; i++) {
        if($(reviews[i]).innerHeight() > maxHeight) {
            maxHeight = $(reviews[i]).innerHeight();
        }
    }

    for(var j = 0; j < reviews.length; j++) {
        $(reviews[j]).innerHeight(maxHeight);
    }

    // end of sliders

});