const assert  = require('chai').assert;
const request = require('supertest');
const app     = require('../../app');

describe('users', () => {
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
      it('should return a 200 "OK" request', (done) => {
        request(app)
        .post("/api/v1/users")
        .expect("Content-type",/json/)
        .expect(200, done);
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
