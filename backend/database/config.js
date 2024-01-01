const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommercewebsite", "root", "Faouzia Chebbi1", {
    dialect: "mysql",
    host: "localhost",
  });
  
  module.exports = sequelize;

