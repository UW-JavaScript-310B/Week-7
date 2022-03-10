const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailField = document.getElementById("email");
const submit = document.querySelector(".btn-primary")

const validateFirstName = (e) => {
    if (firstNameField.value.length < 3) {
        e.preventDefault();
        firstNameField.validity.valid = false;
        firstNameField.setCustomValidity("Your First Name must be more than 3 letters");
        firstNameField.parentNode.classList.add('invalid');
        firstNameField.parentNode.classList.remove('valid');
    } else {
        firstNameField.setCustomValidity('');
        firstNameField.validity.valid = true;
        firstNameField.parentNode.classList.add('valid');
        firstNameField.parentNode.classList.remove('invalid');
    } firstNameField.reportValidity();
};

const validateLastName = (e) => {
    if (lastNameField.value.length < 3) {
        e.preventDefault();
        lastNameField.validity.valid = false;
        lastNameField.setCustomValidity("Your Last Name must be more than 3 letters");
        lastNameField.parentNode.classList.add('invalid');
        lastNameField.parentNode.classList.remove('valid');
    } else {
        lastNameField.setCustomValidity('');
        lastNameField.validity.valid = true;
        lastNameField.parentNode.classList.add('valid');
        lastNameField.parentNode.classList.remove('invalid');
    } lastNameField.reportValidity();
};

const validateEmail = (e) => {
    const emailRegExp = /\w+@\w+\.\w+/;
    if (!emailField.value.match(emailRegExp)) {
        e.preventDefault();
        emailField.validity.valid = false;
        emailField.setCustomValidity("Not a valid email, please try again.")
        emailField.parentNode.classList.add('invalid');
        emailField.parentNode.classList.remove('valid');
    } else {
        emailField.validity.valid = true;
        emailField.setCustomValidity('');
        emailField.parentNode.classList.add('valid');
        emailField.parentNode.classList.remove('invalid');
    } emailField.reportValidity();
};

const checkValidation = (e) => {
    validateFirstName(e);
    validateLastName(e);
    validateEmail(e);
};

submit.addEventListener("click", checkValidation);
