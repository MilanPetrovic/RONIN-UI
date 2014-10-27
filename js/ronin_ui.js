$(function(){
  if($().swipe){
    $('.navList li').swipe({
      treshold: 0,
      swipeRight: function() { $(this).find('div').addClass('show') },
      swipeLeft: function() { $(this).find('div').removeClass('show') }
    });
  }
  if(window.IScroll) {
    $('.searchList div[id][data-scroll]').each(function(){
      var id = $(this).attr('id'),
          size = $(this).attr('data-scroll');

      $(this).attr('style', 'height:'+size+'px;');

      $(window).on('load', function() {
        new IScroll('#'+id, { freescroll: true, scrollbars: true });
      });

    });
  }
});
