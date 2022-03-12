//const form = document.getElementById("contact-me-form");
const submitButton = document.getElementsByClassName("btn btn-primary")[0];
const selector = document.getElementById("contact-kind");

selector.addEventListener("change", selectOption);
submitButton.addEventListener("click", checkValidation);

//Try adding event listner for submit button that checks the state of the form
function selectOption() {
  const selection = selector.value;
  const techFields = document.getElementById("coding-language");
  const jobFields = document.getElementById("job-info");

  if (selection === "opportunity") {
    jobFields.classList.add("show");
    jobFields.classList.remove("hidden");
    techFields.classList.remove("show");
    techFields.classList.add("hidden");
  } else if (selection === "code") {
    techFields.classList.add("show");
    techFields.classList.remove("hidden");
    jobFields.classList.add("hidden");
    jobFields.classList.remove("show");
  }
  console.log(selection);

  //not the most elegant way, but I think this will work
  jobFields.classList.forEach((element) => {
    if (element === "show") {
      validateJobTitle();
      validateCompanyWebsite();
    }
  });

  techFields.classList.forEach((element) => {
    if (element === "show") {
      validateTechFields();
    }
  });
}

/*
1. If "Job opportunity" is selected, validate the following and show messages if invalid (1 point):
Job Title is present
Company website is present and url is valid (regex) /https?\:\/\/.+\..+/ (or use constraint validation api)
2. If "Talk code" is selected (1 point):
Coding language should be a <select> (dropdown) containing 3 or more coding languages as options (i.e. HTML, CSS, JavaScript).  The initially selected option should be "Choose One"
Validate that this field (coding language) is changed to one of the coding languages, and show a message if invalid
*/

function validateJobFields() {
  console.log("yup job fields");
}
function validateTechFields() {
  console.log("yup tech fields");
  const selection = selector.value;
  const techFields = document.getElementById("coding-language");
  console.log(selection);
  if (selection === "opportunity") {
    techFields.classList.remove("show");
    techFields.classList.add("hidden");
  } else if (selection === "code") {
    techFields.classList.remove("hidden");
  }
}
function validateJobTitle() {
  console.log("validateJobTitle placeholder");
}

function validateCompanyWebsite() {
  console.log("validateJobTitle placeholder");
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
