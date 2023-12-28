const express = require("express");
const Category = require("../database/models/categoryModel.js");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const createCategory = async (req, res) => {

  try {
    const category = await Category.create(req.body);

    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const { name } = req.body;

  try {
    let category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Update the category with the new values
    category.name = name;

    // Save the updated category to the database
    await category.save();

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
};
// You can add other CRUD operations (create, update, delete) here

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
};
