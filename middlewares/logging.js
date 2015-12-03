module.exports = (req, res, next) => {
  res.status(err.status || 500).send('error', {
    message: err.message,
    error: err
  });
};
