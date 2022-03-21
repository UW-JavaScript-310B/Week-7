// TODO
const nameField = document.getElementById('first-name');
const nameField2 = document.getElementById('last-name');
const form = document.querySelector('.btn');
const selector = document.getElementById('contact-kind');

const emailField = document.getElementById('email');
const messageField = document.getElementById('box');

const selectOption = (e) => {
    const selection = selector.value;
    const bizFields = document.createElement('biz-name');

    if (selection === 'business') {
        bizFields.classList.remove('hidden');
        bizFields.classList.show('show');
    } else if (selection === 'technical') {
        bizFields.classList.show('hidden');
    }
}

const checkFirstName = (e) => {
    const validStateName = (nameField.value.length > 3);
    if (!validStateName) {
        e.preventDefault();
        nameField.setCustomValidity('Your name must be more than 3 characters');
        console.log('Bad input');
    } else if (validStateName) {
        nameField.setCustomValidity('')
    }
    nameField.reportValidity();
}

const checkSecondName = (e) => {
    const validStateName = (nameField2.value.length > 3);
    if (!validStateName) {
        e.preventDefault();
        nameField2.setCustomValidity('Your name must be more than 3 characters');
        console.log('Bad input');
    } else if (validStateName) {
        nameField2.setCustomValidity('')
    }
    nameField2.reportValidity();
}

const checkEmail = (e) => {
    const validStateEmail = /\w+@\w+\.\w+/.test(emailField.value);
    if (!validStateEmail) {
        e.preventDefault();
        emailField.setCustomValidity('This is not a valid email address');
        console.log('Bad input');
    } else {
        emailField.setCustomValidity('')
    }
    emailField.reportValidity();
}

const checkValidation = (e) => {
    checkFirstName(e);
    checkSecondName(e);
    checkEmail(e);
}

form.addEventListener('click', checkValidation);
selector.addEventListener('change', selectOption);