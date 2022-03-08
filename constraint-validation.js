// Get form element
const form = document.getElementById('connect-form');
// Get first name input element
const firstName = document.getElementById('first-name');
// Get last name input element
const lastName = document.getElementById('last-name');
// Get email input element
const email = document.getElementById('email');

// Define a function called checkValidation to check some input fields such as first name, last name and email are valid or not
const checkValidation = (e) => {
  // Get first name validation state
  const fnameValidState = firstName.value.length > 2;
  // Get last name validation state
  const lnameValidState = lastName.value.length > 2;
  // Get email validation state
  const emailValidState = /\w+@\w+\.\w+/.test(email.value);
  // Prevent form submit event if one these states is false
  if (!(fnameValidState && lnameValidState && emailValidState)) {
    e.preventDefault();
  }
  // Check if first name is valid or not
  if (!fnameValidState) {
    firstName.focus();
    // Show error message
    firstName.setCustomValidity('Your first name must be 3 characters or more.');
  } else {
    firstName.validity.valid = true;
  }
  // Check if last name is valid or not
  if (!lnameValidState) {
    // Show error message
    lastName.setCustomValidity('Your last name must be 3 characters or more.');
  } else {
    lastName.validity.valid = true;
  }
  // Check if email is valid or not
  if (!emailValidState) {
    // Show error message
    email.setCustomValidity('Your email address is invalid.');
  } else {
    email.validity.valid = true;
  }
};

// Fires form listener event
form.addEventListener('submit', checkValidation);

// Fires first name input event listener
firstName.addEventListener('input', () => {
  firstName.setCustomValidity('');
  firstName.checkValidity();
});
