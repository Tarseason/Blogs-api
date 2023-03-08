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

const getByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const insert = async ({ displayName, email, password, image }) => {
  const insertUser = await User.create({ displayName, email, password, image });
  return insertUser;
};

module.exports = {
  getAll,
  getById,
  getByEmail,
  insert,
};