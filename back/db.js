const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite", //почему? почему нет))
  storage: "./database/database.sqlite",
});

module.exports = sequelize;
