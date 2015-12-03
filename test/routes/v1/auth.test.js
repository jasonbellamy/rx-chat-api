import { assert } from 'chai';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import app from '../../../app';
import config from '../../../config';
import User from '../../../models/user';

describe('Routes: API:Auth (V1)', () => {
  describe('/login', () => {
    beforeEach(done => {
      User.create({username: 'username', password: 'password'}, () => done());
    });

    it('should return a 200 "OK" request if the login is successful', (done) => {
      request(app)
      .post("/api/v1/auth/login")
      .send({ username: 'username', password: 'password' })
      .expect("Content-type",/json/)
      .expect(200, done);
    });

    it('should return a token if the login is successful', (done) => {
      request(app)
      .post("/api/v1/auth/login")
      .send({ username: 'username', password: 'password' })
      .expect("Content-type",/json/)
      .expect(200)
      .end((err, res) => {
        assert.property(res.body.entities, 'token');
        done();
      });
    });

    it('should return a 401 "Unauthorized" request if the login failed', (done) => {
      request(app)
      .post("/api/v1/auth/login")
      .send({ username: 'badusername', password: 'password' })
      .expect("Content-type",/json/)
      .expect(401, done);
    });

    it('should not return a token if the login failed', (done) => {
      request(app)
      .post("/api/v1/auth/login")
      .send({ username: 'badusername', password: 'password' })
      .expect("Content-type",/json/)
      .expect(401)
      .end((err, res) => {
        assert.notProperty(res.body.entities, 'token');
        done();
      });
    });
  });
});
