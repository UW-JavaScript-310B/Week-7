// TODO
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const myForm = document.getElementById("connect-form");
const emailPattern = /\w+@\w+\.\w+/;
const message = document.getElementById("message");
const selectorContactKind = document.getElementById("contact-kind");
const selectorCodingLanguage = document.getElementById("coding-language");
const jobTitle = document.getElementById("job-title");
const website = document.getElementById("website");
const urlPattern = /https?\:\/\/.+\..+/;

const vallidateName = (e) => {
    if (fullName.value.length < 3) {
        fullName.setCustomValidity("Your name must be 3 characters or more.");
        fullName.reportValidity();
        fullName.closest(".form-group").classList.remove("valid");
        fullName.closest(".form-group").classList.add("invalid");
        console.log("Bad fullName input");
        if (e)
            e.preventDefault();
        else
            return false;
    } else {
        fullName.closest(".form-group").classList.remove("invalid");
        fullName.closest(".form-group").classList.add("valid");
        fullName.setCustomValidity("");
        fullName.reportValidity();
    }
}

const validateEmail = function(e) {
    if (emailPattern.test(email.value)) {
        email.closest(".form-group").classList.remove("invalid");
        email.closest(".form-group").classList.add("valid");
        email.setCustomValidity("");
        email.reportValidity();
    } else {
        email.closest(".form-group").classList.remove("valid");
        email.closest(".form-group").classList.add("invalid");
        email.setCustomValidity("Your email is not valid");
        email.reportValidity();
        console.log("Bad email input");
        if (e)
            e.preventDefault();
        else
            return false;
    }
}

const validateMessage = (e) => {
    if (message.value.length < 10) {
        message.setCustomValidity("Your message must be 10 characters or more.");
        message.reportValidity();
        message.closest(".form-group").classList.remove("valid");
        message.closest(".form-group").classList.add("invalid");
        console.log("Bad message input");
        if (e)
            e.preventDefault();
        else
            return false;
    } else {
        message.closest(".form-group").classList.remove("invalid");
        message.closest(".form-group").classList.add("valid");
        message.setCustomValidity("");
        message.reportValidity();
    }
}

const selectedAction = (selector) => {
    let jobFields = document.querySelectorAll("div.fieldsForJobOpportunity");
    let talkFields = document.querySelectorAll("div.fieldsForTalkCode");
    if (selector.value == "job") {
        [].forEach.call(jobFields, function(divElement){
            divElement.classList.add("show");
            divElement.classList.remove("hidden");
        });
        [].forEach.call(talkFields, function(divElement){
            divElement.classList.add("hidden");
            divElement.classList.remove("show");
        });
    } else if (selector.value == "talk") {
        [].forEach.call(talkFields, function(divElement){
            divElement.classList.add("show");
            divElement.classList.remove("hidden");
        });
        [].forEach.call(jobFields, function(divElement){
            divElement.classList.add("hidden");
            divElement.classList.remove("show");
        });
    }
}

const validateContactKindSelected = (e) => {
    if (selectorContactKind.value == "choose") {
        selectorContactKind.setCustomValidity("This field can not be empty");
        selectorContactKind.reportValidity();
        selectorContactKind.closest(".form-group").classList.remove("valid");
        selectorContactKind.closest(".form-group").classList.add("invalid");
        console.log("Bad selector ContactKind");
        return false;
    } else {
        selectorContactKind.closest(".form-group").classList.remove("invalid");
        selectorContactKind.closest(".form-group").classList.add("valid");
        selectorContactKind.setCustomValidity("");
        selectorContactKind.reportValidity();
        selectedAction(selectorContactKind);
    }
}

const validateCodingLanguageSelected = (e) => {
    if (selectorContactKind.value == "talk" && selectorCodingLanguage.value == "choose") {
        selectorCodingLanguage.setCustomValidity("This field can not be empty");
        selectorCodingLanguage.reportValidity();
        selectorCodingLanguage.closest(".form-group").classList.remove("valid");
        selectorCodingLanguage.closest(".form-group").classList.add("invalid");
        console.log("Bad selector Coding Language");
        return false;
    } else {
        selectorCodingLanguage.closest(".form-group").classList.remove("invalid");
        selectorCodingLanguage.closest(".form-group").classList.add("valid");
        selectorCodingLanguage.setCustomValidity("");
        selectorCodingLanguage.reportValidity();
    }
}

const validateJobTitle = (e) => {
    if (selectorContactKind.value == "job") {
        if (jobTitle.value.length == 0) {
            jobTitle.setCustomValidity("Job title must not be empty.");
            jobTitle.reportValidity();
            jobTitle.closest(".form-group").classList.remove("valid");
            jobTitle.closest(".form-group").classList.add("invalid");
            console.log("Bad jobTitle input");
            if (e)
                e.preventDefault();
            else
                return false;
        } else {
            jobTitle.closest(".form-group").classList.remove("invalid");
            jobTitle.closest(".form-group").classList.add("valid");
            jobTitle.setCustomValidity("");
            jobTitle.reportValidity();
        }
    }
}

const validateWebsite = function(e) {
    if (selectorContactKind.value == "job") {
        if (urlPattern.test(website.value)) {
            website.closest(".form-group").classList.remove("invalid");
            website.closest(".form-group").classList.add("valid");
            website.setCustomValidity("");
            website.reportValidity();
        } else {
            website.closest(".form-group").classList.remove("valid");
            website.closest(".form-group").classList.add("invalid");
            website.setCustomValidity("Your website is not valid");
            website.reportValidity();
            console.log("Bad website input");
            if (e)
                e.preventDefault();
            else
                return false;
        }
    }
}

const checkValidation = (e) =>{
    vallidateName(e);
    validateEmail(e);
    validateMessage(e);
    validateJobTitle(e);
    validateContactKindSelected(e);
    validateWebsite(e);
}

myForm.addEventListener("submit", checkValidation);
fullName.addEventListener("input", vallidateName);
message.addEventListener("input", validateMessage);
email.addEventListener("input", validateEmail);
selectorCodingLanguage.addEventListener("change", validateCodingLanguageSelected);
selectorContactKind.addEventListener("change", validateContactKindSelected);
jobTitle.addEventListener("input", validateJobTitle);
website.addEventListener("input", validateWebsite);

