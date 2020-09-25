// check login logic
'use strict'

let userName = ''
let userPassword = ''

module.exports = {
  setUsername: function (username) {
    userName = username
  },

  setUserPassword: function (password) {
    userPassword = password
  },

  findUser: function (usersContainer) {
    const userFound = usersContainer.findIndex(function (user) {
      return user.name === userName && user.password === userPassword
    })
    if (userFound !== -1) {
      return true
    }
  },
  getUserName: function () {
    return userName
  },
  getPassword: function () {
    return userPassword
  }

}
