import { assert } from 'chai';
import request from 'supertest';
import app from '../../../app';
import User from '../../../models/user';

describe('Routes: API:Auth (V1)', () => {
  describe('/login', () => {
    before(done => {
      User.create({username: 'username', password: 'password'}, () => done());
    });

    it('should return a 200 "OK" request if login is successful', (done) => {
      request(app)
      .post("/api/v1/auth/login")
      .send({ username: 'username', password: 'password' })
      .expect("Content-type",/json/)
      .expect(200, done);
    });

    it('should return a 401 "Unauthorized" request if login failed', (done) => {
      request(app)
      .post("/api/v1/auth/login")
      .send({ username: 'badusername', password: 'password' })
      .expect("Content-type",/json/)
      .expect(401, done);
    });
  });
});
