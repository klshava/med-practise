const express = require('express')
const path = require('path')
const mainRoutes = express.Router()


// GET home page
mainRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})

mainRoutes.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'))
})

// GET sign up page
mainRoutes.get('/register.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'register.html'))
})

// GET login page
mainRoutes.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'login.html'))
})

// GET T&C page
mainRoutes.get('/services.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'services.html'))
})

// GET main page
mainRoutes.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'about.html'))
})


// mainRoutes.post('/', (req, res, next) => {
//   passport.authenticate('local', {
//     successRedirect: 'signup',
//     failureRedirect: '/',
//     failureFlash: true
//   })(req, res, next)
// })


module.exports = mainRoutes


