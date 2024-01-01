const express = require("express");
const router = express.Router();
const wishListController = require("../controllers/wishListContoller.js");

router.post("/", wishListController.addToWishList);
router.get("/:id",wishListController.getAllWishlistProducts)

module.exports = router;
