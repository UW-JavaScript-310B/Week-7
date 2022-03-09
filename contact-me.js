const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("connect-form");
const emailAddr = document.getElementById("email");
const message = document.getElementById("message");

const inputValue = document.getElementsByTagName("input")
const submitButton = document.querySelector(".contact-button")

const parentDivFirstName = firstName.parentElement
const parentDivLastName = lastName.parentElement
const parentDivEmail = emailAddr.parentElement
const parentDivMessage = message.closest("#messageInput")

//validate first name


function validateFirstName() {

    const validFirstName = firstName.value.length >= 3;

    if (!validFirstName) {
        console.log("Bad Input");
        parentDivFirstName.classList.remove("valid");
        parentDivFirstName.classList.add("invalid");
        firstName.setCustomValidity("Your first name must include at least 3 characters");
        firstName.validity.valid = false;
        firstName.reportValidity();
    } else {
        parentDivFirstName.classList.remove("invalid");
        parentDivFirstName.classList.add("valid");
        firstName.setCustomValidity("");
        firstName.validity.valid = true;
        firstName.reportValidity();
    }
}

// validate last name
function validateLastName() {
    const validLastName = lastName.value.length >= 3;

    if (!validLastName) {
        console.log("Bad Input");
        parentDivLastName.classList.remove("valid");
        parentDivLastName.classList.add("invalid");
        lastName.setCustomValidity("Your last name must include at least 3 characters");
        lastName.validity.valid = false;
        lastName.reportValidity();
    } else {
        parentDivLastName.classList.remove("invalid");
        parentDivLastName.classList.add("valid");
        lastName.setCustomValidity("");
        lastName.validity.valid = true;
        lastName.reportValidity();
    }
}

// validate message
function validateMessage() {
    const validMessage = message.value.length >= 10;

    if (!validMessage) {
        console.log("Bad Input");
        parentDivMessage.classList.remove("valid");
        parentDivMessage.classList.add("invalid");
        message.setCustomValidity("Your message must include 10 or more characters");
        message.validity.valid = false;
        message.reportValidity();
    } else {
        parentDivMessage.classList.remove("invalid");
        parentDivMessage.classList.add("valid");
        message.setCustomValidity("");
        message.validity.valid = true;
        message.reportValidity();
    }
}


// //validate email address
function validateEmail() {
    const regex = /\w+@\w+\.\w+/;

    if (emailAddr.value.match(regex)) {
        parentDivEmail.classList.remove("invalid");
        parentDivEmail.classList.add("valid");
        emailAddr.setCustomValidity("");
        emailAddr.validity.valid = true;
        emailAddr.reportValidity();
        // return ('true');
    } else {
        console.log("Bad Input");
        parentDivEmail.classList.remove("valid");
        parentDivEmail.classList.add("invalid");
        emailAddr.setCustomValidity("Your email address is not valid");
        emailAddr.validity.valid = false;
        emailAddr.reportValidity();
        // return ('false');
    }
}

//hide or show fields based on selection of contact reason
const selector = document.getElementById("contact-reason");

const selectOption = () => {
    const selection = selector.value;
    const techfields = document.getElementById("language-type");
    const jobfields = document.getElementById("job-fields");

    if (selection === "job-opp") {
        techfields.classList.remove("show");
        techfields.classList.add("hidden");
        jobfields.classList.remove("hidden");
        jobfields.classList.add("show");
    } else if (selection === "talk-code") {
        jobfields.classList.remove("show");
        jobfields.classList.add("hidden");
        techfields.classList.remove("hidden");
        techfields.classList.add("show");
    } else {
        jobfields.classList.remove("show");
        techfields.classList.remove("show");
        jobfields.classList.add("hidden");
        techfields.classList.add("hidden");
    }

}



//function to call field validations
const validateForm = (e) => {
    validateFirstName();
    validateLastName();
    validateEmail();
    validateMessage();
}

//trigger on button click to stop edits until all fields are entered
submitButton.addEventListener("click", validateForm);
selector.addEventListener("change", selectOption)