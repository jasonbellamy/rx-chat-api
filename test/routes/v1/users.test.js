import { assert } from 'chai';
import request from 'supertest';
import app from '../../../app';

describe('Routes: API:Users (V1)', () => {
  describe('/', () => {
    describe(':GET', () => {
      it('should return a 200 "OK" request', (done) => {
        request(app)
        .get("/api/v1/users")
        .expect("Content-type",/json/)
        .expect(200, done);
      });
    });

    describe(':POST', () => {
      it('should return a 500 " Internal Server Error" on validation fail', (done) => {
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
    describe(':GET', () => {
      it('should return a 200 "OK" request', (done) => {
        request(app)
        .get("/api/v1/users/1")
        .expect("Content-type",/json/)
        .expect(200, done);
      });
    });

    describe(':PUT', () => {
      it('should return a 200 "OK" request', (done) => {
        request(app)
        .put("/api/v1/users/1")
        .expect("Content-type",/json/)
        .expect(200, done);
      });
    });
  });
});
