const express = require('express');
const jwt = require('jsonwebtoken');

const db = require('./authModel');

const router = express.Router();

router.post('/register', (req, res) => {
  const { email, sub } = req.body;

  // sub is the unique ID that every user has. You can use the same email using different services
  // and it will be different subs

  if (!email || !sub) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  // this is for the authenticate middleware for private routes
  const token = jwt.sign(req.body, process.env.TOKEN_SECRET);

  db.findBy({ email, sub }).then(exists => {
    // This works well with auth0
    if (exists) {
      // if user already exists return user and a token
      return res.status(200).json({ user: exists, token });
    } else {
      return (
        db
          .register(req.body)
          // if use doesn't exits, create that user
          .then(() => {
            return db.findBy({ email, sub }).then(user => {
              // return the created user and a token
              return res.status(201).json({ user, token });
            });
          })
          .catch(({ message }) => {
            return res.status(500).json({ message });
          })
      );
    }
  });
});

module.exports = router;
