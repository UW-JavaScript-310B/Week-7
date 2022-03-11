const form = document.getElementById("connect-form");

const checkValidation = (e) => {
  //debugger;
  validateFirstName(e);
  validateLastName(e);
};

function validateFirstName(e) {
  const firstNameField = document.getElementById("first-name");
  const validState = firstNameField.value.length > 3;
  const formGrp = firstNameField.parentElement;

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
}

function validateLastName(e) {
  const lastNameField = document.getElementById("last-name");
  const validState = lastNameField.value.length > 3;
  const formGrp = lastNameField.parentElement;

  if (!validState) {
    e.preventDefault();
    formGrp.classList.add("invalid");
    formGrp.classList.remove("valid");
    lastNameField.setCustomValidity(
      "Last name must be greater than 3 characters!"
    );
    lastNameField.validity.valid = false;
    lastNameField.reportValidity;
  } else {
    formGrp.classList.remove("invalid");
    formGrp.classList.add("valid");
    lastNameField.setCustomValidity("");
    lastNameField.validity.valid = true;
    lastNameField.reportValidity;
  }
}
