const form = document.getElementById("connect-form");

const checkValidation = (e) => {
  //debugger;
  validateFirstName(e);
  validateLastName(e);
  validateTestEmail(e);
};

function validateFirstName(e) {
  const firstNameField = document.getElementById("first-name");
  const formGrp = firstNameField.parentElement;
  const validState = firstNameField.value.length > 3;

  if (validState) {
    formGrp.classList.add("valid");
    formGrp.classList.remove("invalid");
    firstNameField.setCustomValidity("");
    firstNameField.validity.valid = true;
    firstNameField.reportValidity;
  } else {
    e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    firstNameField.setCustomValidity(
      "First name must be greater than 3 characters!"
    );
    firstNameField.validity.valid = false;
    firstNameField.reportValidity;
  }
}

function validateLastName(e) {
  const lastNameField = document.getElementById("last-name");
  const formGrp = lastNameField.parentElement;
  const validState = lastNameField.value.length > 3;

  if (validState) {
    formGrp.classList.add("valid");
    formGrp.classList.remove("invalid");
    lastNameField.setCustomValidity("");
    lastNameField.validity.valid = true;
    lastNameField.reportValidity;
  } else {
    e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    lastNameField.setCustomValidity(
      "Last name must be greater than 3 characters!"
    );
    lastNameField.validity.valid = false;
    lastNameField.reportValidity;
  }
}

function validateTestEmail(e) {
  const emailField = document.getElementById("email");
  const formGrp = emailField.parentElement;
  const regEx = new RegExp("\\w+@\\w+.\\w+");
  const isEmailValid = regEx.test(emailField.value);

  if (isEmailValid) {
    formGrp.classList.add("valid");
    formGrp.classList.remove("invalid");
    emailField.setCustomValidity(" ");
    emailField.validity.valid = true;
    emailField.reportValidity();
  } else {
    e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    emailField.setCustomValidity("Please enter a valid email address.");
    emailField.validity.valid = false;
    emailField.reportValidity();
  }
}

form.addEventListener("submit", checkValidation);
