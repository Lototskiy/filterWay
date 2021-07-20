let btnFilter = $('.catalog__row-filter');
let sidebar = $('.catalog__sidebar');
let sidebarClose = $('.catalog__sidebar-close');


btnFilter.click(function () {
    sidebar.addClass('catalog__sidebar--active');
})
sidebarClose.click(function () {
    sidebar.removeClass('catalog__sidebar--active');
})