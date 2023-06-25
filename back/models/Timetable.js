const sequelize = require('../db');
const {DataTypes} = require("sequelize");

const Timetable = sequelize.define('timetable', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    timeFrom: {
      type: DataTypes.TIME,
        allowNull: false,
    },
    timeTo: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    weekday: {
        type: DataTypes.ENUM('1','2','3','4','5','6','7'),
        allowNull: true,
    },
    everyDay: {
       type: DataTypes.BOOLEAN,
       defaultValue: false
    },
    published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    pathId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

Timetable.sync({force:false})

module.exports = Timetable