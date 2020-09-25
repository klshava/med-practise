
const data = require('../models/db')
const Member = data.members
// const db = require('../models/db')

// const Member = require('../models/user.model')

module.exports = function (passport) {
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  passport.deserializeUser(function (id, done) {
    Member.findOne({ where: { id: id } }, function (user) {
      return done(null, user)
    })
  })
}
