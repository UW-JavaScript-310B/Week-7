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
      // debugger;
  if (!validState) {

  //  e.preventDefault();
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

  if (form.checkValidity() && !lastNameValidState) {
  //    e.preventDefault();
    lastNameField.setCustomValidity(
      "Your last name must be longer than 3 letters"
    );
    lastNameField.reportValidity();

    lastNameField.parentElement.classList.add("invalid");
    lastNameField.parentElement.classList.remove("valid");
    //console.log("bad input");
  } else {
    lastNameField.setCustomValidity("");
  // lastNameField.validity.valid = true;
    lastNameField.parentElement.classList.remove("invalid");
    lastNameField.parentElement.classList.add("valid");
  }

  if (!validEmail.test(emailAddress)) {
  //  e.preventDefault();
    emailAddress.reportValidity();
    emailAddress.parentElement.classList.add("invalid");
    emailAddress.parentElement.classList.remove("valid");
  //  console.log("bad input");
  } else {
  //  emailAddress.validity.valid = true;
    emailAddress.parentElement.classList.remove("invalid");
    emailAddress.parentElement.classList.add("valid");
  }
}; // end of check valiation

form.addEventListener("submit", checkValidation);
form.addEventListener("change", checkValidation);

// const nameFields = [firstNameField, lastNameField];

// const checkValidation = (e) => {

// nameFields.forEach(theName => {


//     if ( theName.value.length < 3 ) {
//         e.preventDefault()
//         theName.setCustomValidity("Your name must be longer than 3 letters")
//        //debugger;
//       console.log(theName);
//         theName.parentElement.classList.add('invalid');
//         theName.parentElement.classList.remove('valid');
//         theName.reportValidity();
//         theName.validity.valid = false;

//     } else {
//         theName.validity.valid = true;
//         theName.parentElement.classList.remove('invalid')
//         theName.parentElement.classList.add('valid')
//         theName.setCustomValidity("")

//     } // value of name field less than 3
// }); //for loop

// if (!validEmail.test(emailAddress)) {
//     e.preventDefault()
//     emailAddress.reportValidity();
//     emailAddress.parentElement.classList.add('invalid');
//     emailAddress.parentElement.classList.remove('valid');

//     } else {

//     emailAddress.validity.valid = true;
//     emailAddress.parentElement.classList.remove('invalid')
//     emailAddress.parentElement.classList.add('valid')

//    }

// } //check validation function

//   //  isItValid(firstNameField);
//   //  isItValid(lastNameField);

//  form.addEventListener("submit", checkValidation);
//  form.addEventListener("change", checkValidation);
