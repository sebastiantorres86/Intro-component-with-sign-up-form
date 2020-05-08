const form = document.getElementById('form')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  // get the values from the inputs
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if (firstNameValue === '') {
    setErrorFor(firstName, 'First Name cannot be empty')
  } else {
    setSuccessFor(firstName)
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty')
  } else {
    setSuccessFor(lastName)
  }

  if (!emailIsValid(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email')
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty')
  } else {
    setSuccessFor(password)
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement // .form-control
  const small = formControl.querySelector('small')

  // add error message inside small
  small.innerText = message

  // add error class
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}