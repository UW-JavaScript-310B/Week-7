const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("connect-form");

const emailAddr = document.getElementById("email");

const parentDivFirstName = firstName.closest(".form-group")
const parentDivLastName = lastName.closest(".form-group")
const parentDivEmail = emailAddr.closest(".form-group")

// console.log(parentDivFirstName);
// console.log(parentDivLastName);
// console.log(parentDivEmail);
// console.log(emailAddr);
// console.log(firstName.closest(".form-group"))
console.log(firstName)

const selector = document.getElementById("contact-kind");

const selectOption = () => {
    const selection = selector.value;

    if (selection === "business") {
        const bizfields = document.getElementById("biz-name");
        bizfields.classList.remove("hidden");
        bizfields.classList.add("show");
    } 
    else if (selection === "technical") {
        const techfields = document.getElementById("tech-type");
        techfields.classList.remove("hidden");
        techfields.classList.add("show");
    } 
    
    else {
        bizfields.classList.add("hidden");
        techfields.classList.add("hidden");

    }

}

const validateForm = (e) => {
    const validFirstName = firstName.value.length >= 3;
    const validLastName = lastName.value.length >= 3;

    //validate that first and last name are at least 3 characters long
    if (!validFirstName) {
        e.preventDefault();
        console.log("Bad Input");
        firstName.closest(".form-group").classlist.add("invalid");
        firstName.setCustomValidity("Your first name must include at least 3 characters");
        firstName.reportValidity();
    } else if (!validLastName) {
        e.preventDefault();
        console.log("Bad Input");
        // lastName.closest(".form-group").classlist.add("invalid");
        lastName.setCustomValidity("Your last name must include at least 3 characters");
        lastName.reportValidity();
    } else {
        // firstName.closest(".form-group").classlist.remove("invalid");
        // lastName.closest(".form-group").classlist.remove("invalid");
        firstName.validity.valid = true;
        lastName.validity.valid = true;
    }


    // validate whether email matches regex format

    //    const regex = /\w+@\w+\.\w+/;

    //     if (emailAddr.match(regex)) {
    //         // emailAddr.closest(".form-group").classlist.remove("invalid");
    //         return ('true');
    //     } else {
    //         e.preventDefault();
    //         console.log("Bad Input");
    //         // emailAddr.closest(".form-group").classlist.add("invalid");
    //         emailAddr.setCustomValidity("Your email address is not valid");
    //         return ('false');

    //     }
};





form.addEventListener("submit", validateForm);

selector.addEventListener("change", selectOption)