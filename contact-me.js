// TODO

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const form = document.getElementById("connect-form");
const selector = document.getElementById("contact-kind");
const jobFields = document.getElementById("job-opp")
const talkFields = document.getElementById("talk-code")

const selectJobOption = () => {
    const selection = selector.value;

    if (selection === "Job") {
        jobFields.classList.add('show');
        talkFields.classList.remove('show');
    } else if (selection === "Talk") {
        talkFields.classList.add('show');
        jobFields.classList.remove('show');
    } else {
    };
};

const messageText = (e) => {
    const messageEl = document.getElementById("message");
    const messageBox = document.getElementById("message-box");

    if (messageEl.value.length > 10) {
        e.preventDefault();
        messageEl.setCustomValidity("Must have more than 10 characters");
        messageEl.classList.remove('valid');
        messageEl.classList.add('invalid');
        messageEl.reportValidity();
    } else {
    };
}

const checkFirstNameValidation = (e) => {
    const valueState = nameField.value.length > 3;
    if (!valueState) {
        e.preventDefault();
        nameField.setCustomValidity("Your First Name must be more than 3 letters");
        nameField.classList.remove('valid');
        nameField.classList.add('invalid');
        console.log('Bad Input');
    } else {
        nameField.setCustomValidity('');
        nameField.validity.valid = true;
        nameField.classList.remove('invalid');
        nameField.classList.add('valid');
    };
    nameField.reportValidity();

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
form.addEventListener("submit", checkEmailValidation);
form.addEventListener("change", selectJobOption);
form.addEventListener("change", messageText);

