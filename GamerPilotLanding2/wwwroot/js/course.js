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
function toggleVideo(state, event) {

    const container = event.currentTarget.parentElement;

    console.log(event);
    console.log(container)

    var vid = document.getElementById("promo-vid");

    if (state == 'hide') {
        vid.pause();

    } else {
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
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 200 }, 500, 'linear');
    });
});





/* quiz */
$(document).ready(function () {

    function toggleDropDown(event) {
        const container = event.currentTarget.parentElement;
        container.querySelector('.answer').classList.toggle('hidden');
        container.querySelector('button i').classList.toggle('fa-rotate-180');

        const txt = container.querySelector('button span');

        if (txt.innerHTML === "Hide answer") {
            txt.innerHTML = "Show answer";
        } else {
            txt.innerHTML = "Hide answer";
        }
    };

    document.querySelectorAll('.question-wrapper').forEach(wrapper => {
        wrapper.querySelector('button').addEventListener('click', toggleDropDown);
    });

});


/* sidebar */

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top - 150
            }, 500, 'linear');
            }
    });
});

