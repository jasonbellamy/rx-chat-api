const assert  = require('chai').assert;
const request = require('supertest');
const app     = require('../../app');

describe('Routes: App', () => {
  describe('/', () => {
    it('should return a 404 "Not Found" request', (done) => {
      request(app)
      .get("/")
      .expect("Content-type",/json/)
      .expect(404, done);
    });
  });

  describe('/404', () => {
    it('should return a 404 "Not Found" request', (done) => {
      request(app)
      .get("/some/route/that/does/not/exist")
      .expect("Content-type",/json/)
      .expect(404, done);
    });
  });
});
