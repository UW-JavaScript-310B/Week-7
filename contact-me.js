// TODO
//hook to select group
const selectReasonForContact = document.getElementById('kind');
// hook to parent of the the select group
const parentElmt = selectReasonForContact.parentElement;

// set up hooks to input tags required for validation
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let comments = document.getElementById("comments");
// set hook for the entire form
let form = document.getElementById('connect-form');
// set up hook for parent element of a tag
let parentElem = fullName.parentElement;
// event listener for submit event
form.addEventListener("submit", checkValidation);
// create validation on name, email and message input tags
// name should be more than 3 character
// email should be following provided pattern
// message should be 10 character long
function checkValidation(event) {
    let isValid = false;
    //array of input fields will be validated
    let fieldArr = ['name', 'email', 'email', 'kind', 'comments'];
    event.preventDefault();
    //loop until all validation is passed
    while (!isValid) {
        //step through each item in the input fieldArr
        for (let i in fieldArr) {
            switch (fieldArr[i]) {
                //pass in correct field name parameter
                // call validateField function to validate input value
                case 'name':
                    isValid = validateFieldLen(fullName, event);
                    parentElem = fullName.parentElement;
                    break;
                case 'email':
                    isValid = validateEmail(email, event);
                    parentElem = email.parentElement;
                    break;
                case 'comments':
                    isValid = validateFieldLen(comments, event);
                    parentElem = comments.parentElement;
                    break;
                case 'kind':
                    isValid = validateContactPurpose('kind', event);
                    parentElem = document.getElementById('kind').parentElement;
                    break;

            }
            // step out of the loop once isValid set to false
            if (!isValid) {
                break;
            }
        }
        // step out of the loop once isValid set to false
        if (!isValid) {
            break;
        }
    }
    //if isValid is true after validation is complete
    // add valid class and remove invalid class to parent element
    if (isValid) {
        //parentElem.classList.validity.valid;
        parentElem.classList.remove('invalid');
        parentElem.classList.add('valid');
        alert(`Life is Good!`);
    }
}
//validate contact selection
//if job is selected then validate the job title
// and company website url
//if code is selected
// validate is a valid language is selected
function validateContactPurpose(field, e) {
    let validState = true;
    const itemSelect = document.getElementById(field).value
    if (itemSelect === 'job') {
        const title = document.getElementById('title');
        const url = document.getElementById('url');

        if (title.value == '') {
            alert('Job Title must be a valid string!');
            validState = false;
            return validState;
        }
        else if ((/https?\:\/\/.+\..+/).test(url.value) == false) {
            alert('Company URL must match valid url pattern!');
            validState = false;
            return validState;
        }

        validState = true;
        return validState;
    }
    else if (itemSelect === 'code') {
        const select = document.getElementById('select');
        if (select.value === 'initial') {
            alert('Not a valid language selection. Please select a language!');
            validState = false;
            return validState;
        }
    }
    else if (itemSelect === 'choose') {
        if (validState === false) {
            alert('Not a valid contact purpose selection. Please select a contact purpose!');
            return validState;
        }
    }
    return validState;
}
// function to validate other input fields
function validateFieldLen(field, e) {
    let validState = true;
    //check if input value is at least 3 character long
    if (field.id === 'name') {
        validState = field.value.length > 3;
    }
    //check if input value is at least 10 character long
    else if (field.id === 'comments') {
        validState = field.value.length > 10;
    }

    let fieldName = '';
    // retain input value
    localStorage.setItem(field, field.value);
    //if field length not long enough
    if (!validState) {
        if (field.id === 'name') {
            fieldName = 'Name';
            //field.setCustomValidity(`Your ${fieldName} but be more than 3 letters`);
            alert(`Your ${fieldName} but be more than 3 letters`);
        }
        else if (field.id === 'comments') {
            fieldName = 'Comments';
            //field.setCustomValidity(`Your ${fieldName} but be more than 10 letters`);
            alert(`Your ${fieldName} but be more than 10 letters`);
        }
        //remove valid class and add invalid class to parent element
        field.parentElement.classList.remove('valid');
        field.parentElement.classList.add('invalid');
        field.value = localStorage.getItem(field);
        console.log('Bad Input!');
    }

    return validState;
}
// function to validate email input value
function validateEmail(field, e) {
    //retain input value after form submission
    localStorage.setItem(field, field.value);
    let fieldName = 'Email Address';
    //get input value
    field.value = localStorage.getItem(field);
    //check if input value match email pattern
    let isMatch = field.value.match(/\w+@\w+\.\w+/)
    // if not matched
    if (isMatch == null) {
        console.log('Bad Input!');
        alert(`Your ${fieldName} is not in correct format!`);
        return false;
    }
    //else if matched    
    return true;
}
// function to remove the text input group
function removeTextInputGroup() {
    let div1 = document.getElementById('div1');
    if (div1 != null)
        div1.remove();
    let div2 = document.getElementById('div2');
    if (div2 != null)
        div2.remove();
}
// function to remove the select group
function removeSelectGroup() {
    let div3 = document.getElementById('div3');
    if (div3 != null)
        div3.remove();
}
// function to create select language group
function createSelectLanguageGroup() {
    // create div
    let div3 = document.createElement("DIV");
    div3.setAttribute("id", "div3");
    div3.setAttribute("class", "form-group");
    // create label
    let label3 = document.createElement("LABEL");
    label3.setAttribute("type", "text");
    label3.setAttribute("for", "language");
    label3.innerHTML = 'Language';
    //create select
    let select = document.createElement("SELECT");
    select.setAttribute("id", "select");
    select.setAttribute("class", "form-control");
    select.setAttribute("name", "language");
    //object to hold select options
    const optArr = {
        initial: 'Choose One!',
        css: 'css', html: 'html', javascript: 'javascript'
    };
    let opt = '';
    //loop through object and add options to select
    // using keys and values
    for (let [key, value] of Object.entries(optArr)) {
        opt = new Option(value, key);
        select.add(opt);
    }
    //add label to div
    div3.appendChild(label3);
    //add select to div
    div3.appendChild(select);
    //add div to parentElmt
    parentElmt.append(div3);

}
// function to create the text input group
function createTextInputGroup() {
    //create div
    let div1 = document.createElement("DIV");
    div1.setAttribute("id", "div1");
    div1.setAttribute("class", "form-group");
    //create label
    let label1 = document.createElement("LABEL");
    label1.setAttribute("type", "text");
    label1.setAttribute("for", "title");
    label1.innerHTML = 'Job Title';
    // create title input
    let input1 = document.createElement("INPUT");
    input1.setAttribute("id", "title");
    input1.setAttribute("type", "text");
    input1.setAttribute("class", "form-control validate-input");
    input1.setAttribute("name", "title");
    // add label to div
    div1.appendChild(label1);
    //add input to div
    div1.appendChild(input1);
    //add div to parentElmt
    parentElmt.append(div1);
    // create div
    let div2 = document.createElement("DIV");
    div2.setAttribute("id", "div2");
    div2.setAttribute("class", "form-group");
    // create label
    let label2 = document.createElement("LABEL");
    label2.setAttribute("type", "text");
    label2.setAttribute("for", "url");
    label2.innerHTML = 'Company Web Site';
    // create url input
    let input2 = document.createElement("INPUT");
    input2.setAttribute("id", "url");
    input2.setAttribute("type", "text");
    input2.setAttribute("class", "form-control validate-input");
    input2.setAttribute("name", "url");
    //add label to div
    div2.appendChild(label2);
    //add input to div
    div2.appendChild(input2);
    //add div to parentElmt
    parentElmt.append(div2);

}
// function to create or remove elements
// based on selected item in the select list
function selectFnct() {
    // if job opportunity is selected
    //create two addtion input tags: job title (text) 
    //and company website (url)

    if (selectReasonForContact.value === 'job') {
        removeSelectGroup();
        createTextInputGroup();
    }
    // if talk code is selected
    // create additional select language tag
    else if (selectReasonForContact.value === 'code') {
        removeTextInputGroup();
        createSelectLanguageGroup();
    }
}
//create event listener on Reason for Contact dropdown
selectReasonForContact.addEventListener('change', selectFnct);
