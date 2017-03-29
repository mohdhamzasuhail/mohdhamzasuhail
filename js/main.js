$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


$(document).ready(function(){
    // Home
    $("#home-click").click(function(){
        $("#home-click").addClass("active");
        $("#about-click").removeClass("active");
        $("#work-click").removeClass("active");
        $("#contact-click").removeClass("active");

        $("#home").fadeIn("slow");
        $("#about").css("display","none");
        $("#work").css("display","none");
        $("#contact").css("display","none");
    });
    
    // About
    $("#about-click").click(function(){
        $("#home-click").removeClass("active");
        $("#about-click").addClass("active");
        $("#work-click").removeClass("active");
        $("#contact-click").removeClass("active");

        $("#home").css("display","none");
        $("#about").fadeIn("slow");
        $("#work").css("display","none");
        $("#contact").css("display","none");
    });
    
    // Work
    $("#work-click").click(function(){
        $("#home-click").removeClass("active");
        $("#about-click").removeClass("active");
        $("#work-click").addClass("active");
        $("#contact-click").removeClass("active");

        $("#home").css("display","none");
        $("#about").css("display","none");
        $("#work").fadeIn("slow");
        $("#contact").css("display","none");
    });
    
    // Contact
    $("#contact-click").click(function(){
        $("#home-click").removeClass("active");
        $("#about-click").removeClass("active");
        $("#work-click").removeClass("active");
        $("#contact-click").addClass("active");

        $("#home").css("display","none");
        $("#about").css("display","none");
        $("#work").css("display","none");
        $("#contact").fadeIn("slow");
    });
    
    // Hire Me Button
    $("#hire-me").click(function(){
        $("#home-click").removeClass("active");
        $("#about-click").removeClass("active");
        $("#work-click").removeClass("active");
        $("#contact-click").addClass("active");

        $("#home").css("display","none");
        $("#about").css("display","none");
        $("#work").css("display","none");
        $("#contact").fadeIn("slow");
    });
});