(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.modal').modal();
});


$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});