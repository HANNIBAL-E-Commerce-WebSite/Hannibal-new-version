const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommercewebsite", "root", "oussch1109", {
    dialect: "mysql",
    host: "localhost",
  });
  
  module.exports = sequelize;

