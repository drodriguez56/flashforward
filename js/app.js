$(document).ready(function(){
  $(window).scroll(function(){
        if ($(this).scrollTop() >= $(".section-3").offset().top) {
          $(".cell-phone-img").attr("src","img/flashF.jpg");
          $(".phone").addClass("fixed")
        }else if($(this).scrollTop() >= $(".section-2").offset().top) {
          $(".cell-phone-img").attr("src","img/fun.jpg");
          $(".phone").addClass("fixed")
        } else {
          $(".inner-phone").css("background-color","green");
          $(".phone").removeClass("fixed")
        }
    });
});