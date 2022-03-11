// TODO

// set up hooks to input tags required for validation
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
// set hook for the entire form
let form = document.getElementById('connect-form');
// set up hook for parent element of a tag
let parentElem = firstName.parentElement;
// event listener for submit event
form.addEventListener("submit", checkValidation);
// TODO
function checkValidation(event) {

    let isValid = false;
    //array of input fields will be validated
    let fieldArr = ['first-name','last-name','email'];
    event.preventDefault();
    //loop until all validation is passed
    while(!isValid)
    {
        //step through each item in the input fieldArr
        for(let i in fieldArr)
        {
            switch (fieldArr[i])
            {
                //pass in correct field name parameter
                // call validateField function to validate input value
                case 'first-name':
                    isValid = validateField(firstName, event);
                    parentElem = firstName.parentElement
                    break;
                case 'last-name':
                    isValid = validateField(lastName, event);
                    parentElem = lastName.parentElement
                    break;
                case 'email':
                    isValid = validateEmail(email, event);
                    parentElem = email.parentElement                  
                    break;
            }
            // step out of the loop once isValid set to false
            if (!isValid)
            {
                break;
            }
        }
        // step out of the loop once isValid set to false
        if (!isValid)
        {
            break;
        }
    }
    //if isValid is true after validation is complete
    // add valid class and remove invalid class to parent element
    if (isValid)
    {
        parentElem.classList.remove('invalid');
        parentElem.classList.add('valid');
        alert(`Life is Good!`);
    }
   
}
// function to validate email input value
function validateEmail(field, e)
{
    //retain input value after form submission
    localStorage.setItem(field, field.value);
    let fieldName = 'Email Address';
    //get input value
    field.value = localStorage.getItem(field);
    //check if input value match email pattern
    let isMatch  = field.value.match(/\w+@\w+\.\w+/)
    // if not matched
    if (isMatch == null)
    {
        console.log('Bad Input!');
        alert(`Your ${fieldName} is not in correct format!`);
        return false;
    }
    //else if matched    
    return true;
}
// function to validate other input fields
function validateField(field, e)
{
    //if check if input value is at least 3 character long
    const validState = field.value.length > 3;
    let fieldName = '';
    // retain input value
    localStorage.setItem(field, field.value);
    //if not 3 character long
    if (!validState) {
        if (field.id ==='first-name')
        {
            fieldName = 'First Name';
            alert(`Your ${fieldName} but be more than 3 letters`);
        }
        else if (field.id ==='last-name')
        {
            fieldName = 'Last Name';
           alert(`Your ${fieldName} but be more than 3 letters`);
        }
        //remove valid class and add invalid class to parent element
        field.parentElement.classList.remove('valid');
        field.parentElement.classList.add('invalid');
        field.value = localStorage.getItem(field);
        console.log('Bad Input');
       
    }
    
    return validState;   
}
