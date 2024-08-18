// back to top button 

$(document).ready(function () {
    var back_to_top_button = ['<button class="btn-top"><i class="fa fa-angle-up" aria-hidden="true"></i></button>'].join("");
    $("body").append(back_to_top_button)

    $(".btn-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.btn-top').fadeIn();
            } else {
                $('.btn-top').fadeOut();
            }
        });

        $('.btn-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 100);
            return false;
        });
    });

});

// Responsive Menu

$(document).ready(function () {
    $(document).on('click', '.RN-item', function (e) {
        e.preventDefault();
        var submenu = $(this).next('.RN-Submenu-li');
        $('.RN-Submenu-li').not(submenu).slideUp();
        submenu.slideToggle();
    });
});

$(document).on('click', '.burger-menu', () => {
    let responsiveMenu = $('#responsive-navigation');
    responsiveMenu.show();
    responsiveMenu.animate({
        right: 0
    }, 300);
    $('.closeRN').click(function () {
        responsiveMenu.animate({
            right: '-10000px'
        }, 1000);
    })
})


// Project gallery
$(document).ready(function () {
    $('.image-list img').on('click', function () {
        var newSrc = $(this).attr('src');
        $('#large-image').attr('src', newSrc);
    });
});
