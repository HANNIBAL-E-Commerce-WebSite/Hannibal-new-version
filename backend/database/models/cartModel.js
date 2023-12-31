const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const Connection = require("../index.js");

const Cart = sequelize.define("Cart", {});

module.exports = Cart;
