const express = require('express');
const router  = express.Router();

router.post('/login', (req, res, next) => {
  res.status(200).send({ success: true });
});

router.post('/logout', (req, res, next) => {
  res.status(200).send({ success: true });
});

module.exports = router;
