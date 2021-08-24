$(function () {


    /*active burger-menu */
    let nav = $("#nav_wrap");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("active_nav");
        navToggle.toggleClass("active_toggle");

    });


    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* first accordeon item */
    $('#wedo_1').on("click", function () {
        $('#wedo_arrow_1').toggleClass("active");
        $('#wedo_text_1').toggleClass("active");
    });

    /* second accordeon item */
    $('#wedo_2').on("click", function () {
        $('#wedo_arrow_2').toggleClass("active");
        $('#wedo_text_2').toggleClass("active");
    });

    /* third accordeon item */
    $('#wedo_3').on("click", function () {
        $('#wedo_arrow_3').toggleClass("active");
        $('#wedo_text_3').toggleClass("active");
    });

    /*  accordeon slider */
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });


    /* review first slider */
    var swiper_rewiew = new Swiper('.swiper-container_rewiew', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /* review second slider */
    var swiper_rewiew = new Swiper('.swiper-container_rewiev_second', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});
