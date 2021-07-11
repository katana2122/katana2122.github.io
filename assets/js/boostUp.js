$(function () {
    /* слайдер*/
    const swiper = new Swiper(".swiper-container_intro", {
        pagination: {
            el: '.swiper-pagination_intro',
            clickable: true,
        },
    });
    /* бургер меню*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("active_nav");
        navToggle.toggleClass("active_toggle");

    });

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;


        $(".nav_link").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
});


