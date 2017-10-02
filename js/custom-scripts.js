$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    /*******************************************
    ****************** top parallax and header
    *******************************************/

    var scene = document.getElementById('scene');

    var parallaxInstance = new Parallax(scene);

    if($(window).width() < 1200) {
        parallaxInstance.disable();
        $('header[role="banner"]').addClass('fixed');

    } else {
        parallaxInstance.enable();
        $('header[role="banner"]').removeClass('fixed');
    }

    if($(window).scrollTop() > 50) {
        $('header[role="banner"]').addClass('fixed');

    } else if($(window).width() > 1199) {
        $('header[role="banner"]').removeClass('fixed');
    }

    if($(window).width() < 480) {
        $('.phone').appendTo('nav');
    } else {
        $('.phone').insertAfter('.logo');
    }

    $(window).resize(function() {

        if($(window).width() < 1200) {
            parallaxInstance.disable();
            $('header[role="banner"]').addClass('fixed');
        } else {
            parallaxInstance.enable();
            $('header[role="banner"]').removeClass('fixed');
        }

        if($(window).width() < 480) {
            $('.phone').appendTo('nav');
        } else {
            $('.phone').insertAfter('.logo');
        }

    });

    $(window).scroll(function() {

        if($(window).scrollTop() > 50) {
            $('header[role="banner"]').addClass('fixed');

        } else if($(window).width() > 1199) {
            $('header[role="banner"]').removeClass('fixed');
        }

    });

    $('.burger').click(function() {

        $(this).toggleClass('active');

        if($(this).hasClass('active')) {
            $(this).siblings('nav').slideDown().css('display', 'flex');
        } else {
            $(this).siblings('nav').slideUp();
        }

    });

    $('a[href^="#"]').click(function(){

        var target = $(this).attr('href');

        $('html, body').animate({scrollTop: $(target).offset().top}, 800);

    });

    // end of top parallax and header

    /*******************************************
     ******************* products preview
     ********************************************/

    $('.products').on('click', '#preview-img-modal', function() {
        $('#preview-img-modal').find('img').prependTo($('.product-image.active'));
        $('#preview-img-modal').fadeOut();
        setTimeout(function() {
            $('#preview-img-modal').remove();
        }, 500);
        $('.product-image.active').removeClass('active');
    });

    $('.product-to-preview').click(function() {
        $('<div id="preview-img-modal"></div>').appendTo($('.products')).fadeIn();
        $(this).parents('.product-image').find('img').appendTo($('#preview-img-modal'));
        $(this).parents('.product-image').addClass('active');
    });

    // end of products

    /*******************************************
     ******************* forms
     ********************************************/

    $('form').validatr({
        showall: true,
        valid: function() {

            var formID = $(this).attr('id');

            var formNm = $('#' + formID);
            var scriptFile;
            if (formID === 'form-mailing') scriptFile = 'php/mailing.php';
            if (formID === 'form-order') scriptFile = 'php/order.php';
            $.ajax({
                type: "POST",
                url: scriptFile,
                data: formNm.serialize(),
                success: function (data) {
                    $(location).attr('href', 'page-thanks.html');
                },
                error: function (data) {
                    $('.modal').fadeOut();
                    $('.modal-error').fadeIn().css('display', 'flex');
                }
            });
            return false;
        }
    });

    $('.product-to-order').click(function() {
        var image = $(this).siblings('.product-image').find('img').clone();
        var name = $(this).siblings('h3').find('a').text();
        var cost = $(this).siblings('.product-cost').find('span').text();
        createModalOrder(image, name, cost);
    });

    $('.modal').click(function (event) {
        var target = $(event.target);
        if (!target.closest($('.modal-inner')).length) {
            $('.modal').fadeOut();
        }
        if (target.hasClass('close-modal')){
            $('.modal').fadeOut();
        }
    });

    $('.modal-product-amount i').click(function() {
        var counter = parseInt($(this).siblings('.modal-product-amount-value').text());
        var cost = parseInt($('.modal-product-cost-value span').text()) / counter;
        var deliveryCost;

        if(document.getElementById('order-delivery-true').checked) {
            deliveryCost = parseInt($('.modal-delivery-cost-value span').text());
        } else {
            deliveryCost = 0;
        }

        if($(this).hasClass('modal-product-amount-minus')) {
            if(counter > 1) {
                $(this).siblings('.modal-product-amount-value').text(--counter);
            }
        } else {
            $(this).siblings('.modal-product-amount-value').text(++counter);
        }

        $('.modal-product-cost-value span').text(cost * counter);

        $('.modal-result-summa-value span').text(cost * counter + deliveryCost);

        $('#order-cost').val(cost * counter + deliveryCost);

    });

    $('.modal-order input[type="radio"]').change(function() {

        var deliveryCost = parseInt($('.modal-delivery-cost-value span').text());
        var resultCost = parseInt($('.modal-result-summa-value span').text());

        if(document.getElementById('order-delivery-true').checked) {
            $('.modal-result-summa-value span').text(resultCost + deliveryCost);
            $('#order-cost').val(resultCost + deliveryCost);
            document.getElementById('order-address').required = true;
            $('#order-address').val('');
        } else {
            $('.modal-result-summa-value span').text(resultCost - deliveryCost);
            $('#order-cost').val(resultCost - deliveryCost);
            document.getElementById('order-address').required = false;
            $('#order-address').val('Odbior osobisty');
        }

    });

    function createModalOrder(img, name, cost) {

        var deliveryCost = parseInt($('.modal-delivery-cost-value span').text());

        $('.modal-product-image').html($(img));
        $('.modal-order h2').html(name);
        $('.modal-product-cost-value span').html(cost);
        $('.modal-product-amount-value').text(1);
        $('.modal-result-summa-value span').text(parseInt(cost) + deliveryCost);
        $('#order-product').val(name);
        $('#order-cost').val(parseInt(cost) + deliveryCost);

        $('.modal-order').fadeIn().css('display', 'flex');

    }

    // end of forms

});

