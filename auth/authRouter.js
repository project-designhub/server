const express = require('express');

const db = require('./authModel');

const router = express.Router();

router.post('/register', (req, res) => {
  const { email, username } = req.body;

  if (!email || !username) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  db.findBy({ email, username }).then(exists => {
    if (exists) {
      return res.status(200).json(exists);
    } else {
      return db
        .register(req.body)
        .then(user => {
          return res.status(200).json(user);
        })
        .catch(({ message }) => {
          return res.status(500).json({ message });
        });
    }
  });
});

module.exports = router;
