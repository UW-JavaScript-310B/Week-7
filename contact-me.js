// TODO
const yourName = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("contact-form");
const optionBox = document.getElementById('contact-kind');
const jobOppFollowUp = document.getElementById('job-opp-follow-up');
const talkCodeFollowUp = document.getElementById('talk-code-follow-up');
const messageBox = document.getElementById('additional-message');
const jobTitle = document.getElementById('job-title-input');
const companyUrl = document.getElementById('company-url-input');
const codeType = document.getElementById('code-type');

console.log(jobTitle);
console.log(companyUrl);

function addInvalidClass(x){
    x.parentElement.classList.remove('valid');
    x.parentElement.classList.add('invalid');
};

function requiredField(x) {
    x.validity.valid = false;
    x.setCustomValidity("This field is required");
    addInvalidClass(x);
    x.reportValidity();
};

function lessThan3(x) {
    x.validity.valid = false;
    x.setCustomValidity("This field must be more than 3 characters");
    addInvalidClass(x);
    x.reportValidity();
};

function lessThan10(x) {
    x.validity.valid = false;
    x.setCustomValidity("This field must be more than 10 characters");
    addInvalidClass(x);
    x.reportValidity();
};


function validEntry(x) {
    x.validity.valid = true;
    x.setCustomValidity("");
    x.parentElement.classList.remove('invalid');
    x.parentElement.classList.add('valid');
};

function validState(x) {
    if (x.value === "") {
        requiredField(x)
    } else if (x.value.length <= 3) {
        lessThan3(x);
    } else {
        validEntry(x);
    }
};

function emailValidation(x) {
    const emailRegex = /\w+@\w+\.\w+/;
    if (email.value === "") {
        requiredField(x)
    } else if (!x.value.match(emailRegex)) {
        x.validity.valid = false;
        x.setCustomValidity("Invalid email");
        addInvalidClass(x);
        x.reportValidity();
    } else {
        validEntry(x);
    }
};

function optionSelection() {
    if (optionBox.selectedIndex === 1) {
        talkCodeFollowUp.classList.remove('followup-active');
        talkCodeFollowUp.classList.add('followup-inactive')
        jobOppFollowUp.classList.remove('followup-inactive');
        jobOppFollowUp.classList.add('followup-active');
    } else if (optionBox.selectedIndex === 2) {
        jobOppFollowUp.classList.remove('followup-active');
        jobOppFollowUp.classList.add('followup-inactive');
        talkCodeFollowUp.classList.remove('followup-inactive');
        talkCodeFollowUp.classList.add('followup-active')
    }
};

function jobOppDetails(x){
    if(x.value === ""){
        requiredField(x)
    }else{
        validEntry(x)
    }
};

function urlValidation(x) {
    const urlRegex = /https?\:\/\/.+\..+/;
    if (x.value === "") {
        requiredField(x)
    } else if (!x.value.match(urlRegex)) {
        x.validity.valid = false;
        x.setCustomValidity("Invalid url");
        addInvalidClass(x);
        x.reportValidity();
    } else {
        validEntry(x);
    }
};

function codeLangSelection(x){
        if (x.selectedIndex === 0) {
            requiredField(x)
        } else{
            validEntry(x)
        }
}

function messageValidState(x) {
    if (x.value === "") {
        requiredField(x)
    } else if (x.value.length <= 10) {
        lessThan10(x);
    } else {
        validEntry(x);
    }
};


const checkValidation = (e) => {
    console.log('test');
    e.preventDefault();
    validState(yourName);
    emailValidation(email);
    optionSelection();

    if(jobOppFollowUp.classList.contains('followup-active')){
        jobOppDetails(jobTitle);
        urlValidation(companyUrl);
    } else if(talkCodeFollowUp.classList.contains('followup-active')){
        codeLangSelection(codeType);
    };

    messageValidState(messageBox);

}

form.addEventListener("change", checkValidation);