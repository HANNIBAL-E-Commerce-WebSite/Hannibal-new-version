const Product = require("../database/models/productsModel.js");
const User = require("../database/models/userModel.js");
const WishList= require("../database/models/wishListModel.js");

const getAllWishlistProducts = async (req,res) => {
  try {
    const wishlistProducts = await WishList.findAll({
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
const addToWishList = async (req, res) => {
  const { id } = req.body;
  const { prodId } = req.body;
  try {
     const result= await WishList.create({
        UserId: id,
        ProductId: prodId,
      });

      res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

 const deleteFromWishList=async(req,res)=>{
  try {
    const result=await WishList.destroy({where:{UserId:req.body.UserId,ProductId:req.body.ProductId}})
    res.send(result)
  } catch (error) {
    res.send(error)
  }
 }

module.exports = {
  addToWishList,
  getAllWishlistProducts,
  deleteFromWishList
};
