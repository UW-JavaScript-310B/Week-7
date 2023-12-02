// TODO
const formEl = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const emailEl = document.getElementById("email");

const jobTitle = document.getElementById("job-title");
const companyWebsite = document.getElementById("company-website");

const codingLang = document.getElementById("lang");

const contactKind = document.getElementById("contact-kind");
const reg = /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]+)?$/;

const minLength = 3;
 
const textAreaValidation = function(input, minLength) {
    if (input.value.length < minLength) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
 
    if (input.classList.contains('valid')) {
        return true;
    } else {
        return false;
    }
};
 
const emailValidation = function(emailcheck) {
    if (!reg.test(emailcheck.value.trim())) {
        emailcheck.classList.add('invalid');
        emailcheck.classList.remove('valid');
    } else {
        emailcheck.classList.add('valid');
        emailcheck.classList.remove('invalid');
    }
 
    if (emailEl.classList.contains('valid')) {
        return true;
    } else {
        return false;
    }
};

const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value;

    if (selectedValue == "job-opp") {
        jobTitle.parentElement.classList.remove("hidden");
        companyWebsite.parentElement.classList.remove("hidden");
        codingLang.parentElement.classList.add("hidden");
    }

    if (selectedValue == "talk-code") {
        jobTitle.parentElement.classList.add("hidden");
        companyWebsite.parentElement.classList.add("hidden");
        codingLang.parentElement.classList.remove("hidden");
    }
};

firstName.addEventListener("change", () => textAreaValidation(firstName, minLength));
emailEl.addEventListener("change", () => emailValidation(emailEl));


contactKind.addEventListener("change", () => handleSelect(contactKind));
 
formEl.addEventListener('submit', (e) => {
    // handleSelect(contactKind);

    if (textAreaValidation(firstName, minLength) && emailValidation(emailEl)) {
        alert('Success!!!');
        // e.preventDefault();
    } else {
        textAreaValidation(firstName, minLength);
        emailValidation(emailEl);
        console.log("Bad Output");
        e.preventDefault();
    }
});