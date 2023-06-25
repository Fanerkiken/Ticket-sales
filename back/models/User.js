const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const User = sequelize.define("user", {
  //define определить
  id: {
    // этот объект это параметы этого поля в бд
    primaryKey: true, // поле будет уникальным
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  login: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

User.beforeCreate(async (user) => {
  // это хук  //вызывается перед записью в базу, и в коллбэк отдает значение которое будет записано
  const hashedPassword = await bcrypt.hash(user.password, 5);
  user.password = hashedPassword;
});

User.sync({ force: false });

module.exports = User;
