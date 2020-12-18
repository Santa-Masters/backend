require('dotenv').config()

const config = {
  api: {
    port: process.env.PORT || 3000,
  },
  frontend: {
    frontendUrl: process.env.FRONTEND_URL,
  },
  database: {
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT || 27017,
    dbName: process.env.DB_NAME,
  }
}



module.exports = config;
