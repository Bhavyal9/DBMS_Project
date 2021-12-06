const connection = require("../connection"); // connection file to database
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const Goals = connection.define("goals", {
  goalId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Hsaved: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  // Hpresent: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: 0,
  // },
  Htar: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  HmonthYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Vsaved: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  // Vpresent: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: 0,
  // },
  Vtar: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  VmonthYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Gsaved: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  // Gpresent: {
  //   type: DataTypes.INTEGER,
  //   defaultValue: 0,
  // },
  Gtar: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },

  GmonthYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

console.log(Goals);
module.exports = Goals;
