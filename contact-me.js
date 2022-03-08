// TODO
const form = document.querySelector('form');
const firstNameField = document.getElementById('first-name');
const lastNameField = document.getElementById('last-name');
const emailField = document.getElementById('email');
const reasonField = document.getElementById('reason');
const jobTitleField = document.getElementById('job-title');
const companyUrlField = document.getElementById('company-url');
const codingLanguageField = document.getElementById('coding-language');
const messageField = document.getElementById('message');

const localNameValidation = e => e.target.value.length < 3 ? invalidateField(e) : validateField(e);

const localEmailValidation = e => e.target.value.match(/\w+@\w+\.\w+/) ? validateField(e) : invalidateField(e);

const selectUpdate = () => {
  console.log(reasonField.value);
  if(reasonField.value === 'job') {
    jobTitleField.parentElement.classList.remove('hidden');
    companyUrlField.parentElement.classList.remove('hidden');
    codingLanguageField.parentElement.classList.add('hidden');
  }
  else if(reasonField.value === 'code') {
    codingLanguageField.parentElement.classList.remove('hidden');
    jobTitleField.parentElement.classList.add('hidden');
    companyUrlField.parentElement.classList.add('hidden');
  }
}

const validateField = (e) => {
  e.target.classList.remove('invalid');
  e.target.classList.add('valid');
  e.target.setCustomValidity('');
  e.target.validity.valid = true;
}

const invalidateField = (e) => {
  e.target.classList.remove('valid');
  e.target.classList.add('invalid');
  e.target.setCustomValidity(`${(e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)).replace('-', ' ')} must be three characters or more`);
  e.target.reportValidity();
}

const submissionValidation = (e) => {
  console.log(lastNameField.validity)
  if(!firstNameField.validity.valid) {
    firstNameField.setCustomValidity(`A minimum of three characters are required`);
    firstNameField.reportValidity();
    e.preventDefault();
  }

  if(!lastNameField.validity.valid) {
    lastNameField.setCustomValidity(`A minimum of three characters are required`);
    lastNameField.reportValidity();
    e.preventDefault();
  }

  if(!emailField.validity.valid) {
    emailField.setCustomValidity(`Please enter a valid email address`);
    emailField.reportValidity();
    e.preventDefault();
  }
}

// real-time validation of forms fields upon chan ge event
firstNameField.addEventListener('change', localNameValidation);
lastNameField.addEventListener('change', localNameValidation);
emailField.addEventListener('change', localEmailValidation);
reasonField.addEventListener('change', selectUpdate)

// validation of form fields upon submit event
form.addEventListener('submit', submissionValidation);