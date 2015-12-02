import { assert } from 'chai';
import request from 'supertest';
import app from '../../app';

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
