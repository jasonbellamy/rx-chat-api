const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({ succuess: true });
});

router.use('/users', require('./users'));

router.use((req, res, next) => {
  res.status(404).send({ succuess: true });
});

module.exports = router;
