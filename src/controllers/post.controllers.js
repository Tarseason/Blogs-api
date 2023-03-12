const PostService = require('../services/post.service');

const getAll = async (req, res) => {
  const posts = await PostService.getAll();
  console.log(posts, '++++++++++++++++++++++++++');
    return res.status(200).json(posts);
};

module.exports = {
  getAll,
};