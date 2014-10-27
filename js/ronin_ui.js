$(function(){
  if($().swipe){
    $('.navList li').swipe({
      treshold: 0,
      swipeRight: function() { $(this).find('div').addClass('show') },
      swipeLeft: function() { $(this).find('div').removeClass('show') }
    });
  }
});
