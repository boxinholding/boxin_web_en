// Smooth scrolling via animate()
$(document).ready(function(){
  if ($('.g-recaptcha')) {
    // checkReCaptcha()
    // sliders()
  }

  $("a").on('click', function(event) {
    if (this.hash && window.location.pathname == "/") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Navigation change on scroll
  var maxOffset = 100;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });

  var maxOffset = 100;
  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
// $('form[id=contactForm]').submit(function(){
//   $.post($(this).attr('action'), $(this).serialize(), function(data, textStatus, jqXHR){
//     $('form[id=contactForm] #success').hide();
//     $('form[id=contactForm] #error').hide();
//     if (jqXHR.status == 200) {
//       $('form[id=contactForm] #success').show();
//     }}, 'json').fail(function(){
//       $('form[id=contactForm] #success').hide();
//       $('form[id=contactForm] #error').hide();
//       $('form[id=contactForm] #error').show();
//   });
//   return false;
// });

// Contact form validation
// $.validate({
//   modules : 'html5, toggleDisabled'
// });

// function onContactCaptcha($form) {
//   $('form#contactForm').submit();
// }

// function checkReCaptcha() {
//   if (typeof grecaptcha === "undefined") {
//     $('.captcha-error').show();
//     setTimeout(checkReCaptcha, 200);
//   } else {
//     $('.captcha-error').hide();
//     $('.g-recaptcha-filler').hide();
//     $('.g-recaptcha').attr('disabled', true);
//   }
// }


/* sliders */
function sliders () {
  if ($('.owl-carousel').length) {
    $('.customers').owlCarousel({
      items: 6,
      itemsDesktopSmall: [990, 4],
      itemsTablet: [768, 2],
      itemsMobile: [480, 1]
    })

    $('.homepage').owlCarousel({
      navigation: false, // Show next and prev buttons
      navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      slideSpeed: 2000,
      paginationSpeed: 1000,
      autoPlay: true,
      stopOnHover: true,
      singleItem: true,
      lazyLoad: false,
      addClassActive: true,
      afterInit: function () {
        // animationsSlider()
      },
      afterMove: function () {
        // animationsSlider()
      }
    })
  }
}