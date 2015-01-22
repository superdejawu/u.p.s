$(function(){
  $('#header_nav').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{
    if($('#header_nav').data('size') == 'big')
    {
        $('#header_nav').data('size','small');
        $('#header_nav').stop().animate({
            // height:'60px',
             opacity:'0.9'
        },200);
    }
}
else
  {
    if($('#header_nav').data('size') == 'small')
      {
        $('#header_nav').data('size','big');
        $('#header_nav').stop().animate({
            height:'100px', opacity:'1'
        },200);
      }  
  }
});