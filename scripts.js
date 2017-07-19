var projects = [
    {
        "name":"Claim Academy",
        "link": " "
    }
];

$(document).ready(function() {

    $.each(projects, function(index, project) {
        console.log(project);
        $('#projects').append(project.name);
    });


    $('#contactForm').on('submit', submitContactForm);

});

function submitContactForm() {
    event.preventDefault();
    var X = document.forms["contactForm"]["email","name","message"].value;
    if (X =="") {
        alert("Please fill out all sections of contact form");
        return false;
    }else {
        $(this).fadeOut();
        $("#success").fadeIn();
       // alert('Thank you for submitting the form');
    }
}


(function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-81889030-1', 'auto');
        ga('send', 'pageview');

