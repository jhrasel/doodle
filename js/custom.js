var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  console.log('video', video)
  if (video.paused) {
    video.play();
    btn.innerHTML = '<svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg"> <g filter="url(#filter0_d)"> <circle cx="95" cy="95" r="45" fill="#F48039"/> </g> <path d="M83 85C83 83.8954 83.8954 83 85 83H90C91.1046 83 92 83.8954 92 85V105C92 106.105 91.1046 107 90 107H85C83.8954 107 83 106.105 83 105V85Z" fill="white"/> <path d="M98 85C98 83.8954 98.8954 83 100 83H105C106.105 83 107 83.8954 107 85V105C107 106.105 106.105 107 105 107H100C98.8954 107 98 106.105 98 105V85Z" fill="white"/> <defs> <filter id="filter0_d" x="0" y="0" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/> <feOffset/> <feGaussianBlur stdDeviation="25"/> <feColorMatrix type="matrix" values="0 0 0 0 0.956863 0 0 0 0 0.501961 0 0 0 0 0.223529 0 0 0 0.4 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/> </filter> </defs> </svg> ';

  } else {
    video.pause();
    //Buton pause button will be rendered 
    btn.innerHTML = '<svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><circle cx="95" cy="95" r="45" fill="#F48039"></circle></g><path d="M89.1517 81.0276C87.465 79.9308 85.2578 81.1689 85.2578 83.2118V106.788C85.2578 108.831 87.465 110.069 89.1517 108.973L107.28 97.1843C108.845 96.167 108.845 93.8332 107.28 92.8159L89.1517 81.0276Z" fill="white"></path><defs><filter id="filter0_d" x="0" y="0" width="190" height="190" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="25"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.956863 0 0 0 0 0.501961 0 0 0 0 0.223529 0 0 0 0.4 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs></svg>';

  }
}


$(function () {



  //    ================= BACK TO TOP PART ============

  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });



  //    ================= SCROLLING PART ============

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 200) {
      $('.back-to-top').fadeIn(800);
      $('.navbar-toggler i').css({
        'color': 'black'
      });
    } else {
      $('.back-to-top').fadeOut(800);
      $('.navbar-toggler i').css({
        'color': 'white'
      });
    }
  });

  var header = $(this).scrollTop();
  if (header > 1) {
    $(".navbar").addClass('bg');
  } else {
    $(".navbar").removeClass('bg');
  }

  $(window).scroll(function () {
    var headerscroll = $(this).scrollTop();
    if (headerscroll > 1) {
      $(".navbar").addClass('bg');
    } else {
      $(".navbar").removeClass('bg');
    }
  });

  //    ======== Banner video part



  //    ======== amazing-staff

  $('.amazing-staff-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: true,
    dots: false,
    prevArrow: '.prev',
    nextArrow: '.next',
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  
	


  // ============= preloader Pare js   ============= 

  $(window).on('load', function () {
    $('.preloader').delay(500).fadeOut(1000);
  });

  // Blog Slider
  
  $('.blog-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: false,
    prevArrow: '.prev',
    nextArrow: '.next',
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





  //  ====== Type JS
  $(".typed").typed({
    strings: ["Web Designer.", "Freelancer.", "Frontend-Developer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 700,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {}
  });


});


// Code for version 2.0
// Jquery after v 1.9
//Coding for email input text 
$( ".subscribe" ).on('keydown', function() {
  var text = $('.subscribe').val();
  if(text == ''){
    $('.banner-overlay').removeClass('fill_background');
    $('.banner-overlay span,div').removeClass('fill_text');
    $('.banner-arrow').css({'background':'#222222'});
    $(".banner-arrow svg path").css({'fill':'#333333'});
  }else{
      $('.banner-overlay').addClass('fill_background');
      $('.banner-overlay span,div').addClass('fill_text');
      $('.banner-arrow').css({'background':'white'});
      $(".banner-arrow svg path").css({'fill':'#F48039 '});
  }

});

//----------------------------Code for controlling slick slider  using mouse wheel-----------------------
var amazing_slider = $(".amazing-staff-slider");
amazing_slider.on('wheel', (function(e) {
e.preventDefault();
if (e.originalEvent.deltaY < 0) {
$(this).slick('slickNext');
} else {
$(this).slick('slickPrev');
}
}));

