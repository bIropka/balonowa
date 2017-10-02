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

    // end of sliders

});