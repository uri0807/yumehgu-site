'use strict';

{
    $(function(){
        $('.header__btn').on('click', function(){
            $('.nav').toggleClass('active');
        });

        $('.nav__btn, .nav__item a').on('click', function(){
            $('.nav').removeClass('active');
        });

        //fadein
        $(window).on('load scroll', function() {
            const fadein = $('.fadein');
            console.log(fadein);

            const windowWidth = $(window).width(); 

            fadein.each(function() {
                const box0ffset = $(this).offset().top;
                const scrollPos = $(window).scrollTop();
                const wh = $(window).height();

                // スマホ（768px以下）は早めに発火　//
                const trigger = windowWidth <= 768 ? 0 : 100;

                if(scrollPos > box0ffset - wh + trigger) {
                    $(this).addClass('animated');
                }
            });
        });
    });
}