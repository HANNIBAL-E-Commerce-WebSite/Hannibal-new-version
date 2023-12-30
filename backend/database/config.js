const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecommercewebsite", "root", "root", {
    dialect: "mysql",
    host: "localhost",
  });
  
  module.exports = sequelize;