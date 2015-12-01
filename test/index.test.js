const mockgoose = require('mockgoose');
const mongoose  = require('mongoose');

before(done => {
  mockgoose(mongoose);
  mongoose.connect('mongodb://localhost/testdatabase', (err) => {
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
