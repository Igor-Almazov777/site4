$(function () {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt=""></img>',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });

    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt=""></img>',
        asNavFor: '.slider-map',
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf__slider',
        focusOnSelect: true,
    });

    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt=""></img>',
    })

    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });


    $('.quantity-button').on('click', function () {
        var summ = parseInt($('.nights').val()) * $('.summ').data('night') * parseInt($('.guests').val());
        $('.summ').html('$' + summ);
    })

    var summ = parseInt($('.nights').val()) * $('.summ').data('night') * parseInt($('.guests').val());
    $('.summ').html('$' + summ);

    $('.surfboard-box-circle').on('click', function (){
        $(this).toggleClass('active')
    });

    new WOW().init();

});
