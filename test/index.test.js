import mockgoose from 'mockgoose';
import mongoose from 'mongoose';
import config from '../config/';

before(done => {
  mockgoose(mongoose);
  mongoose.connect(config.database, (err) => {
    done(err);
  });
});

afterEach(done => {
  mockgoose.reset();
  done();
})

after(done => {
  mongoose.connection.close();
  done();
});
