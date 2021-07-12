$('.drop-down').fadeOut()

$('.drop-down__btn').on('click', function() {
    if ($('.drop-down').is(':hidden')) {
        $('.drop-down').fadeIn(100)
    } else {
        $('.drop-down').fadeOut(100)
    }
})



