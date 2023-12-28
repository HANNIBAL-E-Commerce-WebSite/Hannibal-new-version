const Product = require("./productsModel.js");
const User = require("./userModel.js");
const Category = require("./categoryModel.js");
const Cart = require("./cartModel.js");
const Wishlist = require("./wishListModel.js");
const sequelize = require("../config.js");

// Define Relationships
Product.belongsToMany(Category, { through: "ProductsHasCategory" });
Category.belongsToMany(Product, { through: "ProductsHasCategory" });

Product.belongsToMany(User, { through: Cart });
User.belongsToMany(Product, { through: Cart });

Product.belongsToMany(User, { through: Wishlist });
User.belongsToMany(Product, { through: Wishlist });
Product.belongsTo(User, { foreignKey: "sellerProduct" });

sequelize
  .sync()
  .then(() => {
    console.log("Database tables synchronized successfully.");
    // Start your application or perform any other actions here
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

// Export Models
module.exports = {
  Product,
  User,
  Category,

  Cart,
  Wishlist,
};
