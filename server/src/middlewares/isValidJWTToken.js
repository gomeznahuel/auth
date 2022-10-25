const jwt = require('jsonwebtoken');

const isValidJWTToken = async (req, res, next) => {
  // Get the token from the header if present.
  const token = await req.header('x-token');

  // If there is no token, return an error
  if (!token) { return res.status(401).json({ msg: 'No token, authorization denied' }); }

  // If there is a token, verify it.
  try {
    jwt.verify(token, process.env.SECRETORPRIVATEKEY); 
    next();
  } catch (error) {
    res.status(401).json({ msg: false });
  }
};

module.exports = { isValidJWTToken };