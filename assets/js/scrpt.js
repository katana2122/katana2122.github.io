'use strict'

$(function () {

    /* бургер меню */
    let trigger = $('#hamburger'),
        isClosed = true,
        nav = $('#nav');

    trigger.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass("active_nav");
        trigger.toggleClass("is-open");

    });

    /* плавный скрол */

    $('.nav a[href*="#"]').on('click', function (e) {
        e.preventDefault();
       
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
      });

      /* кнопка якорь наверх */

      let bottom_btn = $('#bottom_btn');

      $(window).on("scroll", function () {
        let scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= 700) {
          bottom_btn.addClass("bottom_btn_true");
        } else {
          bottom_btn.removeClass("bottom_btn_true");
        }
    }

    $('#bottom_btn[href*="#"]').on('click', function (e) {
      e.preventDefault();
     
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
    });

      /* форма */

      $('#form').submit(function (e){

        
        
        let name = $('#form_name').val(),
            mail = $('#form_mail').val(),
            textarea = $('#textarea').val(),
            error_mes = $('#error_mes');

            $('.error_mes').remove();
            $('.correct_mes').remove();
            $('#form_name').removeClass("error_border");
            $('#form_mail').removeClass("error_border");
            $('#textarea').removeClass("error_border");

            if (name == ""){
              $('#textarea').after('<div class="error_mes">имя не заполненно</div>');
              $('#form_name').addClass("error_border");
              e.preventDefault();
              return false;
            }

            if (name.length < 2){
              $('#textarea').after('<div class="error_mes">имя слишком короткое</div>');
              $('#form_name').addClass("error_border");
              e.preventDefault();
              return false;
            }

            if (name.length > 12){
              $('#textarea').after('<div class="error_mes">имя слишком длинное</div>');
              $('#form_name').addClass("error_border");
              e.preventDefault();
              return false;
            }

            if (mail == ""){
              $('#textarea').after('<div class="error_mes">укажите почту</div>');
              $('#form_mail').addClass("error_border");
              e.preventDefault();
              return false;
            }

            if (textarea == ""){
              $('#textarea').after('<div class="error_mes">введите текст</div>');
              $('#textarea').addClass("error_border");
              e.preventDefault();
              return false;
            }

            if (textarea.length < 5){
              $('#textarea').after('<div class="error_mes">сообщение слишком короткое</div>');
              $('#textarea').addClass("error_border");
              e.preventDefault();
              return false;
            }

            if (textarea.length > 1000){
              $('#textarea').after('<div class="error_mes">сообщение слишком длинное</div>');
              $('#textarea').addClass("error_border");
              e.preventDefault();
              return false;
            }


            else{
              e.preventDefault();
              $('#textarea').after('<div class="correct_mes">все заполнено верно-в будущем эта кнопка отправит ваше сообщение мне на почту</div>');
            }
          });

      });       