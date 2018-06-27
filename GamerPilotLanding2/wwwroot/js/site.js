

/* Learn more slide */
$(function () {
    $('#js-scroll').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 100 }, 500, 'linear');
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
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    func = state == "hide" ? "pauseVideo" : "playVideo";
    iframe.postMessage(
        '{"event":"command","func":"' + func + '","args":""}',
        "*"
    );
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