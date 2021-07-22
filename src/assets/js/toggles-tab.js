$('.toggle').click(function (e) {
    e.preventDefault();
    
    $('.pay-tabs').find('.radio__input').attr('checked', false)
    $('.toggle').parent().removeClass('list-active')
    $(this).find('.radio__input').attr('checked', true)
    $(this).parent().addClass('list-active')


    var $this = $(this);

    // if ($this.closest('li').hasClass('list-active')) {
    //     $this.removeClass('list-active')
    //     console.log($this)
    // } else {
    //     $this.addClass('list-active')
    // }

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
