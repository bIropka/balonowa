$(window).ready(function() {

    /*******************************************
     ******************* products categories
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
        $(productCategories).find('.category').slideUp();
        $(productCategories).find('[data-category="' + categoryIndex + '"]').slideDown();
    }

    // end of products categories

    /*******************************************
     ******************* discount animation
     ********************************************/

    if ($(window).scrollTop() > $('.discount').offset().top - 500 && $(window).scrollTop() < $('.discount').offset().top - 100)  {
        $('.discount-image').addClass('active');
    } else {
        $('.discount-image').removeClass('active');
    }

    $(window).scroll(function() {

        if ($(window).scrollTop() > $('.discount').offset().top - 500 && $(window).scrollTop() < $('.discount').offset().top - 100)  {
            $('.discount-image').addClass('active');
        } else {
            $('.discount-image').removeClass('active');
        }

    });

    // end of discount animation

});