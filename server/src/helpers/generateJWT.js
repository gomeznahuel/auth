const jwt = require('jsonwebtoken');

const generateJWT = (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    // jwt.sign(payload, process.env.SECRETORPRIVATEKEY, { expiresIn: '1h' }, (error, token) => {
    jwt.sign(payload, process.env.SECRETORPRIVATEKEY, { expiresIn: '15s' }, (error, token) => {
      if (error) reject('Could not generate the JWT token.');
      else resolve(token);
    });
  });
};

module.exports = { generateJWT };