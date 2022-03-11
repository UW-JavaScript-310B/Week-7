// TODO
const nameField = document.getElementById('first-name');
const form = document.getElementById('connect-form');
const selector = document.getElementById('contact-kind');

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

const checkValidation = (e) => {
    const validState = (nameField.value.length > 1);
    if (!validState) {
        e.preventDefault();
        nameField.setCustomValidity('Your first name must be more than 1 letter');
    } else {
        nameField.validity.valid = true; 
    }
}

form.addEventListener('submit', checkValidation);
selector.addEventListener('change', selectOption);