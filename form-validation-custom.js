// Get form element
const form = document.getElementById('connect-form');
// Get first name element
const firstName = document.getElementById('first-name');
// Get last name element
const lastName = document.getElementById('last-name');
// Get email element
const email = document.getElementById('email');


const checkValidation = (e) => {
  const firstNameValidState = firstName.value.trim().length > 2;
  const lastNameValidState = lastName.value.trim().length > 2;
  const emailValue = email.value.trim();

  // Check if the first name is valid or not
  if (!firstNameValidState) {
    e.preventDefault();
    // Call function setInvalidInput to show an error message
    setInvalidInput(firstName, 'Your first name must be 3 characters or more!');
    // Console bad input log
    console.log('Bad first name input.'); 
  } else {
    setValidInput(firstName);
  }
  // Check if the last name is valid or not
  if (!lastNameValidState) {
    e.preventDefault();
    // Call function setInvalidInput to show an error message
    setInvalidInput(lastName, 'Your last name must be 3 characters or more!');
    // Console bad input log
    console.log('Bad last name input.');
  } else {
    setValidInput(lastName);
  }
  // Check if the email is valid or not
  if (emailValue === '') {
    setInvalidInput(email, 'Email cannot be blank. Please enter your email!');
  } else if (!(/\w+@\w+\.\w+/.test(emailValue))) {
    setInvalidInput(email, 'Email is invalid. Please re-enter your email.');
  } else {
    setValidInput(email);
  }
  // Check all mandatory fields
  if (firstNameValidState && lastNameValidState && /\w+@\w+\.\w+/.test(emailValue)) {
    alert('Your input info looks good!');
  }

};
// Fires form's submit listener
form.addEventListener('submit', checkValidation);

// Define function setInvalidInputField to show info about invalid input
function setInvalidInput(input, message) {
  // Get parent element of the current input field
  const formGroup = input.parentElement;
  // Get element 'small'
  const small = formGroup.querySelector('small');
  // Add class name 'invalid' to the parent element
  formGroup.classList.add('invalid');
  // Remove class name 'valid' from the parent element
  formGroup.classList.remove('valid');
  // Using small element to show an error message in HTML page
  small.innerText = message;
}

// Define function setValidInputField
function setValidInput(input) {
  // Get parent element of the current input field
  const formGroup = input.parentElement;
  // Add class name 'valid' to the parent element
  formGroup.classList.add('valid');
  // Remove class name 'invalid' from the parent element
  formGroup.classList.remove('invalid');  

}