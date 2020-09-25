const path = require('path')
const express = require('express')
const router = express.Router()
const users = require('../../models/user.model')
const bcrypt = require('bcryptjs')
const db = require('../../models/db')
const { ensureAuthenticated } = require('../../auth/auth')
const Authentication = require('../../auth/auth')
const resetPassword = require('../../public/js/resetPassword')

const Member = db.members

// get all users
let loginID = null
const loggedUsers = []
let loggedInUser = null

router.get('/', (req, res) => {
  res.json(users)
})

// To handle signing up
router.get('/signup', function (_req, res) {
  res.sendFile(path.join(__dirname, 'views', 'signup.html'))
})

router.post('/signup', async (req, res) => {
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
    password: await bcrypt.hash(req.body.password, 10)
  }
  Member.findOne({
    where: {
      username: req.body.username
    }
  }).then(function (user) {
    if (user) {
    // console.log('Username exists')
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
})

router.post('/login', (req, res, next) => {
  Member.findOne({
    where: {
      username: req.body.username
    }
  }).then(async function (user) {
    if (user) {
      if (await bcrypt.compareSync(req.body.password, user.password) === true) {
        loggedInUser = user.username
        loginID = user.id
        loggedUsers.push(loginID)
        //  console.log(loggedInUser)// This here tracks the logged in user it shows you which user is logged in
        Authentication.setCurrentID(loginID)
        Authentication.setLoggedInIDs(loggedUsers)
        // console.log(loggedUsers)
        // console.log(currentUser)
        // console.log(await bcrypt.compareSync(req.body.password, user.password) === true)
        res.redirect('/main')
      } else {
        // console.log('You are not registered')
        res.status(500).send()
      }
    }
  }).catch(err => {
    res.status(500).send({
      message:
      err.message || 'Some error occurred while attempting login.'
    })
  })
})

router.get('/loggedUser', (req, res) => {
  return res.json(loggedInUser)
})



router.post('/changepassword', (req, res) => {
  Member.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(async function (user) {
      if (user) {
        const hash1 = await bcrypt.hash(req.body.password, 10)
        resetPassword.setNewPassword(hash1)
        resetPassword.setConfpassword(hash1)
      }

      if (resetPassword.doPasswordsMatch() === true) {
        user.password = resetPassword.getPassword()
        user.save(function () {
          res.redirect('/')
          // if (err) {
          //   console.log(err)
          // } else {
          //   res.redirect('/')
          // }
        })
      } else {
        res.redirect('/changepassword')
      }
    }).catch(err => {
      res.status(500).send({
        message:
        err.message || 'Some error occurred while attempting to save to database.'
      })
    })
})

module.exports = router
