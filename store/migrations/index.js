const sequelize = require('../connection');
const User = require('../models/user');

sequelize.sync({ alter: true }).then(() => {
  console.log(`Database & tables created!`);
});