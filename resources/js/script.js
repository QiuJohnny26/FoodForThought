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
   offset:'10px;'
  });

     
/********** For Scrolling *******************************************************************************************/   
$('.js--scroll-to-plans').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
});

$('.js--scroll-to-start').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-features').offset().top},500);
})
    
});