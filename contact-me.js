const form = document.querySelector('form');
const firstNameField = document.getElementById('first-name');
const lastNameField = document.getElementById('last-name');
const emailField = document.getElementById('email');
const reasonField = document.getElementById('reason');
const jobTitleField = document.getElementById('job-title');
const companyUrlField = document.getElementById('company-url');
const codingLanguageField = document.getElementById('coding-language');
const messageField = document.getElementById('message');


const validationRules = {
  'first-name': {
    id: 'first-name',
    minLength: 3,
    pattern: new RegExp(/./),
    validation: 'A minimum of three characters are required',
    required: true
  },
  'last-name': {
    id: 'last-name',
    minLength: 3,
    pattern: new RegExp(/./),
    validation: 'A minimum of three characters are required',
    required: true
  },
  email: {
    id: 'email',
    minLength: 1,
    pattern: new RegExp(/\w+@\w+\.\w+/),
    validation: 'Please enter a valid email address',
    required: true
  },
  'job-title': {
    id: 'job-title',
    minLength: 1,
    pattern: new RegExp(/./),
    validation: 'Please enter your job title}',
    required: false
  },
  'company-url': {
    id: 'company-url',
    minLength: 1,
    pattern: new RegExp(/https?:\/\/.+\..+/),
    validation: 'A valid web address is required',
    required: false
  },
  'coding-language': {
    id: 'coding-language',
    minLength: 1,
    pattern: new RegExp(/./),
    validation: 'Please enter or choose a coding language',
    required: false
  },
  message: {
    id: 'message',
    minLength: 10,
    pattern: new RegExp(/./),
    validation: 'A minimum of ten characters are required',
    required: true
  }
}

/**
 * Upon submit event, validate first name, last name, email, and textarea fields
 * @param {Event object} e 
 */
const submissionValidation = (e) => {

  Object.keys(validationRules).forEach(key => {
    
    const element = document.getElementById(validationRules[key].id);
    const elementValue = element.value.trim();
    if(element.required && (elementValue.length < validationRules[key].minLength || !validationRules[key].pattern.test(elementValue))) {
      element.setAttribute('aria-invalid', 'true');
      element.setCustomValidity(validationRules[key].validation);
      e.preventDefault();
    }
    else {
      element.setCustomValidity('');
    }
    form.reportValidity();
  })
}

/**
 * Provides real-time form field feedback via setting custom validity messaging
 * @param {Event object} e 
 */
const formRealTimeFeedback = (e) => {
  const element = e.target;
  const elementValue = element.value.trim();

  console.log(e.target.id);

  if(element.required && (elementValue.length < validationRules[e.target.id].minLength || !validationRules[e.target.id].pattern.test(elementValue))) {
    e.target.setCustomValidity(validationRules[e.target.id].validation);
    e.target.setAttribute("aria-invalid", "true");
  }
  else {
    e.target.setCustomValidity('');
    e.target.setAttribute("aria-invalid", "false");
  }
  e.target.reportValidity();
}

/**
 * Shows or hides form fields when parent select options are chosen
 */
 const selectUpdate = () => {
  if(reasonField.value === 'job') {
    setRequiredField(jobTitleField, true);
    updateCssClass(jobTitleField.parentElement, 'remove', 'hidden');
    
    setRequiredField(companyUrlField, true);
    updateCssClass(companyUrlField.parentElement, 'remove', 'hidden');

    setRequiredField(codingLanguageField, false);
    updateCssClass(codingLanguageField.parentElement, 'add', 'hidden');
  }
  else if(reasonField.value === 'code') {
    setRequiredField(codingLanguageField, true);
    updateCssClass(codingLanguageField.parentElement, 'remove', 'hidden');
    
    setRequiredField(jobTitleField, false);
    updateCssClass(jobTitleField.parentElement, 'add', 'hidden');

    setRequiredField(companyUrlField, false);
    updateCssClass(companyUrlField.parentElement, 'add', 'hidden');
  }
}

/**
 * Helper function to set boolearn required attribute on HTML elements
 * @param {HTML Elerment} element 
 * @param {boolean} state 
 */
const setRequiredField = (element, state) => {
  element.required = state;
}

/**
 * Helper function to add/remove CSS classes from HTML elements
 * @param {HTML Element} element 
 * @param {string} action 
 * @param {string} cssClass 
 */
const updateCssClass = (element, action, cssClass) => {
  element.classList[action](cssClass);
}

form.addEventListener('input', formRealTimeFeedback);
reasonField.addEventListener('change', selectUpdate)
form.addEventListener('submit', submissionValidation);
