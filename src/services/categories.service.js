const { Category } = require('../models');

const getAll = async () => {
  const categories = Category.findAll();
  return categories;
};

const insert = async ({ name }) => {
  const category = await Category.create({ name }); 
  return category;
};

module.exports = {
  insert,
  getAll,
};