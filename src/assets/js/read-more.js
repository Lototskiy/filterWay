if (document.querySelector('.read-more')) {
    $('.read-more').click(function () {
        $(this).prev().slideToggle();
        if ($('.read-more').text() == "Read more") {
            $(this).text("Close")
        } else {
            $(this).text("Read more")
        }
    });
}