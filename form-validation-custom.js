// TODO
const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailAddress = document.getElementById("email");
const validEmail =  /\w+@\w+\.\w+/;
const form = document.getElementById("connect-form")

const nameFields = [firstNameField, lastNameField];

const checkValidation = (e) => {
 
for (let index = 0; index < nameFields.length; index++) {
    const theName = nameFields[index];
    if ( theName.value.length < 3 ) {
        e.preventDefault()
        theName.setCustomValidity("Your name must be longer than 3 letters")
        theName.parentElement.classList.add('invalid');
        theName.parentElement.classList.remove('valid');

    } else {
        theName.validity.valid = true;
        theName.parentElement.classList.remove('invalid')
        theName.parentElement.classList.add('valid')

    } // value of name field less than 3
} //for loop

if (!validEmail.test(emailAddress)) {
    e.preventDefault()
    emailAddress.setCustomValidity("Please check your email address")
    emailAddress.parentElement.classList.add('invalid');
    emailAddress.parentElement.classList.remove('valid');
   
    } else {
        
    emailAddress.validity.valid = true;
    emailAddress.parentElement.classList.remove('invalid')
    emailAddress.parentElement.classList.add('valid')


   } 




} //check validation function


















form.addEventListener("submit", checkValidation);
