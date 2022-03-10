// TODO
const firstNameField = document.getElementById("first-name");
const lastNameField = document.getElementById("last-name");
const emailAddress = document.getElementById("email");
const form = document.getElementById("connect-form");
const validEmail = /\w+@\w+\.\w+/;

const checkValidation = (e) => {
 
  const validState = firstNameField.value.length > 3;
  const lastNameValidState = lastNameField.value.length > 3;
  const validEmail = /\w+@\w+\.\w+/;
  if (!validState) {
    firstNameField.setCustomValidity(
      "Your first name must be longer than 3 letters"
    );
    firstNameField.reportValidity();
    firstNameField.parentElement.classList.add("invalid");
 
  } else {
    firstNameField.setCustomValidity("");
    firstNameField.parentElement.classList.remove("invalid");
    firstNameField.parentElement.classList.add("valid");
  }
  
  if (!lastNameValidState && lastNameField.value) {
    lastNameField.setCustomValidity(
      "Your last name must be longer than 3 letters"
    );
    lastNameField.reportValidity();
    lastNameField.parentElement.classList.add("invalid");
    lastNameField.parentElement.classList.remove("valid");

  } else {
    lastNameField.setCustomValidity("");
    lastNameField.parentElement.classList.remove("invalid");
    lastNameField.parentElement.classList.add("valid");
  }

  if (!validEmail.test(emailAddress)) {
    emailAddress.reportValidity();
    emailAddress.parentElement.classList.add("invalid");
    emailAddress.parentElement.classList.remove("valid");
  } else {
    emailAddress.parentElement.classList.remove("invalid");
    emailAddress.parentElement.classList.add("valid");
  }
}; // end of check valiation

form.addEventListener("submit", checkValidation);
form.addEventListener("change", checkValidation);

