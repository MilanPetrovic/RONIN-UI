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
  $('.tab_ronin > a').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open_tm');
  });
  $('.tab_ronin > ul a').on('click', function(e) {
    e.preventDefault();
    $(this).parents(':eq(2)').toggleClass('open_tm');
    var show = $(this).parent().index();
    $(this).parents(':eq(2)').find('> div > div').hide().parent().find('> div:eq('+show+')').show();
  });
});
