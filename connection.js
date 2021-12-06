const Sequelize = require("sequelize");

// finance - database name
// root
// kishubhavi30

const connection = new Sequelize("moneymatters", "root", "Acharya2018*", {
  dialect: "mysql",
});

module.exports = connection;
