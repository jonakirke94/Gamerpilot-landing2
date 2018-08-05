// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});


/* Navbar background on scroll*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('changeBg')
        }
        if ($(this).scrollTop() < 50) {
            $('.navbar').removeClass('changeBg')
        }
    });
});

/* Notifications */

if ($('.js-notify').is(':visible')) {
    setTimeout(function () {
        $('.js-notify').fadeTo(500, 0);
        $('#js-visible').fadeOut(500, 0);
    }, 3500);
}


   




