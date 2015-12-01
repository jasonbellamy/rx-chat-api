const express = require('express');
const router  = express.Router();
const User    = require('../../models/user');

router.get('/', (req, res, next) => {
  res.status(200).send({ message: 'success' });
});

router.post('/', (req, res, next) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save((err, user) => {
    if (err) { return res.status(500).send({ message: 'Validation failed' }); }
    res.status(201).send({ message: 'User created' });
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).send({ success: true, id: req.params.id });
});

router.put('/:id', (req, res, next) => {
  res.status(200).send({ success: true, id: req.params.id });
});

module.exports = router;
