const form = document.querySelector('form');
const firstNameField = document.getElementById('first-name');
const lastNameField = document.getElementById('last-name');
const emailField = document.getElementById('email');
const reasonField = document.getElementById('reason');
const jobTitleField = document.getElementById('job-title');
const companyUrlField = document.getElementById('company-url');
const codingLanguageField = document.getElementById('coding-language');
const messageField = document.getElementById('message');

/**
 * Upon submit event, validate first name, last name, email, and textarea fields
 * @param {Event object} e 
 */
const submissionValidation = (e) => {
  if(firstNameField.value.length < 3) {
    firstNameField.setCustomValidity(`A minimum of three characters are required`);
    firstNameField.reportValidity();
    e.preventDefault();
  }
  else {
    firstNameField.setCustomValidity('');
    firstNameField.reportValidity();
  }

  if(lastNameField.value.length < 3) {
    lastNameField.setCustomValidity(`A minimum of three characters are required`);
    lastNameField.reportValidity();
    e.preventDefault();
  }
  else {
    lastNameField.setCustomValidity('');
    lastNameField.reportValidity();
  }

  if(!emailField.value.match(/\w+@\w+\.\w+/)) {
    emailField.setCustomValidity(`Please enter a valid email address`);
    emailField.reportValidity();
    e.preventDefault();
  }

  if(messageField.value.length < 10) {
    emailField.setCustomValidity(`A minimum of 10 characters is required`);
    emailField.reportValidity();
    e.preventDefault();
  }
  form.reportValidity();
}

/**
 * Provides real-time form field feedback via setting custom validity messaging
 * @param {Event object} e 
 */
const formRealTimeFeedback = (e) => {
  // set "changed" class to utilize associated CSS styles
  if(e.target.localName !== 'select') {
    e.target.classList.add('changed');
  }
  
  if(e.target.name.includes('name') && e.target.value.length < 3) {
    e.target.setCustomValidity(`A minimum of three characters are required`);
  }
  else if(e.target.name.includes('email') && !(/\w+@\w+\.\w+/).test(e.target.value)) {
    e.target.setCustomValidity(`Please enter a valid email address`);
  }
  else if(e.target.name.includes('message') && e.target.value.length < 10) {
    e.target.setCustomValidity(`A minimum of ten characters are required`);
  }
  else {
    e.target.setCustomValidity('');
  }
  e.target.reportValidity();
}

/**
 * Toggles hidden form fields when parent select options are chosen
 */
 const selectUpdate = () => {
  if(reasonField.value === 'job') {
    jobTitleField.required = true;
    jobTitleField.parentElement.classList.remove('hidden');
    companyUrlField.required = true;
    companyUrlField.parentElement.classList.remove('hidden');
    codingLanguageField.required = false;
    codingLanguageField.parentElement.classList.add('hidden');
  }
  else if(reasonField.value === 'code') {
    codingLanguageField.required = true;
    codingLanguageField.parentElement.classList.remove('hidden');
    jobTitleField.required = false;
    jobTitleField.parentElement.classList.add('hidden');
    companyUrlField.required = false;
    companyUrlField.parentElement.classList.add('hidden');
  }
}

form.addEventListener('input', formRealTimeFeedback);
reasonField.addEventListener('change', selectUpdate)
form.addEventListener('submit', submissionValidation);