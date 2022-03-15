// TODO

const nameField = document.getElementById("first-name")

const lastField = document.getElementById("last-name")

let emailField = document.getElementById("email")

//let mailFormat = [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$;

// emailField validated in html document

const form = document.getElementById("connect-form")

const selector = document.getElementById("contact-kind")



const selectOption = () =>{
    const selection = selector.value;
    //const bizFields = document.getElementById('biz-name')

    if (selection==="business"){
        const bizFields = document.getElementById('biz-name')
        bizFields.classList.remove('hidden')

        //.show is presenting an error
        //Uncaught TypeError: bizFields.classList.show is not a function
        //changed to .add
        bizFields.classList.add('show')

        //bizFields.classList.show('show')
    } else{
        const bizFields = document.getElementById('biz-name')
        bizFields.classList.add('hidden')
    }
}



const checkValidation = (e) =>{

    e.preventDefault()
    const validState = nameField.value.length >3

    const validStateLast = lastField.value.length > 3

    if (!validState) {

        e.preventDefault()
        nameField.setCustomValidity("Your first name must be more than three letters")
        nameField.closest(".form-group").classList.remove('valid')
        nameField.closest(".form-group").classList.add('invalid')
        console.log('Bad NAME Input')
    }


    else {
        nameField.validity.valid = true
        nameField.closest(".form-group").classList.remove('invalid')
        nameField.closest(".form-group").classList.add('valid')
        nameField.setCustomValidity("")
    }

    //console.log(nameField.value)

    if (!validStateLast){

        e.preventDefault()
        lastField.setCustomValidity("Your last name must be more than three letters")
        lastField.closest(".form-group").classList.remove('valid')
        lastField.closest(".form-group").classList.add('invalid')
        console.log('Bad LAST NAME Input')

    }

    else{
        lastField.validity.valid = true
        lastField.closest(".form-group").classList.remove('invalid')
        lastField.closest(".form-group").classList.add('valid')
        lastField.setCustomValidity("")

    }

}

form.addEventListener("submit", checkValidation)

selector.addEventListener("change", selectOption)

form.addEventListener("change", checkValidation)