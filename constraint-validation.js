// TODO

//Three characters in iit
const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailField = document.getElementById("email");
const form = document.getElementById("connect-form");
const selector = document.getElementById("contact-kind");

const selectOption = () => {
    const selection = selector.value;

    if (selection === "business") {
        const bizFields = document.getElementById('biz-name')
        bizFields.classList.remove('hidden');
        bizFields.classList.add('show');
    } else {
        bizFields.classList.show('hidden')
    }
}

const checkFirstNameValidation = (e) => {
    const valueState = firstNameField.value.length > 3;
    console.log(valueState)
    if (!valueState) {
        e.preventDefault();
        firstNameField.setCustomValidity("Your First Name must be more than 3 letters");
        firstNameField.classList.remove('valid');
        firstNameField.classList.add('invalid');
        console.log('Bad Input');
    } else {
        firstNameField.setCustomValidity('');
        firstNameField.validity.valid = true;
        firstNameField.classList.remove('invalid');
        firstNameField.classList.add('valid');
    };
    firstNameField.reportValidity();

};

const checkLastNameValidation = (e) => {
    const valueState = lastNameField.value.length > 3;

    if (!valueState) {
        e.preventDefault();
        lastNameField.setCustomValidity("Your First Name must be more than 3 letters");
        lastNameField.classList.remove('valid');
        lastNameField.classList.add('invalid');
        console.log('Bad Input');
    } else {
        lastNameField.setCustomValidity('');
        lastNameField.validity.valid = true;
        lastNameField.classList.remove('valid');
        lastNameField.classList.add('invalid');
    };
    lastNameField.reportValidity();

};

const checkEmailValidation = (e) => {

    const validEmailRegex = /\w+@\w+\.\w+/;
    
    if (!emailField.value.match(validEmailRegex)) {
        e.preventDefault();
        emailField.setCustomValidity("Please enter a valid e-mail address");
        emailField.reportValidity();
        emailField.classList.remove('valid');
        emailField.classList.add('invalid');
        console.log('Bad Input');
    } else {
        emailField.validity.valid = true;
        emailField.classList.remove('valid');
        emailField.classList.add('invalid');
    }
};

form.addEventListener("submit", checkFirstNameValidation);
form.addEventListener("submit", checkLastNameValidation);
form.addEventListener("submit", checkEmailValidation);
selector.addEventListener("change", selectOption);