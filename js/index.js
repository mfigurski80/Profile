$(document).ready(function() {
  // On hover of white slides, blur background
  $('#slider-hover3').hover(function() {
    $('#background-image').css("filter", "grayscale(59%) blur(1.5px)");
    $('#background-image').css("-webkit-filter", "grayscale(59%) blur(1.5px)");
  }, function() {
    $('#background-image').css("filter", "grayscale(55%) blur(0px)");
    $('#background-image').css("-webkit-filter", "grayscale(55%) blur(0px)");
  });
  $('#slider-hover4').hover(function() {
    $('#background-image').css("filter", "grayscale(59%) blur(1.5px)");
    $('#background-image').css("-webkit-filter", "grayscale(59%) blur(1.5px)");
  }, function() {
    $('#background-image').css("filter", "grayscale(55%) blur(0px)");
    $('#background-image').css("-webkit-filter", "grayscale(55%) blur(0px)");
  });
  $('#slider-hover5').hover(function() {
    $('#background-image').css("filter", "grayscale(59%) blur(1.5px)");
    $('#background-image').css("-webkit-filter", "grayscale(59%) blur(1.5px)");
  }, function() {
    $('#background-image').css("filter", "grayscale(55%) blur(0px)");
    $('#background-image').css("-webkit-filter", "grayscale(55%) blur(0px)");
  });


  // On click of white slides, show corresponding page below
  $('#slider-hover3').click(function() {
    $('#about-body').css("display","inline");
    $('#portfolio-body').css("display","none");
    $('#hire-body').css("display","none");
    $('html, body').animate({
      scrollTop: $("#about-body").offset().top
    }, 1000);
  });
  $('#slider-hover4').click(function() {
    $('#about-body').css("display","none");
    $('#portfolio-body').css("display","inline");
    $('#hire-body').css("display","none");
    $('html, body').animate({
      scrollTop: $("#portfolio-body").offset().top
    }, 1000);
  });
  $('#slider-hover5').click(function() {
    $('#about-body').css("display","none");
    $('#portfolio-body').css("display","none");
    $('#hire-body').css("display","inline");
    $('html, body').animate({
      scrollTop: $("#hire-body").offset().top
    }, 1000);
  });
});
