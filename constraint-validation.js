// TODO
// TODO
const nameField = document.getElementById("first-name");
const nameFieldLastname = document.getElementById("last-name");
const form = document.getElementById("connect-form")


const checkValidation = (e) => {
    
    const validState = (nameField.value.length > 3)

    if (!validState) {
        e.preventDefault()
        nameField.setCustomValidity("Your First Name but be more than 3 letters")
        nameField.closest("form-group").classList.remove('valid');
        nameField.closest("form-group").classList.add('invalid');
        console.log('Bad-Input');
    } else {
        nameField.validity.valid = true;
        nameField.closest("form-group").classList.remove('valid');
    }
    
}


form.addEventListener("submit", checkValidation);
