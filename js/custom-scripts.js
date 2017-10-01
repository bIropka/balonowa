$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    /*******************************************
    ****************** top parallax
    *******************************************/

    var scene = document.getElementById('scene');

    var parallaxInstance = new Parallax(scene);

    if($(window).width() < 1200) {
        parallaxInstance.disable();
    } else {
        parallaxInstance.enable();
    }

    $(window).resize(function() {

        if($(window).width() < 1200) {
            parallaxInstance.disable();
        } else {
            parallaxInstance.enable();
        }

    });

    // end of top parallax

    /*******************************************
    ******************* products
    ********************************************/

    changeCategory();

    $('.product-filter-item').click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        changeCategory();
    });

    function changeCategory() {
        var productCategories = $('.product-categories');
        var categoryIndex = $('.product-filter').find('.active').attr('data-category');
        $(productCategories).find('.active').removeClass('active');
        $(productCategories).find('[data-category="' + categoryIndex + '"]').addClass('active');
    }

    $('.product-categories').on('click', '#preview-img-modal', function() {
        $('#preview-img-modal').find('img').prependTo($('.product-image.active'));
        $('#preview-img-modal').fadeOut();
        setTimeout(function() {
            $('#preview-img-modal').remove();
        }, 500);
        $('.product-image.active').removeClass('active');
    });

    $('.product-to-preview').click(function() {
        $('<div id="preview-img-modal"></div>').appendTo($('.product-categories')).fadeIn();
        $(this).parents('.product-image').find('img').appendTo($('#preview-img-modal'));
        $(this).parents('.product-image').addClass('active');
    });

    // end of products

    /*******************************************
     ******************* sliders
     ********************************************/

    $('.slider-clients').slick({
        appendArrows: '.clients-control',
        prevArrow: '.clients-control-prev',
        nextArrow: '.clients-control-next',
        slidesToShow: 3
    });

    // end of sliders

});

