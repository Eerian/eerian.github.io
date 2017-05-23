//Toggle menu

$(document).ready(function(){
    $(".menu-handle").click(function(){
       $(".main-nav").slideToggle(function(){
           $(this).toggleClass("expand-nav").css("display", " ");
       }); 
    });
    
    
    /*Submitting form with AJAX*/
    var $contactForm = $('#contact-form');
    $contactForm.submit(function(e) {
        e.preventDefault();
        $.ajax({
            url: '//formspree.io/citiz3n9@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
                $contactForm.append('<div class="alert">Sending message…</div>');
            },
            success: function(data) {
                $contactForm.find('.alert').hide();
                $contactForm.append('<div class="alert alert-success">Message sent!</div>');
            },
            error: function(err) {
                $contactForm.find('.alert-loading').hide();
                $contactForm.append('<div class="alert alert-error">Ops, there was an error.</div>');
            }
        });
        $("#contact-form").get(0).reset();
    });
    
    
    /*Code copied from Stackoverflow.   NAVIGATION SCROLL to ANQUORS*/
    
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
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









/*jQuery form validation*/

//$("#contact-form").validate();





//

