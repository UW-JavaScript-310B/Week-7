// TODO
const nameField = document.getElementById('first-name');
const form = document.getElementById('connect-form');

const checkValidation = (e) => {
    const validState = nameField.value.length > 3;
    if (!validState){
        e.preventDefault();
        nameField.setCustomValidty('Your First Name must be more than 3 letters')
    } else {
        nameField.validState = true;
    }

    console.log(nameField.value);
}



form.addEventListener('submit', checkValidation);