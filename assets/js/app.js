$(function () {

    $(function (){
        $('#introfirst').ripples({
            resolution: 256,
            dropRadius : 20,
            perturbance: .1,
        });
    });
    
    /*active burger-menu */
    let nav = $("#header_nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("active_nav");
        navToggle.toggleClass("active_toggle");

    });

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

    /* Fixed Header */

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        sectionsH = $("#third_section").innerHeight(),
        anchor = $('#anchor');
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= 1200) {
            anchor.addClass("anchor_fixed");
        } else {
            anchor.removeClass("anchor_fixed");
        }
    }
});