// TODO

const webForm = document.getElementById('connect-form');
const firstNameField = document.getElementById('first-name');
const lastNameField = document.getElementById('last-name');
const emailField = document.getElementById('email');

const validateForm = (e) => {
    
    const firstNameStatus = firstNameField.value.length > 3
    const lastNameStatus = lastNameField.value.length > 3
    const emailCheck = new RegExp(/\w+@\w+\.\w+/);
    const emailStatus = emailCheck.exec(emailField.value);
    
    if (!firstNameStatus) {
        e.preventDefault();
        firstNameField.parentElement.classList.add('invalid');
        alert('First name is 3 letters long or fewer. Needs to be longer.');
        console.log('Bad input.')
    }
    else if (!lastNameStatus) {
        e.preventDefault();
        lastNameField.parentElement.classList.add('invalid');
        alert('Last name is 3 letters long or fewer. Needs to be longer.');
        console.log('Bad input.');
    }
    else if (!emailStatus) {
        e.preventDefault();
        emailField.parentElement.classList.add('invalid');
        alert('Email doesn\'t look like an email. Needs to be corrected.');
        console.log('Bad input.');
    } 

    else {
        const fields = [firstNameField, lastNameField, emailField]
        fields.forEach( field => {
            if(field.parentElement.classList.contains('invalid')) { 
                field.parentElement.classList.remove('invalid')
            }
        })
    }
}

webForm.addEventListener('submit', validateForm);
