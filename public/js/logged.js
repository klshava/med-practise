
let eUsername = null
let ePassword = null
let rUsername = null
let rPassword = null
let userObject = null

module.exports = {
  isUsernameValid: function () {
    if (eUsername === rUsername) {
      return true
    } else {
      return false
    }
  },
  isPasswordValid: function () {
    if (ePassword === rPassword) {
      return true
    } else {
      return false
    }
  },
  setEnteredUsername: function (enteredUsername) {
    eUsername = enteredUsername
  },
  setEnteredPassword: function (enteredPassword) {
    ePassword = enteredPassword
  },
  setRegisteredUsername: function (username) {
    rUsername = username
  },
  setRegisteredPassword: function (password) {
    rPassword = password
  },
  setUserObject: function (user) {
    userObject = user
  },
  setCurrentUser: (user) => {
    userObject = user
  },
  getUserObject: function () {
    return userObject
  }

}
