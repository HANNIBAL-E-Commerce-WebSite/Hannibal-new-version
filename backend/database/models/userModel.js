const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");

const User = sequelize.define("User", {
  fullName: {
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
  role: {
    type: DataTypes.ENUM("User", "Seller", "Admin"),
    allowNull: false,
    defaultValue: "User"
  },
});

module.exports = User;
