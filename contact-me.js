// TODO
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const submit = document.querySelector(".btn-primary");
const menu = document.getElementById("contact-kind");

const validateFirstName = (e) => {
    if (nameField.value.length < 3) {
        e.preventDefault();
        nameField.validity.valid = false;
        nameField.setCustomValidity("Name field must include more than 3 letters");
        nameField.parentElement.classList.add('invalid');
        nameField.parentElement.classList.remove('valid');
    } else {
        nameField.validity.valid = true;
        nameField.setCustomValidity('');
        nameField.parentElement.classList.add('valid');
        nameField.parentElement.classList.remove('invalid');
    } nameField.reportValidity();
};

const validateEmail = (e) => {
    const emailRegExp = /\w+@\w+\.\w+/;
    if (!emailField.value.match(emailRegExp)) {
        e.preventDefault();
        emailField.validity.valid = false;
        emailField.setCustomValidity("Not a valid email, please try again.")
        emailField.parentElement.classList.add('invalid');
        emailField.parentElement.classList.remove('valid');
    } else {
        emailField.validity.valid = true;
        emailField.setCustomValidity('');
        emailField.parentElement.classList.add('valid');
        emailField.parentElement.classList.remove('invalid');
    } emailField.reportValidity();
};

const validateMessage = (e) => {
    const message = document.getElementById("message");
    if (message.value.length < 10) {
        e.preventDefault();
        message.validity.valid = false;
        message.setCustomValidity("Message must be at least 10 characters");
        message.parentElement.classList.add('invalid');
        message.parentElement.classList.remove('valid');
    } else {
        message.validity.valid = true;
        message.setCustomValidity('');
        message.parentElement.classList.add('valid');
        message.parentElement.classList.remove('invalid');
    }
}

const dropDownMenu = () => {
    const userSelect = menu.value;
    const jobOption = document.getElementById("job-title");
    const talkOption = document.getElementById("coding-language")
    if (userSelect === "job") {
        jobOption.classList.remove("hidden");
        jobOption.classList.add("show");
    } else if (userSelect === "talk") {
        talkOption.classList.remove("hidden");
        talkOption.classList.add("show");
    } else {
        console.log("yikes. this is broken.")
    }
};

const checkValidation = (e) => {
    validateFirstName(e);
    validateEmail(e);
};

submit.addEventListener("click", checkValidation);
menu.addEventListener("change", dropDownMenu)