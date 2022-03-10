// TODO
const firstNameField = document.getElementById('first-name');
const lastNameField = document.getElementById('last-name');
const emailField = document.getElementById('email');
const form = document.getElementById('connect-form');
const selector = document.getElementById('contact-kind');

/**
 * Validates first name and last name text input fields locally (submit event not necessary)
 * @param {Event object} e 
 */
const localNameValidation = (e) => {
  if(e.target.value.length < 3) {
    e.target.classList.remove('valid');
    e.target.classList.add('invalid');
    e.target.setCustomValidity(`${(e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)).replace('-', ' ')} must be three characters or more`);
    e.target.reportValidity();
    errorToConsole(e);
  }
  else {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
    e.target.setCustomValidity('');
  }
}

/**
 * Valides email input field locally (submit event not necessary)
 * @param {Event object} e 
 */
const localEmailValidation = (e) => {
  if(!e.target.value.match(/\w+@\w+\.\w+/)) {
    e.target.classList.add('invalid');
    e.target.setCustomValidity('Please enter valid email address');
    e.target.reportValidity();
    errorToConsole(e);
  }
  else {
    e.target.classList.remove('invalid');
    e.target.classList.add('valid');
    e.target.setCustomValidity('');
  }
}

/**
 * Additional form validation of all fields upon form submission
 * @param {Event object} e 
 */
const formValidation = () => {
  // Validate first name text input field
  if(firstNameField.value.length < 3) {
    firstNameField.classList.remove('valid');
    firstNameField.classList.add('invalid');
    firstNameField.setCustomValidity('First name must be three characters or more');
    firstNameField.reportValidity();
    errorToConsole();
  }
  else {
    firstNameField.classList.remove('invalid');
    firstNameField.classList.add('valid');
    firstNameField.validity.valid = true;
  }

  // Validate last name text input field
  if(lastNameField.value.length < 3) {
    lastNameField.classList.remove('valid');
    lastNameField.classList.add('invalid');
    lastNameField.setCustomValidity('Last name must be three characters or more');
    lastNameField.reportValidity();
    errorToConsole();
  }
  else {
    lastNameField.classList.remove('invalid');
    lastNameField.classList.add('valid');
    lastNameField.validity.valid = true;
  }

  // Validate email address input field
  if(!emailField.value.match(/\w+@\w+\.\w+/)) {
    emailField.classList.remove('valid');
    emailField.classList.add('invalid');
    emailField.setCustomValidity('Please enter a valid email address');
    emailField.reportValidity();
    errorToConsole();
  }
  else {
    emailField.classList.remove('invalid');
    emailField.classList.add('valid');
    emailField.validity.valid = true;
  }
}

/**
 * Console log "Bad input" upon failed form submission
 * @param {Event object} e 
 */
const errorToConsole = (e) => {
  console.log('Bad input');
  e.preventDefault();
}

// Validate form fields on change events
firstNameField.addEventListener('change', localNameValidation);
lastNameField.addEventListener('change', localNameValidation);
emailField.addEventListener('change', localEmailValidation);

// Validate form fields upon submit event
form.addEventListener('invalid', formValidation);