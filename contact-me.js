// TODO

const nameField = document.getElementById("first-name")

const form = document.getElementById("connect-form")

const selector = document.getElementById("contact-kind")


const selectOption = (e) =>{
    e.preventDefault()
    const selection = selector.value;

    if (selection==="job-opportunity"){
        const jobFields = document.getElementById('jobs')
        //const codeFields = document.getElementById('codes')
        //codeFields.classList.add('hidden')
        jobFields.classList.remove('hidden')
        jobFields.classList.add('show')

    } else{
        const codeFields = document.getElementById('codes')
        const jobFields = document.getElementById('jobs')
        jobFields.classList.add('hidden')
        codeFields.classList.remove('hidden')
        codeFields.classList.add('show')
    }
}

const checkValidation = (e) =>{

    e.preventDefault()
    //debugger
    const validState = nameField.value.length >3

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

}

form.addEventListener("submit", checkValidation)

selector.addEventListener("change", selectOption)