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

module.exports = {
  getAll,
  getById,
};