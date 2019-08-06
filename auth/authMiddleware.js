const jwtDecode = require('jwt-decode');
const db = require('../users/usersModel');

const authenticate = (req, res, next) => {
  const token = req.get('Authorization');

  if (token) {
    // if token exists in the headers, decode that token
    const decoded = jwtDecode(token);
    // decoded token's sub and email must match user and sub in database
    db.findBy('users', {
      email: decoded.email,
      sub: decoded.sub
    }).then(user => {
      if (user) {
        req.decoded = user;
        next();
      } else {
        res.status(401).json({ message: 'You are not authorized' });
      }
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
};

module.exports = {
  authenticate
};
