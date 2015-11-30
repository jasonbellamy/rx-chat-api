const express = require('express');
const router  = express.Router();

router.use('/api/v1', require('./v1/index'));

router.use((req, res, next) => {
  res.status(404).send({ success: true });
});

module.exports = router;
