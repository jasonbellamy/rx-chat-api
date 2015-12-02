import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import config from './config/';
import routes from './routes/';

export default (function() {
  const app = express();

  if (app.get('env') === 'development') {
    mongoose.connect(config.database);
  }

  return app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', routes())
    .listen(config.port);

})();
