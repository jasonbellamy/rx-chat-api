const express = require('express');
const router  = express.Router();
const User    = require('../../models/user');

router.post('/login', (req, res, next) => {

  User.findOne({ username: req.body.username }, (err, user) => {
    if (!user) {
      return res.status(401).send({ success: false, message: 'Authentication failed. User not found.' });
    }

    if (user.password !== req.body.password) {
      return res.status(401).send({ success: false, message: 'Authentication failed. Wrong password.' });
    }

    res.status(200).send({ success: true });
  });
});

router.post('/logout', (req, res, next) => {
  res.status(200).send({ success: true });
});

module.exports = router;
