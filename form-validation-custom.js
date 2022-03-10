// TODO

const form = document.forms["connect-form"];
//console.log(form);

const checkValidation = (e) => {
    
    console.log(e);

    const validFirstname = form.firstName.value;
    const validLastname = form.lastName.value;
    const validEmail = form.email.value;
   const pattern = new RegExp(/\w+@\w+\.\w+/);
    if (validFirstname.length < 3) {  
       
        form.firstName.setCustomValidity("Your first name must be more than 3 letters")
        
    }
    else{
      
        form.firstName.setCustomValidity('');
        console.log("valid input")
    }

    if (validLastname.length < 3) {  
        
        form.lastName.setCustomValidity("Your last name must be more than 3 letters")
        
    }
    else{
       
        form.lastName.setCustomValidity('');
    }

    if (!pattern.test(validEmail)) {  
       
        form.email.setCustomValidity("email provided doesn't satisfy the email format")
        
    }
    else{
       
        form.email.setCustomValidity('');
    }

  if(form.firstName.validity.valid === true &&form.lastName.validity.valid === true &&form.email.validity.valid === true ){
    e.preventDefault();
      alert('your form inputs has been submitted successfully!')
      form.reset();
  }
  else{
    e.preventDefault();
    form.addEventListener('change', checkValidation);
      alert('Please check the inputs provided. ')
   
      
  }
}
// form.addEventListener('change', checkValidation);

form.addEventListener('submit', checkValidation);

