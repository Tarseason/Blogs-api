const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne(
    { where: { id },
    attributes: { exclude: ['password'] },
   },
);
  return user;
};

module.exports = {
  getAll,
  getById,
};