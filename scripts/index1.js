"use strict";

// get email and button values for the newsletter sign up
const email = document.getElementById("email");
const button = document.getElementById("btn");

// function for email verification and validation
function emailValidation() {
    // checking email
    if (/^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/.test(email.value)) {
        alert("\nThanks for signing up!"); 
        email.focus();
    } else { 
        alert("This is not a valid email! \nPlease enter a valid one.");      
        email.focus();
    }
	// reset the form
	document.location.reload();
}

// Button for posting a subscription 
button.addEventListener("click", emailValidation);
