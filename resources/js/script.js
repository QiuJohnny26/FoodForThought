$(document).ready(function(){
    
/********** For Sticky Navigation *******************************************************************************************/
  $('.js--section-features').waypoint(function(direction){
    if (direction == "down"){
      $('nav').addClass('sticky')
  }
    else{
        $('nav').removeClass('sticky')
    }
                                       
}, {
   offset:'60px;'
  });

     
/********** For Scrolling *******************************************************************************************/   
$('.js--scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
});

$('.js--scroll-to-start').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-features').offset().top},500);
})

$('.js--scroll-to-testimonies').click(function(){
     $('html,body').animate({scrollTop:$('.js--section-testimonials').offset().top},500);
})
 $('.js--scroll-to-instructions').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-instructions').offset().top},500);
})
 $('.js--scroll-to-cities').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-cities').offset().top},500);
})
 $('.js--scroll-to-signup').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},500);
})    
});