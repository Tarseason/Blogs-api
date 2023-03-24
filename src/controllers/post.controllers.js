const PostService = require('../services/post.service');

const getAll = async (req, res) => {
  const posts = await PostService.getAll();
  console.log(posts, '++++++++++++++++++++++++++');
    return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await PostService.getById(id);
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  return res.status(200).json(post);
};

const update = async (req, res) => {
  const idUser = req.payload.id;
  const { id } = req.params;
  const { title, content } = req.body;

  if (+id !== idUser) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const result = await PostService.postUpdate(id, { title, content });
  return res.status(200).json(result);
};

module.exports = {
  getAll,
  getById,
  update,
};