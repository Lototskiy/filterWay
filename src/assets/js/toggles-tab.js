$('.toggle').click(function(e) {
    e.preventDefault();
  $('.pay-tabs').find('.radio__input').attr('checked',false)
  $(this).find('.radio__input').attr('checked',true)


  var $this = $(this);

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