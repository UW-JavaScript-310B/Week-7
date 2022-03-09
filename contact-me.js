// TODO
const nameField = document.getElementById("first-name");
const nameField2 = document.getElementById("last-name");
const emailAddress = document.getElementById("email");
const form = document.getElementById("connect-form");
const submitButton = document.querySelector(".btn-primary");
const message = document.getElementById("message");

const parentnameField = nameField.parentElement;
const parentnameField2 = nameField2.parentElement;
const parentEmail = emailAddress.parentElement;
// const parentMessage = message.parentElement;
const parentMessage = message.closest("#messageInput");

console.log(message);

const selector = document.getElementById("contact-kind");

const selectOption = () => {
    const selection = selector.value;
    const bizfields = document.getElementById("biz-name");
    const techfields = document.getElementById("tech-type");

    if (selection === "business") {
        bizfields.classList.remove("hidden");
        bizfields.classList.add("show");
        techfields.classList.remove("show");
        techfields.classList.add("hidden");
    } else if (selection === "technical") {
        techfields.classList.remove("hidden");
        techfields.classList.add("show");
        bizfields.classList.remove("show");
        bizfields.classList.add("hidden");
    } else {
        bizfields.classList.add("hidden");
        techfields.classList.add("hidden");
        techfields.classList.remove("show");
        bizfields.classList.remove("show");

    }

}

function validateFirstName() {
    const validState = nameField.value.length >= 3;
    if (!validState) {
        console.log('Bad Input');
        parentnameField.classList.remove("valid");
        parentnameField.classList.add("invalid");
        nameField.setCustomValidity("Your first name must include at least 3 characters");
        nameField.validity.valid = false;
        nameField.reportValidity();
    } else {
        parentnameField.classList.remove("invalid");
        parentnameField.classList.add("valid");
        nameField.setCustomValidity("");
        nameField.validity.valid = true;
        nameField.reportValidity();
    }

}

function validateLastName() {
    const validState2 = nameField2.value.length >= 3;
    if (!validState2) {
        console.log('Bad Input');
        parentnameField2.classList.remove("valid");
        parentnameField2.classList.add("invalid");
        nameField2.setCustomValidity("Your last name must include at least 3 characters");
        nameField2.validity.valid = false;
        nameField2.reportValidity();
    } else {
        parentnameField2.classList.remove("invalid");
        parentnameField2.classList.add("valid");
        nameField2.setCustomValidity("");
        nameField2.validity.valid = true;
        nameField2.reportValidity();
    }

}

const emailValue = emailAddress.value;

function validateTestEmail() {
    const regEx = /\w+@\w+\.\w+/;
    if (emailAddress.value.match(regEx)) {
        parentEmail.classList.remove("invalid");
        parentEmail.classList.add("valid");
        emailAddress.setCustomValidity(" ");
        emailAddress.validity.valid = true;
        emailAddress.reportValidity();
    } else {
        console.log('Bad Input');
        parentEmail.classList.remove("valid");
        parentEmail.classList.add("invalid");
        emailAddress.setCustomValidity("You've entered an invalid email");
        emailAddress.validity.valid = false;
        emailAddress.reportValidity();

    }
}

function validateMessage() {
    const validState3 = message.value.length >= 10;
    if (!validState3) {
        console.log('Bad Input');
        parentMessage.classList.remove("valid");
        parentMessage.classList.add("invalid");
        message.setCustomValidity("Your message must include at least 10 characters");
        message.validity.valid = false;
        message.reportValidity();
    } else {
        parentMessage.classList.remove("invalid");
        parentMessage.classList.add("valid");
        message.setCustomValidity("");
        message.validity.valid = true;
        message.reportValidity();
    }

}

const checkValidation = (e) => {
    validateFirstName();
    validateLastName();
    validateTestEmail();
    validateMessage();
}

submitButton.addEventListener("click", checkValidation);

selector.addEventListener("change", selectOption)