const express = require('express')
const path = require('path')
const mainRoutes = express.Router()
const userRouter = require(path.join(__dirname, 'routes', 'api', 'usersRoutes'))

const passport = require('passport')
const db = require('./models/db')

const { ensureAuthenticated } = require('./auth/auth')
const { deleteSession } = require('./auth/auth')

// GET home page
mainRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})

mainRoutes.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})

// GET sign up page
mainRoutes.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'signup.html'))
})

// GET login page
mainRoutes.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'login.html'))
})

// GET T&C page
mainRoutes.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'terms.html'))
})

// GET main page
mainRoutes.get('/main', ensureAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '', 'main.html'))
})

// GET about page
mainRoutes.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'about.html'))
})

// GET main page
mainRoutes.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'services.html'))
})





// const db = require('./models/db')
db.sequelize.sync()

mainRoutes.post('/', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: 'signup',
    failureRedirect: '/',
    failureFlash: true
  })(req, res, next)
})

mainRoutes.get('/logout', deleteSession, function (req, res) {
  req.logout()
  res.redirect('/')
})
// GET logout page
mainRoutes.get('/logout', deleteSession, (req, res) => {
  res.sendFile(path.join(__dirname, '', 'logout.html'))
})

// change user password before login in
mainRoutes.get('/changepassword', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'changePword.html'))
})

mainRoutes.use('/api/user', userRouter)
module.exports = mainRoutes


