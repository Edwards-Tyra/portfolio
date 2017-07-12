function submitContactForm() {
    var X = document.forms["contactForm"]["email","name","message"].value;
    if (X =="") {
        alert("Please fill out all sections of contact form");
        return false;
    }else {
        alert('Thank you for submitting the form');
    }
}

