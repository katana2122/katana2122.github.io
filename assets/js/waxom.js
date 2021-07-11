$(document).ready(function () {

    const slider = document.querySelector('.slider_nav');
    let mySwiper = new Swiper(slider, {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 2000,
        speed: 400,
        slidesPerGroup: 1,
        loop: true,

        slideClass: 'slide',
        wrapperClass: 'wraper_slides',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var header = $("#header"),
        scrollOffset = $(window).scrollTop();

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;


        $("html, body").animate({
            scrollTop: blockOffset
        }, 300);
    });

    var filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        var cat = $(this).data('filter');

        if (cat == 'All') {
            $(".projects_box_item[data-cat]").removeClass("hide");
        } else {
            $(".projects_box_item[data-cat]").each(function () {
                var workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    let nav = $("#header_wrap");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("active_head");
        navToggle.toggleClass("active_toggle");

    });



    var video = document.querySelector("#video"),
        button = document.querySelector("#video_icon");

    button.addEventListener("click", function () {
        video.play()
        video.setAttribute("controls", "controls");
    }, false);

    $(".video_icon").click(function () {
        $(".video_content_wrap").addClass('video_content_wrap_hide');
    })

});
