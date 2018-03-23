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

  $('.cos_button').on('click', function(event){
    event.preventDefault();
    $('#cos_menu').addClass('visible');
    $('#main-overlay').show();
    $('#main_menu_toggle').hide();
  });
  $('#cos_menu_toggle').on('click', function(event){
    $('#cos_menu').removeClass('visible');
    $('#main-overlay').hide();
    $('#main_menu_toggle').fadeIn(1000);
  })

  $('#auth_button').on('click', function(event){
    event.preventDefault();
    $('#auth_menu').addClass('visible');
    $('#auth_register').show();
    $('#auth_reset').hide();
    $('#main-overlay').show();
    $('#main_menu_toggle').hide();
  });
  $('#auth_menu_toggle').on('click', function(event){
    $('#auth_menu').removeClass('visible');
    $('#main-overlay').hide();
    $('#main_menu_toggle').fadeIn(1000);
  });
  $('#forgot_password').on('click', function(event){
    event.preventDefault();
    $('#auth_register').hide();
    $('#auth_reset').show();
  });

  $('#auth_button').on('click', function(event){
    event.preventDefault();
    $('#auth_menu').addClass('visible');
    $('#main-overlay').show();
    $('#main_menu_toggle').hide();
  });
  $('#auth_menu_toggle').on('click', function(event){
    $('#auth_menu').removeClass('visible');
    $('#main-overlay').hide();
    $('#main_menu_toggle').fadeIn(1000);
  });

});