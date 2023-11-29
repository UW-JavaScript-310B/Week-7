// TODO
const formEl = document.getElementById("connect-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const mailEl = document.getElementById("email");
const reg = /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]+)?$/;

const submitValidation = (input, minlength) => {
    if (input.value.trim().length >= minlength) {
        input.classList.add("valid");
        return true;
    }
    else{
        input.classList.add("invalid");
        alert('Please enter at least 3 characters for the first and last names');
        if (lastName.value.length <= 3) {
            lastName.classList.add("invalid");
        } else {
            lastName.classList.add("valid");
        }
        
        if (!reg.test(email.value.trim())) {
            console.log();
            mailEl.classList.add("invalid");
        }
        return false;
    }
};
const emailValidation = (email) => {
        if (reg.test(email.value.trim())){
                email.pclassList.add("valid");
                return true;
        }
        else {
                email.classList.add("invalid");
                alert("Please enter correct email address");
                return false;
        }
}

formEl.addEventListener("submit",(e) => {
        if (submitValidation(firstName, 3) && submitValidation(lastName, 3) && emailValidation(mailEl)){
            alert('Success');
        }
        else {
            alert("Bad Output");
            e.preventDefault();
        }
})