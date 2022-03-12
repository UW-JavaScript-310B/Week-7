const signUpButton = document.getElementsByClassName("btn btn-primary")[0];
const selector = document.getElementById("contact-kind");

selector.addEventListener("change", selectOption);
signUpButton.addEventListener("click", checkValidation);

function selectOption() {
  const selection = selector.value;
  const bizNameFields = document.getElementById("biz-name");
  const techNameFields = document.getElementById("tech-type");

  if (selection === "business") {
    bizNameFields.classList.add("show");
    bizNameFields.classList.remove("hidden");
    techNameFields.classList.remove("show");
    techNameFields.classList.add("hidden");
  } else if (selection === "technical") {
    techNameFields.classList.add("show");
    techNameFields.classList.remove("hidden");
    bizNameFields.classList.add("hidden");
    bizNameFields.classList.remove("show");
  } else {
    bizNameFields.classList.add("hidden");
    techNameFields.classList.add("hidden");
    bizNameFields.classList.remove("show");
    techNameFields.classList.remove("show");
  }
}

function checkValidation(e) {
  //debugger;
  validateFirstName(e);
  validateLastName(e);
  validateTestEmail(e);
}

function validateFirstName(e) {
  const firstNameField = document.getElementById("first-name");
  const formGrp = firstNameField.parentElement;
  const validState = firstNameField.value.length > 3;
  console.log(`first name length ${firstNameField.value.length}`);

  if (validState) {
    formGrp.classList.add("valid");
    formGrp.classList.remove("invalid");
    firstNameField.setCustomValidity("");
    firstNameField.validity.valid = true;
    firstNameField.reportValidity;
  } else {
    //e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    errorString = "First name must be greater than 3 characters!";
    firstNameField.setCustomValidity(errorString);
    console.log(errorString);
    firstNameField.validity.valid = false;
    firstNameField.reportValidity;
  }
}

function validateLastName(e) {
  const lastNameField = document.getElementById("last-name");
  const formGrp = lastNameField.parentElement;
  const validState = lastNameField.value.length > 3;
  console.log(`last name length ${lastNameField.value.length}`);

  if (validState) {
    formGrp.classList.add("valid");
    formGrp.classList.remove("invalid");
    lastNameField.setCustomValidity("");
    lastNameField.validity.valid = true;
    lastNameField.reportValidity;
  } else {
    //e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    errorString = "Last name must be greater than 3 characters!";
    lastNameField.setCustomValidity(errorString);
    console.log(errorString);
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
    //e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    errorString = "Please enter a valid email address.";
    emailField.setCustomValidity("Please enter a valid email address.");
    console.log(errorString);
    emailField.validity.valid = false;
    emailField.reportValidity();
  }
}
