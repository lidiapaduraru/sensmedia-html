jQuery(document).ready(function(){

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

  $(".go_toggle").on('click', function(event){
    event.preventDefault();
    $('.go_toggle').removeClass('active');
    $(this).addClass('active');
    // $('html, body').animate({
    //     scrollTop: $($.attr(this, 'href')).offset().top +150
    // }, 500);
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
