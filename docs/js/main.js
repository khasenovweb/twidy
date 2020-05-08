$(document).ready(function () {
    $(".idols__slider").owlCarousel({
        items: 6,
        margin: 40,
        center: true,
        loop: true,
        responsive: {
            0: {
                items: 1.5,
                margin: 20,
            },
            600: {
                items: 2,
                margin: 20,
            },
            1000: {
                items: 4,
            },
            1600: {
                items: 6,
            },
        },
    });

    $(".faq__tab__content").slideUp();
    $("[data-tab-link]").click(function () {
        var id = $(this).attr("data-tab-link");
        $('[data-tab-arrow="' + id + '"]').toggleClass("active");
        $('[data-tab-content="' + id + '"]').slideToggle();
    });

    var header = new Headhesive(".head");

    $("a[data-role='scroll']").mPageScroll2id({
        offset: 81,
        onStart: function () {
            $(".mobilenav").hide();
        },
    });

    $(".head__hamburger").click(function () {
        $(".mobilenav").show();
    });
    $(".mobilenav__close").click(function () {
        $(".mobilenav").hide();
    });
});
