$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $(".button-collapse").sideNav();
  $('.modal').modal();
  $('#first').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })


  $(document).ready(function() {
   $('select').material_select();
 });

 //
 // var slider = document.getElementById('slider');
 // noUiSlider.create(slider, {
 //  start: [20, 80],
 //  connect: true,
 //  step: 1,
 //  orientation: 'horizontal', // 'horizontal' or 'vertical'
 //  range: {
 //    'min': 0,
 //    'max': 100
 //  },
 //
 // });
  // $('.bxslider').bxSlider({
  // mode: 'fade',
  // adaptiveHeight:false,
  // auto:true,
  // pager:false,
  // captions: true
  // });

  // var nt_example1 = $('#nt-example1').newsTicker({
  //     row_height: 80,
  //     max_rows: 1,
  //     duration: 4000,
  //     prevButton: $('#nt-example1-prev'),
  //     nextButton: $('#nt-example1-next')
  // });


  var owl = $('#fth');
  owl.owlCarousel();
  // Go to the next item
  $('.customNextBtn').click(function() {
      owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBtn').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl.trigger('prev.owl.carousel', [300]);
  })

  var owl1 = $('#first');
  owl1.owlCarousel();
  // Go to the next item
  $('.customNextBt').click(function() {
      owl1.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.customPrevBt').click(function() {
      // With optional speed parameter
      // Parameters has to be in square bracket '[]'
      owl1.trigger('prev.owl.carousel', [300]);
  })


  // $('.carousel.carousel-slider').carousel({fullWidth: true});
  // $('.carousel').carousel('next');
  // $('.carousel').carousel('next', 3); // Move next n times.
  //
  // // Previous slide
  // $('.carousel').carousel('prev');
  // $('.carousel').carousel('prev', 4); // Move prev n times.

  $('.dropdown-button').dropdown({
    hover: true, // Activate on hover
    belowOrigin: true, // Displays dropdown below the button
    constrainWidth: false,
  }
);
// var countDownDate = new Date("Jul 25, 2017 21:00:00").getTime();

// Update the count down every 1 second
// var x = setInterval(function() {
//
//     // Get todays date and time
//     var now = new Date().getTime();
//
//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;
//
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//     // Output the result in an element with id="demo"
//     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
//
//     // If the count down is over, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);
//
$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
});

window.onload = onloads();

  function onloads() {
    var wn = $(window).scrollTop();
    if(wn > 50 ){
      $("body").addClass("sticky");
    }
  };

  $(window).on("scroll",function(){
  var wn = $(window).scrollTop();

  if(wn > 10){
    $("body").addClass("sticky");
  }
  else{
    $("body").removeClass("sticky");
  }
});

// $(".sear").click(function(){
//   $("nav form").css("display","block");
//   // $("nav ul").css("display","none");
// })

})
