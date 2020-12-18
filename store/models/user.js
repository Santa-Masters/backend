const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const User = sequelize.define('User', {
  id_user: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name_user: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nickname_user: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email_user: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  profile_user: {
    type: DataTypes.UUID,
    allowNull: false,
  }
},{
  timestamps: true,
});

module.exports = User;
