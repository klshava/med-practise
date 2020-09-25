let loggedInIDs = []
let currentID = null

module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (loggedInIDs.indexOf(currentID) !== -1) { // checking if the user have logged in
      console.log(loggedInIDs)
      return next()
    } else {
      res.redirect('/')
    }
  },
  ensureAuthenticatedTest: (req, res, next) => {
    if (loggedInIDs.indexOf(currentID) !== -1) { // checking if the user have logged in
      return true
    } else {
      return false
    }
  },

  deleteSession: (req, res, next) => {
    loggedInIDs.splice(loggedInIDs.indexOf(currentID), 1) // deleting user from the logged in user list
    currentID = null
    return next()
  },
  deleteSessionTest: (req, res, next) => {
    loggedInIDs.splice(loggedInIDs.indexOf(currentID), 1) // deleting user from the logged in user list
  },
  setLoggedInIDs: (array) => {
    loggedInIDs = array
  },
  setCurrentID: (ID) => {
    currentID = ID
  }
}
