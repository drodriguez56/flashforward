$(document).ready(function(){
  $(window).scroll(function(){
        if ($(this).scrollTop() >= $(".section-3").offset().top) {
          $(".cell-phone-img").attr("src","img/loginii.png");
          $(".phone").addClass("fixed")
        }else if($(this).scrollTop() > $(".section-2").offset().top) {
          $(".cell-phone-img").attr("src","img/camerai.png");
          $(".phone").addClass("fixed")
        } else {
          $(".cell-phone-img").attr("src","img/login.png");
          $(".phone").removeClass("fixed")
        }
    });
});