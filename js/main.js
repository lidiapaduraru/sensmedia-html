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
  })

  $('.btn.minus').on('click', function(event){
    var s = parseInt($(this).next().val()) - 1
    if(s < 0){
      s = 0;
    }
    $(this).next().val(s)
  });
  $('.btn.plus').on('click', function(event){
    $(this).prev().val(parseInt($(this).prev().val()) + 1)
  });

  $(".contulmeu_selector_wrapper li a").on('click', function(event){
    event.preventDefault();
    $("#dropdownSelectAcc").html('<div class="line-link start0 active"><span></span>' + $(this).text()+' </div>');
  });

  $(document).ready(function(){ 
    $(".select2").select2(); 
  });

  var msnry = $('.grid');
  msnry.imagesLoaded( function() {
    msnry.masonry({
      itemSelector: '.grid-item'
    });
  });

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function(e) {
    return $(document).find('.collapse.in').collapse('hide');
  });

  $('.carousel').carousel();


  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#gotop_button').fadeIn();
    } else {
      $('#gotop_button').fadeOut();
    }
  });
  $('#gotop_button').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
  });









});
