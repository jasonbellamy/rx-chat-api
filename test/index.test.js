const mockgoose = require('mockgoose');
const mongoose  = require('mongoose');
const config    = require('../config/');

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
