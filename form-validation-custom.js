function setInvalid(field)
{
    let nearestDiv = field.parentElement
    field.classList.remove('valid')
    field.classList.add('invalid')
}

function setValid(field)
{
    let nearestDiv = field.parentElement
    field.classList.remove('invalid')
    field.classList.add('valid')
}

function validateTextFieldLength(field, minLength)
{
    return field.value.length >= minLength
}

function validateTextFieldPattern(field, pattern)
{
    const re = new RegExp(pattern, 'g')
    return re.test(field.value)
}

function checkName(field, nameType)
{
    let small = field.nextElementSibling
    result = true
    if (!validateTextFieldLength(field, 4))
    {
        setInvalid(field);
        console.log(`Bad Input: ${field.value}`)
        small.innerText = `${nameType} Name must be more than 3 letters`
        result = false
    }
    else
    {
        small.innerText = ''
        setValid(field)
    }

    return result
}

function checkEmail(field, pattern)
{
    let small = field.nextElementSibling
    result = true
    if (!validateTextFieldPattern(field, pattern))
    {
        setInvalid(field);
        console.log(`Bad Input: ${field.value}`)
        small.innerText = `Email needs to be of the form xxx@yyy.zzz`
        result = false
    }
    else
    {
        small.innerText = ''
        setValid(field)
    }
    return result
}

const checkValidation = (e) =>
{
    const fNameField = document.getElementById("first-name")
    const lNameField = document.getElementById("last-name")
    const emailField = document.getElementById("email")
    const emailPattern = '\\w+@\\w+\\.\\w+'
    let fNameValid = checkName(fNameField, "First")
    let lNameValid = checkName(lNameField, "Last")
    let emailValid = checkEmail(emailField, emailPattern)
    const validState = fNameValid
        && lNameValid
        && emailValid

    if (!validState)
    {
        e.preventDefault()
    }
}

const form = document.getElementById("connect-form")
form.addEventListener('submit', checkValidation)
