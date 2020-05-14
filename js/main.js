$(function(){
    /* слайдер для intro */
    $('.intro__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="intro__arrow intro__arrow--left"></div>',
        nextArrow: '<div class="intro__arrow intro__arrow--right"></div>',
        swipe: false,
        asNavFor: '.miniature, .index',
    });
    
    $('.miniature').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.intro__slider',
        arrows: false,
        swipe: false,
    });
    
    $('.index').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.intro__slider',
        arrows: false,
        swipe: false,
    });
    
    /* слайдер для product */
    $('.product__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow product__slider-arrow product__slider-arrow--left">Back</div>',
        nextArrow: '<div class="slider-arrow product__slider-arrow product__slider-arrow--right">Next</div>',
        swipe: false
    });
    
    /* слайдер для discount-slider */
    $('.discount-slider__products-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow discount-slider__slider-arrow discount-slider__slider-arrow--left ">Back</div>',
        nextArrow: '<div class="slider-arrow discount-slider__slider-arrow discount-slider__slider-arrow--right">Next</div>',
        swipe: false
    });

    /* слайдер для showcase */
    $('.showcase__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<div class="slider-arrow showcase__slider-arrow showcase__slider-arrow--left ">Back</div>',
        nextArrow: '<div class="slider-arrow showcase__slider-arrow showcase__slider-arrow--right">Next</div>',

        responsive: [
            {
                breakpoint: 615,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
              }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
              }
            }
        ]
    });
    
    /* слайдер для category */
    $('.category__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<div class="category__arrow category__arrow--left"></div>',
        nextArrow: '<div class="category__arrow category__arrow--right"></div>',
        
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
              }
            },
            {
                breakpoint: 955,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
              }
            },
        ]
    });

    /* адаптивное меню */
    $('.header__tab--menu').on('click', function(){
        $('.nav').addClass('active')
    });

    $('.nav__close').on('click', function(){
        $('.nav').removeClass('active')
    });

    /* плавный скролл */
    $('[data-link]').on('click', function(e){
        e.preventDefault();
        let blockId = $(this).data('link'),
            blockOffSet = $(blockId).offset().top;
        $('html, body').animate({
            scrollTop: blockOffSet
        });

        if ($(window).width() < 1075) {
            $('.nav').removeClass('active')
        } 
    });
    

    /* фильтрация по категориям */
    let filter = $('[data-filter]')
    
    filter.on('click', function(){
        cat = $(this).data('filter');

        $(this).addClass('active')
        $('[data-filter]').not(this).removeClass('active')
    
        $('[data-cat]').each(function(){
            let productCat = $(this).data('cat')
            
            if(cat == 'all') {
                $('[data-cat]').removeClass('hide')
            } else {
                if(cat != productCat) {
                    $(this).addClass('hide')
                } else {
                    $(this).removeClass('hide')
                }
            }
        });
    });
    
})
