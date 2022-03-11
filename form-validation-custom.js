// TODO
const nameField = document.getElementById('first-name');
const form = document.getElementById('connect-form invalid');

const checkValidation = (e) => {
    const validState = (nameField.value.length > 1);
    if (!validState) {
        e.preventDefault();
        nameField.setCustomValidity('Your first name must be more than 1 letter');
        // nameField.closest('form-group').classList.remove('valid');
        // nameField.closest('form-group').classList.add('invalid');
        console.log('bad input');
    } else {
        nameField.validity.valid = true; 
        // nameField.closest('form-group').classList.remove('invalid');
        // nameField.closest('form-group').classList.add('valid');
    }
}

form.addEventListener('submit', checkValidation);