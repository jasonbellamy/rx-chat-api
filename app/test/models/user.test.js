import { assert } from 'chai';
import User from '../../models/user';

describe('Models: User', () => {
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
