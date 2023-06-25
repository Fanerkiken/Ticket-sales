const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const Timetable = require("./Timetable");
const City = require("./City");

const Paths = sequelize.define("path", {
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
  cityFrom: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  cityTo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  published: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Paths.hasOne(Timetable, {
  foreignKey: "pathId",
});
Timetable.belongsTo(Paths, { as: "idOfPath", foreignKey: "pathId" });
Paths.belongsTo(City, { as: "toCity", foreignKey: "cityTo" });
Paths.belongsTo(City, { as: "fromCity", foreignKey: "cityFrom" });

Paths.sync({ force: false });

module.exports = Paths;
