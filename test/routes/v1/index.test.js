const assert  = require('chai').assert;
const request = require('supertest');
const app     = require('../../../app');

describe('Routes: API (V1)', () => {
  describe('/', () => {
    it('should return a 200 "OK" request', (done) => {
      request(app)
      .get("/api/v1")
      .expect("Content-type",/json/)
      .expect(200, done);
    });
  });

  describe('/404', () => {
    it('should return a 404 "Not Found" request', (done) => {
      request(app)
      .get("/api/v1/some/route/that/does/not/exist")
      .expect("Content-type",/json/)
      .expect(404, done);
    });
  });

});

