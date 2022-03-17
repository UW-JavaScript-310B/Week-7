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

function checkName(field)
{
    result = true
    if (!validateTextFieldLength(field, 4))
    {
        field.setCustomValidity(`Name must be more than 3 letters`)
        field.reportValidity()
        setInvalid(field);
        console.log(field.value)
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
        console.log(field.value)
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
    const nameField = document.getElementById("name")
    const emailField = document.getElementById("email")
    const emailPattern = '\\w+@\\w+\\.\\w+'
    let nameValid = checkName(nameField)
    let emailValid = checkEmail(emailField, emailPattern)
    const validState = nameValid && emailValid

    if (!validState)
    {
        e.preventDefault()
    }
}

const showHideGroup = (showField, hideField) =>
{
    showField.closest('div.form-group').classList.remove('hidden')
    showField.closest('div.form-group').classList.add('show')
    hideField.closest('div.form-group').classList.remove('show')
    hideField.closest('div.form-group').classList.add('hidden')
}

const hideGroups = (hideField1, hideField2) =>
{
    hideField1.closest('div.form-group').classList.remove('show')
    hideField2.closest('div.form-group').classList.remove('show')
    hideField1.closest('div.form-group').classList.add('hidden')
    hideField2.closest('div.form-group').classList.add('hidden')
}
const showHideBySelection = (e) =>
{
    const jobInput = document.getElementById('job-title')
    const talkInput = document.getElementById('code-language')
    const selectInput = e.target
    const selected = selectInput.value
    if (selected === 'job')
    {
        showHideGroup(jobInput, talkInput)
    }
    else if (selected === 'talk')
    {
        showHideGroup(talkInput, jobInput)
    }
    else
    {
        hideGroups(jobInput, talkInput)
    }

}

const form = document.getElementById("connect-form")
form.addEventListener('submit', checkValidation)

const selector = document.getElementById("reason")
selector.addEventListener('change', showHideBySelection)
