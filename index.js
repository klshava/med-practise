const express = require('express')
const database = require('./models/db')
const app = express()
const passport = require('passport')
const session = require('express-session')
const mainRoutes = require('./mainRoutes')
require('./models/db')
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const bodyParser = require('body-parser')

app.use(session({

  secret: '%4$#kldfkalfg@@*)(new secrete)&&lkdsfls!',
  resave: false,
  saveUninitialized: true,
  store: database.sessionStoreConnection,
  cookie: { originalMaxAge: 6 * 600000 }

}))

// const passport = require('passport')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public', express.static('./public'))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use('/', mainRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
