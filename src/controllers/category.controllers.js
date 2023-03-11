const CategoryService = require('../services/categories.service');

const insert = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const result = await CategoryService.insert({ name });
  return res.status(201).json(result);
};

module.exports = {
  insert,
};