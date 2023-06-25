const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const City = sequelize.define("city", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  code: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

City.sync({ force: false });

module.exports = City;
