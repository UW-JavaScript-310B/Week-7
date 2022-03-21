function setInvalid(field)
{
    field.classList.remove('valid')
    field.classList.add('invalid')
}

function setValid(field)
{
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

function checkName(field)
{
    let small = field.nextElementSibling
    result = true
    if (!validateTextFieldLength(field, 4))
    {
        setInvalid(field);
        console.log(`Bad Input: ${field.value}`)
        small.innerText = `Name must be more than 3 letters`
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
