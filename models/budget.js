const connection = require("../connection"); // connection file to database
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const Budget = connection.define("budget", {
  bId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rent: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  groc: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  bills: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  leisure: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  shop: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  misc: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  home: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  vac: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  gadget: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  inv: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  monthYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

console.log(Budget);
module.exports = Budget;
