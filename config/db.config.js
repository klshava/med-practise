module.exports = {
  server: 'fairshareie.database.windows.net',
  database: 'db',
  // Put login details in env. variables for security
  user: process.env.fairshare_username,
  password: process.env.fairshareadmin,
  port: 1433,
  dialect: 'mssql',
  dialectOptions: { options: { encrypt: true } },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
