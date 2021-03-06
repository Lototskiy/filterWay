if (document.querySelector('[data-toogles]')) {
    $(document).ready(function () {

        window.allow = true;

        $('.toogles__item-title').on('click', function () {
            if (window.allow) {


                window.allow = false;
                var needNumber = $(this).attr('data-toogles');
                var need_t = $(this);
                var need_w = need_t.closest('.toogles');
                var need_i = need_w.find('.toogles__item[data-toogles="' + needNumber + '"]');
                var need_c = need_i.find('.toogles__item-content');

                var lastNumber = need_w.find('.toogles__item--active').attr('data-toogles');
                var last_t = need_w.find('.toogles__item-title--active');
                var last_i = need_w.find('.toogles__item--active');
                var last_c = last_i.find('.toogles__item-content');

                var type = 'slide';
                if (need_w.hasClass('toogles--fade')) {
                    var type = 'fade';
                }

                if (need_w.hasClass('toogles--mobile') && document.querySelector('body').clientWidth > window.LARGE_TABLET) {
                    window.allow = true;
                    return;
                }

                if ($('.toogles__item-title--active').hasClass('wizard__steps-item')) {
                    $('.wizard__steps-item').find('.wizard__steps--indicator').removeClass('wizard__steps--indicator--active')
                    $(this).find('.wizard__steps--indicator').addClass('wizard__steps--indicator--active')
                    $(this).prevAll('.wizard__steps-item').find('.wizard__steps--indicator').addClass('wizard__steps--indicator--active')
                }

                if (need_i.hasClass('toogles__item--active')) {


                    if (type == 'slide') {

                        $(last_t).removeClass('toogles__item-title--active');

                        $(last_c).slideToggle(500, toogle(type, last_i, need_c, need_i, true));

                    } else {
                        window.allow = true;
                    }

                } else {

                    $(last_t).removeClass('toogles__item-title--active');
                    $(need_t).addClass('toogles__item-title--active');

                    if (type == 'slide') {

                        $(last_c).slideToggle(500, toogle(type, last_i, need_c, need_i));

                    } else {

                        $(last_c).fadeToggle(500, toogle(type, last_i, need_c, need_i));

                    }

                }

            }

        });

        $('.next-wizard').on('click', function () {
            $(this).closest('.wizard').find('.toogles__item-title--active').next().trigger('click')
        })
        $('.back-wizard').on('click', function () {
            $(this).closest('.wizard').find('.toogles__item-title--active').prev().trigger('click')
        })

        $('.cabinet__sidebar-item').on('click', function () {
            $('.cabinet__sidebar-item').find('.cabinet__sidebar-link').removeClass('cabinet__sidebar-link--active')
            $(this).find('.cabinet__sidebar-link').addClass('cabinet__sidebar-link--active')
        })
    });


    function toogle(type, last_i, need_c, need_i, current) {
        $(last_i).removeClass('toogles__item--active');
        // setTimeout(function () {
        //     scrollbar.scrollTo(0, scrollbar.scrollTop + 1);
        // }, 50);

        if (current) {
            window.allow = true;
        } else {

            if (type == 'slide') {

                $(need_c).slideToggle(500, toogles_after(need_i));

            } else {
                setTimeout(function () {
                    $(need_c).fadeToggle(500, toogles_after(need_i));
                }, 500);

            }

        }
    }

    function toogles_after(need_i) {
        $(need_i).addClass('toogles__item--active');
        window.allow = true;
    }
    $('.table-toogles__item-title').on('click', function () {
        $('.table-toogles__item-title').removeClass('table-toogles__item-title--active')
        $('.table-toogles__item-title').next().removeClass('table-toogles__item--active')
        $(this).addClass('table-toogles__item-title--active')
        var huy = $(this).next().addClass('table-toogles__item--active')
        console.log(huy)
    })
}

