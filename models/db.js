const dbConfig = require('../config/db.config.js')

const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.server,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.members = require('./user.model.js')(sequelize, Sequelize)




try {
  sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
module.exports = db
// Get a mssql connection instance
