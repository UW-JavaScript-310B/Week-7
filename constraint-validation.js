const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
const submitBtn = document.querySelector(".btn-primary");


// const checkValidation = (e) => {
    
//     const validState = nameField.value.length > 3
//     if (!validState) {
//         e.preventDefault();
//         nameField.setCustomValidity("Your First Name but be more than 3 letters");
//         nameField.closest("form-group").classList.remove('valid');
//         nameField.closest("form-group").classList.add('invalid');
//     } else {
//         nameField.validity.valid = true;
//         nameField.closest("form-group").classList.remove('invalid');
//         nameField.closest("form-group").classList.add('valid');
//     }
    
// }

function validState(x){
    let xLength = x.value.length > 3
    if (!xLength) {
        x.validity.valid = false;
        x.setCustomValidity("This field must be more than 3 characters");
        x.parentElement.classList.remove('valid');
        x.parentElement.classList.add('invalid');
        x.reportValidity();
        console.log('bad input');
    } else {
        x.validity.valid = true;
        x.setCustomValidity("");
        x.parentElement.classList.remove('invalid');
        x.parentElement.classList.add('valid');
    }
};

    function emailValidation(x){
        const emailRegex = /\w+@\w+\.\w+/;
        if(!x.value.match(emailRegex)){
            e.preventDefault();
            x.validity.valid = false;
            x.setCustomValidity("Invalid email");
            x.parentElement.classList.remove('valid');
            x.parentElement.classList.add('invalid');
            x.reportValidity();
            console.log('bad input');
        }else {
            x.validity.valid = true;
            x.setCustomValidity("");
            x.parentElement.classList.remove('invalid');
            x.parentElement.classList.add('valid');
            console.log('bad input');
        }
    }


const checkValidation = (e) => {
    console.log('test');
    e.preventDefault();
    validState(firstName);
    validState(lastName);
    emailValidation(email);
    
}

console.log(firstName.parentElement.classList)


form.addEventListener("change", checkValidation);