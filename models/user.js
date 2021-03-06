const connection = require("../connection"); // connection file to database
const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const User = connection.define("user", {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

console.log(User);
module.exports = User;
