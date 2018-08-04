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


$(document).ready(function () {
    var trigger = $('.hamburger'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');

   
            isClosed = false;
        } else {
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');

            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });
});


/* sidebar scrolls */
$(function () {
    $('#intro-tab-js').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top-200 }, 500, 'linear');
    });
});

//popup video
var p = $(".popup__overlay");

$("#popup__toggle").click(function () {
    p.css("display", "block");
});
p.click(function (event) {
    e = event || window.event;
    if (e.target == this) {
        $(p).css("display", "none");
    }
});
$(".popup__close").click(function () {
    p.css("display", "none");
});

//video popup
function toggleVideo(state) {

    var vid = document.getElementById("promo-vid");

    if (state == 'hide') {
        vid.pause();
        console.log('pausing vid')

    } else {
        console.log('playing vid')
        vid.play();
    }
    // func = state == "hide" ? "pauseVideo" : "playVideo";

}

$("#popup__toggle").click(function () {
    p.css("visibility", "visible").css("opacity", "1");
});

p.click(function (event) {
    e = event || window.event;
    if (e.target == this) {
        $(p)
            .css("visibility", "hidden")
            .css("opacity", "0");
        toggleVideo("hide");
    }
});

$(".popup__close").click(function () {
    p.css("visibility", "hidden").css("opacity", "0");
    toggleVideo("hide");
});