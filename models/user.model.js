// to model the users database
module.exports = (sequelize, Sequelize) => {
  const Member = sequelize.define('member', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  })

  return Member
}
