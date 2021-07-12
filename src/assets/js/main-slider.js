if (document.querySelector('.main-slider')) {
    var swiper = new Swiper('.main-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        //autoplay: {
        //delay: 2000,
        //},
        autoHeight: true,
        loop: true,
        //centeredSlides: true,
        //initialSlide: 1,
        //slideToClickedSlide: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
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