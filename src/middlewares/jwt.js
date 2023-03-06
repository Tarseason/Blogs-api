const { verifyToken } = require('../auth/auth.token');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const { data } = verifyToken(authorization);
    req.payload = data;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};