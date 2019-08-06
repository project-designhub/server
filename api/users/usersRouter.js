const express = require('express');

const db = require('./usersModel');
const { authenticate } = require('../../auth/authMiddleware');

const router = express.Router();

router.get('/', authenticate, (req, res) => {
  db.getAll()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(({ message }) => {
      return res.status(500).json({ message });
    });
});

// userDetails endpoint
router.put('/', authenticate, (req, res) => {
  const { id } = req.decoded;
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: 'Missing user input' });
  }
  db.update({ id }, req.body)
    .then(() =>
      res.status(200).json({ message: 'User details added successfully' })
    )
    .catch(err =>
      res.status(500).json({ err, message: 'User details failed to add' })
    );
});

module.exports = router;
