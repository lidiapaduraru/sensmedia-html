jQuery(document).ready(function(){


  var sidebarTrigger = $('.cd-nav-trigger');
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
    openNav();
  });


  $('.grid').masonry({
    itemSelector: '.grid-item'
  });

  $('.carousel').carousel();


});
