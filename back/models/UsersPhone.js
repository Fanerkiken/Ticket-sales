const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const UsersPhone = sequelize.define("usersPhone", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  login: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

UsersPhone.sync({ force: false });

module.exports = UsersPhone;
