// TODO
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('box');

const form = document.getElementById('connect-form');
const selector = document.getElementById('contact-kind');

const selectOption = (e) => {
    const selection = selector.value;
    const bizFields = document.getElementById('biz-name');
    const bizFields2 = document.getElementById('biz-name2');

    if (selection === 'job') {
        bizFields.classList.add('show');
        bizFields.classList.remove('hidden');
        bizFields2.classList.remove('show');
        bizFields2.classList.add('hidden');
    } else if (selection === 'talk') {
        bizFields.classList.remove('show');
        bizFields.classList.add('hidden');
        bizFields2.classList.add('show');
        bizFields2.classList.remove('hidden');
    }
}

const checkValidation = (e) => {
    const validStateEmail = /\w+@\w+\.\w+/.test(emailField.value);
    const validStateName = (nameField.value.length > 1);
    const validStateMessage = (messageField.value.length > 10);

    if (!validStateName) {
        e.preventDefault();
        nameField.setCustomValidity('Your name must be more than 1 letter');
    } else if (!validStateEmail) {
        e.preventDefault();
        emailField.setCustomValidity('This is not a valid email address');
    } else if (!validStateMessage) {
        e.preventDefault();
        messageField.setCustomValidity('Your message must be more than 10 characters');
    } else {
        nameField.validity.valid = true; 
        validStateEmail.validity.valid = true;
        messageField.validity.valid = true; 
    }
}

form.addEventListener('submit', checkValidation);
selector.addEventListener('change', selectOption);
