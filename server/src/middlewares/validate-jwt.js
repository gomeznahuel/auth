const { request, response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const validateJWT = async (req = request, res = response, next) => {
  // Read the token from the header
  const token = req.header('x-token');

  if (!token) return res.status(401).json({ msg: 'There is no token in the request' });

  try {
    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
    const user = await User.findById(uid);
    
    // Verify if user exists.
    if (!user) return res.status(401).json({ msg: 'Token is not valid.' });

    // Verify if user exists in database.
    if (!user.state) return res.status(401).json({ msg: 'Token is not valid.' });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Token no válido' });
  }
};

module.exports = { validateJWT };