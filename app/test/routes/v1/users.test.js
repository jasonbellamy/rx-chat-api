import { assert } from 'chai';
import request from 'supertest';
import jwt from 'jsonwebtoken';
import app from '../../../app';
import config from '../../../config';
import User from '../../../models/user';

describe('Routes: API:Users (V1)', () => {
  describe('/', () => {
    describe(':GET', () => {
      let token = {};

      beforeEach(done => {
        User.create({username: 'username', password: 'password'}, (err, user) => {
          token = jwt.sign(user, config.secret, { expiresIn: 86400 });
          done();
        });
      });

      it('should return a 200 "OK" request if a valid token is provided', (done) => {
        request(app)
        .get("/api/v1/users")
        .set('x-access-token', token)
        .expect("Content-type",/json/)
        .expect(200, done);
      });

      it('should return a 401 "Unauthorized" request if an invalid token is provided', (done) => {
        request(app)
        .get("/api/v1/users")
        .set('x-access-token', 'somebadtoken')
        .expect("Content-type",/json/)
        .expect(401, done);
      });

      it('should return a 401 "Unauthorized" request if no token is provided', (done) => {
        request(app)
        .get("/api/v1/users")
        .expect("Content-type",/json/)
        .expect(401, done);
      });
    });

    describe(':POST', () => {
      it('should return a 500 " Internal Server Error" if validation fails', (done) => {
        request(app)
        .post("/api/v1/users")
        .expect(500, done);
      });

      it('should return a 201 "OK" on create', (done) => {
        request(app)
        .post("/api/v1/users")
        .send({ username: 'username', password: 'password' })
        .expect(201, done);
      });
    });
  });

  describe('/:id', () => {
    let token = {};

    beforeEach(done => {
      User.create({username: 'username', password: 'password'}, (err, user) => {
        token = jwt.sign(user, config.secret, { expiresIn: 86400 });
        done();
      });
    });

    describe(':GET', () => {
      it('should return a 200 "OK" request if a valid token is provided', (done) => {
        request(app)
        .get("/api/v1/users/1")
        .set('x-access-token', token)
        .expect("Content-type",/json/)
        .expect(200, done);
      });

      it('should return a 401 "Unauthorized" request if an invalid token is provided', (done) => {
        request(app)
        .get("/api/v1/users/1")
        .set('x-access-token', 'somebadtoken')
        .expect("Content-type",/json/)
        .expect(401, done);
      });

      it('should return a 401 "Unauthorized" request if no token is provided', (done) => {
        request(app)
        .get("/api/v1/users/1")
        .expect("Content-type",/json/)
        .expect(401, done);
      });
    });

    describe(':PUT', () => {
      it('should return a 200 "OK" request if a valid token is provided', (done) => {
        request(app)
        .put("/api/v1/users/1")
        .set('x-access-token', token)
        .expect("Content-type",/json/)
        .expect(200, done);
      });

      it('should return a 401 "Unauthorized" request if an invalid token is provided', (done) => {
        request(app)
        .put("/api/v1/users/1")
        .set('x-access-token', 'somebadtoken')
        .expect("Content-type",/json/)
        .expect(401, done);
      });

      it('should return a 401 "Unauthorized" request if no token is provided', (done) => {
        request(app)
        .put("/api/v1/users/1")
        .expect("Content-type",/json/)
        .expect(401, done);
      });
    });
  });
});
