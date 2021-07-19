if (document.querySelector('.catalog-slider')) {
    var swiper = new Swiper('.catalog-slider .swiper-container', {

        speed: 1000,
        autoHeight: true,
        loop: true,
        navigation: {
            nextEl: '.catalog-slider .swiper-button-next',
            prevEl: '.catalog-slider .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1025: {
                slidesPerView: 8,
                spaceBetween: 10,
            },
        },
        on: {
            init: function () {
                setTimeout(function () {
                    this.update();
                }.bind(this), 500);
            },
        }
    });
}