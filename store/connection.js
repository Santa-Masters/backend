const { Sequelize } = require('sequelize');
const config = require('../config/index');

const USER = config.database.dbUser;
const PASSWORD = config.database.dbPassword;
const NAME = config.database.dbName;
const HOST = config.database.dbHost;
const DIALECT = config.database.dbDialect;
const PORT = config.database.dbPort;

const sequelize = new Sequelize(NAME, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
  port: PORT,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
