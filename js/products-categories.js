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

});