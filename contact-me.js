// TODO
const form = document.querySelector('.btn');
const selector = document.getElementById('contact-kind');
const selector2 = document.getElementById('contact-kind2');

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('box');

const jobTitle = document.getElementById('job-title');
const website = document.getElementById('website');

const selectOption = (e) => {
    const selection = selector.value;
    const bizFields = document.getElementById('biz-name');
    const bizFields2 = document.getElementById('biz-name2');

    if (selection === 'job') {
        bizFields.classList.add('show');
        bizFields.classList.remove('hidden');
        bizFields2.classList.remove('show');
        bizFields2.classList.add('hidden');
    } else if (selection === 'talk') {
        bizFields.classList.remove('show');
        bizFields.classList.add('hidden');
        bizFields2.classList.add('show');
        bizFields2.classList.remove('hidden');
    }
}

const checkName = (e) => {
    const validStateName = (nameField.value.length > 3);
    if (!validStateName) {
        e.preventDefault();
        nameField.setCustomValidity('Your name must be more than 3 characters');
        console.log('Bad input');
    } else if (validStateName) {
        nameField.setCustomValidity('')
    }
    nameField.reportValidity();
}

const checkEmail = (e) => {
    const validStateEmail = /\w+@\w+\.\w+/.test(emailField.value);
    if (!validStateEmail) {
        e.preventDefault();
        emailField.setCustomValidity('This is not a valid email address');
        console.log('Bad input');
    } else {
        emailField.setCustomValidity('')
    }
    emailField.reportValidity();
}

const checkMessage = (e) => {
    const validStateMessage = (messageField.value.length > 10);
    if (!validStateMessage) {
        e.preventDefault();
        messageField.setCustomValidity('Your message must be more than 10 characters');
        console.log('Bad input');
    } else {
        messageField.setCustomValidity('')
    }
    messageField.reportValidity();
}

const checkSelection = (e) => {
    const selection = selector.value;

    if (selection === 'job') {
        checkJobtitle(e);
        checkWebsite(e);
        selector.setCustomValidity('');
    } else if (selection === 'talk') {
        checkTalkCode(e);
        selector.setCustomValidity('');
    } else {
        e.preventDefault();
        selector.setCustomValidity('Make a selection');
        console.log('Bad input');
    }
    selector.reportValidity();
}

const checkJobtitle = (e) => {
    if (jobTitle.value.length > 1) {
        jobTitle.setCustomValidity('');    
    } else {
        e.preventDefault();
        jobTitle.setCustomValidity('Your job title must be more than 1 character');
        console.log('Bad input');
    }
    jobTitle.reportValidity();
}

const checkWebsite = (e) => {
    const validStateUrl = /https?\:\/\/.+\..+/.test(website.value);
    if (!validStateUrl) {
        e.preventDefault();
        website.setCustomValidity('Your website is invalid');
        console.log('Bad input');
    } else {
        website.setCustomValidity('');
    }
    website.reportValidity();
}

const checkTalkCode = (e) => {
    const selection2 = selector2.value;
    if (selection2 === 'html' || selection2 === 'css' || selection2 === 'js'){
        selector2.setCustomValidity('')
    } else {
        e.preventDefault();
        selector2.setCustomValidity('Make a selection');
        console.log('Bad input');
    }
    selector2.reportValidity();
}

const checkValidation = (e) => {
    checkName(e);
    checkEmail(e);
    checkMessage(e);
    checkSelection(e);
}

form.addEventListener('click', checkValidation);
selector.addEventListener('change', selectOption);
