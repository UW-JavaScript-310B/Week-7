// TODO

let form = document.getElementById('contactForm');
let nameField = document.getElementById('name');
let emailField = document.getElementById('email');
let jobWrapper = document.getElementById('jobTitleWrapper');
let websiteWrapper = document.getElementById('websiteWrapper');
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
        nameField.setCustomValidity(`Your  name must be more than three letters.`);
    } else {
        nameField.validity.valid = true;
        nameField.setCustomValidity('');
        nameField.parentElement.classList.remove('invalid');
    }
    nameField.reportValidity();
}

sendBtn.addEventListener('click', checkNameLength, true);

// Email validation goes here
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

sendBtn.addEventListener('click', checkEmail, true);

// Contact Reason Code
const selectOption = function() {
    let selection = selector.value
    if (selction = "job") {
        jobWrapper.classList.remove('hidden');
    } else if (selection = 'chat') {
        languageWrapper.classList.remove('hidden');
    }
}

// Message validation
const checkMsgLength = function(e) {
    let msgValidState = msgField.value.length > 10;
    if (msgValidState === false) {
        e.preventDefault();
        msgField.parentElement.classList.add('invalid'); 
        msgField.setCustomValidity(`Your  name must be more than three letters.`);
    } else {
        msgField.validity.valid = true;
        msgField.parentElement.classList.remove('invalid');
    }
}
sendBtn.addEventListener('click', checkMsgLength, true);
