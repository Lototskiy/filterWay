let linkMap = $('.catalog__row-filter');
let map = $('.catalog__sidebar');
let closeMap = $('.catalog__sidebar-close');


linkMap.click( function () {
    map.classList.add('catalog__sidebar--active');
})
closeMap.click(function () {
    map.classList.remove('catalog__sidebar--active');
})