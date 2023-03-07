const loginService = require('../services/login.service');
const { createToken } = require('../auth/auth.token');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
 return res.status(400)
    .json({ message: 'Some required fields are missing' }); 
}
  const user = await loginService.loginUser(email, password);
  if (!user) return res.status(400).json({ message: 'Invalid fields' });
  
  const token = createToken(user);
  return res.status(200).json({ token });
};

module.exports = {
  loginUser,
};