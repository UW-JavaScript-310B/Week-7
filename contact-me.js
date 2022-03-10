// Retrieve form elements.
const contactMe = document.getElementById("contact-me");
const personName = document.getElementById("name");
const email = document.getElementById("email");
const reason = document.getElementById("reason");
const jobTitle = document.getElementById("job-title");
const companyURL = document.getElementById("company-url");
const codingLanguage = document.getElementById("coding-language");
const message = document.getElementById("message");

// checkValidation ////////////////////////////////////////////////////////////
// Checks the contact form for valid inputs before submission.
const checkValidation = (e) => {
    checkValidationName(e);
    checkValidationEmail(e);
    checkValidationMessage(e);
}

// checkValidationName ////////////////////////////////////////////////////////
// Checks the 'Name' field for valid input.
const checkValidationName = (e) => {
    let validName = personName.value.length > 3;
    if (!validName) {
        e.preventDefault();
        personName.setCustomValidity
            ("Your name must be longer than 3 letters.");
        personName.classList.remove("valid");
        personName.classList.add("invalid");
        personName.validity.valid = false;
    } else {
        personName.classList.remove("invalid");
        personName.classList.add("valid");
        personName.setCustomValidity("");
        personName.validity.valid = true;
    }
    personName.reportValidity();
}

// checkValidationEmail ///////////////////////////////////////////////////////
// Checks the 'Email' field for valid input.
const checkValidationEmail = (e) => {
    let emailTest = new RegExp(/\w+@\w+\.\w+/);
    let validEmail = emailTest.test(email.value);
    if (!validEmail) {
        e.preventDefault();
        email.setCustomValidity
            ("Please enter a valid email.");
        email.classList.remove("valid");
        email.classList.add("invalid");
        email.validity.valid = false;
    } else {
        email.classList.remove("invalid");
        email.classList.add("valid");
        email.setCustomValidity("");
        email.validity.validity = true;
    }
    email.reportValidity();
}

// checkValidationMessage /////////////////////////////////////////////////////
// Checks the 'Message' field for valid input.
const checkValidationMessage = (e) => {
    let validMessage = message.value.length > 10;
    if (!validMessage) {
        e.preventDefault();
        message.setCustomValidity
            ("Your message must be longer than 10 characters.");
        message.classList.remove("valid");
        message.classList.add("invalid");
        message.validity.valid = false;
    } else {
        message.classList.remove("invalid");
        message.classList.add("valid");
        message.setCustomValidity("");
        message.validity.valid = true;
    }
    message.reportValidity();
}

// reasonChange ///////////////////////////////////////////////////////////////
// Toggles contact-me form field visibility depending on the user's reason for
// contacting me.
const reasonChange = (e) => {
    if (reason.value === "Job opportunity") {
        reasonChangeJobOpportunity();
    }
    if (reason.value === "Talk code") {
        reasonChangeTalkCode();
    }
}

// reasonChangeJobOpportunity /////////////////////////////////////////////////
// Toggles related fields when 'Reason' is set to 'Job opportunity'.
const reasonChangeJobOpportunity = () => {
    // Reveal job-title and its label.
    jobTitle.classList.add("visible");
    jobTitle.classList.remove("invisible");
    jobTitle.previousElementSibling.classList.add("visible");
    jobTitle.previousElementSibling.classList.remove("invisible");
    // Reveal company-url and its label.
    companyURL.classList.add("visible");
    companyURL.classList.remove("invisible");
    companyURL.previousElementSibling.classList.add("visible");
    companyURL.previousElementSibling.classList.remove("invisible");
    // Hide coding-language and its label.
    codingLanguage.classList.add("invisible");
    codingLanguage.classList.remove("visible");
    codingLanguage.previousElementSibling.classList.add("invisible");
    codingLanguage.previousElementSibling.classList.remove("visible");
}

// reasonChangeTalkCode ///////////////////////////////////////////////////////
// Toggles related fields when 'Reason' is set to 'Talk code'.
const reasonChangeTalkCode = () => {
    // Reveal coding-language and its label.
    codingLanguage.classList.add("visible");
    codingLanguage.classList.remove("invisible");
    codingLanguage.previousElementSibling.classList.add("visible");
    codingLanguage.previousElementSibling.classList.remove("invisible");
    // Hide job-title, company-url, and their labels.
    jobTitle.classList.add("invisible");
    jobTitle.classList.remove("visible");
    jobTitle.previousElementSibling.classList.add("invisible");
    jobTitle.previousElementSibling.classList.remove("visible");
    companyURL.classList.add("invisible");
    companyURL.classList.remove("visible");
    companyURL.previousElementSibling.classList.add("invisible");
    companyURL.previousElementSibling.classList.remove("visible");
}

///////////////////////////////////////////////////////////////////////////////

// Attach event listeners to form elements.
contactMe.addEventListener("submit", checkValidation);
personName.addEventListener("input", checkValidationName);
email.addEventListener("input", checkValidationEmail);
message.addEventListener("input", checkValidationMessage);
reason.addEventListener("change", reasonChange);