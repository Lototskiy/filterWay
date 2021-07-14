$('.footer-content__nav-item h4').click(function () {
    $(this).toggleClass("catalog__menu-item--active");
    $(this).next().slideToggle(1000);
});