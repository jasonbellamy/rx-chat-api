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
  mongoose.connection.db.dropDatabase();
  done();
})

after(done => {
  mongoose.connection.close();
  done();
});
