if (document.querySelector('.catalog__sidebar')) {

    $('.catalog__filter').click(function () {
        $(this).toggleClass("catalog__filter--active");
        $(this).next().slideToggle(1000);
    });
    $('.catalog__menu-item').click(function () {
        $(this).toggleClass("catalog__menu-item--active");
        $(this).next().slideToggle(1000);
    });
}