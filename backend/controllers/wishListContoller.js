const { User, WishList } = require("../database/models/wishListModel.js");

const addToWishList = async (req, res) => {
  const { id } = req.user;
  const { prodId } = req.body;
  try {
    const user = await User.findByPk(id);

    const alreadyAdded = await WishList.findOne({
      where: {
        UserId: id,
      },
    });

    if (alreadyAdded) {
      res.status(400).json({ message: "Product already in wishlist" });
    } else {
      await WishList.create({
        UserId: id,
        ProductId: prodId,
      });

      const updatedUser = await User.findByPk(id, {
        include: [WishList],
      });

      res.json(updatedUser);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addToWishList,
};
