//const form = document.getElementById("contact-me-form");
const submitButton = document.getElementsByClassName("btn btn-primary")[0];
const selector = document.getElementById("contact-kind");

selector.addEventListener("change", selectOption);
submitButton.addEventListener("click", checkValidation);
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

  const tempValue = document.getElementById("job-title-info").classList;
  //console.log(tempValue);
  tempValue.forEach((element) => {
    //console.log(element);
    if (element === "show") {
      console.log("yup");
    }
  });
}

function checkValidation(e) {
  validateFirstName(e);
  validateLastName(e);
  validateEmail(e);
  validateMessage(e);
}

function validateMessage(e) {
  const messageText = document.getElementById("messageText");
  const formGrp = messageText.parentElement;

  const validState = messageText.value.length >= 10;
  messageText.setCustomValidity("");

  if (validState) {
    formGrp.classList.add("valid");
    formGrp.classList.remove("invalid");
    messageText.classList.remove("highlightme");
    messageText.setCustomValidity("");
    messageText.validity.valid = true;
    messageText.reportValidity;
  } else {
    formGrp.classList.add("invalid");
    messageText.classList.add("highlightme");
    formGrp.classList.remove("valid");
    errorString = "Name must be greater than 10 characters.";
    messageText.setCustomValidity(errorString);
    console.log(errorString);
    messageText.validity.valid = false;
    messageText.reportValidity;
  }
}

function validateFirstName(e) {
  const firstNameField = document.getElementById("first-name");
  const formGrp = firstNameField.parentElement;
  const validState = firstNameField.value.length >= 3;

  if (validState) {
    formGrp.classList.add("valid");
    formGrp.classList.remove("invalid");
    firstNameField.classList.remove("highlightme");
    firstNameField.setCustomValidity("");
    firstNameField.validity.valid = true;
    firstNameField.reportValidity;
  } else {
    formGrp.classList.add("invalid");
    firstNameField.classList.add("highlightme");
    formGrp.classList.remove("valid");
    errorString = "First name must be 3 or more characters!";
    firstNameField.setCustomValidity(errorString);
    console.log(errorString);
    firstNameField.validity.valid = false;
    firstNameField.reportValidity;
  }
}

function validateLastName(e) {
  const lastNameField = document.getElementById("last-name");
  const formGrp = lastNameField.parentElement;
  const validState = lastNameField.value.length >= 3;

  if (validState) {
    formGrp.classList.add("valid");
    formGrp.classList.remove("invalid");
    lastNameField.classList.remove("highlightme");
    lastNameField.setCustomValidity("");
    lastNameField.validity.valid = true;
    lastNameField.reportValidity;
  } else {
    formGrp.classList.add("invalid");
    lastNameField.classList.add("highlightme");
    formGrp.classList.remove("valid");
    errorString = "Last name must be 3 or more characters!";
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
    emailField.classList.remove("highlightme");
    emailField.setCustomValidity(" ");
    emailField.validity.valid = true;
    emailField.reportValidity();
  } else {
    formGrp.classList.add("invalid");
    emailField.classList.add("highlightme");
    formGrp.classList.remove("valid");
    errorString = "Please enter a valid email address.";
    emailField.setCustomValidity("Please enter a valid email address.");
    console.log(errorString);
    emailField.validity.valid = false;
    emailField.reportValidity();
  }
}
