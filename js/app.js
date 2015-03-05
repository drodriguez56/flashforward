$(document).ready(function(){
  $(window).scroll(function(){
        if ($(this).scrollTop() >= $(".section-3").offset().top) {
           $(".inner-phone").css("background-color","blue");
        }else if($(this).scrollTop() >= $(".section-2").offset().top) {
          $(".inner-phone").css("background-color","yellow");
        } else {
          $(".inner-phone").css("background-color","green");
        }
    });
});