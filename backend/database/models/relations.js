const Product = require("./productsModel.js");
const User = require("./userModel.js");
const Category = require("./categoryModel.js");
const Cart = require("./cartModel.js");
const Wishlist = require("./wishListModel.js");
const sequelize = require("../config.js");

// Define Relationships
Category.hasMany(Product);
Product.belongsTo(Category);

Product.belongsToMany(User, { through: Cart });
User.belongsToMany(Product, { through: Cart });

Product.belongsToMany(User, { through: Wishlist });
Wishlist.belongsTo(User);
Wishlist.belongsTo(Product);
Product.hasMany(Wishlist);
User.hasMany(Wishlist);


// User.belongsToMany(Product, { through: Wishlist });
// Product.belongsTo(User, { foreignKey: "sellerProduct" });

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
