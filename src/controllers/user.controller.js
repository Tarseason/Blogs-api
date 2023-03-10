const UserService = require('../services/user.service');
const { createToken } = require('../auth/auth.token');
const { User } = require('../models');

const getAll = async (_req, res) => {
  const users = await UserService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

const insert = async (req, res) => {
  const { displayName, email, password, image } = req.body;
    
    const exist = await User.findOne({ where: { email } });
    console.log(exist);
    if (exist) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const insertUser = await UserService.insert({ displayName, email, password, image });

    const token = createToken(insertUser);

    return res.status(201).json({ token });

  // try {
    
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json({ message: 'Ocorreu um erro' });
  // }
};

module.exports = {
  getAll,
  getById,
  insert,
};