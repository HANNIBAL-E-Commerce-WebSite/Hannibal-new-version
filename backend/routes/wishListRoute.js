const express = require("express");
const router = express.Router();
const wishListController = require("../controllers/wishListContoller.js");

// Define routes using the controller methods
router.put("/wishList", wishListController.addToWishList);

module.exports = router;
