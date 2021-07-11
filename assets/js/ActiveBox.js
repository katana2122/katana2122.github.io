$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;


        $(".header_link_a").removeClass("active_link");
        $this.addClass("active_link");/* тут не используется */

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /*active burger-menu */
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("active_nav");
        navToggle.toggleClass("active_toggle");

    });


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset > introH) {
            $('#header_box').addClass("fixed");


        } else {
            $('#header_box').removeClass("fixed");

        }

    }


    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });
});

