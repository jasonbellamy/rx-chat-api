import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import bodyParser from 'body-parser';
import config from './config/';
import routes from './routes/';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (app.get('env') === 'development') {
  mongoose.connect(config.database);
}

app.use('/', routes());

app.listen(config.port);

export default app;
