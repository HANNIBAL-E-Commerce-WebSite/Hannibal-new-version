// helpers/productsHelper.js
const Product = require('../../database/models/productsModel');
const Category = require('../../database/models/categoryModel');

const getProductsByCategory = async (categoryId) => {
  try {
    const category = await Category.findByPk(categoryId, {
      include: [{ model: Product, through: 'ProductsHasCategory' }],
    });

    if (!category) {
      return { error: 'Category not found' };
    }
    console.log("category: ", category);
    const products = category.Products;

    return products;
  } catch (error) {
    console.error('Error', error);
    return { error: 'Internal server error' };
  }
};

module.exports = getProductsByCategory;





















