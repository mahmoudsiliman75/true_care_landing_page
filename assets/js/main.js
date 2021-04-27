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

  // START:: OWL CAROUSEL
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

  $('#screens').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    margin:60,
    nav:false,
    dots:true,
    center:true,
    rtl: true,
    smartSpeed: 2000,
    dotsSpeed: 2000,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  })
  // END:: OWL CAROUSEL

  // START:: SELECT RADIO BUTTON
  $('.radio_img').click(function() {
    $(this).next().children('input[type=radio]').prop("checked", true);
  });
  // END:: SELECT RADIO BUTTON
});

// START:: WIZRD FUNCTIONS
function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}
// END:: WIZRD FUNCTIONS