const form = document.getElementById("contact-me-form");
const selector = document.getElementById("contact-kind");

selector.addEventListener("change", selectOption);
form.addEventListener("click", checkValidation);
//Try adding event listner for submit button that checks the state of the form

function selectOption() {
  const selection = selector.value;
  const jobFields = document.getElementById("job-title-info");
  const techFields = document.getElementById("technology-info");

  if (selection === "opportunity") {
    jobFields.classList.remove("hidden");
    techFields.classList.remove("show");
    jobFields.classList.add("show");
    techFields.classList.add("hidden");
  } else if (selection === "code") {
    jobFields.classList.remove("show");
    techFields.classList.remove("hidden");
    jobFields.classList.add("hidden");
    techFields.classList.add("show");
  }
}

function checkValidation(e) {
  //debugger;
  validateFirstName(e);
  validateLastName(e);
  validateEmail(e);
  //validateMessage(e);
}

function validateName(e) {
  const userName = document.getElementById("userName");
  console.log(userName.value.length);
  const validState = userName.value.length > 3;
  const formGrp = userName.parentElement;
  userName.setCustomValidity("");

  console.log(userName.parentElement);

  if (!validState) {
    //e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    userName.setCustomValidity("Name must be greater than 3 characters.");
    userName.validity.valid = false;
    userName.reportValidity;
  } else {
    formGrp.classList.remove("invalid");
    formGrp.classList.add("valid");
    userName.setCustomValidity("");
    userName.validity.valid = true;
    userName.reportValidity;
  }
}

function validateMessage(e) {
  const messageText = document.getElementById("messageText");
  console.log(messageText);
  //console.log(messageText.value.length);
  const validState = messageText.value.length > 10;
  const formGrp = messageText.parentElement;
  userName.setCustomValidity("");

  console.log(message.parentElement);

  if (!validState) {
    //e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    messageText.setCustomValidity("Name must be greater than 10 characters.");
    messageText.validity.valid = false;
    messageText.reportValidity;
  } else {
    formGrp.classList.remove("invalid");
    formGrp.classList.add("valid");
    messageText.setCustomValidity("");
    messageText.validity.valid = true;
    messageText.reportValidity;
  }
}

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

function validateEmail(e) {
  const emailField = document.getElementById("email");
  const formGrp = emailField.parentElement;
  const regEx = new RegExp("\\w+@\\w+\\.\\w+");
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
