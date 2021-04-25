// // START:: HANDILING PRELOADER
// $(window).on('load', function() {
//   $(".pre_loader").fadeOut('slow');
// })
// // END:: HANDILING PRELOADER

$(document).ready( function() {
  // START:: STKY NAV BAR
    $(window).on('scroll',function() {
      if ( $(window).scrollTop() ) {
        $('#custom_nav').addClass('stiky');
      } else {
        $('#custom_nav').removeClass('stiky');
      }
    });
  // END:: STKY NAV BAR


























// ------------step-wizard-------------
  $('.nav-tabs > li a[title]').tooltip();
  
  //Wizard
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target);
    if (target.parent().hasClass('disabled')) {
      return false;
    }
  });

  $(".next-step").click(function (e) {
    var active = $('.wizard .nav-tabs li.active');
    active.next().removeClass('disabled');
    nextTab(active);
  });

  $(".prev-step").click(function (e) {
    var active = $('.wizard .nav-tabs li.active');
    prevTab(active);
  });

  $('.nav-tabs').on('click', 'li', function() {
    $('.nav-tabs li.active').removeClass('active');
    $(this).addClass('active');
  });





























//   // START:: WOW JS
//   wow = new WOW(
//     {
//     boxClass:     'wow',     
//     animateClass: 'animated',
//     offset:       150,         
//     mobile:       false,      
//     live:         true       
//   }
//   )
//   wow.init();
//   // END:: WOW JS

//   // START:: TOGGLE MENU
//   $('#open_menu').on('click', () => {
//     $('.small_menu').css('display', 'flex');
//     setTimeout(() => {
//       $('.small_menu').css('right', '0');
//     }, 300);
//     $('body').css('overflow', 'hidden');
//   });

//   $('#colse_menu').on('click', () => {
//     $('.small_menu').css('right', '-100%');
//     setTimeout(() => {
//       $('.small_menu').css('display', 'none');
//     }, 1000);
//     $('body').css('overflow-y', 'auto');
//   });
//   // END:: TOGGLE MENU

//   // START:: OWL CAROUSEL
//   $('#videos_slider').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:6000,
//     autoplayHoverPause:true,
//     margin:10,
//     nav:true,
//     dots: false,
//     items:1,
//     rtl: true, 
//     responsive:{
//       0:{
//         items:1,
//         nav:true
//       },
//       600:{
//         items:1,
//         nav:false
//       },
//       1000:{
//         items:3,
//         nav:true,
//         loop:false
//       }
//     }
//   });

//   $('#team').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:6000,
//     autoplayHoverPause:true,
//     margin:60,
//     items:1,
//     rtl: true, 
//     responsive:{
//       0:{
//         items:1,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       600:{
//         items:2,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       1000:{
//         items:3,
//         nav:true,
//         dots: true,
//         loop:true
//       }
//     }
//   });

  $('#clients').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:10,
    nav: false,
    dots: false,
    items:1,
    rtl: true, 
    responsive:{
      0:{
        items:2,
        nav:false,
        loop:true
      },
      600:{
        items:4,
        nav:false,
        loop:true
      },
      1000:{
        items:6,
        nav:false,
        loop:true
      }
    }
  });

//   $('#awards').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:6000,
//     autoplayHoverPause:true,
//     margin:10,

//     items:1,
//     rtl: true, 
//     responsive:{
//       0:{
//         items:2,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       600:{
//         items:4,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       1000:{
//         items:6,
//         nav:true,
//         dots: true,
//         loop:true
//       }
//     }
//   });

//   $('#serv_products').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:6000,
//     autoplayHoverPause:true,
//     margin:60,
//     items:1,
//     rtl: true, 
//     responsive:{
//       0:{
//         items:1,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       600:{
//         items:2,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       1000:{
//         items:4,
//         nav:true,
//         dots: true,
//         loop:true
//       }
//     }
//   });

//   $('#latest_news').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:6000,
//     autoplayHoverPause:true,
//     margin:60,
//     items:1,
//     rtl: true,
//     responsive:{
//       0:{
//         items:1,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       600:{
//         items:2,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       1000:{
//         items:3,
//         nav:true,
//         dots:false,
//         loop:true
//       }
//     }
//   });

//   $('#media_latest_news').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:6000,
//     autoplayHoverPause:true,
//     margin:60,
//     items:1,
//     rtl: true,
//     responsive:{
//       0:{
//         items:1,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       600:{
//         items:1,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       1000:{
//         items:1,
//         nav:true,
//         dots:true,
//         loop:true
//       }
//     }
//   });

//   $('#events').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTimeout:6000,
//     autoplayHoverPause:true,
//     margin:60,
//     items:1,
//     rtl: true,
//     responsive:{
//       0:{
//         items:1,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       600:{
//         items:1,
//         nav:false,
//         dots:false,
//         loop:true
//       },
//       1000:{
//         items:1,
//         nav:true,
//         dots: true,
//         loop:true
//       }
//     }
//   });
//   // END:: OWL CAROUSEL

//   // START:: TOGGLE FORMS
//   $('#show_register').on('click', function() {
//     $('#login_form_wraper').css('display', 'none');
//     $('#login_form_wraper').css('display', 'none');
//     $('#signup_form_wraper').css('display', 'block');
//   });

//   $('#show_reset').on('click', function() {
//     $('#login_form_wraper').css('display', 'none');
//     $('#signup_form_wraper').css('display', 'none');
//     $('#reset_form_wraper').css('display', 'block');
//   });
//   // END:: TOGGLE FORMS

//   // START:: FLEX SLIDER
//   $('#carousel').flexslider({
//     animation: "slide",
//     controlNav: true,
//     animationLoop: true,
//     slideshow: true,
//     itemWidth: 160,
//     itemMargin: 0,
//     asNavFor: '#slider'
//   });

//   $('#slider').flexslider({
//     animation: "slide",
//     controlNav: false,
//     animationLoop: false,
//     slideshow: false,
//     sync: "#carousel"
//   });
//   // END:: FLEX SLIDER

//   // START:: BOOTSTRAP SELECT
//   $('#qualifications').selectpicker();
//   $('#years').selectpicker();
//   // END:: BOOTSTRAP SELECT

//   // START:: CART INCREASE & DECREASE BTNS
//   $(".plus_btn").on('click', function() {
//     let productAmount = parseInt($(this).parent().siblings('.amount').text());
//     productAmount += 1;
//     $(this).parent().siblings('.amount').text(productAmount);
//   });

//   $(".minus_btn").on('click', function() {
//     let productAmount = parseInt($(this).parent().siblings('.amount').text());
//     productAmount -= 1;
//     $(this).parent().siblings('.amount').text(productAmount);
//   });
//   // END:: CART INCREASE & DECREASE BTNS
});

// START:: WIZRD FUNCTIONS
function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}
// END:: WIZRD FUNCTIONS