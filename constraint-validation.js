// TODO
const firstNameField = document.getElementById("first-name");
const form = document.getElementById("connect-form");

const checkValidation = (e) => {
  console.log(firstNameField.value.length);
  const validState = firstNameField.value.length > 3;
  if (!validState) {
    e.preventDefault();
    firstNameField.setCustomValidity("THIS IS GREAT!");
  } else {
    firstNameField.validity.valid = true;
  }
};

form.addEventListener("submit", checkValidation);
//TODO - there is an issue when we refresh the page. Need to investigate this
