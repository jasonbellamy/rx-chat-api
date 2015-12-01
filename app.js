const express    = require('express');
const mongoose   = require('mongoose');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const app        = express();
const config     = require('./config/');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (app.get('env') === 'development') {
  mongoose.connect(config.database);
}

app.use('/', require('./routes/'));

app.listen(config.port);

module.exports = app;
