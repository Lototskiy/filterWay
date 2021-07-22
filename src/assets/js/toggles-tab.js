$('.toggle').click(function (e) {
    e.preventDefault();
    
    $('.pay-tabs').find('.radio__input').attr('checked', false)
    $('.toggle').removeClass('toggle--active')
    $(this).find('.radio__input').attr('checked', true)
    $(this).addClass('toggle--active')


    var $this = $(this);

    if ($this.hasClass('toggle--active')) {
        $this.removeClass('toggle--active')
    } else {
        $this.addClass('toggle--active')
    }

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});