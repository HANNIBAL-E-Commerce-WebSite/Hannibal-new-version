const express = require("express");
const router = express.Router();
const cartController = require("../controllers/ordersController.js");

router.get("/", cartController.getAllOrders);
router.get("/:id", cartController.getUserOrders);
router.post("/", cartController.addToOrders);


module.exports = router;
