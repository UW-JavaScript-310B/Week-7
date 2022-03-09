// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailPattern = /\w+@\w+\.\w+/;
const email = document.getElementById("email");
const myForm = document.getElementById("connect-form");

const vallidateFirstName = (e) => {
    if (firstName.value.length < 3) {
        firstName.setCustomValidity("Your First Name must be 3 characters or more.");
        firstName.reportValidity();
        firstName.closest(".form-group").classList.remove("valid");
        firstName.closest(".form-group").classList.add("invalid");
        console.log("Bad firstname input");
        e.preventDefault();
        return false;
    } else {
        firstName.closest(".form-group").classList.remove("invalid");
        firstName.closest(".form-group").classList.add("valid");
        firstName.setCustomValidity("");
        lastName.reportValidity();
    }
}

const vallidateLastName = (e) => {
    if (lastName.value.length < 3) {
        lastName.setCustomValidity("Your Last Name must be 3 characters or more.");
        lastName.reportValidity();
        lastName.closest(".form-group").classList.remove("valid");
        lastName.closest(".form-group").classList.add("invalid");
        console.log("Bad lastname input");
        e.preventDefault();
        return false;
    } else {
        lastName.closest(".form-group").classList.remove("invalid");
        lastName.closest(".form-group").classList.add("valid");
        lastName.setCustomValidity("");
        lastName.reportValidity();
    }
}

const validateEmail = (e) => {
    if (emailPattern.test(email.value)) {
        email.closest(".form-group").classList.remove("invalid");
        email.closest(".form-group").classList.add("valid");
        email.setCustomValidity("");
        email.reportValidity();
    } else {
        email.closest(".form-group").classList.remove("valid");
        email.closest(".form-group").classList.add("invalid");
        email.setCustomValidity("Your email is not valid");
        email.reportValidity();
        console.log("Bad email input");
        e.preventDefault();
        return false;
    }
}


const checkValidation = (e) =>{
    vallidateFirstName();
    vallidateLastName();
    validateEmail();
}

myForm.addEventListener("submit", checkValidation);
firstName.addEventListener("input", vallidateFirstName);
lastName.addEventListener("input", vallidateLastName);
email.addEventListener("input", validateEmail);
