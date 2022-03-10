// TODO

const nameField = document.getElementById("first-name")

const form = document.getElementById("connect-form")

const selector = document.getElementById("contact-kind")


const selectOption = (e) =>{
    e.preventDefault()
    const selection = selector.value;

    if (selection==="job-opportunity"){
        const reasonFields = document.getElementById('jobs')
        reasonFields.classList.remove('hidden')

        reasonFields.classList.add('show')

    } else{
        const reasonFields = document.getElementById('jobs')
        reasonFields.classList.add('hidden')
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