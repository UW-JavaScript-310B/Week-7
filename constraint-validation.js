// TODO

const form = document.forms["connect-form"];
//console.log(form);

const checkValidation = (e) => {
    
    console.log(e);

    const validFirstname = form.firstName.value;
    const validLastname = form.lastName.value;
    const validEmail = form.email.value;
   const pattern = new RegExp(/\w+@\w+\.\w+/);
    if (validFirstname.trim().length < 3) {  
       
        form.firstName.setCustomValidity("Your first name must be more than 3 letters")
        
    }
    else{
      
        form.firstName.setCustomValidity('');
        console.log("valid input")
    }

    if (validLastname.trim().length < 3) {  
        
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
    form.addEventListener('keyup', something);
    form.reportValidity();
     // alert('Please check the inputs provided. ')
   
      
  }
}
// form.addEventListener('change', checkValidation);

form.addEventListener('submit', checkValidation);

const btn = form.submit;
function something(btn){
  if(form.firstName.validity.valid === true &&form.lastName.validity.valid === true &&form.email.validity.valid === true ){
    form.lastName.setCustomValidity('');
    form.firstName.setCustomValidity('');
    form.email.setCustomValidity('');
    
  }

  else {
    checkValidation(btn);
  }
  btn.stopPropagation();
     
}