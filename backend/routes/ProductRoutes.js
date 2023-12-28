const express = require("express");
const router = express.Router();
const productsController = require("../controllers/ProductController.js");

// Define routes using the controller methods
router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getProductById);
router.get("/:sellerProduct", productsController.getProductByseller);
router.post("/", productsController.createProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);
router.get("/category/:categoryId",productsController.getProductsByCategoryController);

module.exports = router;
