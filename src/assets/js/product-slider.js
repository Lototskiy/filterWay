if (document.querySelector('.product-slider')) {
    var swiper = new Swiper('.product-slider__big .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        // autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.product-slider__big .swiper-button-next',
            prevEl: '.product-slider__big .swiper-button-prev',
        },
        thumbs: {
            swiper: {
                el: '.product-slider__mini .swiper-container',
                slidesPerView: 4,
                direction: 'vertical',
                spaceBetween: 13,
                // autoHeight: false,
                speed: 1000,
            }
        },
        pagination: {
            el: '.product-slider .swiper-pagination',
            clickable: true,
        },
        // breakpoints: {
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     1025: {
        //         slidesPerView: 4,
        //     },
        // },
        on: {
            init: function () {
                setTimeout(function () {
                    this.update();
                }.bind(this), 500);
            },
        }
    });
}