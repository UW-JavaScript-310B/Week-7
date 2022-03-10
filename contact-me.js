// TODO
const webForm = document.getElementById('connect-form');
const contactKind = document.getElementById('contact-kind');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const codeMessageField = document.getElementById('code-message');

contactKind.addEventListener('change', (e) => {
    e.preventDefault();
    const kindValue = e.target.value;

    if (kindValue === 'job-opportunity'){
        document.getElementById('talk-code').setAttribute('style', 'display: none;');
        document.getElementById('job-opportunity').removeAttribute('style');
    }
    else if (kindValue === 'talk-code') {
        document.getElementById('job-opportunity').setAttribute('style', 'display: none;');
        document.getElementById('talk-code').removeAttribute('style');
    }
})

const validateForm = (e) => {

    const nameStatus = nameField.value.length > 3;
    const emailCheck = new RegExp(/\w+@\w+\.\w+/);
    const emailStatus = emailCheck.exec(emailField.value);
    const messageStatus = codeMessageField.value.length > 10;
    
    if (!nameStatus) {
        e.preventDefault();
        alert('Name is not longer than 3 letters. Needs correction');
    }

    else if (!emailStatus) {
        e.preventDefault();
        alert('Email doesn\'t look like an email. Needs to be corrected.');
    }
    
    // TALK CODE SELECTED
    else if (!messageStatus && contactKind.value === 'talk-code') {
        e.preventDefault();
        alert('Message is less than 10 letters long. Make it longer for me to understand.');
    }
}

webForm.addEventListener('submit', validateForm );