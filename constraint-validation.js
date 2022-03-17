
const nameField = document.getElementById("first-name")

const form = document.getElementById("connect-form")

const checkValidation = (e) =>
{
  const validState = nameField.value.length > 3
  if (!validState)
  {
    e.preventDefault()
    nameField.setCustomValidity("First Name must be more than 3 letters")
    nameField.closest('form-group').classList.remove('valid')
    nameField.closest("form-group").classList.add('invalid')
  }
  else
  {
    nameField.validity.valid = true;
    nameField.closest("form-group").classList.remove('invalid')
    nameField.closest("form-group").classList.add('valid')
  }
  console.log(nameField.value)
}

form.addEventListener('submit', checkValidation)