var projects = [
    {
        "name": "Claim Academy",
        "link": " "
    }
];

$(document).ready(function () {

    $.each(projects, function (index, project) {
        console.log(project);
        $('#projects').append(project.name);
    });


    $('#contactForm').on('submit', submitContactForm);

});

function submitContactForm() {
    event.preventDefault();
    var X = document.forms["contactForm"]["email", "name", "message"].value;
    if (X == "") {
        alert("Please fill out all sections of contact form");
        return false;
    } else {
        $(this).fadeOut();
        $("#success").fadeIn();
        // alert('Thank you for submitting the form');
    }
}


// (function (i, s, o, g, r, a, m) {
//         i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
//             (i[r].q = i[r].q || []).push(arguments)
//         }, i[r].l = 1 * new Date(); a = s.createElement(o),
//             m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
//         })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

//         ga('create', 'UA-81889030-1', 'auto');
//         ga('send', 'pageview');
// };

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});
var canvas;
var ctx;
var x = 500;
var y = 200;
var dx = 16;
var dy = 16;
var width = 1000;
var height = 200;
function circle() {
    ctx.beginPath();
    ctx.fillStyle = "cyan";
    ctx.arc(x, y, 30, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
}
function Clear() {
    ctx.clearRect(0, 0, width, height);
}
function init() {
    canvas = document.getElementById("mc");
    ctx = canvas.getContext("2d");
    return setInterval(draw, 15);

}
function draw() {
    Clear();
    circle();
    if (x > width || x < 0)

        dx = -dx;
    if (y > height || y < 0)
        dy = -dy;
    x += dx;
    y += dy;


}
init();