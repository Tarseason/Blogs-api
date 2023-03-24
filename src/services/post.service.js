const { BlogPost, User, Category } = require('../models');

const getById = async (id) => {
  const post = await BlogPost.findOne({ where: { id },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
     { model: Category, as: 'categories', attributes: { exclude: ['PostCategory'] } }] });
  return post;
};

const getAll = async () => {
  const post = await BlogPost.findAll(
    {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ], 
    },
);
  return post;
};

module.exports = {
  getAll,
  getById,
};