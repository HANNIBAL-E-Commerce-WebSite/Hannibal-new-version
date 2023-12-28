const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");
const User = require("../models/userModel.js");

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  available: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5,
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  sellerProduct: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  img2: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  img3: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  img4: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
});

module.exports = Product;
