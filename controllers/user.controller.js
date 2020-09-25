/* const db = require('../models/db')
const Member = db.members

exports.signup = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
    return
  }
  const member = {
    firstName: req.body.name,
    lastName: req.body.surname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }
  Member.findOne({
    where: {
      username: req.body.username
    }
  }).then(function (user) {
    if (user) {
      console.log('Username exists')
      res.status(500).send()
      // res.redirect('/main')
    } else {
      Member.create(member)
        .then(data => {
          res.redirect('/login')
        })
        .catch(err => {
          res.status(500).send({
            message:
      err.message || 'Some error occurred while creating the Tutorial.'
          })
        })
    }
  })
}

let loggedInUser = null

exports.login = (req, res) => {
  Member.findOne({
    where: {
      username: req.body.username
    }
  }).then(function (user) {
    if (user) {
      loggedInUser = user.username
      console.log(loggedInUser)
      res.redirect('/main')
    } else {
      console.log('You are not registered')
      res.status(500).send()
    }
  }).catch(err => {
    res.status(500).send({
      message:
      err.message || 'Some error occurred while attempting login.'
    })
  })
}

exports.currentUser = (req, res) => {
  res.json(loggedInUser)
}
*/
