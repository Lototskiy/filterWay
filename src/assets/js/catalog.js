let linkMap = document.querySelector('.catalog__row-filter');
let map = document.querySelector('.catalog__sidebar');
let closeMap = document.querySelector('.catalog__sidebar-close');


linkMap.addEventListener('click', function () {
    map.classList.add('catalog__sidebar--active');
})
closeMap.addEventListener('click', function () {
    map.classList.remove('catalog__sidebar--active');
})