
let form = document.forms['contactInfo'];


const checkValidation= (e)=>{
console.log(e)
    const validFirstname = form.fullName.value;
   
    const validEmail = form.email.value;
    const pattern = new RegExp(/\w+@\w+\.\w+/);
    const urlpattern = new RegExp(/\w+@\w+\.\w+/);
    const companyUrl = form.company.value;
    if (validFirstname.trim().length < 3) {  
      
        form.fullName.setCustomValidity("Your first name must be more than 3 letters!")
        
    }
    else{
       
        form.fullName.setCustomValidity('');
        }

    if (!pattern.test(validEmail)) {  
       
        form.email.setCustomValidity("email provided doesn't satisfy the email format!")
        
    }
    else{
        
        form.email.setCustomValidity('');
    }

 
    if(form.reason.value === 'job'){
        if (form.jobTittle.value.trim().length <1) {  
            form.jobTittle.setCustomValidity("Job title is not valid!")
        }
        else{
            form.jobTittle.setCustomValidity('');
        }

        if (!urlpattern.test(companyUrl) && companyUrl.length<1 ) {  
            form.company.setCustomValidity("company URL not valid!")  
        }
        else{
            form.company.setCustomValidity('');
        }

    }

    if(form.reason.value === 'talk'){
        if(form.codingLang.value === "java" || form.codingLang.value === "python" || form.codingLang.value === "c" || form.codingLang.value === "javascript"){
            form.codingLang.setCustomValidity('');
          
        }
        else{
            e.preventDefault();
            form.codingLang.setCustomValidity("Please select valid option!")
            
        }

    }

    if (form.message.value.trim().length <=10) {  
        form.message.setCustomValidity("message length is small!")
    }
    else{
        form.message.setCustomValidity('');
    }

    if(form.fullName.validity.valid === true && form.email.validity.valid === true && form.message.validity.valid === true){
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
form.reason.addEventListener('change',()=>{
    console.log(form.reason.value)
    if(form.reason.value === 'job'){
        document.getElementById('talkDiv').classList.add('hide')
        document.getElementById('jobDiv').classList.remove('hide')
        document.getElementById('jobDiv2').classList.remove('hide')
    }
   else if(form.reason.value === 'talk'){
        document.getElementById('talkDiv').classList.remove('hide')
        document.getElementById('jobDiv').classList.add('hide')
        document.getElementById('jobDiv2').classList.add('hide')
    }
    else{
        document.getElementById('talkDiv').classList.add('hide')
        document.getElementById('jobDiv').classList.add('hide')
        document.getElementById('jobDiv2').classList.add('hide')
    }
})

form.addEventListener('submit', checkValidation);
const btn = form.submit;
function something(btn){
    if(form.fullName.validity.valid === true && form.email.validity.valid === true && form.message.validity.valid === true){
        form.jobTittle.setCustomValidity('');
        form.email.setCustomValidity('');
        form.fullName.setCustomValidity('');
        form.message.setCustomValidity('');
        form.codingLang.setCustomValidity('');
    }else{
        checkValidation(btn);
    }
    btn.stopPropagation();
}