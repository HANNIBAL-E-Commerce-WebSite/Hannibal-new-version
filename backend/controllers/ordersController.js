const Cart = require("../database/models/cartModel.js");
const Product = require("../database/models/productsModel.js");
const User = require("../database/models/userModel.js");


const getAllOrders = async (req,res) => {
  try {
    const wishlistProducts = await Cart.findAll({
    //   include: [{
    //     model: User
    //   }, {
    //     model: Product,
    //   }],
    });

    res.send(wishlistProducts)
  } catch (error) {
    res.status(500).json(error);
  }
};

const getUserOrders = async (req,res) => {
    try {
      const wishlistProducts = await Cart.findAll({
        include: [{
          model: User,
          where: { id: req.params.id }
        }, {
          model: Product,
        }],
      });
  
      res.send(wishlistProducts)
    } catch (error) {
      res.status(500).json(error);
    }
  };

const getSellerOrders = async (req,res) => {
    try {
      const wishlistProducts = await Cart.findAll({
        include: [{
          model: User,
          where: { sellerId: req.params.id }
        }, {
          model: Product,
        }],
      });
  
      res.send(wishlistProducts)
    } catch (error) {
      res.status(500).json(error);
    }
  };

const addToOrders = async (req, res) => {
  const { id } = req.body;
  const { prodId } = req.body;
  try {
     const result= await Cart.create({
          ProductId: 5,
          UserId: 3,
      });

      res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
    getAllOrders,
    getSellerOrders,
    getUserOrders,
    addToOrders
  
};
