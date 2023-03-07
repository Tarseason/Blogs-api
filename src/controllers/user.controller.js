const UserService = require('../services/user.service');

const getAll = async (_req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  getAll,
};