
let newPassword = null
let confPassword = null

module.exports = {
  setNewPassword: (password) => {
    if (password !== '') {
      newPassword = password
    }
    return true
  },
  setConfpassword: (password) => {
    if (password !== '' && (password.length > 7)) {
      confPassword = password
    } else {
      confPassword = '****'
    }
    return true
  },
  doPasswordsMatch: () => {
    if (newPassword === confPassword) {
      return true
    } else {
      return false
    }
  },
  getPassword: () => {
    return newPassword
  }
}
