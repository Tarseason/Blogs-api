const CategoryService = require('../services/categories.service');

const getAll = async (req, res) => {
  try {
    const categories = await CategoryService.getAll();
  return res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

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
  getAll,
};