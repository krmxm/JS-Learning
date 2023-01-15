$(document).ready(function(){
  $('.carousel__inner').slick({
    centerMode: true,
    centerPadding: 'auto',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/prevarrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/slider/nextarrow.png"></img></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false,
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          dots: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          variableWidth: false,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });

  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #modal-form').fadeIn('slow');
  });
  $('.modal__close').on ('click', function () {
      $('.overlay, #modal-form, #thanks').fadeOut('slow');
  });

  /* $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
  }); */

  // Validate

  function valideForms(form) {
    $(form).validate({
      rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
              required: true,
              email: true
          }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйства, введите свою почту",
          email: "Неправильно введён адрес почты"
        }
      },
      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: $(form).attr('action'),
          data: $(form).serialize()
        }).done(function () {
          $(form).find("input").val("");
          $('#modal-form').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
          $(form).trigger('reset');
        });
        return false;
      }
    });
  };

  valideForms('#questions form');
  valideForms('#consultation-form form');
  valideForms('#modal-form form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

/*   $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
     type: "POST",
     url: "mailer/smart.php",
     data: $(this).serialize()
    }).done(function() {
     $(this).find("input").val("");
     $('#consultation, #oder').fadeOut();
     $('.overlay, #thanks').fadeIn('slow');
     $('form').trigger('reset');
    });
    return false;
 }); */

 

  // Smooth scroll and pageup

  $(window).scroll (function(){
    if ($(this).scrollTop() > 700 ) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  // Hamburger

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});
});