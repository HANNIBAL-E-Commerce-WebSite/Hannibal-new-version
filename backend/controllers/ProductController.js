
const express = require("express");

const Product = require("../database/models/productsModel.js");
const Category  = require('../database/models/categoryModel.js');
const getProductsByCategory = require ('./helperFunction/getProductByCategory.js')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getProductsByCategoryController = async (req, res) => {
  const categoryId = req.params.categoryId; 

  try {

    const categoryProducts = await getProductsByCategory(categoryId);

    if (categoryProducts.error) {
      return res.status(404).json({ message: categoryProducts.error });
    }

    res.json(categoryProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getProductById = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// const getProductsByCategory = async (req, res) => {
//   try {
//     const category = await Category.findOne({
//       where: { name: categoryName },
//       include: [{ model: Product, through: 'ProductsHasCategory' }],
//     });

//     if (!category) {
//       // Handle case where the category doesn't exist
//       return { error: 'Category not found' };
//     }

//     // Access the products associated with the category
//     const products = category.Products;

//     return products;
//   } catch (error) {
//     // Handle any errors that occur during the database query
//     console.error('Error fetching products by category:', error);
//     return { error: 'Internal server error' };
//   }
// }

const createProduct = async (req, res) => {
  try {
   
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// controllers/productController.js

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { name, price, description, rate } = req.body;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update only the fields that are provided in the request
    if (name) product.name = name;
    if (price) product.price = price;
    if (description) product.description = description;
    if (rate !== undefined) product.rate = rate;

    await product.save();

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const existingProduct = await Product.findByPk(productId);

    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product
    await existingProduct.destroy();

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getProductByseller = async (req, res) => {
  const productId = req.params.sellerProduct;

  try {
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getProductsByCategoryController,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByseller,
};
