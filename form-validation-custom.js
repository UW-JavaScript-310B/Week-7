// TODO
const formEl = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const emailEl = document.getElementById("email");
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

firstName.addEventListener("change", () => textAreaValidation(firstName, minLength));
lastName.addEventListener("change", () => textAreaValidation(lastName, minLength));
emailEl.addEventListener("change", () => emailValidation(emailEl));
 
formEl.addEventListener('submit', (e) => {
    if (textAreaValidation(firstName, minLength) && textAreaValidation(lastName, minLength) && emailValidation(emailEl)) {
        alert('Success!!!');
        // e.preventDefault();
    } else {
        textAreaValidation(firstName, minLength);
        textAreaValidation(lastName, minLength);
        emailValidation(emailEl);
        console.log("Bad Output");
        e.preventDefault();
    }
})