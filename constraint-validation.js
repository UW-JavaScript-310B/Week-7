const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("connect-form");
const emailAddr = document.getElementById("email");

const inputValue = document.getElementsByTagName("input")
const submitButton = document.querySelector(".btn-primary")

const parentDivFirstName = firstName.parentElement
const parentDivLastName = lastName.parentElement
const parentDivEmail = emailAddr.parentElement

// console.log(parentDivFirstName);
// console.log(parentDivLastName);
// console.log(parentDivEmail);
// console.log(emailAddr);
// console.log(firstName.closest(".form-group"))
// console.log(firstName)
// console.log(inputValue)

//hide and show fields depending on selection of interest
const selector = document.getElementById("contact-kind");

const selectOption = () => {
    const selection = selector.value;

    if (selection === "business") {
        const bizfields = document.getElementById("biz-name");
        bizfields.classList.remove("hidden");
        bizfields.classList.add("show");
    } else if (selection === "technical") {
        const techfields = document.getElementById("tech-type");
        techfields.classList.remove("hidden");
        techfields.classList.add("show");
    } else {
        bizfields.classList.add("hidden");
        techfields.classList.add("hidden");

    }

}

//start of field validations

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

//validate last name
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

//validate email address
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

//function to call field validations
const validateForm = (e) => { 
    validateFirstName();
    validateLastName();
    validateEmail();
}

//trigger on button click to stop edits until all fields are entered
submitButton.addEventListener("click", validateForm);

selector.addEventListener("change", selectOption)