const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({ success: true });
});

router.post('/', (req, res, next) => {
  res.status(200).send({ success: true });
});

router.get('/:id', (req, res, next) => {
  res.status(200).send({ success: true, id: req.params.id });
});

router.put('/:id', (req, res, next) => {
  res.status(200).send({ success: true, id: req.params.id });
});

module.exports = router;
