// TODO

const nameField = document.getElementById("first-name")

const lastField = document.getElementById("last-name")

let emailField = document.getElementById("email")

// emailField validated in html document

const form = document.getElementById("connect-form")

const selector = document.getElementById("contact-kind")


const checkValidation = (e) =>{

    e.preventDefault()
    //debugger
    const validState = nameField.value.length >3

    const validStateLast = lastField.value.length > 3

    //const validStateEmail = emailField.value.patternMismatch()

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

    }

}

form.addEventListener("submit", checkValidation)