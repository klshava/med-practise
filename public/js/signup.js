var confirmField = document.getElementById('password')
var passwordField = document.getElementById('password2')

function checkPasswordMatch () {
  var status = document.getElementById('message')

  var submit = document.getElementById('signup')

  status.innerHTML = ''
  submit.removeAttribute('disabled')

  if (confirmField.value === '') { return }

  if (passwordField.value === confirmField.value) {
    status.innerHTML = 'Passwords match'
    return
  }

  status.innerHTML = "Passwords don't match"
  submit.setAttribute('disabled', 'disabled')
}

function checkPasswordLength () {
  var status = document.getElementById('message2')
  var submit = document.getElementById('signup')
  status.innerHTML = ''
  submit.removeAttribute('disabled')

  if (confirmField.value.length < 8) {
    status.innerHTML = 'Password must be at least 8 characters'
    submit.setAttribute('disabled', 'disabled')
  }
}

confirmField.addEventListener('keyup', function (event) {
  checkPasswordLength()
  checkPasswordMatch()
})
passwordField.addEventListener('keyup', function (event) {
  checkPasswordLength()
  checkPasswordMatch()
})
