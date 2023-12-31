const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");

const Wishlist = sequelize.define("Wishlist", {});

module.exports = Wishlist;
