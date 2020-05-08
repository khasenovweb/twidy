$(document).ready(function () {
    $(".idols__slider").owlCarousel({
        items: 6,
        margin: 40,
        center: true,
        loop: true,
    });

    $(".faq__tab__content").slideUp();
    $("[data-tab-link]").click(function () {
        var id = $(this).attr("data-tab-link");
        $('[data-tab-arrow="' + id + '"]').toggleClass("active");
        $('[data-tab-content="' + id + '"]').slideToggle();
    });

    var header = new Headhesive(".head");
});
