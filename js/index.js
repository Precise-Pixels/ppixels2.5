// $( document ).ready(function() {
//   $( "svg" ).fadeIn("slow")
// });

$(window).scroll(function(){

var scrolled = $(window).scrollTop();

  if(scrolled >= targetHeight - 180) {
    $('nav').fadeIn();
    $('nav').css('top',0+'px');
    $('.bg').fadeOut('SLOW');
  } else {
    $('nav').fadeOut();
    $('nav').css('top',-150+'px');
    $('.bg').fadeIn('SLOW');
  }
  
  $('.bg').css('top',-(scrolled*0.4)+'px');
  
});

var target = $('.bg');
var targetHeight = target.outerHeight();

// $(document).scroll(function(e){
//     var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
//     if(scrollPercent >= 0){
//         target.css('opacity', scrollPercent);
//     }
// });
