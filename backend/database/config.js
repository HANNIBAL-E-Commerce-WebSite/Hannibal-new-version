const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommercewebsite", "root", "fill_me", {
    dialect: "mysql",
    host: "localhost",
  });
  
  module.exports = sequelize;

