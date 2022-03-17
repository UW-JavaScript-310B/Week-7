function setInvalid(field)
{
    let nearestDiv = field.closest('div.form-group')
    nearestDiv.classList.remove('valid')
    nearestDiv.classList.add('invalid')
}

function setValid(field)
{
    let nearestDiv = field.closest('div.form-group')
    nearestDiv.classList.remove('invalid')
    nearestDiv.classList.add('valid')
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
    result = true
    if (!validateTextFieldLength(field, 4))
    {
        field.setCustomValidity(`${nameType} Name must be more than 3 letters`)
        field.reportValidity()
        setInvalid(field);
        console.log(`Bad Input: ${field.value}`)
        result = false
    }
    else
    {
        field.validity.valid = true
        setValid(field)
    }

    return result
}

function checkEmail(field, pattern)
{
    result = true
    if (!validateTextFieldPattern(field, pattern))
    {
        field.setCustomValidity(`Email needs to be of the form xxx@yyy.zzz`)
        field.reportValidity()
        setInvalid(field);
        console.log(`Bad Input: ${field.value}`)
        result = false
    }
    else
    {
        field.validity.valid = true
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
