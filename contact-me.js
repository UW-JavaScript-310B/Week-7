
const nameField = document.getElementById("first-name")

const form = document.getElementById("connect-form")

const selector = document.getElementById("contact-kind")


const selectOption = (e) =>{
    e.preventDefault()
    const selection = selector.value;

    if (selection==="job-opportunity"){
        //e.preventDefault()
        const jobFields = document.getElementById('jobs')
        const codeFields = document.getElementById('codes')
        codeFields.classList.add('hidden')
        codeFields.classList.remove('show')
        jobFields.classList.remove('hidden')
        jobFields.classList.add('show')

    } else if (selection==="talk-code"){
        const codeFields = document.getElementById('codes')
        const jobFields = document.getElementById('jobs')
        jobFields.classList.add('hidden')
        jobFields.classList.remove('show')
        codeFields.classList.remove('hidden')
        codeFields.classList.add('show')
    }
}


const checkValidation = (e) => {

    e.preventDefault()
    //debugger
    //const validState = nameField.value.length >3
}

form.addEventListener("submit", checkValidation)

selector.addEventListener("change", selectOption)

