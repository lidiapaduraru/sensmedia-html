jQuery(document).ready(function(){


  var sidebarTrigger = $('#main_menu_toggle');
  sidebarTrigger.on('click', function(event){
    event.preventDefault();
    if(sidebarTrigger.hasClass('nav-is-visible')){
      $('#main_sidebar_menu').removeClass('visible');
      $('#main-overlay').hide();
    }else{
      $('#main_sidebar_menu').addClass('visible');
      $('#main-overlay').show();
    }
    $([sidebarTrigger]).toggleClass('nav-is-visible');
  });

  $('#filter_button').on('click', function(event){
    event.preventDefault();
    $('#filter_menu').addClass('visible');
    $('#main-overlay').show();
    $('#main_menu_toggle').hide();
  });
  $('#filter_menu_toggle').on('click', function(event){
    $('#filter_menu').removeClass('visible');
    $('#main-overlay').hide();
    $('#main_menu_toggle').fadeIn(1000);
  })


  $('.grid').masonry({
    itemSelector: '.grid-item'
  });

  $('.carousel').carousel();


});
