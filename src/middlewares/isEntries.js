const isName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
 return res.status(400)
  .json({ message: '"displayName" length must be at least 8 characters long' }); 
}
return next();
};

const isEmail = (req, res, next) => {
  const regEmail = /\S+@\S+\.\S+/;
  const { email } = req.body;
  const validEmail = regEmail.test(email);
  if (!validEmail) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  return next();
};

const isPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  return next();
};

module.exports = {
  isName,
  isEmail,
  isPassword,
};