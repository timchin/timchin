(function ($) {
    'use strict';

    $("nav").find("a").click(function(e) {
        e.preventDefault();
        const section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top - 50
        });
    });

    // Sticky Menu
    $(window).scroll(function () {
        const navEl = $('.navigation');
        if (navEl.offset().top > 100) {
            navEl.addClass('nav-bg');
            $('.top-return').css("display", "block");
        } else {
            navEl.removeClass('nav-bg');
            $('.top-return').css("display", "none");
        }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });


    $('.hero-slider').slick({
        autoplay: true,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        speed: 1000,
        arrows: false,
        adaptiveHeight: false,
        fade: true,
        cssEase: 'linear'
    });

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });
})(jQuery);