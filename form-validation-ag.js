// TODO
const nameField = document.getElementById("name");
const emailAddress = document.getElementById("email");
const validEmail = /\w+@\w+\.\w+/;
const reasonForContact = document.getElementById("contact-reason");
const message = document.getElementById("message");
const form = document.getElementById("connect-form");


const checkValidation = (e) => {
 
  if (nameField.value.length < 3) {
    e.preventDefault();
    nameField.setCustomValidity("Your name must be longer than 3 letters");
    nameField.reportValidity();
    nameField.parentElement.classList.add("invalid");
    nameField.parentElement.classList.remove("valid");
  } else {
     nameField.setCustomValidity("");
    nameField.parentElement.classList.add("valid");
  } // value of name field less than 3


    if (!validEmail.test(emailAddress)) {
      emailAddress.reportValidity();
      emailAddress.parentElement.classList.add("invalid");
      emailAddress.parentElement.classList.remove("valid");
    } else {
        emailAddress.setCustomValidity("");

    } //valid email
   // debugger;
    if (reasonForContact.value === "choose") {
        reasonForContact.setCustomValidity("please select a reason for contacting us");
        reasonForContact.parentElement.classList.add('invalid');
    } else {
        reasonForContact.setCustomValidity("");
        reasonForContact.parentElement.classList.remove('invalid');
        reasonForContact.parentElement.classList.add('valid');
      }

    if (message) {
         if (message.value.length < 10) {
          e.preventDefault();
          message.setCustomValidity("Your message needs to be longer than 10 characters");
        } else {
        message.setCustomValidity("");

    }// message value length
} //does message exist
  
}; //check validation function

const selectReasonForContact = (e) => {
  const selection = reasonForContact.value;
  //debugger;
  const jobReason = document.getElementById("job");
  const jobCompany = document.getElementById("company");
  const talkCodeReason = document.getElementById("talk-code");

  if (selection === "job") {
   jobReason.classList.remove("hidden");
   jobCompany.classList.remove("hidden");
   jobCompany.children[1].setAttribute("required","");
   jobReason.children[1].setAttribute("required", "");
  
   talkCodeReason.classList.add("hidden");
  } else if (selection === "talk-code") {
    talkCodeReason.classList.remove("hidden");
    jobReason.classList.add("hidden");
    jobCompany.classList.add("hidden");
    jobCompany.children[1].removeAttribute("required");
    jobReason.children[1].removeAttribute("required");

    } //what is selection
}; // reason for contact

form.addEventListener("submit", checkValidation);
form.addEventListener("change", checkValidation);

reasonForContact.addEventListener("change", selectReasonForContact);
