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

    $('.modal').click(function (event) {
        var target = $(event.target);
        if (!target.closest($('.modal-inner')).length) {
            $('.modal').fadeOut();
        }
        if (target.hasClass('close-modal')){
            $('.modal').fadeOut();
        }
    });

    // end of forms

});

