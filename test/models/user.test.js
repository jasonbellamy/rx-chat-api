const assert    = require('chai').assert;
const mockgoose = require('mockgoose');
const mongoose  = require('mongoose');
const db        = mockgoose(mongoose);

const User      = require('../../models/user');

describe('Models: User', () => {
  before(done => {
    mongoose.connect('mongodb://localhost/testDB', (err) => {
      done(err);
    });
  });

  describe('#create', () => {
    it('should create a user', (done) => {
      const user = {
        username: 'username',
        password: 'password'
      };

      User.create(user, (err, user) => {
        assert.isNull(err);
        assert(user.username, 'username');
        assert(user.password, 'password');
        done();
      });
    });
  });
});
