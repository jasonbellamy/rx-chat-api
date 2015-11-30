const assert  = require('chai').assert;
const request = require('supertest');
const app     = require('../../app');

describe('auth', () => {
  describe('/login', () => {
    it('should return a 200 "OK" request', (done) => {
      request(app)
      .post("/api/v1/auth/login")
      .expect("Content-type",/json/)
      .expect(200, done);
    });
  });

  describe('/logout', () => {
    it('should return a 200 "OK" request', (done) => {
      request(app)
      .post("/api/v1/auth/logout")
      .expect("Content-type",/json/)
      .expect(200, done);
    });
  });
});
