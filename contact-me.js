// TODO

// let form = document.getElementById('contactForm');
let nameField = document.getElementById('name');
let emailField = document.getElementById('email');
let reasonDropDown = document.getElementById('reasonForContact');
/**
 * Ran into layout problems wrapping Job Title and Website elements in a 
 * div, so jobWrapper and websiteWrapper are seperate variables.
 */
let jobWrapper = document.getElementById('jobTitleWrapper');
let websiteWrapper = document.getElementById('websiteWrapper');
let jobTitleInputField = document.getElementById('jobTitle'); // for extra credit
let websiteInputField = document.getElementById('website'); // for extra credit
let languageWrapper = document.getElementById('languageWrapper');
let msgField = document.getElementById('message');
let sendBtn = document.getElementById('sendBtn');

// Name Validation
const checkNameLength = function(e) {
    let nameValidState = nameField.value.length > 3;
    if (nameValidState === false) {
        e.preventDefault();
        nameField.validity.valid = false;
        nameField.parentElement.classList.add('invalid'); 
        nameField.setCustomValidity(`Your name must be more than three letters.`);
    } else {
        nameField.validity.valid = true;
        nameField.setCustomValidity('');
        nameField.parentElement.classList.remove('invalid');
    }
    nameField.reportValidity();
}

sendBtn.addEventListener('click', checkNameLength, true);

// Email validation
const checkEmail = function(e) {
    let regExStr = new RegExp(/\w+@\w+\.\w+/);
    let emailValidState = regExStr.test(emailField.value);
    if (emailValidState === false) {
        e.preventDefault();
        emailField.validity.valid = false;
        emailField.parentElement.classList.add('invalid'); 
        emailField.setCustomValidity(`Please ensure your email is properly formatted.`);
    } else {
        emailField.validity.valid = true;
        emailField.setCustomValidity('');
        emailField.parentElement.classList.remove('invalid');
    }
    nameField.reportValidity();
}

sendBtn.addEventListener('change', checkEmail, true);

// Contact Reason Code
const selectOptionOne = function() {
    let selection = reasonDropDown.value;
    if (selection == "job") {
        jobWrapper.classList.remove('hidden');
        websiteWrapper.classList.remove('hidden');
    } else if (selection = 'chat') {
        languageWrapper.classList.remove('hidden');
    }
}
const selectOptionTwo = function() {
    let selection = reasonDropDown.value;
    if (selection == "chat") {
        jobWrapper.classList.add('hidden');
        websiteWrapper.classList.add('hidden');
    } else if (selection = "job") {
        languageWrapper.classList.add('hidden');
    }
}

reasonDropDown.addEventListener('change', selectOptionOne, true);
reasonDropDown.addEventListener('change', selectOptionTwo, true);

// Job Title validation - extra credit #1, 1 of 2
const checkJobTitle = function(e) {
    // Requirements say "Job Title is present", so testing for 1 character
    let jobTitleValidState = jobTitleInputField.value.length >= 1;
    if (reasonDropDown.value == 'job') {
        if (jobTitleValidState === false) {
            e.preventDefault();
            jobTitleInputField.validity.valid = false;
            jobTitleInputField.parentElement.classList.add('invalid'); 
            jobTitleInputField.setCustomValidity(`Please enter the Job's Title.`);
        } else {
            jobTitleInputField.validity.valid = true;
            jobTitleInputField.setCustomValidity('');
            jobTitleInputField.parentElement.classList.remove('invalid');
        }
    }
    
    jobTitleInputField.reportValidity();
}

sendBtn.addEventListener('click', checkJobTitle, true);

// Website validation - extra credit #1, 2 of 2
const checkWebsiteValidity = function(e) {
    let regExStr = new RegExp(/https?\:\/\/.+\..+/);
    let websiteValidState = regExStr.test(websiteInputField.value);
    if (reasonDropDown == 'job') {
        if (websiteValidState === false) {
            e.preventDefault();
            websiteInputField.validity.valid = false;
            websiteInputField.parentElement.classList.add('invalid'); 
            websiteInputField.setCustomValidity(`Please enter a valid website, including 'http://www'.`);
        } else {
            websiteInputField.validity.valid = true;
            websiteInputField.setCustomValidity('');
            websiteInputField.parentElement.classList.remove('invalid');
        }
    }
    
    websiteInputField.reportValidity();
}

sendBtn.addEventListener('click', checkWebsiteValidity, true);

// (Programming) Language validation
const checkLanguageValidation = function(e) {
    let languageValidState = reasonDropDown.value;
    if (languageValidState === false) {
        reasonDropDown.validity.valid = false;
        reasonDropDown.parentElement.classList.add('invalid'); 
        reasonDropDown.setCustomValidity(`Please make a selection.`);
    } else {
        reasonDropDown.validity.valid = true;
        reasonDropDown.setCustomValidity('');
        reasonDropDown.parentElement.classList.remove('invalid');
    }
    reasonDropDown.reportValidity();
}

sendBtn.addEventListener('change', checkLanguageValidation, true);

// Message validation
const checkMsgLength = function(e) {
    let msgValidState = msgField.value.length > 10;
    if (msgValidState === false) {
        e.preventDefault();
        msgField.validity.valid = false;
        msgField.parentElement.classList.add('invalid'); 
        msgField.setCustomValidity(`Your message must be more than ten letters.`);
    } else {
        msgField.validity.valid = true;
        msgField.setCustomValidity('');
        msgField.parentElement.classList.remove('invalid');
    }
    msgField.reportValidity();
}

sendBtn.addEventListener('click', checkMsgLength, true);


// Testing
const dropDownSelection = function(e) {
    if (reasonDropDown.value == 'job') {
        jobTitleInputField.setAttribute('required');
        websiteInputField.setAttribute('required');
        document.getElementById('language').removeAttribute('required');
    } else if (reasonDropDown.value == 'chat') {
        jobTitleInputField.removeAttribute('required');
        websiteInputField.removeAttribute('required');
        document.getElementById('language').setAttribute('required');
    }
}

reasonDropDown.addEventListener('input', dropDownSelection, true);