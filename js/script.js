//Toggle menu

$(document).ready(function(){
    $(".menu-handle").click(function(){
       $(".main-nav").slideToggle(function(){
           $(this).toggleClass("expand-nav").css("display", " ");
       }); 
    });

});


/* Navigation scroll */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});



/*Activate Sticky nav*/

$(window).scroll(function(){
    if($(document).scrollTop() > 100) {
        $('nav').addClass('sticky-nav');
    } else {
        $('nav').removeClass('sticky-nav');
    }
});

