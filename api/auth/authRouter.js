const express = require('express');

const db = require('./authModel');

const router = express.Router();

router.post('/register', (req, res) => {
  const { name, email, username, full_name } = req.body;

  if (!name || !email || !username || !full_name) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  db.findBy({ email, sub }).then(exists => {
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
