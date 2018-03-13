jQuery(document).ready(function(){
  $('.cd-nav-trigger').on('click', function(event){
    event.preventDefault();
    $([sidebar, sidebarTrigger]).toggleClass('nav-is-visible');
  });
});