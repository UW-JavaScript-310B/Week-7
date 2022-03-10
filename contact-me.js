// TODO
const firstNameField = document.getElementById("first-name");
const form = document.getElementById("connect-form");
const selector = document.getElementById("contact-kind");

const selectOption = () => {
  const selection = selector.value;
  const jobFields = document.getElementById("job-title-info");
  const techFields = document.getElementById("technology-info");

  //I wonder if there is a toggle method for this
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
};

selector.addEventListener("change", selectOption);

/*

IF "Job opportunity" is selected, should show the following additional items:
Job title (text type)
Company website (url type)
IF "Talk code" is selected, should show the following item:
Coding language (type text or select, your choice)



const checkValidation = (e) => {
  //debugger;
  console.log(firstNameField.value.length);
  const validState = firstNameField.value.length > 3;
  const formGrp = firstNameField.parentElement;
  firstNameField.setCustomValidity("");

  console.log(firstNameField.parentElement);

  if (!validState) {
    e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    firstNameField.setCustomValidity(
      "First name must be greater than 3 characters!"
    );
    firstNameField.validity.valid = false;
    firstNameField.reportValidity;
  } else {
    formGrp.classList.remove("invalid");
    formGrp.classList.add("valid");
    firstNameField.setCustomValidity("");
    firstNameField.validity.valid = true;
    firstNameField.reportValidity;
  }
};

form.addEventListener("submit", checkValidation);
//TODO - there is an issue when we refresh the page. Need to investigate this
*/

/*
const checkValidation = () => {
  //debugger;
  console.log(firstNameField.value.length);
  const validState = firstNameField.value.length > 3;
  const formGrp = firstNameField.parentElement;

  console.log(firstNameField.parentElement);

  if (!validState) {
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    firstNameField.validity.valid = false;
    firstNameField.setCustomValidity(
      "First name must be greater than 3 characters!"
    );
    firstNameField.reportValidity;
  } else {
    formGrp.classList.remove("invalid");
    formGrp.classList.add("valid");
    firstNameField.validity.valid = true;
    firstNameField.setCustomValidity("");
    firstNameField.reportValidity;
  }

  console.log(validState);
  return validState;
};

/*
    if (!validFirstName) {
        console.log("Bad Input");
        parentDivFirstName.classList.remove("valid");
        parentDivFirstName.classList.add("invalid");
        firstName.setCustomValidity("Your first name must include at least 3 characters");
        firstName.validity.valid = false;
        firstName.reportValidity();
    } else {
        parentDivFirstName.classList.remove("invalid");
        parentDivFirstName.classList.add("valid");
        firstName.setCustomValidity("");
        firstName.validity.valid = true;
        firstName.reportValidity();
    }
    */
